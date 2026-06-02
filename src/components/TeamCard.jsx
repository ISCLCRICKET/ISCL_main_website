import React from 'react';
import { Link } from 'react-router-dom';
import GlassmorphismCard from './GlassmorphismCard.jsx';

const TeamCard = ({ team }) => {
  return (
    <GlassmorphismCard className="h-full">
      <div className="p-6 space-y-6">
        {/* Team Logo */}
        <div className="flex justify-center">
          <div 
            className="w-24 h-24 rounded-full flex items-center justify-center text-5xl border-4 transition-transform duration-200 group-hover:scale-110"
            style={{ borderColor: team.color }}
          >
            {team.logo}
          </div>
        </div>

        {/* Team Info */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            {team.name}
          </h3>
          <p className="text-sm text-white/60">{team.city}</p>
          <div className="pt-2">
            <span className="text-xs text-white/50">Captain: </span>
            <span className="text-sm font-semibold text-white">{team.captain}</span>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
          <div className="text-center">
            <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
              {team.stats.won}
            </p>
            <p className="text-xs text-white/50">Won</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
              {team.stats.lost}
            </p>
            <p className="text-xs text-white/50">Lost</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
              {team.stats.points}
            </p>
            <p className="text-xs text-white/50">Points</p>
          </div>
        </div>

        {/* View Squad Button */}
        <Link to={`/teams/${team.id}`}>
          <button 
            className="w-full px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-[0.98] border-2"
            style={{ 
              borderColor: team.color,
              color: team.color,
              backgroundColor: `${team.color}10`
            }}
          >
            View squad
          </button>
        </Link>
      </div>
    </GlassmorphismCard>
  );
};

export default TeamCard;