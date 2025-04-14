// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your login logic here
    navigate('/dashboard'); // Redirect after login
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-cyan-900 flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full p-3 bg-slate-700 rounded-lg text-white"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 bg-slate-700 rounded-lg text-white"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
