import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function OrderConfirmation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-slate-900 to-cyan-900 flex items-center justify-center px-4"
    >
      <div className="text-center bg-slate-800/70 backdrop-blur-md p-8 rounded-lg shadow-xl max-w-md w-full">
        {/* Animated checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 10 }}
          className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>

        {/* Confirmation message */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          className="text-3xl font-bold text-cyan-400 mb-4"
        >
          Order Confirmed!
        </motion.h1>
        <p className="text-slate-300 mb-6">
          Your order has been successfully placed. Thank you for shopping with PocketDoc!
        </p>

        {/* Button to go back to dashboard */}
        <Link to="/dashboard">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-lg font-medium transition-colors"
          >
            Back to Dashboard
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
