import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { pointsTable } from "@/lib/mockData.js";

const PointsTableWidget = () => {
  const scrollRef = useRef(null);
  const previewTeams = pointsTable;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - 320 : scrollLeft + 320;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#060606] text-white py-16 border-t border-b border-white/[0.05] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/10 to-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            Points Table
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll("left")} 
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll("right")} 
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {previewTeams.map((team, idx) => {
            const isQualified = team.position <= 4;
            const nrrValue = parseFloat(team.nrr) || 0;
            
            // Safe guard fallback layout configuration if teams[idx] array index evaluates to undefined
            const teamInfo = team.team || { name: `Team Slot ${team.position}`, logo: '🏏' };

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.15)" }}
                className="min-w-[280px] sm:min-w-[300px] flex-shrink-0 bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-6 snap-start flex flex-col justify-between shadow-xl transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-5xl font-black font-mono leading-none tracking-tighter text-white/90">
                        {team.position}
                      </span>
                      {isQualified && (
                        <span className="w-5 h-5 mt-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[10px] font-black text-emerald-400 uppercase">
                          Q
                        </span>
                      )}
                    </div>

                    <div className="text-right max-w-[180px]">
                      <h3 className="text-base font-bold uppercase tracking-wide truncate text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#E91E8C] group-hover:to-[#FF6B1A] transition-all duration-300">
                        {teamInfo.name}
                      </h3>
                    </div>
                  </div>

                  <div className="h-24 flex items-center justify-center my-4 bg-white/[0.01] rounded-xl border border-white/[0.02] p-2 relative overflow-hidden">
                    {teamInfo.logo && typeof teamInfo.logo === 'string' && teamInfo.logo.startsWith('/') ? (
                      <img 
                        src={teamInfo.logo} 
                        alt="" 
                        className="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_10px_rgba(255,255,255,0.05)]"
                      />
                    ) : (
                      <span className="text-4xl filter drop-shadow-md">{teamInfo.logo || '🏏'}</span>
                    )}
                  </div>

                  <hr className="border-white/[0.06] my-4" />

                  <div className="grid grid-cols-4 text-center gap-2 mb-6">
                    <div>
                      <p className="text-xl font-black text-white">{team.points}</p>
                      <p className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mt-0.5">Points</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white/70 mt-1">{team.played}</p>
                      <p className="text-[10px] uppercase tracking-wider text-white/40 font-medium mt-0.5">Played</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white/70 mt-1">{team.won}</p>
                      <p className="text-[10px] uppercase tracking-wider text-white/40 font-medium mt-0.5">Won</p>
                    </div>
                    <div>
                      <p className={`text-xs font-bold mt-1.5 font-mono ${nrrValue >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                        {team.nrr}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-white/40 font-medium mt-0.5">NRR</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-2 border-t border-white/[0.03]">
                  <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-2.5">Recent form</p>
                  <div className="flex gap-1.5">
                    {(team.lastFive || []).map((result, i) => (
                      <span 
                        key={i} 
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border transition-transform duration-200 hover:scale-110 ${
                          result === "W" 
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" 
                            : "bg-rose-500/10 border-rose-500/30 text-rose-400"
                        }`}
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link 
            to="/points-table" 
            className="inline-block relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-900 border border-blue-500/30 px-12 py-3.5 rounded-md font-bold tracking-wider uppercase text-xs text-white shadow-xl hover:from-blue-600 hover:to-indigo-800 transition-all duration-300 transform hover:-translate-y-0.5 group skew-x-[-12deg]"
          >
            <div className="skew-x-[12deg] flex items-center gap-2 group-hover:scale-105 transition-transform">
              Full Points Table &rarr;
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PointsTableWidget;