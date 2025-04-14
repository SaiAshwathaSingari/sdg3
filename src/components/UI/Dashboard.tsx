// src/components/UI/Dashboard.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SymptomInput from '../Sections/SymptomInput';
import { Medicine } from '../../data/medicines'; // Import Medicine type

export default function Dashboard() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  // Add handler for symptom changes
  const handleSymptomsChange = (symptoms: string[]) => {
    setSelectedSymptoms(symptoms);
    // Add your filtering logic here if needed
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 to-cyan-900 pt-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Pass the required prop */}
        <SymptomInput onSymptomsChange={handleSymptomsChange} />
      </div>
    </motion.main>
  );
}
