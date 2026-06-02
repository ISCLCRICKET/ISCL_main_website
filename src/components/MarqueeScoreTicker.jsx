import React from 'react';

const MarqueeScoreTicker = () => {
  const liveMatches = [
    { team1: 'Mumbai Mavericks', team2: 'Delhi Dynamos', score: '45/3 (6.2 ov)' },
    { team1: 'Bangalore Blasters', team2: 'Chennai Challengers', score: '78/2 (8.4 ov)' }
  ];

  return (
    <div className="bg-gradient-to-r from-[#E91E8C] via-[#8B5CF6] to-[#2563EB] text-white py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="inline-flex items-center gap-8 text-sm font-semibold">
          {liveMatches.map((match, index) => (
            <React.Fragment key={index}>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                LIVE
              </span>
              <span>
                {match.team1} vs {match.team2} | {match.score}
              </span>
              {index < liveMatches.length - 1 && <span className="text-white/50">•</span>}
            </React.Fragment>
          ))}
          {/* Duplicate for seamless loop */}
          {liveMatches.map((match, index) => (
            <React.Fragment key={`dup-${index}`}>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                LIVE
              </span>
              <span>
                {match.team1} vs {match.team2} | {match.score}
              </span>
              {index < liveMatches.length - 1 && <span className="text-white/50">•</span>}
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
};

export default MarqueeScoreTicker;