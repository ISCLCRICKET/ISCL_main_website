import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, hasSupabase } from '../../lib/supabaseClient';
import { ShieldAlert, LogIn } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!hasSupabase) {
      // Offline/Mock Bypass mode
      setTimeout(() => {
        setLoading(false);
        navigate('/admin/dashboard');
      }, 500);
      return;
    }

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (authError) throw authError;
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060606] text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Graphic Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#2563EB]/10 to-[#E91E8C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-md bg-[#0d0d10] border border-white/[0.08] rounded-2xl p-8 shadow-2xl z-10">
        
        {/* Header Logo & Title */}
        <div className="text-center mb-8">
          <img 
            src="/images/logo.png" 
            alt="ISCL Logo" 
            className="h-16 mx-auto mb-4 object-contain filter drop-shadow-md"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <h1 className="text-3xl font-black uppercase tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Admin portal
          </h1>
          <p className="text-xs text-white/40 font-bold uppercase tracking-widest mt-1">League Console</p>
        </div>

        {/* Fallback Warning Notice */}
        {!hasSupabase && (
          <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs flex gap-3 items-start">
            <ShieldAlert size={18} className="shrink-0 mt-0.5" />
            <div>
              <p className="font-extrabold uppercase">Offline Demo Mode</p>
              <p className="mt-0.5 leading-relaxed text-white/60">Supabase is not configured yet. You can sign in using any email/password to inspect and test the dashboard panel.</p>
            </div>
          </div>
        )}

        {/* Error Alert Display */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Admin Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@iscl.in"
              required 
              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#2563EB] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required 
              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#2563EB] transition-colors"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-2 py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign in to Console'} <LogIn size={14} />
          </button>
        </form>

      </div>
    </div>
  );
};

export default AdminLogin;
