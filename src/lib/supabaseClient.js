import { createClient } from '@supabase/supabase-js';
import { teams as mockTeams, matches as mockMatches, pointsTable, news as mockNews } from './mockData';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verify if environment credentials exist
export const hasSupabase = !!(supabaseUrl && supabaseAnonKey);

// Export active client instance or null
export const supabase = hasSupabase 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Initial Local Storage setup for Mock Demo Fallbacks
const initLocalStorage = () => {
  if (typeof window === 'undefined') return;
  
  if (!localStorage.getItem('iscl_matches')) {
    localStorage.setItem('iscl_matches', JSON.stringify(mockMatches));
  }
  if (!localStorage.getItem('iscl_standings')) {
    localStorage.setItem('iscl_standings', JSON.stringify(pointsTable));
  }
  if (!localStorage.getItem('iscl_news')) {
    localStorage.setItem('iscl_news', JSON.stringify(mockNews));
  }
  if (!localStorage.getItem('iscl_registrations')) {
    localStorage.setItem('iscl_registrations', JSON.stringify([
      { 
        id: 'reg-demo-1', 
        full_name: 'SHUBMAN GILL', 
        email: 'shubman@iscl.in', 
        whatsapp: '9988776655', 
        district: 'Fazilka', 
        pincode: '152123', 
        role: 'Specialist Batter', 
        payment_status: 'completed', 
        created_at: new Date().toISOString() 
      }
    ]));
  }
  if (!localStorage.getItem('iscl_players')) {
    localStorage.setItem('iscl_players', JSON.stringify([
      { id: 1, name: 'Rohit Kalsi', role: 'All-Rounder', jersey: 45, runs: 118, wickets: 5, strike_rate: 148.5, fifties: 1, economy: 6.2, fours: 14, sixes: 5, boundaries: 19, team_id: 26, stats: { matches: 5, runs: 118, average: 23.6, strikeRate: 148.5, fifties: 1, hundreds: 0, wickets: 5, economy: 6.2 }, recentPerformances: [{ match: 'vs Opposition', runs: 59, wickets: 2, result: 'Won' }] },
      { id: 2, name: 'Manthan Ram', role: 'Bowler', jersey: 99, runs: 12, wickets: 17, strike_rate: 95.0, fifties: 0, economy: 4.2, fours: 0, sixes: 0, boundaries: 0, team_id: 3, stats: { matches: 5, runs: 12, average: 2.4, strikeRate: 95.0, fifties: 0, hundreds: 0, wickets: 17, economy: 4.2 }, recentPerformances: [{ match: 'vs Opposition', runs: 6, wickets: 8, result: 'Won' }] },
      { id: 3, name: 'Jay Singh Yadav', role: 'Batter', jersey: 18, runs: 124, wickets: 0, strike_rate: 162.2, fifties: 2, economy: 0.0, fours: 11, sixes: 8, boundaries: 19, team_id: 20, stats: { matches: 5, runs: 124, average: 24.8, strikeRate: 162.2, fifties: 2, hundreds: 0, wickets: 0, economy: 0.0 }, recentPerformances: [{ match: 'vs Opposition', runs: 62, wickets: 0, result: 'Won' }] },
      { id: 4, name: 'Shantanu Das', role: 'Batter', jersey: 10, runs: 131, wickets: 0, strike_rate: 135.0, fifties: 1, economy: 0.0, fours: 12, sixes: 0, boundaries: 12, team_id: 29, stats: { matches: 5, runs: 131, average: 26.2, strikeRate: 135.0, fifties: 1, hundreds: 0, wickets: 0, economy: 0.0 }, recentPerformances: [{ match: 'vs Opposition', runs: 65, wickets: 0, result: 'Won' }] }
    ]));
  }
};

initLocalStorage();

// Centralized Data Access Layer with offline fallback engine
export const db = {
  getTeams: async () => {
    if (hasSupabase) {
      const { data: teamsData, error: teamsError } = await supabase.from('teams').select('*').order('id');
      if (!teamsError && teamsData) {
        const { data: standingsData } = await supabase.from('points_table').select('*');
        const { data: playersData } = await supabase.from('players').select('*');
        
        return teamsData.map(team => {
          const teamStandings = standingsData?.find(s => s.team_id === team.id);
          const teamSquad = playersData?.filter(p => p.team_id === team.id) || [];
          
          return {
            ...team,
            stats: {
              matches: teamStandings?.played ?? 0,
              won: teamStandings?.won ?? 0,
              lost: teamStandings?.lost ?? 0,
              points: teamStandings?.points ?? 0,
              nrr: teamStandings?.nrr ?? "0.0"
            },
            squad: teamSquad.map(p => ({
              id: p.id,
              name: p.name,
              role: p.role,
              jersey: p.jersey,
              photo: p.photo
            }))
          };
        });
      }
    }
    return mockTeams;
  },

  getPlayers: async () => {
    if (hasSupabase) {
      const { data, error } = await supabase.from('players').select('*, team:team_id(*)').order('id');
      if (!error && data) {
        return data.map(p => ({
          ...p,
          stats: {
            matches: p.matches ?? 5,
            runs: p.runs ?? 0,
            average: p.average ?? (p.runs ? (p.runs / 5).toFixed(1) : 0),
            strikeRate: p.strike_rate ?? 140.0,
            fifties: p.fifties ?? 0,
            hundreds: p.hundreds ?? 0,
            wickets: p.wickets ?? 0,
            economy: p.economy ?? 6.0
          },
          recentPerformances: p.recent_performances ?? [
            { match: 'vs Opposition', runs: p.runs ? Math.round(p.runs / 2) : 0, wickets: p.wickets ? Math.round(p.wickets / 2) : 0, result: 'Won' }
          ]
        }));
      }
    }
    // Load mock player profiles with statistics
    return JSON.parse(localStorage.getItem('iscl_players') || '[]');
  },

  getMatches: async () => {
    if (hasSupabase) {
      const { data, error } = await supabase.from('matches').select('*, team1:team1_id(*), team2:team2_id(*)').order('id');
      if (!error && data) {
        // Map scores, winner objects, and retrieve original match times from mockMatches
        const mapped = data.map(m => {
          const mockMatch = mockMatches.find(mm => String(mm.id) === String(m.id));
          return {
            ...m,
            time: mockMatch?.time || '16:00',
            score: {
              team1: m.score_team1,
              team2: m.score_team2
            },
            winner: m.winner_team_id ? (m.winner_team_id === m.team1_id ? m.team1 : m.team2) : null
          };
        });

        // Sort matches to match the exact premium sequence of mockMatches (101-113, 38-1)
        return mapped.sort((a, b) => {
          const idxA = mockMatches.findIndex(mm => String(mm.id) === String(a.id));
          const idxB = mockMatches.findIndex(mm => String(mm.id) === String(b.id));
          if (idxA === -1) return 1;
          if (idxB === -1) return -1;
          return idxA - idxB;
        });
      }
    }
    return JSON.parse(localStorage.getItem('iscl_matches') || '[]');
  },

  getStandings: async () => {
    if (hasSupabase) {
      const { data, error } = await supabase.from('points_table').select('*, team:team_id(*)');
      if (!error && data) {
        // Sort standings descending by points, then by NRR
        const sorted = data.sort((a, b) => {
          if (b.points !== a.points) return b.points - a.points;
          return parseFloat(b.nrr || 0) - parseFloat(a.nrr || 0);
        });
        return sorted.map((s, idx) => ({
          ...s,
          position: idx + 1,
          lastFive: s.last_five || []
        }));
      }
    }
    const current = JSON.parse(localStorage.getItem('iscl_standings') || '[]');
    return current.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      return parseFloat(b.nrr || 0) - parseFloat(a.nrr || 0);
    });
  },

  getNews: async () => {
    if (hasSupabase) {
      const { data, error } = await supabase.from('news').select('*').order('date', { ascending: false });
      if (!error) return data;
    }
    return JSON.parse(localStorage.getItem('iscl_news') || '[]');
  },

  getRegistrations: async () => {
    if (hasSupabase) {
      const { data, error } = await supabase.from('registrations').select('*').order('created_at', { ascending: false });
      if (!error) return data;
    }
    return JSON.parse(localStorage.getItem('iscl_registrations') || '[]');
  },

  saveNews: async (newArticle) => {
    if (hasSupabase) {
      const { data, error } = await supabase.from('news').insert([newArticle]).select();
      if (!error) return data[0];
      throw error;
    }
    const current = JSON.parse(localStorage.getItem('iscl_news') || '[]');
    const article = { 
      id: Date.now(), 
      ...newArticle, 
      date: new Date().toISOString() 
    };
    localStorage.setItem('iscl_news', JSON.stringify([article, ...current]));
    return article;
  },

  updateMatch: async (id, updates) => {
    if (hasSupabase) {
      const { data, error } = await supabase.from('matches').update(updates).eq('id', id).select();
      if (!error) return data[0];
      throw error;
    }
    const current = JSON.parse(localStorage.getItem('iscl_matches') || '[]');
    const updated = current.map(m => {
      if (m.id === id || String(m.id) === String(id)) {
        const matchUpdate = { ...m, ...updates };
        // Trigger auto standings update on match completion
        if (updates.status === 'completed' && m.status !== 'completed') {
          db.triggerMockPointsUpdate(matchUpdate);
        }
        return matchUpdate;
      }
      return m;
    });
    localStorage.setItem('iscl_matches', JSON.stringify(updated));
    return updated.find(m => m.id === id || String(m.id) === String(id));
  },

  createMatch: async (matchData) => {
    if (hasSupabase) {
      const { data, error } = await supabase.from('matches').insert([matchData]).select();
      if (!error) return data[0];
      throw error;
    }
    const current = JSON.parse(localStorage.getItem('iscl_matches') || '[]');
    const newId = current.length ? Math.max(...current.map(m => m.id)) + 1 : 1;
    const newMatch = {
      id: newId,
      ...matchData,
      team1: mockTeams[matchData.team1_id - 1] || { name: 'Team 1', logo: '🏏' },
      team2: mockTeams[matchData.team2_id - 1] || { name: 'Team 2', logo: '🏏' },
      score: {
        team1: matchData.score_team1 || '0/0',
        team2: matchData.score_team2 || '0/0'
      },
      winner: matchData.winner_team_id ? (matchData.winner_team_id === matchData.team1_id ? mockTeams[matchData.team1_id - 1] : mockTeams[matchData.team2_id - 1]) : null
    };
    localStorage.setItem('iscl_matches', JSON.stringify([newMatch, ...current]));
    return newMatch;
  },

  updateStandings: async (teamId, updates) => {
    if (hasSupabase) {
      const { data, error } = await supabase.from('points_table').update(updates).eq('team_id', teamId).select();
      if (!error) return data;
      throw error;
    }
    const current = JSON.parse(localStorage.getItem('iscl_standings') || '[]');
    const updated = current.map(s => {
      const sId = s.team_id || s.team?.id;
      if (sId === teamId) {
        return { ...s, ...updates };
      }
      return s;
    });
    localStorage.setItem('iscl_standings', JSON.stringify(updated));
    return updated;
  },

  updatePlayer: async (id, updates) => {
    if (hasSupabase) {
      // Destructure to remove fields that are not database columns in the players table
      const { matches, hundreds, ...dbUpdates } = updates;
      const { data, error } = await supabase.from('players').update(dbUpdates).eq('id', id).select();
      if (!error) return data[0];
      throw error;
    }
    const current = JSON.parse(localStorage.getItem('iscl_players') || '[]');
    const updated = current.map(p => {
      if (p.id === id || String(p.id) === String(id)) {
        return { ...p, ...updates };
      }
      return p;
    });
    localStorage.setItem('iscl_players', JSON.stringify(updated));
    return updated.find(p => p.id === id || String(p.id) === String(id));
  },

  createPlayer: async (playerData) => {
    if (hasSupabase) {
      const { matches, hundreds, ...dbData } = playerData;
      // Fetch the max ID to prevent key conflicts
      const { data: maxData, error: maxError } = await supabase
        .from('players')
        .select('id')
        .order('id', { ascending: false })
        .limit(1);
      
      const nextId = !maxError && maxData && maxData.length ? maxData[0].id + 1 : 1000 + Math.floor(Math.random() * 9000);
      
      const payload = { id: nextId, ...dbData };
      const { data, error } = await supabase.from('players').insert([payload]).select();
      if (!error) return data[0];
      throw error;
    }
    const current = JSON.parse(localStorage.getItem('iscl_players') || '[]');
    const nextId = current.length ? Math.max(...current.map(p => p.id)) + 1 : 1;
    const newPlayer = { id: nextId, ...playerData };
    localStorage.setItem('iscl_players', JSON.stringify([...current, newPlayer]));
    return newPlayer;
  },

  resetStandings: async () => {
    if (hasSupabase) {
      const { data, error } = await supabase.from('points_table')
        .update({ played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: 0.0, last_five: [] })
        .neq('id', 0)
        .select();
      if (!error) return data;
      throw error;
    }
    const current = JSON.parse(localStorage.getItem('iscl_standings') || '[]');
    const reset = current.map(s => ({
      ...s,
      played: 0,
      won: 0,
      lost: 0,
      nr: 0,
      points: 0,
      nrr: 0.0,
      last_five: [],
      lastFive: []
    }));
    localStorage.setItem('iscl_standings', JSON.stringify(reset));
    return reset;
  },

  saveRegistration: async (regData) => {
    if (hasSupabase) {
      const { data, error } = await supabase.from('registrations').insert([regData]).select();
      if (!error) return data[0];
      throw error;
    }
    const current = JSON.parse(localStorage.getItem('iscl_registrations') || '[]');
    const newReg = { 
      id: `reg-${Date.now()}`, 
      ...regData, 
      created_at: new Date().toISOString(), 
      payment_status: 'completed' 
    };
    localStorage.setItem('iscl_registrations', JSON.stringify([newReg, ...current]));
    return newReg;
  },

  triggerMockPointsUpdate: (completedMatch) => {
    const standings = JSON.parse(localStorage.getItem('iscl_standings') || '[]');
    const t1Id = completedMatch.team1_id || completedMatch.team1?.id || 1;
    const t2Id = completedMatch.team2_id || completedMatch.team2?.id || 2;
    const winnerId = completedMatch.winner_team_id;

    const updated = standings.map(s => {
      const sId = s.team_id || s.team?.id;
      const isTeam1 = sId === t1Id;
      const isTeam2 = sId === t2Id;

      if (isTeam1 || isTeam2) {
        let played = (s.played || 0) + 1;
        let won = s.won || 0;
        let lost = s.lost || 0;
        let points = s.points || 0;
        let lastFive = [...(s.lastFive || s.last_five || [])];

        if (winnerId) {
          const isWinner = (isTeam1 && winnerId === t1Id) || (isTeam2 && winnerId === t2Id);
          if (isWinner) {
            won += 1;
            points += 2;
            lastFive.push('W');
          } else {
            lost += 1;
            lastFive.push('L');
          }
        } else {
          points += 1;
          lastFive.push('NR');
        }

        return { 
          ...s, 
          played, 
          won, 
          lost, 
          points, 
          last_five: lastFive.slice(-5), 
          lastFive: lastFive.slice(-5) 
        };
      }
      return s;
    });
    localStorage.setItem('iscl_standings', JSON.stringify(updated));
  }
};
