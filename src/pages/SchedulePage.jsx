import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, MapPin, Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MarqueeScoreTicker from '@/components/MarqueeScoreTicker.jsx';
import { matches } from '@/lib/mockData.js';

const SchedulePage = () => {
  // Navigation filters matching the exact options visible in Screenshot 2026-06-04 at 12.31.47 PM.jpg
  const [activeTab, setActiveTab] = useState('Results'); 
  const [selectedSeason, setSelectedSeason] = useState('Season 1 2025');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuTabs = ['Live', 'Results', 'Standings'];
  const seasons = ['Season 1 2025', 'Season 2 2026'];

  // Season filtering logic
  const getFilteredMatches = () => {
    if (selectedSeason === 'Season 2 2026') {
      return []; // Season 2 has no matches started yet
    }
    
    // Season 1 mappings based on navigation filter selection
    if (activeTab === 'Live') {
      return matches.filter(m => m.status === 'live');
    }
    if (activeTab === 'Results') {
      return matches.filter(m => m.status === 'completed');
    }
    return matches; // Fallback / Standings option handler
  };

  const filteredMatches = getFilteredMatches();

  return (
    <>
      <Helmet>
        <title>Matches - ISCL</title>
        <meta name="description" content="View live scores, match results, and standings across tournament seasons." />
      </Helmet>

      <MarqueeScoreTicker />
      <Header />

      <main className="min-h-screen bg-[#07070A] text-white pt-36 pb-24 relative overflow-hidden">
        {/* Subtle background graphic glow grids */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.03)_0%,_transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Top Sub-Navigation Button Selector Bar */}
          <div className="flex justify-center mb-10">
            <div className="bg-[#12121A] border border-white/[0.06] rounded-xl p-1.5 flex gap-1 shadow-xl">
              {menuTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-7 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-200 ${
                      isActive
                        ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-600/20'
                        : 'text-white/40 hover:text-white/80 hover:bg-white/[0.02]'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Season Dropdown Bar Section */}
          <div className="flex justify-end mb-8 relative z-30">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-[#12121A] border border-white/[0.08] hover:border-white/20 px-5 py-2.5 rounded-full flex items-center gap-3 text-xs font-bold tracking-wider text-white/90 transition-all shadow-md"
            >
              <Calendar size={14} className="text-blue-500" />
              <span>{selectedSeason}</span>
              <ChevronDown size={14} className={`text-white/40 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-[#12121A] border border-white/[0.08] rounded-xl shadow-2xl overflow-hidden py-1"
                >
                  {seasons.map((season) => (
                    <button
                      key={season}
                      onClick={() => {
                        setSelectedSeason(season);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-xs font-bold transition-colors ${
                        selectedSeason === season 
                          ? 'bg-blue-600 text-white' 
                          : 'text-white/60 hover:bg-white/[0.04] hover:text-white'
                      }`}
                    >
                      {season}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Matches List Content Stream */}
          <div className="space-y-6">
            {activeTab === 'Standings' ? (
              /* Standings Redirect Info Callout Card Layout */
              <div className="text-center py-20 bg-[#12121A] border border-white/[0.04] rounded-2xl max-w-xl mx-auto p-8">
                <Award size={36} className="text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Group Division Leaderboards</h3>
                <p className="text-sm text-white/50 mb-6">Detailed tie-breakers, Net Run Rates, and continuous points parameters are hosted on our live ranking board.</p>
                <a href="/points-table" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xl transition-all">
                  Open Points Table
                </a>
              </div>
            ) : filteredMatches.length === 0 ? (
              /* Clean Empty State view block matching Season 2 status */
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24 bg-[#12121A] border border-white/[0.04] rounded-2xl max-w-4xl mx-auto"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20 animate-pulse" />
                </div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                  No match data found under {activeTab} for {selectedSeason}
                </p>
                <p className="text-[11px] text-white/20 mt-1">League fixtures update dynamically as match points compile.</p>
              </motion.div>
            ) : (
              /* High-End Horizontal Row Card Design mapping Screenshot 2026-06-04 at 12.31.47 PM.jpg structure */
              filteredMatches.map((match, index) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="bg-[#111118] border border-white/[0.05] hover:border-white/[0.12] rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-[1.2fr_3fr_1.5fr] items-center transition-all duration-300 shadow-xl group"
                >
                  {/* Left Side Column Block: Stage and Timings Info */}
                  <div className="p-6 md:border-r border-white/[0.06] h-full flex flex-col justify-center bg-black/20">
                    <span className="text-xs font-black tracking-wider text-rose-500 uppercase mb-1">
                      {match.stage || 'LEAGUE MATCH'}
                    </span>
                    <span className="text-xs text-white/40 font-mono mb-3">{match.date}</span>
                    <div className="space-y-1.5 text-[11px] text-white/50 font-medium">
                      <p className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-white/30 flex-shrink-0" />
                        <span className="truncate">{match.venue}</span>
                      </p>
                    </div>
                  </div>

                  {/* Center Column Block: Team Labels, Match Center Stats and Toss Summaries */}
                  <div className="p-6 md:px-10 flex flex-col items-center justify-center text-center">
                    <div className="text-xs font-bold uppercase text-white/80 tracking-wide flex items-center gap-2 mb-3">
                      <span>{match.team1.name}</span>
                      <span className="text-white/30 font-normal lowercase text-[11px]">vs</span>
                      <span>{match.team2.name}</span>
                    </div>

                    {/* Blue Tinted Official Toss Banner */}
                    <div className="w-full max-w-xl bg-blue-600/5 border border-blue-500/10 px-4 py-1.5 rounded text-[10px] font-bold text-blue-400 tracking-wide uppercase mb-5">
                      {match.summary.split('.')[1]?.trim() || match.summary}
                    </div>

                    {/* Massive Numeric Runs Layout */}
                    <div className="flex items-center justify-center gap-12 md:gap-16 w-full">
                      <div className="flex flex-col items-center">
                        <span className="text-2xl md:text-3xl font-black font-mono tracking-tight text-white/90">
                          {match.score?.team1.split(' ')[0] || '0/0'}
                        </span>
                        <span className="text-[10px] font-bold font-mono text-white/30 uppercase mt-0.5">
                          {match.score?.team1.split(' ')[1] || '(0 Ov)'}
                        </span>
                      </div>

                      <span className="text-sm font-black text-white/10 font-serif">VS</span>

                      <div className="flex flex-col items-center">
                        <span className="text-2xl md:text-3xl font-black font-mono tracking-tight text-white/90">
                          {match.score?.team2.split(' ')[0] || '0/0'}
                        </span>
                        <span className="text-[10px] font-bold font-mono text-white/30 uppercase mt-0.5">
                          {match.score?.team2.split(' ')[1] || '(0 Ov)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Column Block: Winner Declaration Action Handler */}
                  <div className="p-6 md:px-8 h-full bg-black/10 flex flex-col justify-center items-center text-center md:border-l border-white/[0.04]">
                    <p className="text-[11px] font-black text-emerald-400 tracking-wide uppercase mb-4 max-w-[180px] leading-snug">
                      {match.summary.split('.')[0]}
                    </p>
                    <button className="w-full max-w-[160px] bg-[#1A1A26] hover:bg-[#2563EB] border border-white/[0.08] hover:border-transparent text-white font-bold text-[10px] uppercase tracking-widest py-2.5 rounded-lg transition-all duration-200 shadow-md">
                      View Match Center
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default SchedulePage;