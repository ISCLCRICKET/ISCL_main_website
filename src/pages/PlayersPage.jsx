import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MarqueeScoreTicker from '@/components/MarqueeScoreTicker.jsx';
import FilterBar from '@/components/FilterBar.jsx';
import PlayerCard from '@/components/PlayerCard.jsx';
import GlassmorphismCard from '@/components/GlassmorphismCard.jsx';
import { players, orangeCap, purpleCap } from '@/lib/mockData.js';

const PlayersPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Batsmen', value: 'Batsman' },
    { label: 'Bowlers', value: 'Bowler' },
    { label: 'All-Rounders', value: 'All-Rounder' }
  ];

  const filteredPlayers = activeFilter === 'all' 
    ? players 
    : players.filter(p => p.role === activeFilter);

  return (
    <>
      <Helmet>
        <title>Players - ISCL</title>
        <meta name="description" content="Discover the stars of ISCL. View player profiles, stats, and performances from India's biggest street cricket league." />
      </Helmet>

      <MarqueeScoreTicker />
      <Header />

      <main className="min-h-screen bg-[#0A0A0A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '-0.02em', textBalance: 'balance' }}>
              The stars of ISCL
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Meet the players who make street cricket legendary
            </p>
          </motion.div>

          {/* Orange Cap & Purple Cap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Orange Cap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <GlassmorphismCard glowColor="from-[#FF6B1A] to-[#AACC00]">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-[#FF6B1A]/20 border border-[#FF6B1A]/30">
                      <Award size={24} className="text-[#FF6B1A]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        Orange cap
                      </h2>
                      <p className="text-sm text-white/60">Most runs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                      <img 
                        src={orangeCap.player.photo} 
                        alt={orangeCap.player.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-bold text-white">{orangeCap.player.name}</p>
                      <p className="text-sm text-white/60">{orangeCap.player.team.name}</p>
                      <p className="text-3xl font-bold text-[#FF6B1A] mt-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        {orangeCap.runs} runs
                      </p>
                    </div>
                  </div>
                </div>
              </GlassmorphismCard>
            </motion.div>

            {/* Purple Cap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GlassmorphismCard glowColor="from-[#8B5CF6] to-[#E91E8C]">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/30">
                      <Award size={24} className="text-[#8B5CF6]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        Purple cap
                      </h2>
                      <p className="text-sm text-white/60">Most wickets</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                      <img 
                        src={purpleCap.player.photo} 
                        alt={purpleCap.player.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-bold text-white">{purpleCap.player.name}</p>
                      <p className="text-sm text-white/60">{purpleCap.player.team.name}</p>
                      <p className="text-3xl font-bold text-[#8B5CF6] mt-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        {purpleCap.wickets} wickets
                      </p>
                    </div>
                  </div>
                </div>
              </GlassmorphismCard>
            </motion.div>
          </div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <FilterBar 
              filters={filters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </motion.div>

          {/* Players Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlayers.map((player, index) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PlayerCard player={player} />
              </motion.div>
            ))}
          </div>

          {filteredPlayers.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/60 text-lg">No players found</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PlayersPage;