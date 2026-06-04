import React from 'react';
import { Helmet } from 'react-helmet';
import { Award, Trophy } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MarqueeScoreTicker from '@/components/MarqueeScoreTicker.jsx';
import GlassmorphismCard from '@/components/GlassmorphismCard.jsx';

// Inline authentic ISCL data with exactly 5 players per segment
const localStatsData = {
  orangeCap: { player: { name: "Shantanu Das", team: { name: "West Bengal", logo: "🐯" } }, runs: 131 },
  purpleCap: { player: { name: "Manthan Ram", team: { name: "Rajasthan", logo: "⚔️" } }, wickets: 17 },
  
  runs: [
    { name: "Shantanu Das", teamShort: "WEST BENGAL", val: "131" },
    { name: "Jay Singh Yadav", teamShort: "UTTAR PRADESH", val: "124" },
    { name: "Rohit Kalsi", teamShort: "PUNJAB", val: "118" },
    { name: "Shailesh Bharwad", teamShort: "GUJARAT", val: "112" },
    { name: "Vignesh Pattabi", teamShort: "BENGALURU", val: "105" },
  ],
  wickets: [
    { name: "Manthan Ram", teamShort: "RAJASTHAN", val: "17" },
    { name: "Sahil Bhagu", teamShort: "PUNJAB", val: "14" },
    { name: "Rabbani Dafedar", teamShort: "KARNATAKA", val: "12" },
    { name: "Saif Malinga", teamShort: "UTTAR PRADESH", val: "11" },
    { name: "Karthik M N", teamShort: "BENGALURU", val: "9" },
  ],
  highestScores: [
    { name: "Jay Singh Yadav", teamShort: "UTTAR PRADESH", val: "86" },
    { name: "Shreyash Bajpai", teamShort: "UTTAR PRADESH", val: "53" },
    { name: "Shailesh Bharwad", teamShort: "GUJARAT", val: "52" },
    { name: "Vignesh Pattabi", teamShort: "BENGALURU", val: "33" },
    { name: "Kamaran Khan", teamShort: "UTTAR PRADESH", val: "21" },
  ],
  bowlingFigures: [
    { name: "Manthan Ram", teamShort: "RAJASTHAN", val: "4/14" },
    { name: "Sahil Bhagu", teamShort: "PUNJAB", val: "3/12" },
    { name: "Rohit Kalsi", teamShort: "PUNJAB", val: "3/12" },
    { name: "Saif Malinga", teamShort: "UTTAR PRADESH", val: "3/20" },
    { name: "Rabbani Dafedar", teamShort: "KARNATAKA", val: "2/5" },
  ],
  fifties: [
    { name: "Jay Singh Yadav", teamShort: "UTTAR PRADESH", val: "2" },
    { name: "Shailesh Bharwad", teamShort: "GUJARAT", val: "1" },
    { name: "Shreyash Bajpai", teamShort: "UTTAR PRADESH", val: "1" },
    { name: "Shantanu Das", teamShort: "WEST BENGAL", val: "1" },
    { name: "Rohit Kalsi", teamShort: "PUNJAB", val: "1" },
  ],
  economy: [
    { name: "Afrid Sayyad", teamShort: "MAHARASHTRA", val: "4.98" },
    { name: "Karthik M N", teamShort: "BENGALURU", val: "2.50" },
    { name: "Ratnesh Singh", teamShort: "UTTAR PRADESH", val: "2.50" },
    { name: "Suresh Yadav", teamShort: "UTTAR PRADESH", val: "1.00" },
    { name: "Bunty Khan", teamShort: "UTTAR PRADESH", val: "2.00" },
  ],
  fours: [
    { name: "Shailesh Bharwad", teamShort: "GUJARAT", val: "14" },
    { name: "Shantanu Das", teamShort: "WEST BENGAL", val: "12" },
    { name: "Jay Singh Yadav", teamShort: "UTTAR PRADESH", val: "11" },
    { name: "Vignesh Pattabi", teamShort: "BENGALURU", val: "9" },
    { name: "Shreyash Bajpai", teamShort: "UTTAR PRADESH", val: "6" },
  ],
  sixes: [
    { name: "Jay Singh Yadav", teamShort: "UTTAR PRADESH", val: "8" },
    { name: "Shreyash Bajpai", teamShort: "UTTAR PRADESH", val: "5" },
    { name: "Shailesh Bharwad", teamShort: "GUJARAT", val: "4" },
    { name: "Vignesh Pattabi", teamShort: "BENGALURU", val: "3" },
    { name: "Fazil Ali", teamShort: "SOUTH ZONE", val: "2" },
  ],
  boundaries: [
    { name: "Shailesh Bharwad", teamShort: "GUJARAT", val: "18" },
    { name: "Jay Singh Yadav", teamShort: "UTTAR PRADESH", val: "19" },
    { name: "Shantanu Das", teamShort: "WEST BENGAL", val: "15" },
    { name: "Vignesh Pattabi", teamShort: "BENGALURU", val: "12" },
    { name: "Shreyash Bajpai", teamShort: "UTTAR PRADESH", val: "11" },
  ]
};

const PlayersPage = () => {
  
  const LeaderboardWidget = ({ title, data, highlightColor = 'text-white' }) => (
    <div className="bg-[#0c0c0d] border border-white/[0.06] rounded-xl p-5 shadow-xl relative overflow-hidden">
      <h3 className="text-sm font-black uppercase tracking-widest text-white/40 mb-4 border-b border-white/[0.05] pb-2 flex items-center justify-between">
        <span>{title}</span>
        <span className="text-[10px] bg-white/5 text-white/60 px-1.5 py-0.5 rounded font-mono font-normal">TOP 5</span>
      </h3>
      <div className="space-y-3">
        {data.map((player, idx) => (
          <div key={idx} className="flex items-center justify-between text-sm group">
            <div className="flex items-center gap-3 truncate">
              <span className="font-mono text-xs font-bold text-white/30 w-4">{idx + 1}</span>
              <div className="truncate">
                <p className="font-extrabold uppercase text-white/90 group-hover:text-[#FF6B1A] transition-colors truncate">
                  {player.name}
                </p>
                <p className="text-[10px] text-white/40 font-medium tracking-wide uppercase truncate">
                  {player.teamShort}
                </p>
              </div>
            </div>
            <span className={`font-mono font-black text-base ${highlightColor}`}>
              {player.val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>League Leaders & Stats - ISCL</title>
        <meta name="description" content="Official tournament performance leaders. Explore top runs, wickets, boundaries, and overall metrics." />
      </Helmet>

      <MarqueeScoreTicker />
      <Header />

      <main className="min-h-screen bg-[#060606] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-br from-blue-600/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF6B1A]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Title Block */}
          <div className="border-b border-white/[0.08] pb-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              League Stats Hub
            </h1>
            <p className="text-xs text-white/40 font-bold tracking-widest mt-1.5 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B1A]" /> Official Tournament Leaderboards
            </p>
          </div>

          {/* Premium Cap Highlight Duos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {/* Orange Cap */}
            <GlassmorphismCard glowColor="from-[#FF6B1A] to-transparent">
              <div className="p-6 relative overflow-hidden">
                <div className="absolute right-[-20px] bottom-[-30px] text-8xl font-black tracking-tighter text-white/[0.01] uppercase font-mono select-none pointer-events-none">RUNS</div>
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FF6B1A]/10 border border-[#FF6B1A]/20 flex items-center justify-center text-[#FF6B1A]"><Award size={22} /></div>
                    <div>
                      <span className="text-[10px] font-black tracking-widest uppercase text-[#FF6B1A] bg-[#FF6B1A]/10 px-2 py-0.5 rounded">Orange Cap Leader</span>
                      <h2 className="text-2xl font-black text-white mt-1 uppercase tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{localStatsData.orangeCap.player.name}</h2>
                      <p className="text-xs text-white/50 font-semibold mt-0.5">{localStatsData.orangeCap.player.team.logo} {localStatsData.orangeCap.player.team.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-black text-[#FF6B1A] font-mono tracking-tight">{localStatsData.orangeCap.runs}</p>
                    <p className="text-[9px] uppercase tracking-wider text-white/40 font-bold mt-0.5">Runs</p>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>

            {/* Purple Cap */}
            <GlassmorphismCard glowColor="from-[#8B5CF6] to-transparent">
              <div className="p-6 relative overflow-hidden">
                <div className="absolute right-[-20px] bottom-[-30px] text-8xl font-black tracking-tighter text-white/[0.01] uppercase font-mono select-none pointer-events-none">WKTS</div>
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6]"><Award size={22} /></div>
                    <div>
                      <span className="text-[10px] font-black tracking-widest uppercase text-[#8B5CF6] bg-[#8B5CF6]/10 px-2 py-0.5 rounded">Purple Cap Leader</span>
                      <h2 className="text-2xl font-black text-white mt-1 uppercase tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{localStatsData.purpleCap.player.name}</h2>
                      <p className="text-xs text-white/50 font-semibold mt-0.5">{localStatsData.purpleCap.player.team.logo} {localStatsData.purpleCap.player.team.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-black text-[#8B5CF6] font-mono tracking-tight">{localStatsData.purpleCap.wickets}</p>
                    <p className="text-[9px] uppercase tracking-wider text-white/40 font-bold mt-0.5">Wickets</p>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>
          </div>

          {/* Grid Layout containing precisely 5 rows per widget */}
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/40 mb-6">
              <Trophy size={14} className="text-[#FF6B1A]" /> Season Leaderboards
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <LeaderboardWidget title="Runs" data={localStatsData.runs} highlightColor="text-[#FF6B1A]" />
              <LeaderboardWidget title="Wickets" data={localStatsData.wickets} highlightColor="text-[#8B5CF6]" />
              <LeaderboardWidget title="Highest Scores" data={localStatsData.highestScores} />
              
              <LeaderboardWidget title="Best Bowling Figures" data={localStatsData.bowlingFigures} />
              <LeaderboardWidget title="Fifties" data={localStatsData.fifties} />
              <LeaderboardWidget title="Economy Rates" data={localStatsData.economy} highlightColor="text-emerald-400" />
              
              <LeaderboardWidget title="Fours" data={localStatsData.fours} />
              <LeaderboardWidget title="Sixes" data={localStatsData.sixes} />
              <LeaderboardWidget title="Total Boundaries" data={localStatsData.boundaries} highlightColor="text-[#FF6B1A]" />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default PlayersPage;