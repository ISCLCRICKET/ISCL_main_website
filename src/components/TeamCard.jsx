import React from 'react';
import GlassmorphismCard from './GlassmorphismCard.jsx';

const TeamCard = ({ team }) => {
  return (
    <GlassmorphismCard className="h-full">
      {/* Enforce flex-col and justify-between so card components line up symmetrically */}
      <div className="p-6 flex flex-col justify-between h-full min-h-[420px] space-y-4">
        
        {/* Top Branding Section */}
        <div className="space-y-4 flex-shrink-0">
          {/* Team Logo */}
          <div className="flex justify-center">
            <div
  className="w-24 h-24 rounded-full border-4 transition-transform duration-200 group-hover:scale-110 shadow-lg overflow-hidden bg-white flex items-center justify-center"
  style={{ borderColor: team.color }}
>
  <img
    src={team.logo}
    alt={team.name}
    className="w-full h-full object-cover"
  />
</div>
          </div>

          {/* Team Meta & Name with locked vertical alignment container */}
          <div className="text-center space-y-1">
            {/* Min-height container forces single and double line text fields to scale identically */}
            <div className="min-h-[56px] flex items-center justify-center">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {team.name}
              </h3>
            </div>
            <p className="text-xs font-semibold tracking-wider text-white/40 uppercase">{team.city}</p>
          </div>
        </div>

        {/* Middle Captain Block */}
        <div className="text-center bg-white/[0.02] border border-white/[0.04] py-2 rounded-lg flex-grow flex items-center justify-center">
          <p className="text-xs text-white/50">
            Captain: <span className="text-sm font-bold text-white uppercase ml-1">{team.captain}</span>
          </p>
        </div>

        {/* Bottom Symmetrical Stats Block */}
        <div className="space-y-4 flex-shrink-0">
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.08]">
            <div className="text-center">
              <p className="text-2xl font-black text-white font-mono" style={{ fontFamily: 'Oswald, sans-serif' }}>
                {team.stats.won}
              </p>
              <p className="text-[10px] uppercase font-bold tracking-wider text-white/40">Won</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-white font-mono" style={{ fontFamily: 'Oswald, sans-serif' }}>
                {team.stats.lost}
              </p>
              <p className="text-[10px] uppercase font-bold tracking-wider text-white/40">Lost</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black font-mono" style={{ color: team.color, fontFamily: 'Oswald, sans-serif' }}>
                {team.stats.points}
              </p>
              <p className="text-[10px] uppercase font-bold tracking-wider text-white/40">Points</p>
            </div>
          </div>

          {/* Action Trigger */}
          <button 
            className="w-full px-4 py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-200 active:scale-[0.98] border-2"
            style={{ 
              borderColor: team.color,
              color: team.color,
              backgroundColor: `${team.color}12`
            }}
          >
            View Full Squad
          </button>
        </div>

      </div>
    </GlassmorphismCard>
  );
};

export default TeamCard;