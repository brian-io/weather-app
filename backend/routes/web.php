<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('api')->group(function () {
    Route::get('/weather', [WeatherController::class, 'getCurrentWeather']);
    Route::get('/forecast', [WeatherController::class, 'getForecast']);
});