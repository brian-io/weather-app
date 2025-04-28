<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use DateTimeImmutable;
use DateTimeZone;

class WeatherController extends Controller
{
    protected string $apiKey;
    protected string $baseUrl = 'https://api.openweathermap.org/data/2.5';

    public function __construct()
    {
        $this->apiKey = env('OPENWEATHER_API_KEY');
    }

    public function getCurrentWeather(Request $request)
    {
        $request->validate([
            'city'  => 'required|string',
            'units' => 'string|in:standard,metric,imperial',
        ]);

        $city     = $request->query('city');
        $units    = $request->query('units', 'metric');
        $cacheKey = "weather_{$city}_{$units}";

        // cache for 30 minutes
        $data = Cache::remember($cacheKey, 30, function () use ($city, $units) {
            $response = Http::get("{$this->baseUrl}/weather", [
                'q'     => $city,
                'units' => $units,
                'appid' => $this->apiKey,
            ]);

            if ($response->failed()) {
                Log::error('OpenWeatherMap API error: ' . $response->body());
                return null;
            }

            return $response->json();
        });

        if (! $data) {
            return response()->json([
                'message' => 'Failed to fetch weather data from external API'
            ], 500);
        }

        return response()->json($data);
    }

    public function getForecast(Request $request)
    {
        $request->validate([
            'city'  => 'required|string',
            'units' => 'string|in:standard,metric,imperial',
            'days'  => 'integer|min:1|max:7',
        ]);

        $city     = $request->query('city');
        $units    = $request->query('units', 'metric');
        $days     = $request->query('days', 5);
        $cacheKey = "forecast_{$city}_{$units}_{$days}";

        // cache for 60 minutes
        $processedData = Cache::remember($cacheKey, 60, function () use ($city, $units, $days) {
            $response = Http::get("{$this->baseUrl}/forecast", [
                'q'     => $city,
                'units' => $units,
                'appid' => $this->apiKey,
            ]);

            if ($response->failed()) {
                Log::error('OpenWeatherMap API forecast error: ' . $response->body());
                return null;
            }

            $all       = $this->processForecastData($response->json());
            $all['days'] = array_slice($all['days'], 0, $days);

            return $all;
        });

        if (! $processedData) {
            return response()->json([
                'message' => 'Failed to fetch forecast data from external API'
            ], 500);
        }

        return response()->json($processedData);
    }

    protected function processForecastData(array $data): array
    {
        $groupedByDay = [];
        $list         = $data['list'] ?? [];
        $cityInfo     = $data['city'] ?? [];

        foreach ($list as $item) {
            $dtObj = DateTimeImmutable::createFromFormat(
                'U',
                (string) $item['dt'],
                new DateTimeZone('UTC')
            );
            $date = $dtObj->format('Y-m-d');
            $hour = $dtObj->format('H:i');

            if (! isset($groupedByDay[$date])) {
                $groupedByDay[$date] = [
                    'date'        => $date,
                    'day'         => $dtObj->format('l'),
                    'min_temp'    => $item['main']['temp_min'],
                    'max_temp'    => $item['main']['temp_max'],
                    'humidity'    => $item['main']['humidity'],
                    'description' => $item['weather'][0]['description'],
                    'icon'        => $item['weather'][0]['icon'],
                    'hourly'      => [],
                ];
            }

            // update min/max
            $groupedByDay[$date]['min_temp'] = min(
                $groupedByDay[$date]['min_temp'],
                $item['main']['temp_min']
            );
            $groupedByDay[$date]['max_temp'] = max(
                $groupedByDay[$date]['max_temp'],
                $item['main']['temp_max']
            );

            // collect up to 8 hourly entries
            if (count($groupedByDay[$date]['hourly']) < 8) {
                $groupedByDay[$date]['hourly'][] = [
                    'time'        => $hour,
                    'temp'        => $item['main']['temp'],
                    'humidity'    => $item['main']['humidity'],
                    'description' => $item['weather'][0]['description'],
                    'icon'        => $item['weather'][0]['icon'],
                    'wind_speed'  => $item['wind']['speed'],
                ];
            }
        }

        return [
            'city' => $cityInfo,
            'days' => array_values($groupedByDay),
        ];
    }
}
