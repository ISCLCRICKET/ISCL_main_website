import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, hasSupabase, supabase } from '../../lib/supabaseClient';
import { 
  Trophy, Tv, Newspaper, Users, RefreshCw, LogOut, 
  CheckCircle2, PlusCircle, Save, AlertTriangle, Search, User
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('matches');
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  // Data State
  const [matches, setMatches] = useState([]);
  const [standings, setStandings] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState('');
  const [playerSearch, setPlayerSearch] = useState('');
  const [playerSortCategory, setPlayerSortCategory] = useState('runs');
  const [playerForm, setPlayerForm] = useState({
    name: '',
    team_id: '',
    role: 'Batter',
    jersey: '',
    photo: '',
    runs: 0,
    wickets: 0,
    strike_rate: 140.0,
    economy: 6.0,
    fifties: 0,
    hundreds: 0,
    fours: 0,
    sixes: 0,
    boundaries: 0,
    matches: 5
  });
  const navigate = useNavigate();

  // Selected entities for editing
  const [selectedMatchId, setSelectedMatchId] = useState('');
  const [matchForm, setMatchForm] = useState({
    stage: 'LEAGUE MATCH',
    date: new Date().toISOString().split('T')[0],
    venue: 'Kini Cricket Ground',
    team1_id: '',
    team2_id: '',
    score_team1: '',
    score_team2: '',
    summary: '',
    status: 'upcoming',
    winner_team_id: ''
  });

  const [selectedTeamId, setSelectedTeamId] = useState('');
  const [standingsForm, setStandingsForm] = useState({
    played: 0,
    won: 0,
    lost: 0,
    nr: 0,
    points: 0,
    nrr: 0.0
  });

  const [newsForm, setNewsForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    tag: 'Match Report',
    imageType: 'url',
    imageFile: null,
    imageUrl: ''
  });

  const [regSearch, setRegSearch] = useState('');

  // Load all dashboard records
  const loadData = async () => {
    setLoading(true);
    try {
      const fetchedMatches = await db.getMatches();
      const fetchedStandings = await db.getStandings();
      const fetchedRegistrations = await db.getRegistrations();
      const fetchedTeams = await db.getTeams();
      const fetchedPlayers = await db.getPlayers();
      
      setMatches(fetchedMatches);
      setStandings(fetchedStandings);
      setRegistrations(fetchedRegistrations);
      setTeams(fetchedTeams);
      setPlayers(fetchedPlayers);
    } catch (err) {
      console.error("Failed to load dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle Match Selection
  useEffect(() => {
    if (selectedMatchId && selectedMatchId !== 'new') {
      const match = matches.find(m => String(m.id) === String(selectedMatchId));
      if (match) {
        setMatchForm({
          stage: match.stage || 'LEAGUE MATCH',
          date: match.date || '',
          venue: match.venue || 'Kini Cricket Ground',
          team1_id: match.team1_id || '',
          team2_id: match.team2_id || '',
          score_team1: match.score_team1 || '',
          score_team2: match.score_team2 || '',
          summary: match.summary || '',
          status: match.status || 'upcoming',
          winner_team_id: match.winner_team_id || ''
        });
      }
    } else if (selectedMatchId === 'new') {
      setMatchForm({
        stage: 'LEAGUE MATCH',
        date: new Date().toISOString().split('T')[0],
        venue: 'Kini Cricket Ground',
        team1_id: '',
        team2_id: '',
        score_team1: '',
        score_team2: '',
        summary: '',
        status: 'upcoming',
        winner_team_id: ''
      });
    }
  }, [selectedMatchId, matches]);

  // Handle Team Selection for manual overrides
  useEffect(() => {
    if (selectedTeamId) {
      const standing = standings.find(s => String(s.team_id || s.team?.id) === String(selectedTeamId));
      if (standing) {
        setStandingsForm({
          played: standing.played || 0,
          won: standing.won || 0,
          lost: standing.lost || 0,
          nr: standing.nr || 0,
          points: standing.points || 0,
          nrr: standing.nrr || 0.0
        });
      }
    }
  }, [selectedTeamId, standings]);

  // Handle Player Selection
  useEffect(() => {
    if (selectedPlayerId && selectedPlayerId !== 'new') {
      const player = players.find(p => String(p.id) === String(selectedPlayerId));
      if (player) {
        setPlayerForm({
          name: player.name || '',
          team_id: player.team_id || '',
          role: player.role || 'Batter',
          jersey: player.jersey || '',
          photo: player.photo || '',
          runs: player.runs ?? player.stats?.runs ?? 0,
          wickets: player.wickets ?? player.stats?.wickets ?? 0,
          strike_rate: player.strike_rate ?? player.stats?.strikeRate ?? 140.0,
          economy: player.economy ?? player.stats?.economy ?? 6.0,
          fifties: player.fifties ?? player.stats?.fifties ?? 0,
          hundreds: player.hundreds ?? player.stats?.hundreds ?? 0,
          fours: player.fours ?? 0,
          sixes: player.sixes ?? 0,
          boundaries: player.boundaries ?? 0,
          matches: player.matches ?? player.stats?.matches ?? 5
        });
      }
    } else if (selectedPlayerId === 'new') {
      setPlayerForm({
        name: '',
        team_id: '',
        role: 'Batter',
        jersey: '',
        photo: '',
        runs: 0,
        wickets: 0,
        strike_rate: 140.0,
        economy: 6.0,
        fifties: 0,
        hundreds: 0,
        fours: 0,
        sixes: 0,
        boundaries: 0,
        matches: 5
      });
    }
  }, [selectedPlayerId, players]);

  const handleLogout = async () => {
    if (hasSupabase) {
      await supabase.auth.signOut();
    }
    navigate('/admin/login');
  };

  // Submit Match Update or Creation
  const handleMatchSubmit = async (e) => {
    e.preventDefault();
    if (!selectedMatchId) return;
    
    setActionLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      if (selectedMatchId === 'new') {
        if (!matchForm.team1_id || !matchForm.team2_id) {
          throw new Error("Please select both Team 1 and Team 2!");
        }
        if (matchForm.team1_id === matchForm.team2_id) {
          throw new Error("Team 1 and Team 2 must be different!");
        }

        const payload = {
          stage: matchForm.stage,
          date: matchForm.date,
          venue: matchForm.venue,
          team1_id: parseInt(matchForm.team1_id),
          team2_id: parseInt(matchForm.team2_id),
          score_team1: matchForm.score_team1 || null,
          score_team2: matchForm.score_team2 || null,
          summary: matchForm.summary || null,
          status: matchForm.status,
          winner_team_id: matchForm.winner_team_id ? parseInt(matchForm.winner_team_id) : null
        };

        const newMatch = await db.createMatch(payload);
        setSuccessMsg('New match created successfully!');
        setSelectedMatchId(newMatch.id);
      } else {
        const updates = {
          stage: matchForm.stage,
          date: matchForm.date,
          venue: matchForm.venue,
          score_team1: matchForm.score_team1 || null,
          score_team2: matchForm.score_team2 || null,
          summary: matchForm.summary || null,
          status: matchForm.status,
          winner_team_id: matchForm.winner_team_id ? parseInt(matchForm.winner_team_id) : null
        };
        
        await db.updateMatch(selectedMatchId, updates);
        setSuccessMsg('Match details updated successfully!');
      }
      await loadData();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to submit match details.');
    } finally {
      setActionLoading(false);
    }
  };

  // Reset Standings Trigger
  const handleResetStandings = async () => {
    if (!window.confirm("ARE YOU SURE? This will wipe ALL team standings back to 0 played, 0 won, 0 points! This cannot be undone.")) return;
    
    setActionLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      await db.resetStandings();
      setSuccessMsg('Points table reset for the new season!');
      setSelectedTeamId('');
      await loadData();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to reset standings.');
    } finally {
      setActionLoading(false);
    }
  };

  // Manual Standings Override
  const handleStandingsSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTeamId) return;

    setActionLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      await db.updateStandings(parseInt(selectedTeamId), standingsForm);
      setSuccessMsg('Team standings overrides saved!');
      await loadData();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to update standings.');
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Player modification Submit
  const handlePlayerSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPlayerId) return;

    setActionLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const updates = {
        name: playerForm.name,
        team_id: playerForm.team_id ? parseInt(playerForm.team_id) : null,
        role: playerForm.role,
        jersey: playerForm.jersey ? parseInt(playerForm.jersey) : null,
        photo: playerForm.photo || null,
        runs: parseInt(playerForm.runs || 0),
        wickets: parseInt(playerForm.wickets || 0),
        strike_rate: parseFloat(playerForm.strike_rate || 0.0),
        economy: parseFloat(playerForm.economy || 0.0),
        fifties: parseInt(playerForm.fifties || 0),
        hundreds: parseInt(playerForm.hundreds || 0),
        fours: parseInt(playerForm.fours || 0),
        sixes: parseInt(playerForm.sixes || 0),
        boundaries: parseInt(playerForm.boundaries || 0),
        matches: parseInt(playerForm.matches || 5)
      };

      if (selectedPlayerId === 'new') {
        const newPlayer = await db.createPlayer(updates);
        setSuccessMsg('New player profile created and added successfully!');
        setSelectedPlayerId(newPlayer.id);
      } else {
        await db.updatePlayer(parseInt(selectedPlayerId), updates);
        setSuccessMsg('Player details updated successfully!');
      }
      await loadData();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to submit player details.');
    } finally {
      setActionLoading(false);
    }
  };

  // Helper sorting function for player list in admin dashboard
  const getSortedPlayers = () => {
    let list = [...players];
    if (playerSortCategory === 'runs') {
      list.sort((a, b) => (b.runs || 0) - (a.runs || 0));
    } else if (playerSortCategory === 'wickets') {
      list.sort((a, b) => (b.wickets || 0) - (a.wickets || 0));
    } else if (playerSortCategory === 'fifties') {
      list.sort((a, b) => (b.fifties || 0) - (a.fifties || 0));
    } else if (playerSortCategory === 'economy') {
      list.sort((a, b) => (a.economy ?? 99) - (b.economy ?? 99));
    } else if (playerSortCategory === 'fours') {
      list.sort((a, b) => (b.fours || 0) - (a.fours || 0));
    } else if (playerSortCategory === 'sixes') {
      list.sort((a, b) => (b.sixes || 0) - (a.sixes || 0));
    } else if (playerSortCategory === 'boundaries') {
      list.sort((a, b) => {
        const boundA = a.boundaries || ((a.fours || 0) + (a.sixes || 0));
        const boundB = b.boundaries || ((b.fours || 0) + (b.sixes || 0));
        return boundB - boundA;
      });
    } else {
      list.sort((a, b) => a.id - b.id);
    }
    return list;
  };

  // Publish News Article
  const handleNewsSubmit = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      let finalImageUrl = newsForm.imageUrl || 'https://images.unsplash.com/photo-1540747737956-378724044452';

      // If they uploaded an image file and Supabase is active, upload it to bucket
      if (newsForm.imageType === 'upload' && newsForm.imageFile && hasSupabase) {
        const file = newsForm.imageFile;
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `news/${fileName}`;

        // Upload file to bucket
        const { error: uploadError } = await supabase.storage
          .from('iscl-assets')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('iscl-assets')
          .getPublicUrl(filePath);

        finalImageUrl = publicUrl;
      }

      const articlePayload = {
        title: newsForm.title,
        excerpt: newsForm.excerpt,
        content: newsForm.content,
        tag: newsForm.tag,
        image: finalImageUrl
      };

      await db.saveNews(articlePayload);
      setSuccessMsg('News article published successfully!');
      
      // Reset Form
      setNewsForm({
        title: '',
        excerpt: '',
        content: '',
        tag: 'Match Report',
        imageType: 'url',
        imageFile: null,
        imageUrl: ''
      });
      await loadData();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to publish news article.');
    } finally {
      setActionLoading(false);
    }
  };

  // Filter registrations based on search
  const filteredRegs = registrations.filter(r => 
    r.full_name?.toLowerCase().includes(regSearch.toLowerCase()) ||
    r.email?.toLowerCase().includes(regSearch.toLowerCase()) ||
    r.whatsapp?.includes(regSearch) ||
    r.district?.toLowerCase().includes(regSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#07070A] text-white flex flex-col md:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-[#0d0d12] border-b md:border-b-0 md:border-r border-white/[0.08] flex flex-col justify-between shrink-0">
        <div>
          {/* Logo Header */}
          <div className="p-6 border-b border-white/[0.08] flex items-center gap-3">
            <img src="/images/logo.png" alt="ISCL" className="h-10 w-auto" onError={(e) => { e.target.style.display='none'; }} />
            <div>
              <h1 className="font-extrabold uppercase text-sm tracking-tight leading-none">ISCL Admin</h1>
              <span className="text-[10px] text-white/40 uppercase font-black tracking-widest mt-1 block">Control Center</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            <button 
              onClick={() => { setActiveTab('matches'); setSuccessMsg(''); setErrorMsg(''); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${activeTab === 'matches' ? 'bg-[#2563EB] text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
            >
              <Tv size={16} /> Live Match Console
            </button>
            
            <button 
              onClick={() => { setActiveTab('standings'); setSuccessMsg(''); setErrorMsg(''); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${activeTab === 'standings' ? 'bg-[#2563EB] text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
            >
              <Trophy size={16} /> Standings & Reset
            </button>

            <button 
              onClick={() => { setActiveTab('news'); setSuccessMsg(''); setErrorMsg(''); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${activeTab === 'news' ? 'bg-[#2563EB] text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
            >
              <Newspaper size={16} /> News Publisher
            </button>

            <button 
              onClick={() => { setActiveTab('players'); setSuccessMsg(''); setErrorMsg(''); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${activeTab === 'players' ? 'bg-[#2563EB] text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
            >
              <User size={16} /> Players Console
            </button>

            <button 
              onClick={() => { setActiveTab('registrations'); setSuccessMsg(''); setErrorMsg(''); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${activeTab === 'registrations' ? 'bg-[#2563EB] text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
            >
              <Users size={16} /> Registrations
            </button>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Mode</span>
            <span className={`text-xs font-bold ${hasSupabase ? 'text-emerald-400' : 'text-amber-500'}`}>
              {hasSupabase ? '● Supabase Live' : '● Demo Offline'}
            </span>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-rose-600/20 hover:border-rose-500/30 text-white/60 hover:text-rose-400 transition-colors"
            title="Log out"
          >
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        
        {/* Banner Messages */}
        {successMsg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase flex items-center gap-2.5">
            <CheckCircle2 size={16} /> {successMsg}
          </div>
        )}
        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold flex items-center gap-2.5">
            <AlertTriangle size={16} /> {errorMsg}
          </div>
        )}

        {/* Tab content matcher */}
        {loading ? (
          <div className="py-20 text-center text-white/40 text-xs font-bold uppercase tracking-widest flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            Loading Console Records...
          </div>
        ) : (
          <>
            {/* Matches Panel */}
            {activeTab === 'matches' && (
              <div className="space-y-8">
                <div className="border-b border-white/[0.08] pb-4">
                  <h2 className="text-2xl font-black uppercase tracking-tight">Live Match console</h2>
                  <p className="text-xs text-white/40 mt-1">Adjust runs, overs, wickets, and complete match events.</p>
                </div>

                <form onSubmit={handleMatchSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Selector list */}
                  <div className="lg:col-span-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/40">Select Match to Edit</label>
                      <button
                        type="button"
                        onClick={() => setSelectedMatchId('new')}
                        className="px-2.5 py-1 rounded bg-[#2563EB] hover:bg-[#2563EB]/80 text-white font-extrabold text-[9px] uppercase tracking-wider flex items-center gap-1 transition-colors"
                      >
                        <PlusCircle size={10} /> Add Match
                      </button>
                    </div>
                    <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                      {matches.map(m => (
                        <div 
                          key={m.id}
                          onClick={() => setSelectedMatchId(m.id)}
                          className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${String(selectedMatchId) === String(m.id) ? 'bg-blue-600/10 border-blue-500' : 'bg-[#111116] border-white/[0.06] hover:border-white/10'}`}
                        >
                          <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded ${m.status === 'live' ? 'bg-rose-600 text-white' : m.status === 'completed' ? 'bg-white/10 text-white/70' : 'bg-blue-900/30 text-blue-400'}`}>
                            {m.status}
                          </span>
                          <h4 className="font-extrabold text-sm uppercase mt-2">
                            {m.team1?.name || 'Team 1'} vs {m.team2?.name || 'Team 2'}
                          </h4>
                          <p className="text-[10px] text-white/40 mt-0.5">{m.stage} • {m.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Form Console details */}
                  <div className="lg:col-span-2 bg-[#0c0c10] border border-white/[0.08] rounded-2xl p-6 space-y-6">
                    {!selectedMatchId ? (
                      <div className="py-20 text-center text-white/30 text-xs font-bold uppercase tracking-widest">
                        Choose a match from the left panel or click "+ Add Match" to create one
                      </div>
                    ) : (
                      <>
                        <h3 className="text-sm font-black uppercase tracking-widest text-white/70 border-b border-white/5 pb-2">
                          {selectedMatchId === 'new' ? 'Create New Match' : 'Edit Match Details'}
                        </h3>

                        {/* Row 1: Stage, Date, Venue */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Stage</label>
                            <input 
                              type="text" 
                              value={matchForm.stage}
                              onChange={(e) => setMatchForm({ ...matchForm, stage: e.target.value })}
                              placeholder="e.g. LEAGUE MATCH"
                              required
                              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Date</label>
                            <input 
                              type="text" 
                              value={matchForm.date}
                              onChange={(e) => setMatchForm({ ...matchForm, date: e.target.value })}
                              placeholder="YYYY-MM-DD"
                              required
                              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Venue</label>
                            <input 
                              type="text" 
                              value={matchForm.venue}
                              onChange={(e) => setMatchForm({ ...matchForm, venue: e.target.value })}
                              placeholder="e.g. Kini Cricket Ground"
                              required
                              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                            />
                          </div>
                        </div>

                        {/* Row 2: Team 1 and Team 2 select */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Team 1</label>
                            <select
                              value={matchForm.team1_id}
                              onChange={(e) => setMatchForm({ ...matchForm, team1_id: e.target.value })}
                              required
                              disabled={selectedMatchId !== 'new'}
                              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 disabled:opacity-50"
                            >
                              <option value="">Choose Team 1</option>
                              {teams.map(t => (
                                <option key={t.id} value={t.id}>{t.name}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Team 2</label>
                            <select
                              value={matchForm.team2_id}
                              onChange={(e) => setMatchForm({ ...matchForm, team2_id: e.target.value })}
                              required
                              disabled={selectedMatchId !== 'new'}
                              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 disabled:opacity-50"
                            >
                              <option value="">Choose Team 2</option>
                              {teams.map(t => (
                                <option key={t.id} value={t.id}>{t.name}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Row 3: Score 1 and Score 2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                              {selectedMatchId === 'new'
                                ? (teams.find(t => String(t.id) === String(matchForm.team1_id))?.name || 'Team 1') + ' Score'
                                : (matches.find(m => String(m.id) === String(selectedMatchId))?.team1?.name || 'Team 1') + ' Score'}
                            </label>
                            <input 
                              type="text" 
                              value={matchForm.score_team1}
                              onChange={(e) => setMatchForm({ ...matchForm, score_team1: e.target.value })}
                              placeholder="e.g. 124/4 (10 Ov)"
                              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">
                              {selectedMatchId === 'new'
                                ? (teams.find(t => String(t.id) === String(matchForm.team2_id))?.name || 'Team 2') + ' Score'
                                : (matches.find(m => String(m.id) === String(selectedMatchId))?.team2?.name || 'Team 2') + ' Score'}
                            </label>
                            <input 
                              type="text" 
                              value={matchForm.score_team2}
                              onChange={(e) => setMatchForm({ ...matchForm, score_team2: e.target.value })}
                              placeholder="e.g. 85/6 (7.5 Ov)"
                              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                            />
                          </div>
                        </div>

                        {/* Row 4: Toss / Summary */}
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Toss / Match Summary Status</label>
                          <input 
                            type="text" 
                            value={matchForm.summary}
                            onChange={(e) => setMatchForm({ ...matchForm, summary: e.target.value })}
                            placeholder="e.g. Punjab won by 39 runs. Punjab won the toss and elected to bat first."
                            className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        {/* Row 5: Status and Winner */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Match Status</label>
                            <select 
                              value={matchForm.status}
                              onChange={(e) => setMatchForm({ ...matchForm, status: e.target.value })}
                              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                            >
                              <option value="upcoming">Upcoming</option>
                              <option value="live">Live</option>
                              <option value="completed">Completed</option>
                            </select>
                          </div>

                          {matchForm.status === 'completed' && (
                            <div>
                              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Winner Team</label>
                              <select 
                                value={matchForm.winner_team_id}
                                onChange={(e) => setMatchForm({ ...matchForm, winner_team_id: e.target.value })}
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                              >
                                <option value="">Draw / No Result</option>
                                {selectedMatchId === 'new' ? (
                                  <>
                                    <option value={matchForm.team1_id}>
                                      {teams.find(t => String(t.id) === String(matchForm.team1_id))?.name || 'Team 1'}
                                    </option>
                                    <option value={matchForm.team2_id}>
                                      {teams.find(t => String(t.id) === String(matchForm.team2_id))?.name || 'Team 2'}
                                    </option>
                                  </>
                                ) : (
                                  <>
                                    <option value={matches.find(m => String(m.id) === String(selectedMatchId))?.team1_id || 1}>
                                      {matches.find(m => String(m.id) === String(selectedMatchId))?.team1?.name}
                                    </option>
                                    <option value={matches.find(m => String(m.id) === String(selectedMatchId))?.team2_id || 2}>
                                      {matches.find(m => String(m.id) === String(selectedMatchId))?.team2?.name}
                                    </option>
                                  </>
                                )}
                              </select>
                            </div>
                          )}
                        </div>

                        <button 
                          type="submit"
                          disabled={actionLoading}
                          className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                        >
                          <Save size={14} /> {actionLoading ? 'Submitting...' : selectedMatchId === 'new' ? 'Create New Match' : 'Save Match Updates'}
                        </button>
                      </>
                    )}
                  </div>
                </form>
              </div>
            )}

            {/* Standings Panel */}
            {activeTab === 'standings' && (
              <div className="space-y-8">
                <div className="border-b border-white/[0.08] pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-tight">Standings & Reset Console</h2>
                    <p className="text-xs text-white/40 mt-1">Recalculate points, edit NRR, or perform season clears.</p>
                  </div>
                  
                  {/* RESET BUTTON */}
                  <button 
                    onClick={handleResetStandings}
                    disabled={actionLoading}
                    className="px-6 py-3 rounded-xl border border-rose-500/30 bg-rose-600/10 hover:bg-rose-600 text-rose-400 hover:text-white font-extrabold text-xs uppercase tracking-widest flex items-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    <RefreshCw size={14} className={actionLoading ? 'animate-spin' : ''} /> New Season Reset
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Manual Overrides Form */}
                  <div className="lg:col-span-1 bg-[#0c0c10] border border-white/[0.08] rounded-2xl p-6 h-fit">
                    <h3 className="text-sm font-black uppercase tracking-widest text-white/70 border-b border-white/5 pb-2 mb-6">
                      Standings Override
                    </h3>
                    
                    <form onSubmit={handleStandingsSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Select Team</label>
                        <select 
                          value={selectedTeamId}
                          onChange={(e) => setSelectedTeamId(e.target.value)}
                          required
                          className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                        >
                          <option value="">Choose Team</option>
                          {standings.map(s => {
                            const tName = s.team?.name || `Team Slot ${s.team_id || s.teamId}`;
                            return (
                              <option key={s.team_id || s.teamId} value={s.team_id || s.teamId}>
                                {tName}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      {selectedTeamId && (
                        <>
                          <div className="grid grid-cols-3 gap-3">
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">Played</label>
                              <input 
                                type="number" 
                                value={standingsForm.played}
                                onChange={(e) => setStandingsForm({ ...standingsForm, played: parseInt(e.target.value) })}
                                required
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">Won</label>
                              <input 
                                type="number" 
                                value={standingsForm.won}
                                onChange={(e) => setStandingsForm({ ...standingsForm, won: parseInt(e.target.value) })}
                                required
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">Lost</label>
                              <input 
                                type="number" 
                                value={standingsForm.lost}
                                onChange={(e) => setStandingsForm({ ...standingsForm, lost: parseInt(e.target.value) })}
                                required
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-3">
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">NR</label>
                              <input 
                                type="number" 
                                value={standingsForm.nr}
                                onChange={(e) => setStandingsForm({ ...standingsForm, nr: parseInt(e.target.value) })}
                                required
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">Points</label>
                              <input 
                                type="number" 
                                value={standingsForm.points}
                                onChange={(e) => setStandingsForm({ ...standingsForm, points: parseInt(e.target.value) })}
                                required
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">NRR</label>
                              <input 
                                type="number" 
                                step="0.001"
                                value={standingsForm.nrr}
                                onChange={(e) => setStandingsForm({ ...standingsForm, nrr: parseFloat(e.target.value) })}
                                required
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                              />
                            </div>
                          </div>

                          <button 
                            type="submit"
                            disabled={actionLoading}
                            className="w-full py-3 mt-2 rounded-xl bg-blue-600 hover:bg-blue-500 font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                          >
                            <Save size={14} /> Save Standings
                          </button>
                        </>
                      )}
                    </form>
                  </div>

                  {/* Standings Table view */}
                  <div className="lg:col-span-2 bg-[#0c0c10] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-white/10 bg-white/[0.02]">
                            <th className="px-5 py-3 text-xs font-black text-white/40 uppercase tracking-widest">Pos</th>
                            <th className="px-5 py-3 text-xs font-black text-white/40 uppercase tracking-widest">Team</th>
                            <th className="px-5 py-3 text-center text-xs font-black text-white/40 uppercase tracking-widest">P</th>
                            <th className="px-5 py-3 text-center text-xs font-black text-white/40 uppercase tracking-widest">W</th>
                            <th className="px-5 py-3 text-center text-xs font-black text-white/40 uppercase tracking-widest">L</th>
                            <th className="px-5 py-3 text-center text-xs font-black text-white/40 uppercase tracking-widest">NR</th>
                            <th className="px-5 py-3 text-center text-xs font-black text-white/40 uppercase tracking-widest">Pts</th>
                            <th className="px-5 py-3 text-center text-xs font-black text-white/40 uppercase tracking-widest">NRR</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.04]">
                          {standings.map((s, idx) => {
                            const tName = s.team?.name || `Team Slot ${s.team_id || s.teamId}`;
                            const tLogo = s.team?.logo || '🏏';
                            const nrrVal = parseFloat(s.nrr || 0);
                            return (
                              <tr key={s.id || idx} className="hover:bg-white/[0.01]">
                                <td className="px-5 py-3.5 font-bold font-mono">{idx + 1}</td>
                                <td className="px-5 py-3.5">
                                  <div className="flex items-center gap-2.5 font-bold">
                                    {typeof tLogo === 'string' && (tLogo.startsWith('/') || tLogo.startsWith('http')) ? (
                                      <img 
                                        src={tLogo} 
                                        alt="" 
                                        className="w-6 h-6 rounded-full object-cover bg-white/5 border border-white/10" 
                                        onError={(e) => { e.target.style.display = 'none'; }} 
                                      />
                                    ) : (
                                      <span className="text-base">{tLogo || '🏏'}</span>
                                    )}
                                    <span>{tName}</span>
                                  </div>
                                </td>
                                <td className="px-5 py-3.5 text-center font-bold font-mono text-white/70">{s.played}</td>
                                <td className="px-5 py-3.5 text-center font-bold font-mono text-white/70">{s.won}</td>
                                <td className="px-5 py-3.5 text-center font-bold font-mono text-white/70">{s.lost}</td>
                                <td className="px-5 py-3.5 text-center font-bold font-mono text-white/70">{s.nr || 0}</td>
                                <td className="px-5 py-3.5 text-center font-black font-mono">{s.points}</td>
                                <td className={`px-5 py-3.5 text-center font-bold font-mono ${nrrVal >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                  {nrrVal >= 0 ? `+${nrrVal.toFixed(3)}` : nrrVal.toFixed(3)}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* News Panel */}
            {activeTab === 'news' && (
              <div className="space-y-8 max-w-4xl mx-auto">
                <div className="border-b border-white/[0.08] pb-4">
                  <h2 className="text-2xl font-black uppercase tracking-tight">News Publisher</h2>
                  <p className="text-xs text-white/40 mt-1">Publish leagues articles, media announcements, and match reports.</p>
                </div>

                <form onSubmit={handleNewsSubmit} className="bg-[#0c0c10] border border-white/[0.08] rounded-2xl p-6 space-y-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Article Title</label>
                    <input 
                      type="text" 
                      value={newsForm.title}
                      onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                      placeholder="e.g. Punjab Fighters secure a final spot!"
                      required
                      className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Tag Category</label>
                      <select 
                        value={newsForm.tag}
                        onChange={(e) => setNewsForm({ ...newsForm, tag: e.target.value })}
                        className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        <option>Match Report</option>
                        <option>Highlight</option>
                        <option>Press Release</option>
                        <option>Interview</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Banner Image Input Mode</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button 
                          type="button" 
                          onClick={() => setNewsForm({ ...newsForm, imageType: 'url' })}
                          className={`py-2 px-3 rounded-lg text-xs font-bold uppercase transition-all ${newsForm.imageType === 'url' ? 'bg-blue-600 text-white' : 'bg-[#141418] text-white/40 hover:text-white'}`}
                        >
                          Image URL
                        </button>
                        <button 
                          type="button" 
                          disabled={!hasSupabase}
                          onClick={() => setNewsForm({ ...newsForm, imageType: 'upload' })}
                          className={`py-2 px-3 rounded-lg text-xs font-bold uppercase transition-all ${newsForm.imageType === 'upload' ? 'bg-blue-600 text-white' : 'bg-[#141418] text-white/40 hover:text-white disabled:opacity-40'}`}
                          title={!hasSupabase ? "Supabase Storage requires database connection" : ""}
                        >
                          File Upload
                        </button>
                      </div>
                    </div>
                  </div>

                  {newsForm.imageType === 'url' ? (
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Banner Image URL</label>
                      <input 
                        type="url" 
                        value={newsForm.imageUrl}
                        onChange={(e) => setNewsForm({ ...newsForm, imageUrl: e.target.value })}
                        placeholder="https://images.unsplash.com/photo-..."
                        required
                        className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Upload Banner File</label>
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => setNewsForm({ ...newsForm, imageFile: e.target.files[0] })}
                        required
                        className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Short Excerpt (Grid Summary Card)</label>
                    <input 
                      type="text" 
                      value={newsForm.excerpt}
                      onChange={(e) => setNewsForm({ ...newsForm, excerpt: e.target.value })}
                      placeholder="Brief one-sentence preview..."
                      required
                      className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Detailed Content (Full Story)</label>
                    <textarea 
                      rows="6"
                      value={newsForm.content}
                      onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                      placeholder="Write full story content here..."
                      required
                      className="w-full bg-[#141418] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={actionLoading}
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                  >
                    <PlusCircle size={14} /> {actionLoading ? 'Publishing...' : 'Publish Article'}
                  </button>
                </form>
              </div>
            )}

            {/* Registrations Panel */}
            {activeTab === 'registrations' && (
              <div className="space-y-8">
                <div className="border-b border-white/[0.08] pb-4">
                  <h2 className="text-2xl font-black uppercase tracking-tight">Registrations Tracker</h2>
                  <p className="text-xs text-white/40 mt-1">Review player entries and payments from gully registration forms.</p>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-md">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-white/40 pointer-events-none">
                    <Search size={16} />
                  </span>
                  <input 
                    type="text" 
                    value={regSearch}
                    onChange={(e) => setRegSearch(e.target.value)}
                    placeholder="Search by name, email, phone, or district..."
                    className="w-full bg-[#111116] border border-white/[0.08] rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Registrations List Table */}
                <div className="bg-[#0c0c10] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/[0.02]">
                          <th className="px-5 py-3 text-xs font-black text-white/40 uppercase tracking-widest">Date</th>
                          <th className="px-5 py-3 text-xs font-black text-white/40 uppercase tracking-widest">Name</th>
                          <th className="px-5 py-3 text-xs font-black text-white/40 uppercase tracking-widest">Contact Details</th>
                          <th className="px-5 py-3 text-xs font-black text-white/40 uppercase tracking-widest">Location</th>
                          <th className="px-5 py-3 text-xs font-black text-white/40 uppercase tracking-widest">Role</th>
                          <th className="px-5 py-3 text-center text-xs font-black text-white/40 uppercase tracking-widest">Payment</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.04] text-white/80">
                        {filteredRegs.length === 0 ? (
                          <tr>
                            <td colSpan="6" className="py-12 text-center text-white/30 text-xs font-bold uppercase tracking-widest">
                              No registration records matching search query
                            </td>
                          </tr>
                        ) : (
                          filteredRegs.map(r => (
                            <tr key={r.id} className="hover:bg-white/[0.01]">
                              <td className="px-5 py-3.5 font-mono text-xs text-white/40">
                                {new Date(r.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                              </td>
                              <td className="px-5 py-3.5">
                                <div className="font-extrabold uppercase text-white">{r.full_name}</div>
                              </td>
                              <td className="px-5 py-3.5">
                                <div className="text-xs text-white/60">📧 {r.email}</div>
                                <div className="text-xs text-white/60 mt-0.5">📞 {r.whatsapp}</div>
                              </td>
                              <td className="px-5 py-3.5">
                                <div className="text-xs text-white/90">{r.district}</div>
                                <div className="text-[10px] text-white/40 font-mono mt-0.5">PIN: {r.pincode}</div>
                              </td>
                              <td className="px-5 py-3.5">
                                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-blue-900/30 text-blue-400 border border-blue-500/15 rounded">
                                  {r.role}
                                </span>
                              </td>
                              <td className="px-5 py-3.5 text-center">
                                <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${r.payment_status === 'completed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                                  {r.payment_status}
                                </span>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Players Panel */}
            {activeTab === 'players' && (
              <div className="space-y-8">
                <div className="border-b border-white/[0.08] pb-4">
                  <h2 className="text-2xl font-black uppercase tracking-tight">Players Console</h2>
                  <p className="text-xs text-white/40 mt-1">Modify player details, team allocations, and comprehensive statistics.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column: Player Search & List */}
                  <div className="lg:col-span-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/40">Search & Select Player</label>
                      <button
                        type="button"
                        onClick={() => setSelectedPlayerId('new')}
                        className="px-2.5 py-1 rounded bg-[#2563EB] hover:bg-[#2563EB]/80 text-white font-extrabold text-[9px] uppercase tracking-wider flex items-center gap-1 transition-colors"
                      >
                        <PlusCircle size={10} /> Add Player
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative col-span-1">
                        <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center text-white/30 pointer-events-none">
                          <Search size={12} />
                        </span>
                        <input 
                          type="text" 
                          value={playerSearch}
                          onChange={(e) => setPlayerSearch(e.target.value)}
                          placeholder="Search..."
                          className="w-full bg-[#111116] border border-white/[0.08] rounded-lg pl-7 pr-2 py-1.5 text-[11px] text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <select
                        value={playerSortCategory}
                        onChange={(e) => setPlayerSortCategory(e.target.value)}
                        className="col-span-1 bg-[#111116] border border-white/[0.08] rounded-lg px-2 py-1.5 text-[11px] text-white focus:outline-none focus:border-blue-500 font-bold uppercase"
                      >
                        <option value="default">Sort: Default</option>
                        <option value="runs">Sort: Runs</option>
                        <option value="wickets">Sort: Wickets</option>
                        <option value="fifties">Sort: Fifties</option>
                        <option value="economy">Sort: Economy</option>
                        <option value="fours">Sort: Fours</option>
                        <option value="sixes">Sort: Sixes</option>
                        <option value="boundaries">Sort: Boundaries</option>
                      </select>
                    </div>

                    <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                      {(() => {
                        const filteredAndSorted = getSortedPlayers().filter(p => 
                          p.name?.toLowerCase().includes(playerSearch.toLowerCase())
                        );
                        
                        return filteredAndSorted.slice(0, 50).map(p => {
                          const playerTeam = teams.find(t => String(t.id) === String(p.team_id));
                          let statText = `${p.role || 'All-Rounder'} • #${p.jersey || 'N/A'}`;
                          
                          if (playerSortCategory === 'runs') statText = `Runs: ${p.runs || 0} | ${p.role}`;
                          if (playerSortCategory === 'wickets') statText = `Wkts: ${p.wickets || 0} | ${p.role}`;
                          if (playerSortCategory === 'fifties') statText = `50s: ${p.fifties || 0} | ${p.role}`;
                          if (playerSortCategory === 'economy') statText = `Econ: ${p.economy || 0.0} | ${p.role}`;
                          if (playerSortCategory === 'fours') statText = `4s: ${p.fours || 0} | ${p.role}`;
                          if (playerSortCategory === 'sixes') statText = `6s: ${p.sixes || 0} | ${p.role}`;
                          if (playerSortCategory === 'boundaries') statText = `Boundaries: ${p.boundaries || ((p.fours || 0) + (p.sixes || 0))} | ${p.role}`;

                          return (
                            <div 
                              key={p.id}
                              onClick={() => setSelectedPlayerId(p.id)}
                              className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${String(selectedPlayerId) === String(p.id) ? 'bg-blue-600/10 border-blue-500' : 'bg-[#111116] border-white/[0.06] hover:border-white/10'}`}
                            >
                              <h4 className="font-extrabold text-xs uppercase text-white">{p.name}</h4>
                              <div className="flex items-center justify-between mt-1 text-[10px] text-white/40">
                                <span>{statText}</span>
                                <span className="font-bold text-blue-400">{playerTeam?.name || 'No Team'}</span>
                              </div>
                            </div>
                          );
                        });
                      })()}
                      {players.filter(p => p.name?.toLowerCase().includes(playerSearch.toLowerCase())).length === 0 && (
                        <div className="text-center py-6 text-white/30 text-xs font-bold uppercase tracking-wider">
                          No players found
                        </div>
                      )}
                      {players.filter(p => p.name?.toLowerCase().includes(playerSearch.toLowerCase())).length > 50 && (
                        <div className="text-[10px] text-center text-white/40 italic mt-2">
                          Showing first 50 results. Refine search to see more.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Player Form */}
                  <div className="lg:col-span-2 bg-[#0c0c10] border border-white/[0.08] rounded-2xl p-6">
                    {!selectedPlayerId ? (
                      <div className="py-32 text-center text-white/30 text-xs font-bold uppercase tracking-widest">
                        Choose a player from the left panel to modify their statistics and profiles.
                      </div>
                    ) : (
                      <form onSubmit={handlePlayerSubmit} className="space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-widest text-white/70 border-b border-white/5 pb-2">
                          {selectedPlayerId === 'new' ? 'Create New Player Profile' : `Edit Player: ${playerForm.name}`}
                        </h3>

                        {/* General Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Full Name</label>
                            <input 
                              type="text" 
                              value={playerForm.name}
                              onChange={(e) => setPlayerForm({ ...playerForm, name: e.target.value })}
                              required
                              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Team Allocation</label>
                            <select 
                              value={playerForm.team_id}
                              onChange={(e) => setPlayerForm({ ...playerForm, team_id: e.target.value })}
                              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                            >
                              <option value="">No Team / Unassigned</option>
                              {teams.map(t => (
                                <option key={t.id} value={t.id}>{t.name}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Role</label>
                            <select 
                              value={playerForm.role}
                              onChange={(e) => setPlayerForm({ ...playerForm, role: e.target.value })}
                              required
                              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                            >
                              <option>Batter</option>
                              <option>Bowler</option>
                              <option>All-Rounder</option>
                              <option>Wicketkeeper</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Jersey Number</label>
                            <input 
                              type="number" 
                              value={playerForm.jersey}
                              onChange={(e) => setPlayerForm({ ...playerForm, jersey: e.target.value })}
                              placeholder="e.g. 45"
                              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Matches Played</label>
                            <input 
                              type="number" 
                              value={playerForm.matches}
                              onChange={(e) => setPlayerForm({ ...playerForm, matches: e.target.value })}
                              required
                              className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Photo URL / Path</label>
                          <input 
                            type="text" 
                            value={playerForm.photo}
                            onChange={(e) => setPlayerForm({ ...playerForm, photo: e.target.value })}
                            placeholder="/players/photo-filename.jpg"
                            className="w-full bg-[#141418] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        {/* Stats Metrics */}
                        <div className="border-t border-white/5 pt-4">
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-4">Stat Statistics</h4>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">Runs</label>
                              <input 
                                type="number" 
                                value={playerForm.runs}
                                onChange={(e) => setPlayerForm({ ...playerForm, runs: e.target.value })}
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">Strike Rate</label>
                              <input 
                                type="number" 
                                step="0.1"
                                value={playerForm.strike_rate}
                                onChange={(e) => setPlayerForm({ ...playerForm, strike_rate: e.target.value })}
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">Wickets</label>
                              <input 
                                type="number" 
                                value={playerForm.wickets}
                                onChange={(e) => setPlayerForm({ ...playerForm, wickets: e.target.value })}
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">Economy Rate</label>
                              <input 
                                type="number" 
                                step="0.01"
                                value={playerForm.economy}
                                onChange={(e) => setPlayerForm({ ...playerForm, economy: e.target.value })}
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-4">
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">50s</label>
                              <input 
                                type="number" 
                                value={playerForm.fifties}
                                onChange={(e) => setPlayerForm({ ...playerForm, fifties: e.target.value })}
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">100s</label>
                              <input 
                                type="number" 
                                value={playerForm.hundreds}
                                onChange={(e) => setPlayerForm({ ...playerForm, hundreds: e.target.value })}
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">Fours</label>
                              <input 
                                type="number" 
                                value={playerForm.fours}
                                onChange={(e) => setPlayerForm({ ...playerForm, fours: e.target.value })}
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">Sixes</label>
                              <input 
                                type="number" 
                                value={playerForm.sixes}
                                onChange={(e) => setPlayerForm({ ...playerForm, sixes: e.target.value })}
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-[9px] font-black uppercase tracking-widest text-white/40 mb-1.5">Boundaries</label>
                              <input 
                                type="number" 
                                value={playerForm.boundaries}
                                onChange={(e) => setPlayerForm({ ...playerForm, boundaries: e.target.value })}
                                className="w-full bg-[#141418] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>

                        <button 
                          type="submit"
                          disabled={actionLoading}
                          className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                        >
                          <Save size={14} /> {actionLoading ? 'Saving changes...' : 'Save Player Updates'}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>

    </div>
  );
};

export default AdminDashboard;
