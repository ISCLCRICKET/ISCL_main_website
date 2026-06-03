import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, HelpCircle, Zap } from 'lucide-react';

export default function RegistrationModal({ isOpen, onClose }) {
  const [selectedPath, setSelectedPath] = useState(null); // Tracks: 'all-rounder' or 'specialist'
  const navigate = useNavigate();

  if (!isOpen) return null;

  // Handles clicking the 'Next Step' submit trigger action
  const handleNextStep = () => {
    if (selectedPath === 'all-rounder') {
      onClose(); // Shut the dialog portal box overlay
      navigate('/register-allrounder'); // Navigate straight to All Rounder view
    } else if (selectedPath === 'specialist') {
      onClose();
      navigate('/register-specialist'); // Navigate straight to Specialist view
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl my-auto overflow-hidden rounded-xl bg-[#111622] text-white border border-slate-800 shadow-2xl max-h-[92vh] sm:max-h-[90vh] flex flex-col">
        
        {/* Header Branding Area */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 sm:px-5 bg-gradient-to-r from-[#172554] via-[#1e1b4b] to-[#111622] border-b border-slate-800/80 gap-2 shrink-0 relative">
          <div className="flex items-center gap-3 pr-8 sm:pr-0">
            <img 
              src="/images/logo.png" 
              alt="ISCL Logo" 
              className="w-auto h-10 sm:h-[70px] object-contain transition-all duration-200" 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span className="text-sm sm:text-base font-extrabold tracking-wider text-slate-300 uppercase leading-snug">
              Indian Softball<br className="sm:hidden" /> Cricket League
            </span>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-3 right-4 sm:relative sm:top-0 sm:right-0 p-1.5 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Content Body */}
        <div className="px-4 py-6 sm:px-10 sm:py-8 text-center overflow-y-auto grow custom-scrollbar">
          <h2 className="text-lg sm:text-2xl font-black tracking-tight text-white uppercase">
            Join the League: <span className="text-slate-300">Choose Your Path</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-orange-600 mx-auto mt-2 rounded-full"></div>

          {/* Cards Selection View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
            
            {/* Option A: All-Rounder Card */}
            <div 
              onClick={() => setSelectedPath('all-rounder')}
              className={`group relative flex flex-col justify-between p-4 sm:p-5 text-left rounded-lg border cursor-pointer transition-all duration-200 ${
                selectedPath === 'all-rounder'
                  ? 'bg-gradient-to-b from-[#1e293b] to-[#172554] border-blue-500 shadow-lg shadow-blue-500/10 scale-[1.01]'
                  : 'bg-[#151c2c] border-slate-800/80 hover:border-slate-700 hover:bg-[#182032]'
              }`}
            >
              <div>
                <div className="text-blue-400 mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-8 sm:h-8">
                    <path d="M18 6l-9 9" />
                    <path d="M17 5L8 14l-2-1 1-2 9-9 1 3z" />
                    <circle cx="18" cy="18" r="2" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-lg font-black uppercase tracking-tight text-white leading-tight">
                  All-Rounder Registration
                </h3>
                <p className="mt-1.5 text-[11px] sm:text-xs leading-relaxed text-slate-400">
                  Showcase your skills in both batting and bowling. Perfect for versatile players looking to dominate every phase of the game.
                </p>
              </div>
              <div className="mt-4 sm:mt-5">
                <button 
                  type="button"
                  className={`w-full py-2 text-[11px] sm:text-xs font-bold tracking-wider text-center uppercase rounded transition-all duration-200 ${
                    selectedPath === 'all-rounder' ? 'bg-blue-500 text-white' : 'bg-blue-950/40 text-blue-300'
                  }`}
                >
                  {selectedPath === 'all-rounder' ? 'Selected' : 'Select Path'}
                </button>
              </div>
            </div>

            {/* Option B: Batter & Bowler Card */}
            <div 
              onClick={() => setSelectedPath('specialist')}
              className={`group relative flex flex-col justify-between p-4 sm:p-5 text-left rounded-lg border cursor-pointer transition-all duration-200 ${
                selectedPath === 'specialist'
                  ? 'bg-gradient-to-b from-[#1e293b] to-[#7c2d12]/30 border-orange-500 shadow-lg shadow-orange-500/10 scale-[1.01]'
                  : 'bg-[#151c2c] border-slate-800/80 hover:border-slate-700 hover:bg-[#182032]'
              }`}
            >
              <div>
                <div className="text-orange-500 mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-200">
                  <Zap size={28} strokeWidth={1.5} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-sm sm:text-lg font-black uppercase tracking-tight text-white leading-tight">
                  Batter & Bowler Registration
                </h3>
                <p className="mt-1.5 text-[11px] sm:text-xs leading-relaxed text-slate-400">
                  Specialize in your primary role. Ideal for dedicated power hitters or pace/spin experts who focus on peak performance.
                </p>
              </div>
              <div className="mt-4 sm:mt-5">
                <button 
                  type="button"
                  className={`w-full py-2 text-[11px] sm:text-xs font-bold tracking-wider text-center uppercase rounded transition-all duration-200 ${
                    selectedPath === 'specialist' ? 'bg-orange-600 text-white' : 'bg-orange-950/40 text-orange-400'
                  }`}
                >
                  {selectedPath === 'specialist' ? 'Selected' : 'Select Path'}
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Navigation Trigger Area */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 bg-[#0d111a] border-t border-slate-800/60 shrink-0">
          <button className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-slate-400 hover:text-slate-300 transition-colors">
            <HelpCircle size={12} />
            Need Help?
          </button>
          
          <button 
            disabled={!selectedPath}
            onClick={handleNextStep}
            className={`px-5 py-2 text-[11px] sm:text-xs font-bold tracking-wider uppercase rounded transition-all duration-200 ${
              selectedPath 
                ? 'bg-orange-600 hover:bg-orange-500 text-white cursor-pointer shadow-md' 
                : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
            }`}
          >
            Next Step
          </button>
        </div>

      </div>
    </div>
  );
}