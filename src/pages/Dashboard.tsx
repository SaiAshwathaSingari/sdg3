import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MedicineGrid from '../components/Sections/MedicineGrid';
import { medicines, Medicine } from '../data/medicines';
import SymptomInput from '../components/Sections/SymptomInput';


export default function Dashboard() {
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>(medicines);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  // Filter medicines based on symptoms and search query
  useEffect(() => {
    let results = medicines;
    
    // Filter by selected symptoms
    if (selectedSymptoms.length > 0) {
      results = results.filter(medicine => 
        selectedSymptoms.every(symptom => 
          medicine.symptoms.includes(symptom)
        )
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(medicine => 
        medicine.name.toLowerCase().includes(query) || 
        medicine.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredMedicines(results);
  }, [selectedSymptoms, searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 to-cyan-900 pt-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">Find Medicines by Symptoms</h1>
        
        {/* Symptom search and filter */}
        <SymptomInput 
          onSymptomsChange={setSelectedSymptoms}
          onSearchChange={setSearchQuery}
          searchValue={searchQuery}
        />
        
        {/* Display filtered medicines */}
        {filteredMedicines.length > 0 ? (
          <MedicineGrid medicines={filteredMedicines} />
        ) : (
          <div className="text-center py-10">
            <p className="text-white text-xl">No medicines found matching your criteria</p>
            <button 
              onClick={() => {
                setSelectedSymptoms([]);
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}


