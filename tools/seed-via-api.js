import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { teams, matches, pointsTable } from '../src/lib/mockData.js';

// Get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env.local manually
const envPath = path.resolve(__dirname, '../.env.local');
let supabaseUrl = process.env.VITE_SUPABASE_URL;
let supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const parts = trimmed.split('=');
      const key = parts[0]?.trim();
      const value = parts.slice(1).join('=').trim();
      if (key === 'VITE_SUPABASE_URL') supabaseUrl = value;
      if (key === 'VITE_SUPABASE_ANON_KEY') supabaseAnonKey = value;
    }
  });
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Error: Supabase credentials not found in environment or .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const teamMap = {};
teams.forEach((t, i) => {
  teamMap[t.id] = i + 1;
});

const findTeamIdByName = (name) => {
  if (!name) return null;
  const lowerName = name.toLowerCase().trim();
  
  if (lowerName === 'uttar pradesh blue' || lowerName === 'kings uttar pradesh blue') {
    const found = teams.find(t => t.id === 'upblue');
    if (found) return teamMap[found.id];
  }
  if (lowerName === 'uttar pradesh red' || lowerName === 'twin hills united') {
    const found = teams.find(t => t.id === 'up-red');
    if (found) return teamMap[found.id];
  }
  if (lowerName === 'bengaluru' || lowerName === 'bangalore' || lowerName === 'real challengers bengaluru') {
    const found = teams.find(t => t.id === 'bengaluru');
    if (found) return teamMap[found.id];
  }
  if (lowerName === 'south zone' || lowerName === 'south zone strikers') {
    const found = teams.find(t => t.id === 'southzone' || t.id === 'south-zone');
    if (found) return teamMap[found.id];
  }

  for (const t of teams) {
    const tName = t.name.toLowerCase();
    const tCity = t.city.toLowerCase();
    const tId = t.id.toLowerCase();
    
    if (tName === lowerName || tCity === lowerName || tId === lowerName) {
      return teamMap[t.id];
    }
    if (tName.includes(lowerName) || tCity.includes(lowerName)) {
      return teamMap[t.id];
    }
    if (lowerName.includes(tCity) || lowerName.includes(tName.replace('kings', '').replace('strikers', '').trim())) {
      return teamMap[t.id];
    }
  }
  return null;
};

async function seed() {
  try {
    console.log("Starting Supabase API seeding...");

    // 1. Clear existing matches and points_table records
    console.log("Clearing existing matches and points_table records...");
    const { error: matchesClearErr } = await supabase.from('matches').delete().neq('id', 0);
    if (matchesClearErr) console.warn("Note clearing matches:", matchesClearErr.message);

    const { error: ptsClearErr } = await supabase.from('points_table').delete().neq('id', 0);
    if (ptsClearErr) console.warn("Note clearing points_table:", ptsClearErr.message);

    // 2. Insert Standings (points_table)
    console.log(`Mapping and inserting ${pointsTable.length} standings rows...`);
    const ptInserts = [];
    pointsTable.forEach(s => {
      const tId = findTeamIdByName(s.team.name);
      if (!tId) {
        console.warn(`Could not find team ID for standing team: ${s.team.name}`);
        return;
      }
      ptInserts.push({
        team_id: tId,
        played: s.played || 0,
        won: s.won || 0,
        lost: s.lost || 0,
        nr: s.nr || 0,
        points: s.points || 0,
        nrr: parseFloat(s.nrr) || 0.0,
        position: s.position || 1,
        last_five: s.lastFive || []
      });
    });

    const { data: ptData, error: ptError } = await supabase.from('points_table').insert(ptInserts).select();
    if (ptError) {
      console.error("Failed to insert points table:", ptError);
    } else {
      console.log(`Successfully inserted ${ptData.length} standings!`);
    }

    // 3. Insert Matches
    console.log(`Mapping and inserting ${matches.length} matches...`);
    const matchInserts = [];
    matches.forEach(m => {
      const t1Id = findTeamIdByName(m.team1.name);
      const t2Id = findTeamIdByName(m.team2.name);
      if (!t1Id || !t2Id) {
        console.warn(`Mismatched Match skipped: ${m.team1.name} (${t1Id}) vs ${m.team2.name} (${t2Id})`);
        return;
      }

      const winnerTeamName = m.winner;
      const winnerId = winnerTeamName ? findTeamIdByName(winnerTeamName) : null;

      matchInserts.push({
        id: m.id,
        stage: m.stage || 'LEAGUE MATCH',
        date: m.date,
        venue: m.venue || 'Kini Cricket Ground',
        team1_id: t1Id,
        team2_id: t2Id,
        score_team1: m.score?.team1 || null,
        score_team2: m.score?.team2 || null,
        summary: m.summary || 'Match scheduled',
        status: m.status || 'completed',
        winner_team_id: winnerId
      });
    });

    const { data: matchData, error: matchError } = await supabase.from('matches').insert(matchInserts).select();
    if (matchError) {
      console.error("Failed to insert matches:", matchError);
    } else {
      console.log(`Successfully inserted ${matchData.length} matches!`);
    }

    console.log("Seeding process completed successfully!");
  } catch (err) {
    console.error("Error seeding via API:", err);
  }
}

seed();
