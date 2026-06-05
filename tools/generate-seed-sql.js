import fs from 'fs';
import path from 'path';
import { teams, matches, pointsTable, news } from '../src/lib/mockData.js';

// Stats mapping data for specific players on the leaderboards
const localStatsData = {
  runs: [
    { name: "Shantanu Das", teamShort: "WEST BENGAL", val: 131 },
    { name: "Jay Singh Yadav", teamShort: "UTTAR PRADESH", val: 124 },
    { name: "Rohit Kalsi", teamShort: "PUNJAB", val: 118 },
    { name: "Shailesh Bharwad", teamShort: "GUJARAT", val: 112 },
    { name: "Vignesh Pattabi", teamShort: "BENGALURU", val: 105 },
  ],
  wickets: [
    { name: "Manthan Ram", teamShort: "RAJASTHAN", val: 17 },
    { name: "Sahil Bhagu", teamShort: "PUNJAB", val: 14 },
    { name: "Rabbani Dafedar", teamShort: "KARNATAKA", val: 12 },
    { name: "Saif Malinga", teamShort: "UTTAR PRADESH", val: 11 },
    { name: "Karthik M N", teamShort: "BENGALURU", val: 9 },
  ],
  highestScores: [
    { name: "Jay Singh Yadav", teamShort: "UTTAR PRADESH", val: 86 },
    { name: "Shreyash Bajpai", teamShort: "UTTAR PRADESH", val: 53 },
    { name: "Shailesh Bharwad", teamShort: "GUJARAT", val: 52 },
    { name: "Vignesh Pattabi", teamShort: "BENGALURU", val: 33 },
    { name: "Kamaran Khan", teamShort: "UTTAR PRADESH", val: 21 },
  ],
  economy: [
    { name: "Afrid Sayyad", teamShort: "MAHARASHTRA", val: 4.98 },
    { name: "Karthik M N", teamShort: "BENGALURU", val: 2.50 },
    { name: "Ratnesh Singh", teamShort: "UTTAR PRADESH", val: 2.50 },
    { name: "Suresh Yadav", teamShort: "UTTAR PRADESH", val: 1.00 },
    { name: "Bunty Khan", teamShort: "UTTAR PRADESH", val: 2.00 },
  ],
  fifties: [
    { name: "Jay Singh Yadav", teamShort: "UTTAR PRADESH", val: 2 },
    { name: "Shailesh Bharwad", teamShort: "GUJARAT", val: 1 },
    { name: "Shreyash Bajpai", teamShort: "UTTAR PRADESH", val: 1 },
    { name: "Shantanu Das", teamShort: "WEST BENGAL", val: 1 },
    { name: "Rohit Kalsi", teamShort: "PUNJAB", val: 1 },
  ],
  fours: [
    { name: "Shailesh Bharwad", teamShort: "GUJARAT", val: 14 },
    { name: "Shantanu Das", teamShort: "WEST BENGAL", val: 12 },
    { name: "Jay Singh Yadav", teamShort: "UTTAR PRADESH", val: 11 },
    { name: "Vignesh Pattabi", teamShort: "BENGALURU", val: 9 },
    { name: "Shreyash Bajpai", teamShort: "UTTAR PRADESH", val: 6 },
  ],
  sixes: [
    { name: "Jay Singh Yadav", teamShort: "UTTAR PRADESH", val: 8 },
    { name: "Shreyash Bajpai", teamShort: "UTTAR PRADESH", val: 5 },
    { name: "Shailesh Bharwad", teamShort: "GUJARAT", val: 4 },
    { name: "Vignesh Pattabi", teamShort: "BENGALURU", val: 3 },
    { name: "Fazil Ali", teamShort: "SOUTH ZONE", val: 2 },
  ],
  boundaries: [
    { name: "Shailesh Bharwad", teamShort: "GUJARAT", val: 18 },
    { name: "Jay Singh Yadav", teamShort: "UTTAR PRADESH", val: 19 },
    { name: "Shantanu Das", teamShort: "WEST BENGAL", val: 15 },
    { name: "Vignesh Pattabi", teamShort: "BENGALURU", val: 12 },
    { name: "Shreyash Bajpai", teamShort: "UTTAR PRADESH", val: 11 },
  ]
};

// Map team string IDs to integer IDs (1-32)
const teamMap = {};
teams.forEach((t, i) => {
  teamMap[t.id] = i + 1;
});

// Smart fuzzy matching for team names
const findTeamIdByName = (name) => {
  if (!name) return null;
  const lowerName = name.toLowerCase().trim();
  
  // Specific Overrides
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

  // Check name, city, id matching
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
  
  console.warn(`Warning: Could not match team name "${name}"`);
  return null;
};

let sql = `-- ISCL Seeding Script with Actual Website Data
-- RUN THIS IN THE SUPABASE SQL EDITOR TO INJECT ALL 32 TEAMS, SQUADS, POINTS TABLE AND MATCH RECORDS

-- Clean existing records to avoid conflicts
TRUNCATE TABLE registrations CASCADE;
TRUNCATE TABLE news CASCADE;
TRUNCATE TABLE points_table CASCADE;
TRUNCATE TABLE matches CASCADE;
TRUNCATE TABLE players CASCADE;
TRUNCATE TABLE teams CASCADE;

-- 1. SEED TEAMS
`;

// Build Teams inserts
teams.forEach(t => {
  const tId = teamMap[t.id];
  const name = t.name.replace(/'/g, "''");
  const city = t.city.replace(/'/g, "''");
  const logo = t.logo.replace(/'/g, "''");
  const color = t.color.replace(/'/g, "''");
  const captain = t.captain.replace(/'/g, "''");
  sql += `INSERT INTO teams (id, name, city, logo, color, captain) VALUES (${tId}, '${name}', '${city}', '${logo}', '${color}', '${captain}');\n`;
});

sql += `\n-- 2. SEED POINTS TABLE (STANDINGS)\n`;

// Build Points Table inserts
pointsTable.forEach(s => {
  const tId = findTeamIdByName(s.team.name);
  if (!tId) return;
  const played = s.played || 0;
  const won = s.won || 0;
  const lost = s.lost || 0;
  const nr = s.nr || 0;
  const points = s.points || 0;
  const nrr = parseFloat(s.nrr) || 0.0;
  const position = s.position || 1;
  
  // Format lastFive as SQL Array string
  const formArray = s.lastFive && s.lastFive.length 
    ? `ARRAY[${s.lastFive.map(f => `'${f}'`).join(', ')}]` 
    : `'{}'::TEXT[]`;

  sql += `INSERT INTO points_table (team_id, played, won, lost, nr, points, nrr, position, last_five) VALUES (${tId}, ${played}, ${won}, ${lost}, ${nr}, ${points}, ${nrr}, ${position}, ${formArray});\n`;
});

sql += `\n-- 3. SEED PLAYERS (SQUADS)\n`;

let playerIndex = 1;

// Build Players inserts from team squads
teams.forEach(t => {
  const tId = teamMap[t.id];
  if (t.squad && t.squad.length) {
    t.squad.forEach(p => {
      const pName = p.name.replace(/'/g, "''");
      const role = p.role.replace(/'/g, "''");
      const jersey = p.jersey !== null && p.jersey !== undefined ? p.jersey : 0;
      const photo = p.photo ? `'${p.photo.replace(/'/g, "''")}'` : 'NULL';
      
      // Match stats from localStatsData
      let runs = 0;
      let wickets = 0;
      let strike_rate = 140.0;
      let fifties = 0;
      let economy = 6.0;
      let fours = 0;
      let sixes = 0;
      let boundaries = 0;

      const runStat = localStatsData.runs.find(r => r.name.toLowerCase() === p.name.toLowerCase());
      if (runStat) runs = runStat.val;

      const wicketStat = localStatsData.wickets.find(w => w.name.toLowerCase() === p.name.toLowerCase());
      if (wicketStat) wickets = wicketStat.val;

      const hsStat = localStatsData.highestScores.find(h => h.name.toLowerCase() === p.name.toLowerCase());
      if (hsStat) strike_rate = 158.5;

      const economyStat = localStatsData.economy.find(e => e.name.toLowerCase() === p.name.toLowerCase());
      if (economyStat) economy = parseFloat(economyStat.val);

      const fiftyStat = localStatsData.fifties.find(f => f.name.toLowerCase() === p.name.toLowerCase());
      if (fiftyStat) fifties = fiftyStat.val;

      const foursStat = localStatsData.fours.find(f => f.name.toLowerCase() === p.name.toLowerCase());
      if (foursStat) fours = foursStat.val;

      const sixesStat = localStatsData.sixes.find(s => s.name.toLowerCase() === p.name.toLowerCase());
      if (sixesStat) sixes = sixesStat.val;

      const boundStat = localStatsData.boundaries.find(b => b.name.toLowerCase() === p.name.toLowerCase());
      if (boundStat) boundaries = boundStat.val;

      sql += `INSERT INTO players (id, team_id, name, role, jersey, photo, runs, wickets, strike_rate, fifties, economy, fours, sixes, boundaries) VALUES (${playerIndex++}, ${tId}, '${pName}', '${role}', ${jersey}, ${photo}, ${runs}, ${wickets}, ${strike_rate}, ${fifties}, ${economy}, ${fours}, ${sixes}, ${boundaries});\n`;
    });
  }
});

sql += `\n-- 4. SEED MATCHES\n`;

// Build Matches inserts
matches.forEach(m => {
  const t1Id = findTeamIdByName(m.team1.name);
  const t2Id = findTeamIdByName(m.team2.name);
  if (!t1Id || !t2Id) {
    console.warn(`Mismatched Match: ${m.team1.name} (${t1Id}) vs ${m.team2.name} (${t2Id})`);
    return;
  }

  const stage = m.stage ? `'${m.stage.replace(/'/g, "''")}'` : `'LEAGUE MATCH'`;
  const date = m.date.replace(/'/g, "''");
  const venue = m.venue ? m.venue.replace(/'/g, "''") : 'Kini Cricket Ground';
  const score_team1 = m.score?.team1 ? `'${m.score.team1.replace(/'/g, "''")}'` : 'NULL';
  const score_team2 = m.score?.team2 ? `'${m.score.team2.replace(/'/g, "''")}'` : 'NULL';
  const summary = m.summary ? `'${m.summary.replace(/'/g, "''")}'` : `'Match scheduled'`;
  const status = m.status || 'completed';
  
  const winnerTeamName = m.winner;
  const winnerId = winnerTeamName ? findTeamIdByName(winnerTeamName) : 'NULL';

  sql += `INSERT INTO matches (id, stage, date, venue, team1_id, team2_id, score_team1, score_team2, summary, status, winner_team_id) VALUES (${m.id}, ${stage}, '${date}', '${venue}', ${t1Id}, ${t2Id}, ${score_team1}, ${score_team2}, ${summary}, '${status}', ${winnerId});\n`;
});

sql += `\n-- 5. SEED NEWS ARTICLES\n`;

// Build News inserts
news.forEach(n => {
  const title = n.title.replace(/'/g, "''");
  const excerpt = n.excerpt.replace(/'/g, "''");
  const content = n.excerpt.replace(/'/g, "''");
  const image = n.image.replace(/'/g, "''");
  const tag = n.tag.replace(/'/g, "''");
  const date = n.date;

  sql += `INSERT INTO news (id, title, excerpt, content, image, tag, date) VALUES (${n.id}, '${title}', '${excerpt}', '${content}', '${image}', '${tag}', '${date}');\n`;
});

// Write to seed-actual-data.sql
const outputPath = path.join(process.cwd(), 'seed-actual-data.sql');
fs.writeFileSync(outputPath, sql, 'utf-8');
console.log(`Successfully generated SQL seeding file with mapped matches at: ${outputPath}`);
