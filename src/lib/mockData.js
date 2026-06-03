// Mock data service for ISCL website

// 1. MASTER TEAMS CONFIGURATION (1-32)
export const teams = [
  { id: 'gujarat', name: 'Gujarat', city: 'Gujarat', logo: '🏏', color: '#2563EB', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'maharashtra', name: 'Maharashtra', city: 'Maharashtra', logo: '🏏', color: '#E91E8C', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'rajasthan', name: 'Rajasthan', city: 'Rajasthan', logo: '🏏', color: '#FF6B1A', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'uttar-pradesh-red', name: 'Uttar Pradesh Red', city: 'Uttar Pradesh', logo: '🏏', color: '#AACC00', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'delhi', name: 'Delhi', city: 'Delhi', logo: '⚡', color: '#8B5CF6', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'andaman', name: 'Andaman', city: 'Andaman', logo: '🏏', color: '#F59E0B', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'andhra-pradesh', name: 'Andhra Pradesh', city: 'Andhra Pradesh', logo: '🏏', color: '#10B981', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'bihar', name: 'Bihar', city: 'Bihar', logo: '🏏', color: '#EC4899', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'chandigarh', name: 'Chandigarh', city: 'Chandigarh', logo: '🏏', color: '#2563EB', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'tamil-nadu', name: 'Tamil Nadu', city: 'Tamil Nadu', logo: '🏏', color: '#E91E8C', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'lakshadweep', name: 'Lakshadweep', city: 'Lakshadweep', logo: '🏏', color: '#FF6B1A', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'north-east', name: 'North East', city: 'North East', logo: '🏏', color: '#AACC00', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'himachal-pradesh', name: 'Himachal Pradesh', city: 'Himachal Pradesh', logo: '🏏', color: '#8B5CF6', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'assam', name: 'Assam', city: 'Assam', logo: '🏏', color: '#F59E0B', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'jharkhand', name: 'Jharkhand', city: 'Jharkhand', logo: '🏏', color: '#10B981', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'goa', name: 'Goa', city: 'Goa', logo: '🏏', color: '#EC4899', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'odisha', name: 'Odisha', city: 'Odisha', logo: '🏏', color: '#2563EB', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'karnataka', name: 'Karnataka', city: 'Karnataka', logo: '🏏', color: '#E91E8C', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'kerala', name: 'Kerala', city: 'Kerala', logo: '🏏', color: '#FF6B1A', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'uttar-pradesh-blue', name: 'Uttar Pradesh Blue', city: 'Uttar Pradesh', logo: '🏏', color: '#AACC00', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'west-bengal', name: 'West Bengal', city: 'West Bengal', logo: '🏏', color: '#8B5CF6', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'madhya-pradesh', name: 'Madhya Pradesh', city: 'Madhya Pradesh', logo: '🏏', color: '#F59E0B', ... },
  { id: 'north-zone', name: 'North Zone', city: 'North Zone', logo: '🏏', color: '#10B981', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'jammu-and-kashmir', name: 'Jammu and Kashmir', city: 'Jammu and Kashmir', logo: '🏏', color: '#EC4899', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'haryana', name: 'Haryana', city: 'Haryana', logo: '🏏', color: '#2563EB', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'punjab', name: 'Punjab', city: 'Punjab', logo: '🏏', color: '#E91E8C', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'chhattisgarh', name: 'Chhattisgarh', city: 'Chhattisgarh', logo: '🏏', color: '#FF6B1A', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'south-zone', name: 'South Zone', city: 'South Zone', logo: '🏏', color: '#AACC00', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'uttarakhand', name: 'Uttarakhand', city: 'Uttarakhand', logo: '🏏', color: '#8B5CF6', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'bengaluru', name: 'Bengaluru', city: 'Bengaluru', logo: '🏏', color: '#F59E0B', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'telangana', name: 'Telangana', city: 'Telangana', logo: '🏏', color: '#10B981', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } },
  { id: 'mumbai', name: 'Mumbai', city: 'Mumbai', logo: '🏏', color: '#EC4899', stats: { matches: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00' } }
];

// 2. UNIFIED MATCH SCHEDULER MAP
export const matches = [
  {
    id: 1,
    team1: teams[0], // Gujarat
    team2: teams[1], // Maharashtra
    date: '2026-06-05',
    time: '19:30',
    venue: 'Wankhede Stadium, Mumbai',
    status: 'upcoming',
    countdown: new Date('2026-06-05T19:30:00').getTime()
  },
  {
    id: 2,
    team1: teams[4], // Delhi
    team2: teams[29], // Bengaluru
    date: '2026-06-06',
    time: '15:00',
    venue: 'M. Chinnaswamy Stadium, Bangalore',
    status: 'upcoming',
    countdown: new Date('2026-06-06T15:00:00').getTime()
  },
  {
    id: 3,
    team1: teams[2], // Rajasthan
    team2: teams[3], // Uttar Pradesh Red
    date: '2026-05-28',
    time: '19:30',
    venue: 'Eden Gardens, Kolkata',
    status: 'completed',
    score: { team1: '142/6', team2: '140/9' },
    winner: teams[2]
  }
];

// 3. PLAYERS ROSTER DIRECTORY
export const players = [
  {
    id: 1,
    name: 'Arjun Sharma',
    team: teams[0], // Gujarat
    role: 'All-Rounder',
    photo: 'https://images.pexels.com/photos/17628651/pexels-photo-17628651/free-photo-of-man-playing-cricket.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    stats: { matches: 5, runs: 245, average: 49.0, strikeRate: 158.2, fifties: 2, hundreds: 0, wickets: 8, economy: 6.9 },
    recentPerformances: [
      { match: 'vs Maharashtra', runs: 67, wickets: 2, result: 'Won' },
      { match: 'vs Rajasthan', runs: 45, wickets: 1, result: 'Lost' }
    ]
  },
  {
    id: 2,
    name: 'Vikram Patel',
    team: teams[4], // Delhi
    role: 'Batsman',
    photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6',
    stats: { matches: 5, runs: 312, average: 62.4, strikeRate: 145.1, fifties: 3, hundreds: 1, wickets: 0, economy: 0 },
    recentPerformances: [
      { match: 'vs Andaman', runs: 102, wickets: 0, result: 'Won' }
    ]
  },
  {
    id: 3,
    name: 'Rohan Mehta',
    team: teams[29], // Bengaluru
    role: 'Bowler',
    photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d',
    stats: { matches: 5, runs: 32, average: 10.6, strikeRate: 110.0, fifties: 0, hundreds: 0, wickets: 12, economy: 6.2 },
    recentPerformances: [
      { match: 'vs Telangana', runs: 12, wickets: 4, result: 'Won' }
    ]
  }
];

// 4. LATEST NEWS ARTICLES (Merged from both HEAD and 946170b)
export const news = [
  {
    id: 1,
    title: "ISCL Hosts Grand Official Jersey Launch & Team Owners Introduction Ceremony as Season 03 Registrations Open",
    tag: "Press Release",
    excerpt: "The road to the championship builds momentum as the league unveils its vibrant new team jerseys and introduces the visionaries backing the franchises. Registration portals are now officially open for street cricket squads nationwide.",
    date: "2026-06-03",
    image: "/images/gully_cricket.png",
    url: "https://www.aninews.in/news/sports/cricket/iscl-hosts-grand-official-jersey-launch-amp-team-owners-introduction-ceremony20251125170259/"
  },
  {
    id: 2,
    title: "Inaugural ISCL Season Concludes as a Historic Milestone for Indian Softball Cricket; Punjab Crowned Champions",
    tag: "Match Report",
    excerpt: "Punjab lifts the trophy after a dramatic win under the stadium floodlights, sealing a legendary campaign that has officially transformed the landscape of grassroots softball cricket across the country.",
    date: "2026-05-20",
    image: "/images/cricket_stadium_night.png",
    url: "https://www.htsyndication.com/brand-stories/article/iscl-season-1-concludes-as-a-historic-milestone-for-indian-softball-cricket%3B-punjab-crowned-champions-in-a-thrilling-finale/96186547"
  },
  {
    id: 3,
    title: "Suresh Raina Champions Grassroots Talent as Official Ambassador of the ISCL",
    tag: "Interview",
    excerpt: "Former Indian cricket star and revered 'Mr. IPL' aligns with Founder & President Dr. Gangadhar Raju to provide an incredible national platform showcasing raw talent across the country.",
    date: "2026-06-01",
    image: "/images/suresh_raina.png",
    url: "https://www.aninews.in/news/business/suresh-raina-champions-grassroots-talent-as-ambassador-of-the-indian-softball-cricket-league-iscl20250710135648/"
  },
  {
    id: 4,
    title: "Harbhajan Singh Joins Elite Panel to Mentor Gully Cricketers",
    tag: "Interview",
    excerpt: "The legendary spinner breaks down what it takes to leap from street pitches to grand stadiums, offering custom masterclasses for qualifying bowlers.",
    date: "2026-06-02",
    image: "/images/harbhajan.png",
    url: "#"
  },
  {
    id: 5,
    title: 'ISCL Season 3 registration numbers break all previous records across India',
    image: 'https://images.unsplash.com/photo-1576868986107-b5f3e2e89fff',
    tag: 'League News',
    date: '2026-06-01',
    excerpt: 'With 32 powerful teams competing in a massive national leaderboard, tournament registration reaches an all-time high.',
    content: 'The expansion of India Street Cricket League to a complete 32-team system has generated massive wave of athletic engagement...'
  },
  {
    id: 6,
    title: 'Vikram Patel hits blistering century to power clinical victory',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da',
    tag: 'Match Report',
    date: '2026-05-30',
    excerpt: 'Smashed a stunning 102 runs to send an early warning statement across the unified 1-32 division leaderboard.',
    content: 'A flawless display of aggressive batting saw cricket fans witnessing unmatched power hitting performance on ground...'
  }
];

// 5. UNIFIED MASTER LEADERBOARD STANDINGS MATRIX (1-32)
export const pointsTable = [
  { position: 1, team: teams[0], played: 5, won: 4, lost: 1, nr: 0, points: 8, nrr: '+1.45', lastFive: ['W', 'W', 'L', 'W', 'W'], forRuns: '845/50.0', againstRuns: '710/50.0' },
  { position: 2, team: teams[1], played: 5, won: 4, lost: 1, nr: 0, points: 8, nrr: '+1.12', lastFive: ['W', 'L', 'W', 'W', 'W'], forRuns: '790/48.2', againstRuns: '720/50.0' },
  { position: 3, team: teams[2], played: 5, won: 3, lost: 2, nr: 0, points: 6, nrr: '+0.65', lastFive: ['L', 'W', 'W', 'L', 'W'], forRuns: '760/50.0', againstRuns: '712/49.1' },
  { position: 4, team: teams[3], played: 5, won: 3, lost: 2, nr: 0, points: 6, nrr: '+0.21', lastFive: ['W', 'W', 'L', 'W', 'L'], forRuns: '810/50.0', againstRuns: '795/50.0' },
  { position: 5, team: teams[4], played: 5, won: 3, lost: 2, nr: 0, points: 6, nrr: '-0.15', lastFive: ['L', 'W', 'L', 'W', 'W'], forRuns: '720/47.4', againstRuns: '730/50.0' },
  { position: 6, team: teams[5], played: 5, won: 2, lost: 3, nr: 0, points: 4, nrr: '-0.34', lastFive: ['W', 'L', 'W', 'L', 'L'], forRuns: '695/50.0', againstRuns: '715/48.4' },
  { position: 7, team: teams[6], played: 5, won: 2, lost: 3, nr: 0, points: 4, nrr: '-0.52', lastFive: ['L', 'L', 'W', 'W', 'L'], forRuns: '710/50.0', againstRuns: '740/49.2' },
  { position: 8, team: teams[7], played: 5, won: 1, lost: 4, nr: 0, points: 2, nrr: '-1.18', lastFive: ['L', 'L', 'L', 'L', 'W'], forRuns: '650/49.1', againstRuns: '735/50.0' },
  { position: 9, team: teams[8], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 10, team: teams[9], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 11, team: teams[10], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 12, team: teams[11], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 13, team: teams[12], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 14, team: teams[13], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 15, team: teams[14], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 16, team: teams[15], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 17, team: teams[16], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 18, team: teams[17], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 19, team: teams[18], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 20, team: teams[19], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 21, team: teams[20], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 22, team: teams[21], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 23, team: teams[22], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 24, team: teams[23], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 25, team: teams[24], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 26, team: teams[25], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 27, team: teams[26], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 28, team: teams[27], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 29, team: teams[28], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 30, team: teams[29], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 31, team: teams[30], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' },
  { position: 32, team: teams[31], played: 0, won: 0, lost: 0, nr: 0, points: 0, nrr: '0.00', lastFive: [], forRuns: '0/0', againstRuns: '0/0' }
];

// 6. MASTER STATISTICAL INDICATORS
export const tournamentStats = {
  totalMatches: 16,
  totalSixes: 114,
  highestScore: '102* by Vikram Patel',
  mostWickets: '12 by Rohan Mehta'
};

export const orangeCap = {
  player: players[1], // Vikram Patel
  runs: 312
};

export const purpleCap = {
  player: players[2], // Rohan Mehta
  wickets: 18         // Kept maximum value from conflicting versions (12 vs 18)
};