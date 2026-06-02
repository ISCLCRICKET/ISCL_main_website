import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MarqueeScoreTicker from '@/components/MarqueeScoreTicker.jsx';
import FilterBar from '@/components/FilterBar.jsx';
import MatchCard from '@/components/MatchCard.jsx';
import { matches } from '@/lib/mockData.js';

const SchedulePage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All fixtures', value: 'all' },
    { label: 'Upcoming', value: 'upcoming' },
    { label: 'Results', value: 'completed' }
  ];

  const filteredMatches = activeFilter === 'all' 
    ? matches 
    : matches.filter(m => m.status === activeFilter);

  return (
    <>
      <Helmet>
        <title>Schedule - ISCL</title>
        <meta name="description" content="View the complete ISCL match schedule. Check upcoming fixtures, match timings, venues, and results." />
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
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '-0.02em', textBalance: 'balance' }}>
              Match schedule
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Never miss a match with our complete fixture list
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <FilterBar 
              filters={filters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </motion.div>

          {/* Matches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMatches.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MatchCard match={match} />
              </motion.div>
            ))}
          </div>

          {filteredMatches.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/60 text-lg">No matches found</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SchedulePage;