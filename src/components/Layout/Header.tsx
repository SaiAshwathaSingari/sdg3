import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-cyan-400">PocketDoc</Link>
        
        <nav className="flex gap-6">
          <Link 
            to="/" 
            className={`hover:text-cyan-400 transition-colors ${
              location.pathname === '/' ? 'text-cyan-400' : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/dashboard" 
            className={`hover:text-cyan-400 transition-colors ${
              location.pathname === '/dashboard' ? 'text-cyan-400' : 'text-white'
            }`}
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}

export {};
