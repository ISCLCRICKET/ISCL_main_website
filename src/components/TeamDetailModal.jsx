import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TeamDetailModal = ({ team, isOpen, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!team) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          
          {/* Backdrop Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-[#111111] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Header Block with Dynamic Branding Gradient */}
            <div 
              className="relative p-8 pt-10 flex flex-col items-center justify-center border-b border-white/[0.06] flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${team.color}25 0%, ${team.color}05 100%)`
              }}
            >
              {/* Close Button Trigger */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg bg-black/40 hover:bg-black/70 text-white/70 hover:text-white transition-all duration-200 border border-white/5 active:scale-95"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white/10 bg-white flex items-center justify-center filter drop-shadow-md">
  <img 
    src={team.logo} 
    alt={team.name} 
    className="w-full h-full object-cover"
  />
</div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {team.name}
                </h2>
                <p className="text-xs tracking-widest uppercase font-bold text-white/40 mt-0.5">{team.city}</p>
              </div>
            </div>

            {/* Scrollable Metrics & Rosters Body */}
            <div className="p-6 overflow-y-auto space-y-8 CustomScrollbar">
              
              {/* Performance Numeric Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {// Change the array mapping definition to separate utility colors from custom inline colors:
[
  { label: 'Matches', val: team.stats.matches },
  { label: 'Won', val: team.stats.won, colorClass: 'text-emerald-400' },
  { label: 'Lost', val: team.stats.lost, colorClass: 'text-rose-500' },
  { label: 'Points', val: team.stats.points, customStyle: { color: team.color } },
  { label: 'NRR', val: team.stats.nrr }
].map((stat, i) => (
  <div key={i} className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
    <p 
      className={`text-xl font-black font-mono tracking-tight ${stat.colorClass || 'text-white'}`}
      style={stat.customStyle || {}}
    >
      {stat.val}
    </p>
    <p className="text-[10px] uppercase font-bold tracking-wider text-white/30 mt-0.5">{stat.label}</p>
  </div>
))}
              </div>

              {/* Roster Group Section */}
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-white/40 mb-4 border-b border-white/[0.05] pb-2">
                  Active Squad Lineup
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {team.squad.map((player) => (
                    <div
                      key={player.id}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center text-xl font-bold text-white/10">
                          {player.photo ? (
                            <img 
                              src={player.photo} 
                              alt={player.name}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          ) : "🏏"}
                        </div>
                        <div>
                          <p className="font-extrabold uppercase text-sm text-white/90 group-hover:text-white transition-colors">
                            {player.name}
                          </p>
                          <p className="text-[10px] font-bold tracking-wide uppercase text-white/40 mt-0.5">
                            {player.role}
                          </p>
                        </div>
                      </div>
                      
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-xs text-white border transition-colors"
                        style={{ 
                          borderColor: `${team.color}40`, 
                          backgroundColor: `${team.color}08` 
                        }}
                      >
                        {player.jersey}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TeamDetailModal;