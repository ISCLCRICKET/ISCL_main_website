import React from 'react';
import { Link } from 'react-router-dom';
import GlassmorphismCard from './GlassmorphismCard.jsx';

const PlayerCard = ({ player }) => {
  const isBowler = player.role === 'Bowler';
  
  return (
    <GlassmorphismCard className="h-full overflow-hidden relative group">
      {/* Decorative vertical team border accent */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-[4px]" 
        style={{ backgroundColor: player.team.color || '#FF6B1A' }}
      />
      
      <div className="p-5 space-y-4 pl-6">
        {/* Card Header: Meta Info */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <span className="text-xl filter drop-shadow-sm">{player.team.logo}</span>
            <span className="text-xs font-bold tracking-wider text-white/50 uppercase truncate max-w-[120px]">
              {player.team.name}
            </span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80">
            {player.role}
          </span>
        </div>

        {/* Player Identity Block */}
        <div>
          <h3 
            className="text-xl font-extrabold text-white uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#E91E8C] group-hover:to-[#FF6B1A] transition-all duration-300"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            {player.name}
          </h3>
        </div>

        {/* Core Quick Stats Row */}
        <div className="grid grid-cols-3 gap-2 bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl text-center">
          <div>
            <p className="text-sm font-bold text-white font-mono">{player.stats.matches}</p>
            <p className="text-[9px] uppercase tracking-wider text-white/40 font-medium mt-0.5">Mat</p>
          </div>
          <div>
            <p className={`text-sm font-black font-mono ${!isBowler ? 'text-[#FF6B1A]' : 'text-white/80'}`}>
              {player.stats.runs}
            </p>
            <p className="text-[9px] uppercase tracking-wider text-white/40 font-medium mt-0.5">Runs</p>
          </div>
          <div>
            <p className={`text-sm font-black font-mono ${isBowler ? 'text-[#8B5CF6]' : 'text-white/80'}`}>
              {player.stats.wickets}
            </p>
            <p className="text-[9px] uppercase tracking-wider text-white/40 font-medium mt-0.5">Wkts</p>
          </div>
        </div>

        {/* View Profile Action Link */}
        <Link to={`/players/${player.id}`} className="block pt-1">
          <button className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs font-black uppercase tracking-widest hover:bg-gradient-to-r hover:from-[#E91E8C] hover:to-[#FF6B1A] hover:text-white hover:border-transparent transition-all duration-300 active:scale-[0.98]">
            View Full Stats
          </button>
        </Link>
      </div>
    </GlassmorphismCard>
  );
};

export default PlayerCard;