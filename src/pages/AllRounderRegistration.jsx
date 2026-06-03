import React, { useState } from 'react';
import { User, MapPin, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { INDIA_STATES_AND_UTS } from '../utils/indiaStates';

export default function AllRounderRegistration() {
  const [formData, setFormData] = useState({
    fullName: '', whatsapp: '', email: '', state: '', district: '', pincode: '',
    battingHand: '', bowlingHand: '', bowlingStyle: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-orange-600 selection:text-white">
      {/* Header Element */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#111622] to-[#0A0A0A] border-b border-slate-800 py-12 px-4 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0,transparent_60%)]"></div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-500 border border-orange-600/20 mb-3 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
          Season 3 Registration Live
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          All-Rounder <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Registration</span>
        </h1>
        <p className="mt-3 text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Step up to the crease. Prove your mettle in both departments and become the ultimate game-changer for ISCL Season 2.
        </p>
      </div>

      {/* Main Split Interface Area */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Form Fields Section */}
        <div className="lg:col-span-2 bg-[#111622] border border-slate-800 rounded-xl p-4 sm:p-8 shadow-xl space-y-8">
          
          {/* Section: Personal Data */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-4">
              <User size={16} className="text-orange-500" /> Personal Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Full Name (In Capitals)*</label>
                <input type="text" name="fullName" placeholder="E.G. VIRAT KOHLI" value={formData.fullName} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">WhatsApp Number*</label>
                <div className="flex">
                  <span className="bg-[#192235] border border-r-0 border-slate-800 rounded-l-lg px-3 py-3 text-sm text-slate-400 font-semibold">+91</span>
                  <input type="tel" name="whatsapp" placeholder="10 Digit Number" value={formData.whatsapp} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-r-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Email Address*</label>
                <input type="email" name="email" placeholder="player@iscl.com" value={formData.email} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
            </div>
          </div>

          {/* Section: Location Data */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-orange-500" /> Player Location
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">State / UT*</label>
                    <select 
                        name="state" 
                        value={formData.state} 
                        onChange={handleChange} 
                        className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-3 py-3 text-sm text-slate-400 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
                    >
                        <option value="" className="text-slate-600">Select State / UT</option>
                        {INDIA_STATES_AND_UTS.map((state) => (
                        <option key={state} value={state} className="text-white bg-[#111622]">
                            {state}
                        </option>
                        ))}
                    </select>
                </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">District*</label>
                <input type="text" name="district" placeholder="Enter District" value={formData.district} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Pincode*</label>
                <input type="text" name="pincode" placeholder="6 Digit PIN" value={formData.pincode} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
            </div>
          </div>

          {/* Section: Sport Specialty Metrics */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-4">
              <Award size={16} className="text-orange-500" /> Player Profile Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Role*</label>
                <select name="role" disabled className="w-full bg-[#192235] border border-slate-800 rounded-lg px-3 py-3 text-sm text-slate-400 focus:outline-none cursor-not-allowed">
                  <option>All-Rounder</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Batsman All Rounder Type*</label>
                <select name="battingHand" value={formData.battingHand} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-3 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors cursor-pointer">
                  <option value="">Select Batting Hand</option>
                  <option value="Right Hand">Right Hand Batsman</option>
                  <option value="Left Hand">Left Hand Batsman</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Bowler All Rounder Hand*</label>
                <select name="bowlingHand" value={formData.bowlingHand} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-3 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors cursor-pointer">
                  <option value="">Select Bowling Hand</option>
                  <option value="Right Arm">Right Arm Bowler</option>
                  <option value="Left Arm">Left Arm Bowler</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Bowler All Rounder Style*</label>
                <select name="bowlingStyle" value={formData.bowlingStyle} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-3 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors cursor-pointer">
                  <option value="">Select Bowling Style</option>
                  <option value="Fast">Pace / Fast Bowler</option>
                  <option value="Spin">Spin Bowler</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Sticky Checkout Pricing Block */}
        <div className="space-y-4">
          <div className="bg-[#111622] border border-slate-800 rounded-xl p-6 shadow-xl sticky top-24">
            <h3 className="text-base font-black uppercase tracking-wider text-white border-b border-slate-800 pb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Order Summary
            </h3>
            
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between text-slate-400">
                <span>Registration Fee</span>
                <span className="font-semibold text-white">₹ 1,500.00</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Season Pass</span>
                <span className="text-orange-500 font-bold text-xs bg-orange-500/10 px-2 py-0.5 rounded">Included</span>
              </div>
              <div className="flex justify-between text-slate-400 border-b border-slate-800/60 pb-3">
                <span>Processing Fee</span>
                <span className="font-semibold text-white">₹ 0.00</span>
              </div>
              <div className="flex justify-between text-base font-black pt-1">
                <span className="uppercase tracking-wider">Total Amount</span>
                <span className="text-xl text-orange-500">₹ 1,500.00</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-orange-600 hover:bg-orange-500 active:scale-[0.99] text-white font-extrabold py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 text-sm tracking-wider uppercase transition-all shadow-lg shadow-orange-600/20">
              Pay ₹ 1,500.00 <ArrowRight size={16} />
            </button>

            {/* Features list bullet layout */}
            <div className="mt-6 border-t border-slate-800/80 pt-4 space-y-2.5">
              <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Registration Includes:</span>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck size={14} className="text-blue-500 shrink-0" /> Official ISCL Match Kit
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck size={14} className="text-blue-500 shrink-0" /> Access to 3 Selection Trials
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck size={14} className="text-blue-500 shrink-0" /> Digital Player Profile & Stats
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}