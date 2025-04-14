import { motion } from 'framer-motion';

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 opacity-10">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-cyan-400/10"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
