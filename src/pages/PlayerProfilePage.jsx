import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MarqueeScoreTicker from '@/components/MarqueeScoreTicker.jsx';
import { players } from '@/lib/mockData.js';

const PlayerProfilePage = () => {
  const { playerId } = useParams();
  const player = players.find(p => p.id === parseInt(playerId));

  if (!player) {
    return (
      <>
        <MarqueeScoreTicker />
        <Header />
        <main className="min-h-screen bg-[#0A0A0A] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white/60 text-lg">Player not found</p>
            <Link to="/players" className="text-[#2563EB] hover:text-[#2563EB]/80 mt-4 inline-block">
              Back to players
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${player.name} - ISCL`}</title>
        <meta name="description" content={`View ${player.name}'s complete profile, career stats, and recent performances in ISCL.`} />
      </Helmet>

      <MarqueeScoreTicker />
      <Header />

      <main className="min-h-screen bg-[#0A0A0A]">
        {/* Player Banner */}
        <section 
          className="relative h-80 flex items-end"
          style={{
            background: `linear-gradient(135deg, ${player.team.color}40 0%, ${player.team.color}20 100%)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <Link 
              to="/players"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              Back to players
            </Link>
            <div className="flex items-end gap-6">
              <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border-4" style={{ borderColor: player.team.color }}>
                <img 
                  src={player.photo} 
                  alt={player.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 pb-2">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {player.name}
                </h1>
                <div className="flex items-center gap-4 text-white/80">
                  <span className="flex items-center gap-2">
                    <span className="text-2xl">{player.team.logo}</span>
                    {player.team.name}
                  </span>
                  <span>•</span>
                  <span>{player.role}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Stats */}
        <section className="py-12 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Career stats
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/[0.08] text-center">
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {player.stats.matches}
                  </p>
                  <p className="text-xs text-white/50 mt-1">Matches</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/[0.08] text-center">
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {player.stats.runs}
                  </p>
                  <p className="text-xs text-white/50 mt-1">Runs</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/[0.08] text-center">
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {player.stats.average}
                  </p>
                  <p className="text-xs text-white/50 mt-1">Average</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/[0.08] text-center">
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {player.stats.strikeRate}
                  </p>
                  <p className="text-xs text-white/50 mt-1">Strike rate</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/[0.08] text-center">
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {player.stats.fifties}
                  </p>
                  <p className="text-xs text-white/50 mt-1">50s</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/[0.08] text-center">
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {player.stats.hundreds}
                  </p>
                  <p className="text-xs text-white/50 mt-1">100s</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/[0.08] text-center">
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {player.stats.wickets}
                  </p>
                  <p className="text-xs text-white/50 mt-1">Wickets</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/[0.08] text-center">
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {player.stats.economy}
                  </p>
                  <p className="text-xs text-white/50 mt-1">Economy</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Performances */}
        <section className="py-12 bg-gradient-to-b from-[#0A0A0A] to-[#141414]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Recent performances
              </h2>
              <div className="bg-[#141414]/80 backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/[0.08]">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-white/80">Match</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold text-white/80">Runs</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold text-white/80">Wickets</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold text-white/80">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {player.recentPerformances.map((perf, index) => (
                        <tr key={index} className="border-b border-white/[0.08] hover:bg-white/5 transition-colors duration-200">
                          <td className="px-4 py-4 text-sm text-white">{perf.match}</td>
                          <td className="px-4 py-4 text-center text-sm font-bold text-white">{perf.runs}</td>
                          <td className="px-4 py-4 text-center text-sm font-bold text-white">{perf.wickets}</td>
                          <td className="px-4 py-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              perf.result === 'Won' 
                                ? 'bg-[#AACC00]/20 text-[#AACC00] border border-[#AACC00]/30'
                                : 'bg-[#E91E8C]/20 text-[#E91E8C] border border-[#E91E8C]/30'
                            }`}>
                              {perf.result}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PlayerProfilePage;