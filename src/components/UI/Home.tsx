// src/components/UI/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-cyan-900 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-cyan-400 mb-8">PocketDoc</h1>
      <p className="text-xl text-slate-300 mb-12">
        Your trusted platform for symptom tracking and medicine recommendations.
      </p>
      <button
        onClick={() => navigate('/login')}
        className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-medium hover:from-cyan-500 hover:to-teal-500 transition-all"
      >
        Get Started
      </button>
    </div>
  );
}

export {};
