'use client';

import { useState, useEffect } from 'react';
import CurrentWeatherDisplay from '@/components/CurrentWeatherDisplay';
import WeatherMetrics from '@/components/WeatherMetrics';
import ForecastList from '@/components/ForecastList';
import SearchForm from '@/components/SearchForm';
import { CurrentWeather, Forecast, Units } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';
import Loading from '@/components/Loading';

export default function Home() {
  const [city, setCity] = useState<string>('Nairobi');
  const [units, setUnits] = useState<Units>('metric');
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';

  /**
   * Fetches weather data from the API
   * @param searchCity - The city to search for
   */
  const fetchWeatherData = async (searchCity: string): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch current weather
      const weatherResponse = await fetch(
        `${apiBaseUrl}/weather?city=${encodeURIComponent(searchCity)}&units=${units}`
      );
      
      if (!weatherResponse.ok) {
        const errorData = await weatherResponse.json();
        throw new Error(errorData.message || 'Failed to fetch weather data');
      }
      
      const weatherData: CurrentWeather = await weatherResponse.json();
      setCurrentWeather(weatherData);
      
      // Fetch forecast
      const forecastResponse = await fetch(
        `${apiBaseUrl}/forecast?city=${encodeURIComponent(searchCity)}&units=${units}`
      );
      
      if (!forecastResponse.ok) {
        const errorData = await forecastResponse.json();
        throw new Error(errorData.message || 'Failed to fetch forecast data');
      }
      
      const forecastData: Forecast = await forecastResponse.json();
      setForecast(forecastData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Error fetching weather data:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handles search form submission
   * @param searchCity - The city to search for
   */
  const handleSearch = (searchCity: string): void => {
    setCity(searchCity);
    fetchWeatherData(searchCity);
  };
  
  /**
   * Handles unit change
   * @param newUnit - The new unit (metric or imperial)
   */
  const handleUnitChange = (newUnit: Units): void => {
    setUnits(newUnit);
  };

  // Fetch weather data when units change
  useEffect(() => {
    fetchWeatherData(city);
  }, [units]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        
        {/* Loading Overlay */}
        <Loading loading={loading}/>
        
        {/* Error Alert */}
        <AnimatePresence>
          {error && (
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="backdrop-blur-md bg-red-900/40 border border-red-800/50 rounded-xl p-4 flex items-start shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500 mr-3 flex-shrink-0">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13ZM13 17H11V15H13V17Z" fill="currentColor" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-medium text-red-200">Error</span>
                  <span className="text-red-100/80 text-sm">{error}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Weather Content */}
        {currentWeather && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column - Current Weather Display */}
            <div className="lg:col-span-4">
              <CurrentWeatherDisplay 
                weather={currentWeather} 
                units={units} 
              />
            </div>
            
            {/* Right Column - Search Form, Forecast, and Weather Metrics */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Search Form */}
              <SearchForm 
                onSearch={handleSearch} 
                onUnitChange={handleUnitChange} 
                units={units} 
              />
              
              {/* Forecast List */}
              {forecast && (
                <ForecastList 
                  forecast={forecast} 
                  units={units} 
                />
              )}
              
              {/* Weather Metrics */}
              <WeatherMetrics 
                weather={currentWeather} 
                units={units} 
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}