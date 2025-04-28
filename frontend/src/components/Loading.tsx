import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Sun, CloudRain } from 'lucide-react';

// Loader component.
export default function Loading ({ loading } : { loading: boolean}){
  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="relative w-32 h-32 mb-4">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
                            <motion.div 
                className="absolute inset-0 text-yellow-400 flex items-center justify-center"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Sun size={56} />
              </motion.div>
              
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

