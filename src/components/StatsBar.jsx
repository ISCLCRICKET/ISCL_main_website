import React from 'react';
import AnimatedStatCounter from './AnimatedStatCounter.jsx';

const StatsBar = ({ icon: Icon, value, label, color = '#2563EB' }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/[0.08] hover:bg-white/10 transition-all duration-200">
      <div 
        className="p-3 rounded-xl"
        style={{ backgroundColor: `${color}20`, borderColor: `${color}30`, borderWidth: '1px' }}
      >
        <Icon size={24} style={{ color }} />
      </div>
      <div className="text-center">
        <AnimatedStatCounter 
          value={typeof value === 'number' ? value : 0} 
          className="text-4xl font-bold text-white"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        />
        {typeof value === 'string' && (
          <p className="text-4xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
            {value}
          </p>
        )}
        <p className="text-sm text-white/60 mt-2">{label}</p>
      </div>
    </div>
  );
};

export default StatsBar;