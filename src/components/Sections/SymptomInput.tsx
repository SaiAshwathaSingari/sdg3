import React, { useState, useEffect, useRef } from 'react';
import { allSymptoms } from '../../data/medicines';
import { motion, AnimatePresence } from 'framer-motion';

interface SymptomInputProps {
  onSymptomsChange: (symptoms: string[]) => void;
  onSearchChange?: (query: string) => void;
  searchValue?: string;
}

export default function SymptomInput({ 
  onSymptomsChange, 
  onSearchChange,
  searchValue = ''
}: SymptomInputProps) {
  const [inputValue, setInputValue] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle input change for symptom search
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Show suggestions based on input
    if (value.trim()) {
      const filtered = allSymptoms.filter(symptom => 
        symptom.toLowerCase().includes(value.toLowerCase()) &&
        !selectedSymptoms.includes(symptom)
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  // Handle search query change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };

  // Add symptom from suggestions
  const handleAddSymptom = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      const newSymptoms = [...selectedSymptoms, symptom];
      setSelectedSymptoms(newSymptoms);
      onSymptomsChange(newSymptoms);
      setInputValue('');
      setSuggestions([]);
      
      // Focus back on input after selection
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  // Remove symptom from selected
  const handleRemoveSymptom = (symptom: string) => {
    const newSymptoms = selectedSymptoms.filter(s => s !== symptom);
    setSelectedSymptoms(newSymptoms);
    onSymptomsChange(newSymptoms);
  };

  // Handle keyboard navigation for suggestions
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue && suggestions.length > 0) {
      handleAddSymptom(suggestions[0]);
      e.preventDefault();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      {/* Main search bar */}
      <div className="relative mb-4">
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search medicines..."
          className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <svg className="absolute right-4 top-4 h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
      
      {/* Symptom search with autocomplete */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder="Enter symptoms..."
          className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        
        {/* Suggestions dropdown */}
        <AnimatePresence>
          {isFocused && suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 w-full mt-1 bg-slate-800 rounded-lg border border-slate-700 shadow-lg overflow-hidden"
            >
              {suggestions.map(symptom => (
                <button
                  key={symptom}
                  onClick={() => handleAddSymptom(symptom)}
                  className="block w-full px-4 py-3 text-left text-white hover:bg-slate-700 transition-colors"
                >
                  {symptom}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Selected symptoms tags */}
      <AnimatePresence>
        {selectedSymptoms.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {selectedSymptoms.map(symptom => (
              <motion.div
                key={symptom}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="flex items-center px-3 py-1 bg-cyan-600 text-white rounded-full"
              >
                <span>{symptom}</span>
                <button
                  onClick={() => handleRemoveSymptom(symptom)}
                  className="ml-2 hover:text-red-200 transition-colors"
                >
                  ×
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



