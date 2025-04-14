// src/pages/MedicineBrowse.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MedicineGrid from '../components/Sections/MedicineGrid';
import { medicines, Medicine } from '../data/medicines';
import SymptomInput from '../components/Sections/SymptomInput';


export default function MedicineBrowse() {
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>(medicines);

  const handleSymptomFilter = (symptoms: string[]) => {
    const filtered = symptoms.length > 0
      ? medicines.filter(medicine => 
          symptoms.every(symptom => medicine.symptoms.includes(symptom))
        )
      : medicines;
    
    setFilteredMedicines(filtered);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 to-cyan-900 pt-16"
    >
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">Browse Medicines</h1>
        <SymptomInput onSymptomsChange={handleSymptomFilter} />
        <MedicineGrid medicines={filteredMedicines} />
      </div>
    </motion.div>
  );
}
