import { CurrentWeather, Units } from '@/lib/types';
import { motion } from 'framer-motion';
import { Droplets, Wind, Gauge, Eye } from 'lucide-react';

interface WeatherMetricsProps {
  weather: CurrentWeather;
  units: Units;
}

export default function WeatherMetrics({ weather, units }: WeatherMetricsProps) {
  const getWindSpeedUnit = (): string => (units === 'metric' ? 'm/s' : 'mph');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  // Animation variants for icons
  const iconVariants = {
    initial: { scale: 0.8, opacity: 0.5 },
    hover: { scale: 1.1, opacity: 1, transition: { duration: 0.3, yoyo: Infinity, repeatDelay: 0.5 } },
    float: { y: [-2, 2, -2], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } },
    pulse: { 
      scale: [1, 1.05, 1], 
      opacity: [0.8, 1, 0.8], 
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } 
    },
    spin: { 
      rotate: 360, 
      transition: { duration: 8, repeat: Infinity, ease: "linear" } 
    }
  };

  return (
    <motion.div 
      className="backdrop-blur-lg bg-gray-900/60 rounded-xl h-full flex flex-col border border-gray-700/50 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-400 mb-4">Weather Details</h3>
        
        <motion.div 
          className="grid grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Humidity Card */}
          <motion.div 
            variants={itemVariants} 
            className="backdrop-blur-md bg-gray-800/50 rounded-lg border border-gray-700/30 overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            whileHover="hover"
          >
            <div className="p-4 relative flex items-center">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full -mr-8 -mt-8 blur-xl"></div>
              <motion.div 
                className="mr-3 text-blue-400"
                initial="initial"
                animate="float"
                variants={iconVariants}
              >
                <Droplets size={24} />
              </motion.div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Humidity</h3>
                <p className="text-2xl font-semibold text-white">{weather.main.humidity}%</p>
              </div>
            </div>
          </motion.div>

          {/* Wind Card */}
          <motion.div 
            variants={itemVariants} 
            className="backdrop-blur-md bg-gray-800/50 rounded-lg border border-gray-700/30 overflow-hidden shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            whileHover="hover"
          >
            <div className="p-4 relative flex items-center">
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/10 rounded-full -mr-8 -mt-8 blur-xl"></div>
              <motion.div 
                className="mr-3 text-purple-400"
                initial="initial"
                animate="spin"
                variants={iconVariants}
              >
                <Wind size={24} />
              </motion.div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Wind</h3>
                <p className="text-2xl font-semibold text-white">{weather.wind.speed} {getWindSpeedUnit()}</p>
              </div>
            </div>
          </motion.div>

          {/* Pressure Card */}
          <motion.div 
            variants={itemVariants} 
            className="backdrop-blur-md bg-gray-800/50 rounded-lg border border-gray-700/30 overflow-hidden shadow-lg hover:shadow-green-500/10 transition-all duration-300"
            whileHover="hover"
          >
            <div className="p-4 relative flex items-center">
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/10 rounded-full -mr-8 -mt-8 blur-xl"></div>
              <motion.div 
                className="mr-3 text-green-400"
                initial="initial"
                animate="pulse"
                variants={iconVariants}
              >
                <Gauge size={24} />
              </motion.div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Pressure</h3>
                <p className="text-2xl font-semibold text-white">{weather.main.pressure} hPa</p>
              </div>
            </div>
          </motion.div>

          {/* Visibility Card */}
          <motion.div 
            variants={itemVariants} 
            className="backdrop-blur-md bg-gray-800/50 rounded-lg border border-gray-700/30 overflow-hidden shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            whileHover="hover"
          >
            <div className="p-4 relative flex items-center">
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/10 rounded-full -mr-8 -mt-8 blur-xl"></div>
              <motion.div 
                className="mr-3 text-cyan-400"
                initial="initial"
                animate="pulse"
                variants={iconVariants}
              >
                <Eye size={24} />
              </motion.div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Visibility</h3>
                <p className="text-2xl font-semibold text-white">{(weather.visibility / 1000).toFixed(1)} km</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}