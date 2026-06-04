// Mock data service for ISCL website

// 1. MASTER TEAMS CONFIGURATION (1-3)
export const teams = [
  {
    id: "gujarat",
    name: "Gujarati Kings",
    city: "Gujarat",
    logo: "👑", 
    color: "#FF9933", 
    captain: "Aniket Rathod", 
    stats: { matches: 4, won: 3, lost: 1, points: 6, nrr: "+4.84" },
    squad: [
      { id: "g1", name: "Aniket Rathod", role: "Batter", jersey: 10, photo: "/players/aniket-r.jpg" },
      { id: "g2", name: "Jay Mandaliya", role: "Batter", jersey: 7, photo: "/players/jay-m.jpg" },
      { id: "g3", name: "Bhavik Bhadani", role: "Batter", jersey: 18, photo: "/players/bhavik-b.jpg" },
      { id: "g4", name: "Vijay Detwal", role: "Batter", jersey: 32, photo: "/players/vijay-d.jpg" },
      { id: "g5", name: "Yogesh Solanki", role: "Batter", jersey: 24, photo: "/players/yogesh-s.jpg" },
      { id: "g6", name: "Ajaz Khokhar", role: "All Rounder", jersey: 9, photo: "/players/ajaz-k.jpg" },
      { id: "g7", name: "Jay Soni", role: "Bowler", jersey: 11, photo: "/players/jay-s.jpg" },
      { id: "g8", name: "Sachin Parmar", role: "Bowler", jersey: 8, photo: "/players/sachin-p.jpg" },
      { id: "g9", name: "Sumit", role: "All Rounder", jersey: 45, photo: "/players/sumit.jpg" },
      { id: "g10", name: "Vijay Thakor", role: "Batter", jersey: 3, photo: "/players/vijay-t.jpg" },
      { id: "g11", name: "Aniket Bhoi", role: "Batter", jersey: 13, photo: "/players/aniket-b.jpg" },
      { id: "g12", name: "Shailesh Bharwad", role: "Bowler", jersey: 5, photo: "/players/shailesh-b.jpg" },
      { id: "g13", name: "Hitu Jadeja", role: "Batter", jersey: 99, photo: "/players/hitu-j.jpg" },
      { id: "g14", name: "Bilal Rajput", role: "Batter", jersey: 0, photo: "/players/bilal-r.jpg" },
      { id: "g15", name: "Manav Patel", role: "All Rounder", jersey: 22, photo: "/players/manav-p.jpg" },
      { id: "g16", name: "Rushabh Chaudhari", role: "Bowler", jersey: 6, photo: "/players/rushabh-c.jpg" }
    ]
  },
  {
    id: "maharashtra",
    name: "Maharashtra Super Chargers",
    city: "Maharashtra",
    logo: "⚡", 
    color: "#FFCC00", 
    captain: "Afrid Sayyad", 
    stats: { matches: 4, won: 2, lost: 2, points: 4, nrr: "-1.08" },
    squad: [
      { id: "m1", name: "Afrid Sayyad", role: "Bowler", jersey: 9, photo: "" },
      { id: "m2", name: "Ketan Mhatre", role: "Batter", jersey: 10, photo: "" },
      { id: "m3", name: "Krishna Satpute", role: "Batter", jersey: 7, photo: "" },
      { id: "m4", name: "Yogesh Penkar", role: "Batter", jersey: 45, photo: "" },
      { id: "m5", name: "Rohan Kadam", role: "Batter", jersey: 18, photo: "" },
      { id: "m6", name: "Siddhesh Sutar", role: "All Rounder", jersey: 24, photo: "" },
      { id: "m7", name: "Prathamesh Pawar", role: "All Rounder", jersey: 11, photo: "" },
      { id: "m8", name: "Ankur Singh", role: "Bowler", jersey: 8, photo: "" },
      { id: "m9", name: "Vijay Pavle", role: "Bowler", jersey: 33, photo: "" },
      { id: "m10", name: "Omkar Desai", role: "Batter", jersey: 22, photo: "" },
      { id: "m11", name: "Sumit Dhekale", role: "Batter", jersey: 14, photo: "" },
      { id: "m12", name: "Jagdish Zope", role: "Bowler", jersey: 5, photo: "" },
      { id: "m13", name: "Saroj Paramanik", role: "Bowler", jersey: 2, photo: "" },
      { id: "m14", name: "Sufiyan Khan", role: "Batter", jersey: 13, photo: "" },
      { id: "m15", name: "Thomas Dias", role: "All Rounder", jersey: 21, photo: "" },
      { id: "m16", name: "Pradeep Patil", role: "Batter", jersey: 3, photo: "" },
      { id: "m17", name: "Vicky Bhoir", role: "Bowler", jersey: 77, photo: "" }
    ]
  },
  {
    id: "rajasthan",
    name: "Royal Rajputs",
    city: "Rajasthan",
    logo: "⚔️", 
    color: "#D4AF37", 
    captain: "Vijendra Verma", 
    stats: { matches: 6, won: 5, lost: 1, points: 10, nrr: "+1.29" },
    squad: [
      { id: "r1", name: "Vijendra Verma", role: "Bowler", jersey: 2, photo: "" },
      { id: "r2", name: "Manpreet Singh", role: "Batter", jersey: 52, photo: "" },
      { id: "r3", name: "Prashant Vesoniya", role: "Batter", jersey: 33, photo: "" },
      { id: "r4", name: "Virendra Janawa", role: "Batter", jersey: 23, photo: "" },
      { id: "r5", name: "Sangram Singh", role: "All Rounder", jersey: 17, photo: "" },
      { id: "r6", name: "Manthan Ram", role: "All Rounder", jersey: 16, photo: "" },
      { id: "r7", name: "Surendra Saini", role: "All Rounder", jersey: 6, photo: "" },
      { id: "r8", name: "Aamir Soyal", role: "Batter", jersey: 3, photo: "" },
      { id: "r9", name: "Ashish Sharma", role: "All Rounder", jersey: 4, photo: "" },
      { id: "r10", name: "Daulat Singh", role: "Batter", jersey: 0, photo: "" },
      { id: "r11", name: "Neeraj Sharma", role: "All Rounder", jersey: 8, photo: "" },
      { id: "r12", name: "Udayveer (Meena)", role: "All Rounder", jersey: 7, photo: "" },
      { id: "r13", name: "Deepak Sherawat", role: "Bowler", jersey: 12, photo: "" },
      { id: "r14", name: "Praveen Sharma", role: "Batter", jersey: 11, photo: "" },
      { id: "r15", name: "Vinaya Kumar", role: "Bowler", jersey: 9, photo: "" }
    ]
  }
];

// 2. UNIFIED MATCH SCHEDULER MAP
export const matches = [
  {
    id: 1,
    team1: teams[0],
    team2: teams[1],
    date: '2026-06-05',
    time: '19:30',
    venue: 'Wankhede Stadium, Mumbai',
    status: 'upcoming',
    countdown: new Date('2026-06-05T19:30:00').getTime()
  },
  {
    id: 2,
    team1: teams[0],
    team2: teams[1],
    date: '2026-06-06',
    time: '15:00',
    venue: 'M. Chinnaswamy Stadium, Bangalore',
    status: 'upcoming',
    countdown: new Date('2026-06-06T15:00:00').getTime()
  },
  {
    id: 3,
    team1: teams[2],
    team2: teams[1],
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
    team: teams[0],
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
    team: teams[0],
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
    team: teams[1],
    role: 'Bowler',
    photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d',
    stats: { matches: 5, runs: 32, average: 10.6, strikeRate: 110.0, fifties: 0, hundreds: 0, wickets: 12, economy: 6.2 },
    recentPerformances: [
      { match: 'vs Telangana', runs: 12, wickets: 4, result: 'Won' }
    ]
  }
];

// 4. LATEST NEWS ARTICLES
export const news = [
  {
    id: 1,
    title: "ISCL Hosts Grand Official Jersey Launch & Team Owners Introduction Ceremony as Season 03 Registrations Open",
    tag: "Press Release",
    excerpt: "The road to the championship builds momentum as the league unveils its vibrant new team jerseys and introduces the visionaries backing the franchises.",
    date: "2026-06-03",
    image: "/images/gully_cricket.png",
    url: "https://www.aninews.in/news/sports/cricket/iscl-hosts-grand-official-jersey-launch-amp-team-owners-introduction-ceremony20251125170259/"
  },
  {
    id: 2,
    title: "Inaugural ISCL Season Concludes as a Historic Milestone for Indian Softball Cricket; Punjab Crowned Champions",
    tag: "Match Report",
    excerpt: "Punjab lifts the trophy after a dramatic win under the stadium floodlights, sealing a legendary campaign.",
    date: "2026-05-20",
    image: "/images/cricket_stadium_night.png",
    url: "https://www.htsyndication.com/brand-stories/article/iscl-season-1-concludes-as-a-historic-milestone-for-indian-softball-cricket%3B-punjab-crowned-champions-in-a-thrilling-finale/96186547"
  },
  {
    id: 3,
    title: "Suresh Raina Champions Grassroots Talent as Official Ambassador of the ISCL",
    tag: "Interview",
    excerpt: "Former Indian cricket star and revered 'Mr. IPL' aligns with Founder & President Dr. Gangadhar Raju to provide an incredible platform.",
    date: "2026-06-01",
    image: "/images/suresh_raina.png",
    url: "https://www.aninews.in/news/business/suresh-raina-champions-grassroots-talent-as-ambassador-of-the-indian-softball-cricket-league-iscl20250710135648/"
  },
  {
    id: 4,
    title: "Harbhajan Singh Joins Elite Panel to Mentor Gully Cricketers",
    tag: "Interview",
    excerpt: "The legendary spinner breaks down what it takes to leap from street pitches to grand stadiums.",
    date: "2026-06-02",
    image: "/images/harbhajan.png",
    url: "#"
  }
];

// 5. UNIFIED MASTER LEADERBOARD STANDINGS MATRIX (32 Full Teams Loaded)
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

export const orangeCap = { player: players[1], runs: 312 };
export const purpleCap = { player: players[2], wickets: 18 };

export const topRuns = [
  { id: 1, name: "Yash Sharma", teamShort: "MUMBAI BLASTERS", runs: 432 },
  { id: 2, name: "Arjun Nair", teamShort: "BANGALORE TITANS", runs: 398 }
];
export const topWickets = [
  { id: 5, name: "Rohan Das", teamShort: "DELHI DYNAMOS", wickets: 18 }
];
export const topHighestScores = [
  { id: 1, name: "Yash Sharma", teamShort: "MUMBAI BLASTERS", highestScore: "87*" }
];
export const topBowlingFigures = [
  { id: 8, name: "Aman Verma", teamShort: "KOLKATA KNIGHTS", bestBowling: "5/12" }
];
export const topFifties = [
  { id: 2, name: "Arjun Nair", teamShort: "BANGALORE TITANS", fifties: 4 }
];
export const topEconomy = [
  { id: 12, name: "Kabir Khan", teamShort: "CHENNAI KINGS", economy: "4.85" }
];
export const topFours = [
  { id: 3, name: "Dev Dutt", teamShort: "PUNJAB HEROES", fours: 38 }
];
export const topSixes = [
  { id: 1, name: "Yash Sharma", teamShort: "MUMBAI BLASTERS", sixes: 29 }
];
export const topBoundaries = [
  { id: 1, name: "Yash Sharma", teamShort: "MUMBAI BLASTERS", boundaries: 61 }
];