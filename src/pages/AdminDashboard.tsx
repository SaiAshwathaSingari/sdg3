// src/pages/AdminDashboard.tsx
import React from 'react';
import MedicineGrid from '../components/Sections/MedicineGrid';
import { medicines } from '../data/medicines';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-cyan-900 pt-16">
      <MedicineGrid medicines={medicines} />
    </div>
  );
}
