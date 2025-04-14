import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(6, 182, 212, 0.2)",
      borderColor: "rgba(6, 182, 212, 0.5)",
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(6, 182, 212, 0.1)",
      borderColor: "rgba(6, 182, 212, 0.8)",
    }
  };

  useEffect(() => {
    const hoverElements = document.querySelectorAll("a, button");

    const mouseEnter = () => setCursorVariant("hover");
    const mouseLeave = () => setCursorVariant("default");

    hoverElements.forEach(element => {
      element.addEventListener("mouseenter", mouseEnter);
      element.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      hoverElements.forEach(element => {
        element.removeEventListener("mouseenter", mouseEnter);
        element.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-400 z-50 pointer-events-none hidden md:block"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}

