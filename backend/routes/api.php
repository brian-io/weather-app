<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;

/**
 * Api routes for the Weather App
 */
Route::prefix('api')->group(function () {
    Route::get('/weather', [WeatherController::class, 'getCurrentWeather']);
    Route::get('/forecast', [WeatherController::class, 'getForecast']);
});