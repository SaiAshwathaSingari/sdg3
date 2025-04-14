import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { Medicine } from '../../data/medicines';

export default function MedicineCard({ medicine }: { medicine: Medicine }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: medicine.id,
      name: medicine.name,
      price: medicine.price,
      quantity: 1
    });
    
    // Visual feedback for adding to cart
    const button = document.getElementById(`add-to-cart-${medicine.id}`);
    if (button) {
      button.classList.add('bg-green-600');
      button.textContent = 'Added!';
      setTimeout(() => {
        button.classList.remove('bg-green-600');
        button.textContent = 'Add to Cart';
      }, 1000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-slate-800 rounded-lg p-6 border border-slate-700 shadow-lg h-full flex flex-col"
    >
      <h3 className="text-xl font-bold text-cyan-400">{medicine.name}</h3>
      <p className="text-slate-300 mt-2 flex-grow">{medicine.description}</p>
      
      {/* Symptoms tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {medicine.symptoms.map(symptom => (
          <span
            key={symptom}
            className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded-full"
          >
            {symptom}
          </span>
        ))}
      </div>
      
      <div className="border-t border-slate-700 mt-4 pt-4 flex justify-between items-center">
        <span className="text-white font-bold">₹{medicine.price.toFixed(2)}</span>
        <motion.button
          id={`add-to-cart-${medicine.id}`}
          onClick={handleAddToCart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}




