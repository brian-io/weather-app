import { Forecast, Units } from '@/lib/types';
import { motion } from 'framer-motion';

interface ForecastListProps {
  forecast: Forecast;
  units: Units;
}

export default function ForecastList({ forecast, units }: ForecastListProps) {
  /**
   * Gets the temperature unit symbol
   */
  const getTemperatureUnit = (): string => (units === 'metric' ? '°C' : '°F');

  /**
   * Gets the weather icon URL
   * @param icon - Icon code from API
   */
  const getTemperatureIcon = (icon: string): string => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.div 
      className="backdrop-blur-lg bg-gray-900/60 rounded-xl border border-gray-700/50 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="p-6">
        <h2 className="text-xl font-bold text-blue-400 mb-6">3 Day Forecast</h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {forecast.days.slice(0, 3).map((day, index) => (
            <motion.div 
              key={index} 
              className="backdrop-blur-md bg-gray-800/50 rounded-lg border border-gray-700/30 overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)' }}
            >
              <div className="p-5 flex flex-col items-center relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
                
                <h3 className="relative z-10 text-lg font-medium text-white mb-2">
                  {new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}
                </h3>
                
                <div className="relative">
                  <motion.img 
                    src={getTemperatureIcon(day.icon)} 
                    alt={day.description} 
                    className="w-24 h-24 my-2 drop-shadow-lg" 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1), type: "spring", stiffness: 200 }}
                  />
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                </div>
                
                <p className="text-sm text-gray-300 capitalize mb-3">{day.description}</p>
                
                <div className="flex items-center gap-2 mt-1">
                  <div className="text-2xl font-bold text-white">
                    {Math.round(day.max_temp)}{getTemperatureUnit()}
                  </div>
                  <div className="text-sm text-gray-400 ml-1">
                    / {Math.round(day.min_temp)}{getTemperatureUnit()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}