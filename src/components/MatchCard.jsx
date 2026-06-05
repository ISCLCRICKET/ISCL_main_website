import React from 'react';
import GlassmorphismCard from './GlassmorphismCard.jsx';
import CountdownTimer from './CountdownTimer.jsx';

const MatchCard = ({ match }) => {
  const isUpcoming = match?.status === 'upcoming';
  const isCompleted = match?.status === 'completed';
  const isLive = match?.status === 'live';
  const winnerName = typeof match?.winner === 'object' ? match?.winner?.name : match?.winner;

  const formattedDate = () => {
    if (!match?.date) return '';
    const d = new Date(match.date);
    if (isNaN(d.getTime())) return match.date;
    return d.toLocaleDateString('en-IN', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const renderTeamLogo = (team) => {
    const logo = team?.logo;
    if (logo && typeof logo === 'string' && (logo.startsWith('/') || logo.startsWith('http') || logo.endsWith('.png') || logo.endsWith('.jpg') || logo.endsWith('.jpeg'))) {
      return (
        <div className="w-14 h-14 sm:w-18 sm:h-18 mx-auto bg-white/5 rounded-full p-1.5 flex items-center justify-center overflow-hidden border border-white/10 shadow-inner">
          <img 
            src={logo} 
            alt={team?.name || 'Team'} 
            className="max-w-full max-h-full object-contain filter drop-shadow-[0_2px_4px_rgba(255,255,255,0.05)]"
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
        </div>
      );
    }
    return (
      <div className="w-14 h-14 sm:w-18 sm:h-18 mx-auto bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-2xl sm:text-3xl">
        {logo || '🏏'}
      </div>
    );
  };

  return (
    <GlassmorphismCard className="h-full w-full overflow-hidden">
      <div className="p-5 sm:p-6 space-y-6">
        {/* Teams Container */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
          {/* Team 1 */}
          <div className="flex-1 text-center min-w-0 space-y-2">
            {renderTeamLogo(match?.team1)}
            <p className="font-bold text-white text-xs sm:text-sm md:text-base mt-2 line-clamp-2 uppercase tracking-wide leading-tight break-words max-w-[120px] sm:max-w-[150px] mx-auto">
              {match?.team1?.name || 'TBD'}
            </p>
            {(isCompleted || isLive) && match?.score && (
              <p className="text-xl sm:text-2xl font-bold text-white font-mono mt-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                {match?.score?.team1}
              </p>
            )}
          </div>

          {/* VS Divider */}
          <div className="flex flex-col items-center gap-1.5 shrink-0 px-1">
            <span className="text-[10px] sm:text-xs font-black text-white/45 tracking-widest bg-white/5 px-2 py-0.5 rounded-full uppercase">VS</span>
            {match?.winner && match?.team1 && (
              <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 mt-1">
                <span className="text-[10px] font-black text-emerald-400">
                  {winnerName === match?.team1?.name ? 'W' : 'L'}
                </span>
              </div>
            )}
          </div>

          {/* Team 2 */}
          <div className="flex-1 text-center min-w-0 space-y-2">
            {renderTeamLogo(match?.team2)}
            <p className="font-bold text-white text-xs sm:text-sm md:text-base mt-2 line-clamp-2 uppercase tracking-wide leading-tight break-words max-w-[120px] sm:max-w-[150px] mx-auto">
              {match?.team2?.name || 'TBD'}
            </p>
            {(isCompleted || isLive) && match?.score && (
              <p className="text-xl sm:text-2xl font-bold text-white font-mono mt-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                {match?.score?.team2}
              </p>
            )}
          </div>
        </div>

        {/* Match Details */}
        <div className="space-y-1 text-center border-t border-white/[0.04] pt-4">
          <p className="text-xs sm:text-sm font-semibold text-white/50 tracking-wider">
            {formattedDate()}{match?.time ? ` • ${match.time}` : ''}
          </p>
          <p className="text-xs sm:text-sm font-bold text-white/80 uppercase tracking-wide truncate max-w-[280px] sm:max-w-[400px] mx-auto">{match?.venue}</p>
        </div>

        {/* Countdown or Result Banner */}
        {isUpcoming && match?.countdown && (
          <div className="pt-2">
            <CountdownTimer targetDate={match.countdown} />
          </div>
        )}

        {isCompleted && match?.winner && (
          <div className="pt-2 border-t border-white/[0.04]">
            <div className="flex items-center justify-center gap-2 text-emerald-400">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">{winnerName || 'Winner'} won</span>
            </div>
          </div>
        )}

        {isLive && (
          <div className="pt-2 border-t border-white/[0.04]">
            <div className="flex items-center justify-center gap-2 text-rose-500">
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20 animate-pulse">● Live Coverage</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {isUpcoming ? (
            <>
              <button className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-[#E91E8C] to-[#FF6B1A] text-white text-sm font-semibold hover:brightness-110 transition-all duration-200 active:scale-[0.98]">
                Watch live
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-200 active:scale-[0.98]">
                Set reminder
              </button>
            </>
          ) : (
            <>
              <button className="flex-1 px-4 py-2 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/30 text-[#2563EB] text-sm font-semibold hover:bg-[#2563EB]/30 transition-all duration-200 active:scale-[0.98]">
                Scorecard
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-200 active:scale-[0.98]">
                Highlights
              </button>
            </>
          )}
        </div>
      </div>
    </GlassmorphismCard>
  );
};

export default MatchCard;