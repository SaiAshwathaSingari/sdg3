// src/components/Sections/MedicineDetail.tsx
import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

// Update Medicine interface with price property
interface Medicine {
  id: string;
  name: string;
  description: string;
  price: number; // Add price property
  category: string;
  symptoms: string[];
}

interface MedicineDetailProps {
  medicine: Medicine;
  onClose: () => void;
}

export default function MedicineDetail({ medicine, onClose }: MedicineDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ 
      id: medicine.id, 
      name: medicine.name, 
      price: medicine.price, 
      quantity 
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-800 p-6 rounded-xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">{medicine.name}</h2>
        <p className="text-white mb-6">{medicine.description}</p>
        <div className="flex justify-between mb-4">
          <span className="text-lg font-bold text-white">₹{medicine.price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg"
          >
            Add to Cart
          </button>
        </div>
        <button 
          onClick={onClose}
          className="w-full py-2 bg-slate-700 text-white rounded-lg mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
}




