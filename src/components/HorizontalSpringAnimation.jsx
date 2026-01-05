import React from "react";
import { motion } from "framer-motion";
function HorizontalSpringAnimation({ children }) {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -100 }} // Start far left
      animate={{
        opacity: 1,
        x: 0, // Slide to origin
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 15,
        mass: 0.8,
        delay: 0.2,
      }}
      className="hero-text"
    >
      {children}
    </motion.h1>
  );
}

export default HorizontalSpringAnimation;
