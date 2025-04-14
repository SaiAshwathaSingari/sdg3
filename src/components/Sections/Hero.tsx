import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  const text = "PocketDoc";

  // Container animation with staggered children
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      }
    }
  };

  // Letter animation with 3D rotation
  const letterAnimation = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        type: "spring", 
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-cyan-900"
    >
      <div className="text-center">
        <motion.div className="flex justify-center space-x-1 mb-6">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              className="text-6xl md:text-7xl font-bold text-cyan-400 inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-xl text-slate-300 mb-8"
        >
          Your health, our priority
        </motion.p>
        
        <Link to="/dashboard">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-lg font-medium"
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}



