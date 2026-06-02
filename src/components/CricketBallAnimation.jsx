import React from 'react';
import { motion } from 'framer-motion';

const CricketBallAnimation = () => {
  return (
    <motion.div
      className="absolute top-1/4 left-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B1A] to-[#E91E8C] shadow-lg"
      initial={{ x: -100, y: 0, rotate: 0 }}
      animate={{
        x: [null, window.innerWidth + 100],
        y: [null, -200, 100, -100, 200],
        rotate: [null, 720]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatDelay: 3,
        ease: 'easeInOut'
      }}
      style={{
        boxShadow: '0 0 20px rgba(255, 107, 26, 0.5)'
      }}
    >
      <div className="absolute inset-2 rounded-full border-2 border-white/30"></div>
    </motion.div>
  );
};

export default CricketBallAnimation;