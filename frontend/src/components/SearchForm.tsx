import { useState } from 'react';
import { Units } from '@/lib/types';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface SearchFormProps {
  onSearch: (city: string) => void;
  onUnitChange: (unit: Units) => void;
  units: Units;
}

export default function SearchForm({ onSearch, onUnitChange, units }: SearchFormProps) {
  const [searchInput, setSearchInput] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  /**
   * Handles form submission
   * @param e - Form submit event
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
    }
  };

  return (
    <motion.div 
      className="backdrop-blur-lg bg-gray-900/60 rounded-xl border border-gray-700/50 shadow-lg overflow-hidden min-h-24"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg transition-opacity duration-300 blur ${isFocused ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Enter city name"
                className="w-full bg-gray-800/70 border border-gray-700/50 rounded-lg py-3 px-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                required
              />
              <Search className="absolute left-4 text-gray-400" size={18} />
            </div>
          </div>

          <motion.button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 mr-4"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Search
          </motion.button>
          
          <div className="flex gap-2">
            <motion.button
              type="button"
              onClick={() => onUnitChange('metric')}
              className={`px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                units === 'metric' 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-gray-800/70 text-gray-300 border border-gray-700/50 hover:bg-gray-700/70'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              °C
            </motion.button>
            <motion.button
              type="button"
              onClick={() => onUnitChange('imperial')}
              className={`px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                units === 'imperial' 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-gray-800/70 text-gray-300 border border-gray-700/50 hover:bg-gray-700/70'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              °F
            </motion.button>
          </div>
          
          
        </form>
      </div>
    </motion.div>
  );
}