import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    paymentMethod: 'cash'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate('/order-confirmation');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-cyan-900 pt-20 p-6">
      <div className="max-w-2xl mx-auto bg-slate-800/50 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">Checkout</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-slate-300 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full p-3 bg-slate-700 rounded-lg text-white"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-slate-300 mb-2">Address</label>
              <input
                type="text"
                required
                className="w-full p-3 bg-slate-700 rounded-lg text-white"
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-slate-300 mb-2">City</label>
              <input
                type="text"
                required
                className="w-full p-3 bg-slate-700 rounded-lg text-white"
                value={formData.city}
                onChange={e => setFormData({...formData, city: e.target.value})}
              />
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">Order Summary</h2>
            <div className="space-y-2">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-slate-300">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between text-white text-xl mt-6">
              <span>Total:</span>
              <span className="font-bold">₹{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}
