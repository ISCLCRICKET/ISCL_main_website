// Mock data service for ISCL website
export const teams = [
  {
    id: 'mumbai-mavericks',
    name: 'Mumbai Mavericks',
    city: 'Mumbai',
    logo: '🏏',
    color: '#2563EB',
    captain: 'Arjun Sharma',
    squad: [
      { id: 1, name: 'Arjun Sharma', role: 'All-Rounder', jersey: 7, photo: 'https://www.google.com/imgres?q=softball%20circketer%20picture&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F35903110%2Fpexels-photo-35903110%2Ffree-photo-of-cricket-player-performing-a-dynamic-batting-shot.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcricket%2520softball%2F&docid=1D7HEisWdS1MFM&tbnid=TyJguNjKYkaUFM&vet=12ahUKEwjd_Y6_sOiUAxUdTWwGHVDGM4QQnPAOegQIHhAB..i&w=500&h=333&hcb=2&ved=2ahUKEwjd_Y6_sOiUAxUdTWwGHVDGM4QQnPAOegQIHhAB' },
      { id: 2, name: 'Vikram Patel', role: 'Batsman', jersey: 18, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 3, name: 'Rohan Mehta', role: 'Bowler', jersey: 23, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 4, name: 'Karan Singh', role: 'Wicket-Keeper', jersey: 1, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 5, name: 'Aditya Kumar', role: 'Batsman', jersey: 10, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
    ],
    stats: { matches: 12, won: 8, lost: 3, nr: 1, points: 17, nrr: '+1.24' }
  },
  {
    id: 'delhi-dynamos',
    name: 'Delhi Dynamos',
    city: 'Delhi',
    logo: '⚡',
    color: '#E91E8C',
    captain: 'Rahul Verma',
    squad: [
      { id: 6, name: 'Rahul Verma', role: 'Batsman', jersey: 45, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 7, name: 'Sanjay Reddy', role: 'All-Rounder', jersey: 8, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 8, name: 'Amit Joshi', role: 'Bowler', jersey: 19, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 9, name: 'Deepak Yadav', role: 'Batsman', jersey: 33, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 10, name: 'Nikhil Gupta', role: 'Bowler', jersey: 21, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
    ],
    stats: { matches: 12, won: 7, lost: 4, nr: 1, points: 15, nrr: '+0.87' }
  },
  {
    id: 'bangalore-blasters',
    name: 'Bangalore Blasters',
    city: 'Bangalore',
    logo: '💥',
    color: '#FF6B1A',
    captain: 'Suresh Raina',
    squad: [
      { id: 11, name: 'Suresh Raina', role: 'All-Rounder', jersey: 3, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 12, name: 'Praveen Kumar', role: 'Bowler', jersey: 14, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 13, name: 'Manoj Tiwary', role: 'Batsman', jersey: 27, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 14, name: 'Ashish Nehra', role: 'Bowler', jersey: 11, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 15, name: 'Yuvraj Singh', role: 'All-Rounder', jersey: 12, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
    ],
    stats: { matches: 12, won: 7, lost: 5, nr: 0, points: 14, nrr: '+0.52' }
  },
  {
    id: 'chennai-challengers',
    name: 'Chennai Challengers',
    city: 'Chennai',
    logo: '🔥',
    color: '#AACC00',
    captain: 'Dinesh Karthik',
    squad: [
      { id: 16, name: 'Dinesh Karthik', role: 'Wicket-Keeper', jersey: 7, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 17, name: 'Ravichandran Ashwin', role: 'Bowler', jersey: 99, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 18, name: 'Murali Vijay', role: 'Batsman', jersey: 81, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 19, name: 'Harbhajan Singh', role: 'Bowler', jersey: 3, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 20, name: 'Subramaniam Badrinath', role: 'Batsman', jersey: 17, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
    ],
    stats: { matches: 12, won: 6, lost: 5, nr: 1, points: 13, nrr: '+0.31' }
  },
  {
    id: 'kolkata-kings',
    name: 'Kolkata Kings',
    city: 'Kolkata',
    logo: '👑',
    color: '#8B5CF6',
    captain: 'Gautam Gambhir',
    squad: [
      { id: 21, name: 'Gautam Gambhir', role: 'Batsman', jersey: 23, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 22, name: 'Sunil Narine', role: 'All-Rounder', jersey: 74, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 23, name: 'Robin Uthappa', role: 'Batsman', jersey: 27, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 24, name: 'Kuldeep Yadav', role: 'Bowler', jersey: 23, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 25, name: 'Andre Russell', role: 'All-Rounder', jersey: 12, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
    ],
    stats: { matches: 12, won: 5, lost: 6, nr: 1, points: 11, nrr: '-0.18' }
  },
  {
    id: 'hyderabad-hawks',
    name: 'Hyderabad Hawks',
    city: 'Hyderabad',
    logo: '🦅',
    color: '#F59E0B',
    captain: 'Mohammad Azharuddin',
    squad: [
      { id: 26, name: 'Mohammad Azharuddin', role: 'Batsman', jersey: 99, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 27, name: 'VVS Laxman', role: 'Batsman', jersey: 1, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 28, name: 'Rashid Khan', role: 'Bowler', jersey: 19, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 29, name: 'Bhuvneshwar Kumar', role: 'Bowler', jersey: 15, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 30, name: 'Shikhar Dhawan', role: 'Batsman', jersey: 25, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
    ],
    stats: { matches: 12, won: 4, lost: 7, nr: 1, points: 9, nrr: '-0.64' }
  },
  {
    id: 'pune-panthers',
    name: 'Pune Panthers',
    city: 'Pune',
    logo: '🐆',
    color: '#10B981',
    captain: 'Ajinkya Rahane',
    squad: [
      { id: 31, name: 'Ajinkya Rahane', role: 'Batsman', jersey: 41, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 32, name: 'Ravindra Jadeja', role: 'All-Rounder', jersey: 8, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 33, name: 'Shardul Thakur', role: 'Bowler', jersey: 54, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 34, name: 'Shreyas Iyer', role: 'Batsman', jersey: 41, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 35, name: 'Jasprit Bumrah', role: 'Bowler', jersey: 93, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
    ],
    stats: { matches: 12, won: 3, lost: 8, nr: 1, points: 7, nrr: '-1.12' }
  },
  {
    id: 'jaipur-jaguars',
    name: 'Jaipur Jaguars',
    city: 'Jaipur',
    logo: '🐅',
    color: '#EC4899',
    captain: 'Sanju Samson',
    squad: [
      { id: 36, name: 'Sanju Samson', role: 'Wicket-Keeper', jersey: 9, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 37, name: 'Jos Buttler', role: 'Batsman', jersey: 63, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 38, name: 'Yuzvendra Chahal', role: 'Bowler', jersey: 3, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
      { id: 39, name: 'Riyan Parag', role: 'All-Rounder', jersey: 3, photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d' },
      { id: 40, name: 'Trent Boult', role: 'Bowler', jersey: 18, photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6' },
    ],
    stats: { matches: 12, won: 2, lost: 9, nr: 1, points: 5, nrr: '-1.47' }
  }
];

export const matches = [
  {
    id: 1,
    team1: teams[0],
    team2: teams[1],
    date: '2026-06-02',
    time: '19:30',
    venue: 'Wankhede Stadium, Mumbai',
    status: 'upcoming',
    countdown: new Date('2026-06-02T19:30:00').getTime()
  },
  {
    id: 2,
    team1: teams[2],
    team2: teams[3],
    date: '2026-06-03',
    time: '15:00',
    venue: 'M. Chinnaswamy Stadium, Bangalore',
    status: 'upcoming',
    countdown: new Date('2026-06-03T15:00:00').getTime()
  },
  {
    id: 3,
    team1: teams[4],
    team2: teams[5],
    date: '2026-05-28',
    time: '19:30',
    venue: 'Eden Gardens, Kolkata',
    status: 'completed',
    score: { team1: '178/6', team2: '156/9' },
    winner: teams[4]
  },
  {
    id: 4,
    team1: teams[6],
    team2: teams[7],
    date: '2026-05-27',
    time: '15:00',
    venue: 'MCA Stadium, Pune',
    status: 'completed',
    score: { team1: '142/8', team2: '145/4' },
    winner: teams[7]
  },
  {
    id: 5,
    team1: teams[0],
    team2: teams[2],
    date: '2026-05-26',
    time: '19:30',
    venue: 'Wankhede Stadium, Mumbai',
    status: 'completed',
    score: { team1: '189/5', team2: '187/7' },
    winner: teams[0]
  },
  {
    id: 6,
    team1: teams[1],
    team2: teams[3],
    date: '2026-06-04',
    time: '19:30',
    venue: 'Arun Jaitley Stadium, Delhi',
    status: 'upcoming',
    countdown: new Date('2026-06-04T19:30:00').getTime()
  }
];

export const players = [
  {
    id: 1,
    name: 'Arjun Sharma',
    team: teams[0],
    role: 'All-Rounder',
    photo: 'https://images.pexels.com/photos/17628651/pexels-photo-17628651/free-photo-of-man-playing-cricket.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    stats: {
      matches: 12,
      runs: 487,
      average: 54.1,
      strikeRate: 162.3,
      fifties: 4,
      hundreds: 1,
      wickets: 14,
      economy: 7.2
    },
    recentPerformances: [
      { match: 'vs Delhi Dynamos', runs: 67, wickets: 2, result: 'Won' },
      { match: 'vs Bangalore Blasters', runs: 45, wickets: 1, result: 'Lost' },
      { match: 'vs Chennai Challengers', runs: 89, wickets: 3, result: 'Won' }
    ]
  },
  {
    id: 2,
    name: 'Vikram Patel',
    team: teams[0],
    role: 'Batsman',
    photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6',
    stats: {
      matches: 12,
      runs: 523,
      average: 58.1,
      strikeRate: 148.7,
      fifties: 5,
      hundreds: 2,
      wickets: 0,
      economy: 0
    },
    recentPerformances: [
      { match: 'vs Delhi Dynamos', runs: 78, wickets: 0, result: 'Won' },
      { match: 'vs Bangalore Blasters', runs: 34, wickets: 0, result: 'Lost' },
      { match: 'vs Chennai Challengers', runs: 102, wickets: 0, result: 'Won' }
    ]
  },
  {
    id: 3,
    name: 'Rohan Mehta',
    team: teams[0],
    role: 'Bowler',
    photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d',
    stats: {
      matches: 12,
      runs: 87,
      average: 14.5,
      strikeRate: 132.1,
      fifties: 0,
      hundreds: 0,
      wickets: 18,
      economy: 6.8
    },
    recentPerformances: [
      { match: 'vs Delhi Dynamos', runs: 12, wickets: 3, result: 'Won' },
      { match: 'vs Bangalore Blasters', runs: 8, wickets: 2, result: 'Lost' },
      { match: 'vs Chennai Challengers', runs: 15, wickets: 4, result: 'Won' }
    ]
  },
  {
    id: 6,
    name: 'Rahul Verma',
    team: teams[1],
    role: 'Batsman',
    photo: 'https://images.unsplash.com/photo-1699518309860-b55162d3feb6',
    stats: {
      matches: 12,
      runs: 456,
      average: 50.7,
      strikeRate: 155.2,
      fifties: 4,
      hundreds: 1,
      wickets: 0,
      economy: 0
    },
    recentPerformances: [
      { match: 'vs Mumbai Mavericks', runs: 56, wickets: 0, result: 'Lost' },
      { match: 'vs Kolkata Kings', runs: 72, wickets: 0, result: 'Won' },
      { match: 'vs Hyderabad Hawks', runs: 43, wickets: 0, result: 'Won' }
    ]
  },
  {
    id: 11,
    name: 'Suresh Raina',
    team: teams[2],
    role: 'All-Rounder',
    photo: 'https://images.unsplash.com/photo-1633498020526-0403169e822d',
    stats: {
      matches: 12,
      runs: 412,
      average: 45.8,
      strikeRate: 151.3,
      fifties: 3,
      hundreds: 1,
      wickets: 9,
      economy: 7.8
    },
    recentPerformances: [
      { match: 'vs Chennai Challengers', runs: 61, wickets: 1, result: 'Won' },
      { match: 'vs Pune Panthers', runs: 38, wickets: 2, result: 'Won' },
      { match: 'vs Jaipur Jaguars', runs: 54, wickets: 0, result: 'Lost' }
    ]
  }
];

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
    url: "https://www.htsyndication.com/brand-stories/article/iscl-season-1-concludes-as-a-historic-milestone-for-indian-softball-cricket%3B-punjab-crowned-champions-in-a-thrilling-finale/96186547" // <-- Connected HT Syndication Finale link!
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
  }
];

export const pointsTable = [
  { position: 1, team: teams[0], played: 12, won: 8, lost: 3, nr: 1, points: 17, nrr: '+1.24', lastFive: ['W', 'W', 'L', 'W', 'W'] },
  { position: 2, team: teams[1], played: 12, won: 7, lost: 4, nr: 1, points: 15, nrr: '+0.87', lastFive: ['W', 'L', 'W', 'W', 'L'] },
  { position: 3, team: teams[2], played: 12, won: 7, lost: 5, nr: 0, points: 14, nrr: '+0.52', lastFive: ['W', 'W', 'L', 'L', 'W'] },
  { position: 4, team: teams[3], played: 12, won: 6, lost: 5, nr: 1, points: 13, nrr: '+0.31', lastFive: ['L', 'W', 'W', 'L', 'W'] },
  { position: 5, team: teams[4], played: 12, won: 5, lost: 6, nr: 1, points: 11, nrr: '-0.18', lastFive: ['W', 'L', 'L', 'W', 'L'] },
  { position: 6, team: teams[5], played: 12, won: 4, lost: 7, nr: 1, points: 9, nrr: '-0.64', lastFive: ['L', 'L', 'W', 'L', 'W'] },
  { position: 7, team: teams[6], played: 12, won: 3, lost: 8, nr: 1, points: 7, nrr: '-1.12', lastFive: ['L', 'L', 'L', 'W', 'L'] },
  { position: 8, team: teams[7], played: 12, won: 2, lost: 9, nr: 1, points: 5, nrr: '-1.47', lastFive: ['L', 'W', 'L', 'L', 'L'] }
];

export const tournamentStats = {
  totalMatches: 48,
  totalSixes: 342,
  highestScore: '102* by Vikram Patel',
  mostWickets: '18 by Rohan Mehta'
};

export const orangeCap = {
  player: players[1],
  runs: 523
};

export const purpleCap = {
  player: players[2],
  wickets: 18
};

