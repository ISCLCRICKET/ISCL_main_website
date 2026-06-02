import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MarqueeScoreTicker from '@/components/MarqueeScoreTicker.jsx';
import TeamCard from '@/components/TeamCard.jsx';
import TeamDetailModal from '@/components/TeamDetailModal.jsx';
import { teams } from '@/lib/mockData.js';

const TeamsPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <>
      <Helmet>
        <title>Teams - ISCL</title>
        <meta name="description" content="Meet all the teams competing in India's biggest street cricket league. View squad details, team stats, and player rosters." />
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
              Meet the squads
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Eight teams battling for glory in India's most exciting street cricket tournament
            </p>
          </motion.div>

          {/* Teams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teams.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedTeam(team)}
                className="cursor-pointer"
              >
                <TeamCard team={team} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Team Detail Modal */}
      <TeamDetailModal 
        team={selectedTeam} 
        isOpen={!!selectedTeam} 
        onClose={() => setSelectedTeam(null)} 
      />
    </>
  );
};

export default TeamsPage;