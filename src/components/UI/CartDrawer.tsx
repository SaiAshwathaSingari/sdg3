import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    items,
    totalPrice,
    isOpen,
    toggleCart,
    updateQuantity,
    removeItem
  } = useCart();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={toggleCart}
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 h-full w-80 md:w-96 bg-slate-800 shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-4 border-b border-slate-700 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Your Cart</h2>
              <button 
                onClick={toggleCart}
                className="text-slate-400 hover:text-white"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
            
            <div className="p-4">
              {items.length === 0 ? (
                <p className="text-slate-400 text-center my-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4">
                    {items.map(item => (
                      <div 
                        key={item.id}
                        className="flex justify-between items-center p-2 bg-slate-700 rounded-lg"
                      >
                        <div>
                          <p className="text-white font-medium">{item.name}</p>
                          <p className="text-cyan-400">₹{item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-slate-400 hover:text-white"
                          >
                            -
                          </button>
                          <span className="mx-2 text-white">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-slate-400 hover:text-white"
                          >
                            +
                          </button>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="ml-2 p-1 text-red-400 hover:text-red-300"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-slate-700">
                    <div className="flex justify-between text-white mb-4">
                      <span>Total:</span>
                      <span className="font-bold">₹{totalPrice.toFixed(2)}</span>
                    </div>
                    <button 
                      onClick={() => {
                        toggleCart();
                        navigate('/checkout');
                      }}
                      className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md transition-colors"
                    >
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
