import React from 'react';
import { Link } from 'react-router-dom';
import GlassmorphismCard from './GlassmorphismCard.jsx';

const PlayerCard = ({ player }) => {
  const keyStatValue = player.role === 'Bowler' ? player.stats.wickets : player.stats.runs;
  const keyStatLabel = player.role === 'Bowler' ? 'Wickets' : 'Runs';

  return (
    <GlassmorphismCard className="h-full">
      <div className="p-6 space-y-4">
        {/* Player Photo */}
        <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10">
          <img 
            src={player.photo} 
            alt={player.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Role Badge */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/10">
            <span className="text-xs font-semibold text-white">{player.role}</span>
          </div>
        </div>

        {/* Player Info */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            {player.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{player.team.logo}</span>
            <span className="text-sm text-white/60">{player.team.name}</span>
          </div>
        </div>

        {/* Key Stat */}
        <div className="pt-4 border-t border-white/[0.08]">
          <div className="text-center">
            <p className="text-4xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
              {keyStatValue}
            </p>
            <p className="text-sm text-white/50 mt-1">{keyStatLabel}</p>
          </div>
        </div>

        {/* View Profile Button */}
        <Link to={`/players/${player.id}`}>
          <button className="w-full px-4 py-3 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/30 text-[#2563EB] text-sm font-semibold hover:bg-[#2563EB]/30 transition-all duration-200 active:scale-[0.98]">
            View profile
          </button>
        </Link>
      </div>
    </GlassmorphismCard>
  );
};

export default PlayerCard;