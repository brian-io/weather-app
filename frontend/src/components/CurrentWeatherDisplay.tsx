import { CurrentWeather, Units } from '@/lib/types';
import { motion } from 'framer-motion';

interface CurrentWeatherDisplayProps {
  weather: CurrentWeather;
  units: Units;
}

export default function CurrentWeatherDisplay({ weather, units }: CurrentWeatherDisplayProps) {
  /**
   * Gets the temperature unit symbol
   */
  const getTemperatureUnit = (): string => (units === 'metric' ? '°C' : '°F');

  /**
   * Gets the weather icon URL
   * @param icon - Icon code from API
   */
  const getWeatherIcon = (icon: string): string => {
    return `https://openweathermap.org/img/wn/${icon}@4x.png`;
  };

  // Get current time for the location
  const currentDate = new Date();
  const timeString = currentDate.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });
  const dateString = currentDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <motion.div 
      className="backdrop-blur-lg bg-gray-900/60 rounded-xl h-full flex flex-col border border-gray-700/50 shadow-lg overflow-hidden"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      </div>

      <div className="p-6 relative z-10 flex flex-col h-full">
        <div className="flex-grow flex flex-col items-center justify-center">
          <motion.div 
            className="relative mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
          >
            <img 
              src={getWeatherIcon(weather.weather[0].icon)} 
              alt={weather.weather[0].description}
              className="w-40 h-40 drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
          </motion.div>

          <motion.p 
            className="text-lg text-blue-400 font-medium capitalize mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {weather.weather[0].description}
          </motion.p>

          <motion.div 
            className="text-5xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            {Math.round(weather.main.temp)}{getTemperatureUnit()}
          </motion.div>

          <motion.div 
            className="mt-2 text-gray-300 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Feels like {Math.round(weather.main.feels_like)}{getTemperatureUnit()}
          </motion.div>
        </div>

        {/* Min-max temperature */}
        <motion.div 
          className="flex justify-center items-center gap-6 mt-6 backdrop-blur-md bg-gray-800/50 p-3 rounded-lg border border-gray-700/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-xs">Min</span>
            <span className="text-white font-medium">
              {Math.round(weather.main.temp_min)}{getTemperatureUnit()}
            </span>
          </div>
          
          <div className="h-10 w-px bg-gray-700/50"></div>
          
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-xs">Max</span>
            <span className="text-white font-medium">
              {Math.round(weather.main.temp_max)}{getTemperatureUnit()}
            </span>
          </div>
        </motion.div>
      
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-white mb-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {weather.name}, {weather.sys.country}
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {dateString} | {timeString}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}