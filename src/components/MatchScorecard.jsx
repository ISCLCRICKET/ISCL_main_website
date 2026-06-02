import React from 'react';

const MatchScorecard = ({ match }) => {
  if (!match || match.status !== 'completed') {
    return (
      <div className="text-center py-12 text-white/60">
        Scorecard not available
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Match Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          {match.team1.name} vs {match.team2.name}
        </h2>
        <p className="text-sm text-white/60">
          {new Date(match.date).toLocaleDateString('en-IN', { 
            weekday: 'long', 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
          })} • {match.venue}
        </p>
        {match.winner && (
          <div className="inline-block px-4 py-2 rounded-full bg-[#AACC00]/20 border border-[#AACC00]/30">
            <span className="text-sm font-semibold text-[#AACC00]">
              {match.winner.name} won
            </span>
          </div>
        )}
      </div>

      {/* Scores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Team 1 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/[0.08]">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{match.team1.logo}</span>
            <div>
              <p className="font-bold text-white">{match.team1.name}</p>
              <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                {match.score.team1}
              </p>
            </div>
          </div>
          <div className="text-sm text-white/60">
            <p>Innings details would appear here</p>
          </div>
        </div>

        {/* Team 2 */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/[0.08]">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{match.team2.logo}</span>
            <div>
              <p className="font-bold text-white">{match.team2.name}</p>
              <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                {match.score.team2}
              </p>
            </div>
          </div>
          <div className="text-sm text-white/60">
            <p>Innings details would appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchScorecard;