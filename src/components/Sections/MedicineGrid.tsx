import React from 'react';
import { motion } from 'framer-motion';
import MedicineCard from '../UI/MedicineCard';
import { Medicine } from '../../data/medicines';

interface MedicineGridProps {
  medicines: Medicine[];
}

export default function MedicineGrid({ medicines }: MedicineGridProps) {
  // Container animation for staggered children
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {medicines.map(medicine => (
        <MedicineCard key={medicine.id} medicine={medicine} />
      ))}
    </motion.div>
  );
}


