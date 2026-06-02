import React from 'react';
import { motion } from 'framer-motion';

const GlassmorphismCard = ({ 
  children, 
  className = '', 
  hover = true,
  glowColor = 'from-[#2563EB] to-[#E91E8C]',
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.03, y: -4 } : {}}
      transition={{ duration: 0.2 }}
      className={`relative group ${className}`}
      {...props}
    >
      {/* Glow effect on hover */}
      {hover && (
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${glowColor} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
      )}
      
      {/* Card content */}
      <div className="relative bg-[#141414]/80 backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-200">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassmorphismCard;