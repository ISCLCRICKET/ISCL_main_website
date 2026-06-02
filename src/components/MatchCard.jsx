import React from 'react';
import GlassmorphismCard from './GlassmorphismCard.jsx';
import CountdownTimer from './CountdownTimer.jsx';

const MatchCard = ({ match }) => {
  const isUpcoming = match.status === 'upcoming';
  const isCompleted = match.status === 'completed';

  return (
    <GlassmorphismCard className="h-full">
      <div className="p-6 space-y-6">
        {/* Teams */}
        <div className="flex items-center justify-between gap-4">
          {/* Team 1 */}
          <div className="flex-1 text-center space-y-2">
            <div className="text-4xl">{match.team1.logo}</div>
            <p className="font-semibold text-white">{match.team1.name}</p>
            {isCompleted && (
              <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                {match.score.team1}
              </p>
            )}
          </div>

          {/* VS */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-bold text-white/60 tracking-wider">VS</span>
            {match.winner && (
              <div className="px-3 py-1 rounded-full bg-[#AACC00]/20 border border-[#AACC00]/30">
                <span className="text-xs font-semibold text-[#AACC00]">
                  {match.winner.name === match.team1.name ? 'W' : 'L'}
                </span>
              </div>
            )}
          </div>

          {/* Team 2 */}
          <div className="flex-1 text-center space-y-2">
            <div className="text-4xl">{match.team2.logo}</div>
            <p className="font-semibold text-white">{match.team2.name}</p>
            {isCompleted && (
              <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                {match.score.team2}
              </p>
            )}
          </div>
        </div>

        {/* Match Details */}
        <div className="space-y-2 text-center">
          <p className="text-sm text-white/60">
            {new Date(match.date).toLocaleDateString('en-IN', { 
              weekday: 'short', 
              day: 'numeric', 
              month: 'short', 
              year: 'numeric' 
            })} • {match.time}
          </p>
          <p className="text-sm text-white/80">{match.venue}</p>
        </div>

        {/* Countdown or Result */}
        {isUpcoming && match.countdown && (
          <div className="pt-4 border-t border-white/[0.08]">
            <CountdownTimer targetDate={match.countdown} />
          </div>
        )}

        {isCompleted && match.winner && (
          <div className="pt-4 border-t border-white/[0.08]">
            <div className="flex items-center justify-center gap-2 text-[#AACC00]">
              <span className="text-sm font-semibold">{match.winner.name} won</span>
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