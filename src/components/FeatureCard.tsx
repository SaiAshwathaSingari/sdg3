// components/FeatureCard.tsx
import { motion } from 'framer-motion';

export default function FeatureCard({ title, description }: { title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300"
    >
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-cyan-400">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </div>
      
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
