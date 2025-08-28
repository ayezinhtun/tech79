import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const particles = Array.from({ length: 120 }); // number of dots
  const radius = 250; // circle size

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        background: "transparent", // keep transparent, let Hero's white bg show
        overflow: "hidden",
        zIndex: -1,
        width: '100%',
        height: '100%'
      }}
    >
      {/* Particle Circle */}
      {particles.map((_, i) => {
        const angle = (i / particles.length) * 2 * Math.PI; // distribute evenly
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.div
            key={i}
            className="position-absolute rounded-circle"
            style={{
              width: 6,
              height: 6,
              backgroundColor: ["#007bff", "#ff5722", "#9c27b0", "#4caf50"][i % 4],
              opacity: 0.9,
            }}
            initial={{ x: 0, y: 0, scale: 0.5, opacity: 0.5 }}
            animate={{
              x,
              y,
              scale: [0.7, 1.2, 0.7],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedBackground;
