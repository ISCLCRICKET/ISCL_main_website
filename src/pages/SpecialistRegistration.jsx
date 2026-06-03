import React, { useState } from 'react';
import { User, MapPin, Award, ArrowRight } from 'lucide-react';
import { INDIA_STATES_AND_UTS } from '../utils/indiaStates';

export default function SpecialistRegistration() {
  const [formData, setFormData] = useState({
    fullName: '', whatsapp: '', email: '', state: '', district: '', pincode: '',
    role: '', hand: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans py-12 px-4 selection:bg-orange-600 selection:text-white">
      <div className="relative overflow-hidden bg-gradient-to-b from-[#111622] to-[#0A0A0A] border-b border-slate-800 py-12 px-4 text-center mb-8 -mx-4 sm:-mx-8 first:-mt-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0,transparent_60%)]"></div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-500 border border-orange-600/20 mb-3 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                Season 3 Registration Live
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Batter & Bowler <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Registration</span>
            </h1>
            <p className="mt-3 text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                Step up to the crease. Prove your mettle with the bat or ball and lock in your official trial entry for ISCL Season 3.
            </p>
        </div>

      {/* Central Structured Container Card */}
      <div className="max-w-2xl mx-auto bg-[#111622] border border-slate-800 rounded-xl p-5 sm:p-8 shadow-2xl space-y-6">
        
        {/* Section Details Group */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-orange-500 border-l-2 border-orange-500 pl-2 mb-4 flex items-center gap-2">
            <User size={14} /> Personal Details
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Full Name in Capitals *</label>
              <input type="text" name="fullName" placeholder="JOHN DOE" value={formData.fullName} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-orange-500 transition-colors" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp Number *</label>
                <div className="flex">
                  <span className="bg-[#192235] border border-r-0 border-slate-800 rounded-l-lg px-3 py-2.5 text-sm text-slate-400 font-semibold">+91</span>
                  <input type="tel" name="whatsapp" placeholder="9876543210" value={formData.whatsapp} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-r-lg px-4 py-2.5 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-orange-500 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email *</label>
                <input type="email" name="email" placeholder="cricketer@example.com" value={formData.email} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Location Block */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-orange-500 border-l-2 border-orange-500 pl-2 mb-4 flex items-center gap-2">
            <MapPin size={14} /> Player Location
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">State / UT *</label>
                    <select 
                        name="state" 
                        value={formData.state} 
                        onChange={handleChange} 
                        className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-400 focus:outline-none focus:border-orange-500 cursor-pointer"
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
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">District *</label>
              <input type="text" name="district" placeholder="Enter District" value={formData.district} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pincode *</label>
              <input type="text" name="pincode" placeholder="400001" value={formData.pincode} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-orange-500" />
            </div>
          </div>
        </div>

        {/* Player Specialty Selection Fields */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-orange-500 border-l-2 border-orange-500 pl-2 mb-4 flex items-center gap-2">
            <Award size={14} /> Player Role
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Role *</label>
              <select name="role" value={formData.role} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 cursor-pointer">
                <option value="">Select Role</option>
                <option value="Pure Batsman">Pure Batsman</option>
                <option value="Pure Bowler">Pure Bowler</option>
                <option value="Wicket-Keeper Batsman">Wicket-Keeper Batsman</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Handed *</label>
              <select name="hand" value={formData.hand} onChange={handleChange} className="w-full bg-[#151c2c] border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 cursor-pointer">
                <option value="">Select Hand</option>
                <option value="Right Handed">Right Handed</option>
                <option value="Left Handed">Left Handed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Pricing Layout Footing panel row */}
        <div className="mt-8 bg-[#0D111A] border border-slate-800/80 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="p-2.5 bg-blue-600/10 text-blue-500 border border-blue-600/20 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Registration Fee</span>
              <span className="text-xl font-black text-white">₹ 1,200.00</span>
            </div>
          </div>
          <button className="w-full sm:w-auto bg-gradient-to-r from-orange-400 to-amber-500 hover:brightness-110 active:scale-[0.98] text-slate-950 font-black px-6 py-3 rounded-lg flex items-center justify-center gap-2 text-xs tracking-wider uppercase transition-all shadow-lg shadow-orange-500/10">
            Pay ₹ 1,200.00 <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>

        <p className="text-center text-[10px] text-slate-500 pt-2">
          By proceeding, you agree to ISCL's Rules, Privacy Policy and Terms of Participation.
        </p>

      </div>
    </div>
  );
}