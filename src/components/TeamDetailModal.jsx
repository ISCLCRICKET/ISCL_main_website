import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TeamDetailModal = ({ team, isOpen, onClose }) => {
  if (!team) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl bg-[#141414] border border-white/[0.08] rounded-2xl overflow-hidden z-50"
          >
            {/* Header with Team Color Gradient */}
            <div 
              className="relative h-32 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${team.color}40 0%, ${team.color}20 100%)`
              }}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors duration-200"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <div className="text-center">
                <div className="text-6xl mb-2">{team.logo}</div>
                <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {team.name}
                </h2>
                <p className="text-white/60">{team.city}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {/* Team Stats */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/[0.08]">
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {team.stats.matches}
                  </p>
                  <p className="text-xs text-white/50 mt-1">Matches</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/[0.08]">
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {team.stats.won}
                  </p>
                  <p className="text-xs text-white/50 mt-1">Won</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/[0.08]">
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {team.stats.lost}
                  </p>
                  <p className="text-xs text-white/50 mt-1">Lost</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/[0.08]">
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {team.stats.points}
                  </p>
                  <p className="text-xs text-white/50 mt-1">Points</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/[0.08]">
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {team.stats.nrr}
                  </p>
                  <p className="text-xs text-white/50 mt-1">NRR</p>
                </div>
              </div>

              {/* Squad List */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Squad
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {team.squad.map((player) => (
                    <div
                      key={player.id}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/[0.08] hover:bg-white/10 transition-colors duration-200"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                        <img 
                          src={player.photo} 
                          alt={player.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-white">{player.name}</p>
                        <p className="text-sm text-white/60">{player.role}</p>
                      </div>
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white border-2"
                        style={{ borderColor: team.color, backgroundColor: `${team.color}20` }}
                      >
                        {player.jersey}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TeamDetailModal;