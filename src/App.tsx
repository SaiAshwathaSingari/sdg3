import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Hero from './components/Sections/Hero';
import Dashboard from './pages/Dashboard';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import CartIcon from './components/UI/CartIcon';
import CartDrawer from './components/UI/CartDrawer';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <CartIcon />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}



