import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, BarChart3, History } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MarqueeScoreTicker from '@/components/MarqueeScoreTicker.jsx';
import { players as mockPlayers } from '@/lib/mockData.js';
import { db } from '@/lib/supabaseClient.js';

const PlayerProfilePage = () => {
  const { playerId } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const fetchedPlayers = await db.getPlayers();
        const found = fetchedPlayers.find(p => String(p.id) === String(playerId));
        if (found) {
          setPlayer(found);
        } else {
          const mockFound = mockPlayers.find(p => String(p.id) === String(playerId));
          if (mockFound) setPlayer(mockFound);
        }
      } catch (err) {
        console.warn("Player profile database fetch failed, using fallback:", err);
        const mockFound = mockPlayers.find(p => String(p.id) === String(playerId));
        if (mockFound) setPlayer(mockFound);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayer();
  }, [playerId]);

  if (loading) {
    return (
      <>
        <MarqueeScoreTicker />
        <Header />
        <main className="min-h-screen bg-[#060606] flex items-center justify-center text-white">
          <div className="text-center space-y-4">
            <div className="w-10 h-10 border-4 border-[#2563EB] border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Loading Profile...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!player) {
    return (
      <>
        <MarqueeScoreTicker />
        <Header />
        <main className="min-h-screen bg-[#060606] flex items-center justify-center">
          <div className="text-center max-w-sm px-4">
            <p className="text-white/40 text-sm font-bold uppercase tracking-wider">Player identity data missing</p>
            <Link to="/players" className="text-[#FF6B1A] font-bold text-xs uppercase tracking-widest mt-4 inline-block hover:underline">
              &larr; Back to stats center
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
        <title>{`${player.name} - Career Stats - ISCL`}</title>
        <meta name="description" content={`View ${player.name}'s complete profile, career stats, and recent performances in ISCL.`} />
      </Helmet>

      <MarqueeScoreTicker />
      <Header />

      <main className="min-h-screen bg-[#060606] text-white pt-28 pb-20">
        
        {/* Dynamic Sport Profile Header Strip */}
        <section 
          className="relative py-12 border-b border-white/[0.06]"
          style={{
            background: `linear-gradient(180deg, ${player?.team?.color || '#2563EB'}15 0%, transparent 100%)`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/players"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/50 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={14} /> Back to stats center
            </Link>
 
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                {/* Visual Typography Avatar Badge */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center border shadow-xl overflow-hidden bg-white"
                  style={{ borderColor: player?.team?.color || '#fff' }}
                >
                  {player?.team?.logo && (
                    <img 
                      src={player.team.logo} 
                      alt={player.team.name || 'Team'} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }} 
                    />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                      {player?.role || 'All-Rounder'}
                    </span>
                    <span className="text-xs text-white/40 font-bold uppercase tracking-wider">{player?.team?.name || 'TBD'}</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {player?.name || 'Unknown Player'}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Career Stats Board */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-6 text-white/40 uppercase font-bold text-xs tracking-widest">
                <BarChart3 size={14} /> Comprehensive Metrics
              </div>

              {/* Explicitly filtered stats cards layout */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="p-5 rounded-2xl bg-[#0d0d0e] border border-white/[0.05] shadow-lg">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Matches</p>
                  <p className="text-3xl font-black text-white font-mono mt-2">{player?.stats?.matches ?? player?.matches ?? 5}</p>
                </div>
                
                <div className="p-5 rounded-2xl bg-[#0d0d0e] border border-white/[0.05] shadow-lg">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Runs Scored</p>
                  <p className="text-3xl font-black text-[#FF6B1A] font-mono mt-2">{player?.stats?.runs ?? player?.runs ?? 0}</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0d0d0e] border border-white/[0.05] shadow-lg">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Strike Rate</p>
                  <p className="text-3xl font-black text-white font-mono mt-2">{player?.stats?.strikeRate ?? player?.strike_rate ?? 140.0}</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0d0d0e] border border-white/[0.05] shadow-lg">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Half Centuries (50s)</p>
                  <p className="text-3xl font-black text-white font-mono mt-2">{player?.stats?.fifties ?? player?.fifties ?? 0}</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0d0d0e] border border-white/[0.05] shadow-lg">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Wickets Taken</p>
                  <p className="text-3xl font-black text-[#8B5CF6] font-mono mt-2">{player?.stats?.wickets ?? player?.wickets ?? 0}</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0d0d0e] border border-white/[0.05] shadow-lg col-span-2 sm:col-span-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Economy Rate</p>
                  <p className="text-3xl font-black text-white font-mono mt-2">{player?.stats?.economy ?? player?.economy ?? 6.0}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Performance Match History Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-6 text-white/40 uppercase font-bold text-xs tracking-widest">
                <History size={14} /> Match Form History
              </div>

              <div className="bg-[#0c0c10] border border-white/[0.06] rounded-2xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                       <tr className="border-b border-white/[0.06] bg-white/[0.01]">
                         <th className="px-6 py-4 text-xs font-black text-white/40 uppercase tracking-widest">Opponent Matchup</th>
                         <th className="px-6 py-4 text-center text-xs font-black text-white/40 uppercase tracking-widest">Runs</th>
                         <th className="px-6 py-4 text-center text-xs font-black text-white/40 uppercase tracking-widest">Wickets</th>
                         <th className="px-6 py-4 text-center text-xs font-black text-white/40 uppercase tracking-widest">Outcome</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-white/[0.04]">
                       {(player?.recentPerformances || player?.recent_performances || []).map((perf, index) => (
                         <tr key={index} className="hover:bg-white/[0.02] transition-colors group">
                           <td className="px-6 py-4 text-sm font-extrabold uppercase text-white/90 tracking-wide">{perf.match}</td>
                           <td className="px-6 py-4 text-center text-sm font-bold text-white font-mono">{perf.runs}</td>
                           <td className="px-6 py-4 text-center text-sm font-bold text-white font-mono">{perf.wickets}</td>
                           <td className="px-6 py-4 text-center">
                             <span className={`inline-block px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest border ${
                               perf.result === 'Won' 
                                 ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                 : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
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