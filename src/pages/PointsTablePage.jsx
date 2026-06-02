import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MarqueeScoreTicker from '@/components/MarqueeScoreTicker.jsx';
import SortableTable from '@/components/SortableTable.jsx';
import { pointsTable } from '@/lib/mockData.js';

const PointsTablePage = () => {
  const columns = [
    {
      key: 'position',
      label: 'Pos',
      sortable: true,
      render: (row) => (
        <div className="flex items-center gap-2">
          {row.position <= 4 && (
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#AACC00] to-[#AACC00]/50"></div>
          )}
          <span className="font-bold">{row.position}</span>
        </div>
      )
    },
    {
      key: 'team',
      label: 'Team',
      sortable: false,
      render: (row) => (
        <div className="flex items-center gap-3">
          <span className="text-2xl">{row.team.logo}</span>
          <span className="font-semibold">{row.team.name}</span>
        </div>
      )
    },
    { key: 'played', label: 'P', sortable: true },
    { key: 'won', label: 'W', sortable: true },
    { key: 'lost', label: 'L', sortable: true },
    { key: 'nr', label: 'NR', sortable: true },
    { 
      key: 'points', 
      label: 'Pts', 
      sortable: true,
      render: (row) => <span className="font-bold">{row.points}</span>
    },
    { key: 'nrr', label: 'NRR', sortable: true },
    {
      key: 'lastFive',
      label: 'Last 5',
      sortable: false,
      render: (row) => (
        <div className="flex gap-1">
          {row.lastFive.map((result, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                result === 'W' 
                  ? 'bg-[#AACC00]/20 text-[#AACC00] border border-[#AACC00]/30' 
                  : result === 'L'
                  ? 'bg-[#E91E8C]/20 text-[#E91E8C] border border-[#E91E8C]/30'
                  : 'bg-white/10 text-white/60 border border-white/20'
              }`}
            >
              {result}
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>Points table - ISCL</title>
        <meta name="description" content="View the complete ISCL points table with team standings, wins, losses, and net run rate." />
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
              Points table
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Track team standings and playoff qualification
            </p>
          </motion.div>

          {/* Playoff Zone Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#AACC00] to-[#AACC00]/50"></div>
            <span className="text-sm text-white/60">Playoff zone (Top 4)</span>
          </motion.div>

          {/* Points Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#141414]/80 backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden"
          >
            <SortableTable data={pointsTable} columns={columns} />
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PointsTablePage;