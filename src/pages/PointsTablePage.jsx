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
        <div className="flex items-center justify-center gap-2 font-mono font-bold text-sm">
          <span>{row.position}</span>
          {/* Replicated the Q badge for the top 4 teams */}
          {row.position <= 4 && (
            <span className="w-3.5 h-3.5 rounded-sm bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[8px] font-black text-emerald-400">
              Q
            </span>
          )}
        </div>
      )
    },
    {
      key: 'team',
      label: 'Team',
      sortable: false,
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/5 p-1 flex items-center justify-center">
            {row.team.logo && row.team.logo.startsWith('/') ? (
              <img src={row.team.logo} alt="" className="max-w-full max-h-full object-contain" onError={(e) => e.target.style.display='none'} />
            ) : (
              <span className="text-xl">{row.team.logo || '🏏'}</span>
            )}
          </div>
          <span className="font-bold text-white/90">{row.team.name}</span>
        </div>
      )
    },
    { key: 'played', label: 'P', sortable: true },
    { key: 'won', label: 'W', sortable: true },
    { key: 'lost', label: 'L', sortable: true },
    { key: 'nr', label: 'NR', sortable: true },
    { 
      key: 'nrr', 
      label: 'NRR', 
      sortable: true,
      render: (row) => (
        <span className={`font-bold font-mono ${parseFloat(row.nrr) >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
          {row.nrr}
        </span>
      )
    },
    {
      key: 'forRuns',
      label: 'For',
      sortable: true,
      render: (row) => <span className="text-xs font-mono text-white/50">{row.forRuns || '0/0'}</span>
    },
    {
      key: 'againstRuns',
      label: 'Against',
      sortable: true,
      render: (row) => <span className="text-xs font-mono text-white/50">{row.againstRuns || '0/0'}</span>
    },
    { 
      key: 'points', 
      label: 'Pts', 
      sortable: true,
      render: (row) => <span className="font-black text-base text-white">{row.points}</span>
    },
    {
      key: 'lastFive',
      label: 'Recent Form',
      sortable: false,
      render: (row) => (
        <div className="flex gap-1.5 justify-center">
          {(row.lastFive || []).map((result, i) => (
            <div
              key={i}
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border ${
                result === 'W' 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                  : result === 'L'
                  ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
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

      {/* Fixed top padding (pt-32) to prevent absolute header layout overlap */}
      <main className="min-h-screen bg-[#060606] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/4 right-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Layout Section */}
          <div className="border-b border-white/[0.08] pb-6 mb-8">
            <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Points table
            </h1>
            <p className="text-sm text-white/40 font-medium tracking-wide mt-1 uppercase">Season 2026 Standings</p>
          </div>

          {/* Tab Menu Options */}
          <div className="flex gap-3 mb-8">
            <button className="px-6 py-2 rounded-md font-bold text-xs bg-gradient-to-r from-[#E91E8C] to-[#FF6B1A] uppercase tracking-wide text-white shadow-md">
              Points Table
            </button>
            <button className="px-6 py-2 rounded-md font-bold text-xs bg-white/5 border border-white/10 text-white/50 hover:text-white uppercase tracking-wide transition-all">
              Playoffs
            </button>
          </div>

          {/* Massive 1-32 Leaderboard Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl shadow-2xl overflow-hidden p-1"
          >
            <div className="w-full overflow-x-auto">
              <SortableTable data={pointsTable} columns={columns} />
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PointsTablePage;