// Mock data service for ISCL website

// 1. MASTER TEAMS CONFIGURATION (1-32)
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

export const matches = [
  // Knockouts (101-113) & Group Stage (38-1)
  { id: 101, team1: { name: 'UTTAR PRADESH BLUE' }, team2: { name: 'PUNJAB' }, date: '2025-12-21', time: '19:30', venue: 'Kini Cricket Ground', status: 'completed', stage: 'FINAL', score: { team1: '104/6', team2: '108/8' }, summary: 'Punjab won by 2 wickets.', winner: 'PUNJAB' },
  { id: 102, team1: { name: 'PUNJAB' }, team2: { name: 'UTTARAKHAND' }, date: '2025-12-19', time: '16:00', venue: 'Kini Cricket Ground', status: 'completed', stage: 'SEMIFINAL 2', score: { team1: '70/8', team2: '62/7' }, summary: 'Punjab won by 8 runs.', winner: 'PUNJAB' },
  { id: 103, team1: { name: 'UTTAR PRADESH BLUE' }, team2: { name: 'RAJASTHAN' }, date: '2025-12-18', time: '16:00', venue: 'Kini Cricket Ground', status: 'completed', stage: 'SEMIFINAL 1', score: { team1: '82/7', team2: '77/8' }, summary: 'UP Blue won by 5 runs.', winner: 'UTTAR PRADESH BLUE' },
  { id: 104, team1: { name: 'PUNJAB' }, team2: { name: 'KARNATAKA' }, date: '2025-12-17', time: '14:00', venue: 'Kini Cricket Ground', status: 'completed', stage: 'QUARTER FINAL 4', score: { team1: '89/9', team2: '73/5' }, summary: 'Punjab won by 16 runs.', winner: 'PUNJAB' },
  { id: 105, team1: { name: 'RAJASTHAN' }, team2: { name: 'ODISHA' }, date: '2025-12-17', time: '11:30', venue: 'Kini Cricket Ground', status: 'completed', stage: 'QUARTER FINAL 3', score: { team1: '102/8', team2: '62/10' }, summary: 'Rajasthan won by 40 runs.', winner: 'RAJASTHAN' },
  { id: 106, team1: { name: 'HARYANA' }, team2: { name: 'KARNATAKA' }, date: '2025-12-16', time: '14:00', venue: 'Kini Cricket Ground', status: 'completed', stage: 'SUPER 16 M-8', score: { team1: '62/10', team2: '64/2' }, summary: 'Karnataka won by 8 wickets.', winner: 'KARNATAKA' },
  { id: 107, team1: { name: 'ODISHA' }, team2: { name: 'MUMBAI' }, date: '2025-12-16', time: '09:30', venue: 'Kini Cricket Ground', status: 'completed', stage: 'SUPER 16 M-7', summary: 'Odisha won by 19 runs.', winner: 'ODISHA' },
  { id: 108, team1: { name: 'WEST BENGAL' }, team2: { name: 'PUNJAB' }, date: '2025-12-12', time: '19:00', venue: 'Kini Cricket Ground', status: 'completed', stage: 'SUPER 16 M-6', score: { team1: '64/9', team2: '65/10' }, summary: 'Punjab Golden Fighters won by 1 runs.', winner: 'PUNJAB' },
  { id: 109, team1: { name: 'RAJASTHAN' }, team2: { name: 'DELHI' }, date: '2025-12-12', time: '16:00', venue: 'Kini Cricket Ground', status: 'completed', stage: 'SUPER 16 M-5', score: { team1: '80/6', team2: '56/10' }, summary: 'Royal Rajaputs (Rajasthan) won by 24 runs.', winner: 'RAJASTHAN' },
  { id: 110, team1: { name: 'MADHYA PRADESH' }, team2: { name: 'ANDHRA PRADESH' }, date: '2025-12-08', time: '14:00', venue: 'Kini Cricket Ground', status: 'completed', stage: 'SUPER 16 M-4', score: { team1: '72/8', team2: '73/3' }, summary: 'Andhra Warriors won by 7 wickets.', winner: 'ANDHRA PRADESH' },
  { id: 111, team1: { name: 'CHANDIGARH' }, team2: { name: 'UTTAR PRADESH BLUE' }, date: '2025-12-08', time: '11:00', venue: 'Kini Cricket Ground', status: 'completed', stage: 'SUPER 16 M-3', score: { team1: '82/3', team2: '95/7' }, summary: 'Kings UP Blue won by 13 runs.', winner: 'UTTAR PRADESH BLUE' },
  { id: 112, team1: { name: 'UTTARAKHAND' }, team2: { name: 'MAHARASHTRA' }, date: '2025-12-04', time: '17:00', venue: 'Kini Cricket Ground', status: 'completed', stage: 'SUPER 16 M-2', score: { team1: '55/1', team2: '54/8' }, summary: 'Uttara Raptors won by 9 wickets.', winner: 'UTTARAKHAND' },
  { id: 113, team1: { name: 'GUJARAT' }, team2: { name: 'TELANGANA' }, date: '2025-12-04', time: '11:00', venue: 'Kini Cricket Ground', status: 'completed', stage: 'SUPER 16 M-1', score: { team1: '78/7', team2: '79/4' }, summary: 'Telangana Singhams won by 6 wickets.', winner: 'TELANGANA' },
  { id: 38, team1: { name: 'HARYANA' }, team2: { name: 'JAMMU AND KASHMIR' }, date: '2025-12-13', time: '10:30', status: 'completed', stage: 'ISCL MATCH 38', score: { team1: '80/3', team2: '78/7' }, summary: 'Phoenix Haryana won by 7 wickets.', winner: 'HARYANA' },
  { id: 37, team1: { name: 'MUMBAI' }, team2: { name: 'HIMACHAL PRADESH' }, date: '2025-12-12', time: '21:00', status: 'completed', stage: 'ISCL MATCH 37', score: { team1: '80/10', team2: '75/4' }, summary: 'Mumbai Royals won by 5 runs.', winner: 'MUMBAI' },
  { id: 36, team1: { name: 'DELHI' }, team2: { name: 'PUNJAB' }, date: '2025-12-12', time: '18:00', status: 'completed', stage: 'ISCL MATCH 36', score: { team1: '69/6', team2: '72/5' }, summary: 'Punjab Golden Fighters won by 5 wickets.', winner: 'PUNJAB' },
  { id: 35, team1: { name: 'DELHI' }, team2: { name: 'ASSAM' }, date: '2025-12-11', time: '20:00', status: 'completed', stage: 'ISCL MATCH 35', score: { team1: '73/7', team2: '75/3' }, summary: 'Hornbill Tigers (Assam) won by 7 wickets.', winner: 'ASSAM' },
  { id: 34, team1: { name: 'PUNJAB' }, team2: { name: 'JHARKHAND' }, date: '2025-12-11', time: '17:30', status: 'completed', stage: 'ISCL MATCH 34', score: { team1: '114/9', team2: '82/6' }, summary: 'Punjab Golden Fighters won by 32 runs.', winner: 'PUNJAB' },
  { id: 33, team1: { name: 'GOA' }, team2: { name: 'WEST BENGAL' }, date: '2025-12-11', time: '15:00', status: 'completed', stage: 'ISCL MATCH 33', score: { team1: '94/6', team2: '90/3' }, summary: 'Kadamba Kings Goa won by 4 runs.', winner: 'GOA' },
  { id: 32, team1: { name: 'UTTAR PRADESH RED' }, team2: { name: 'RAJASTHAN' }, date: '2025-12-11', time: '12:00', status: 'completed', stage: 'ISCL MATCH 32', score: { team1: '73/10', team2: '90/4' }, summary: 'Royal Rajputs won by 17 runs.', winner: 'RAJASTHAN' },
  { id: 31, team1: { name: 'UTTAR PRADESH RED' }, team2: { name: 'WEST BENGAL' }, date: '2025-12-10', time: '20:30', status: 'completed', stage: 'ISCL MATCH 31', score: { team1: '55/8', team2: '90/7' }, summary: 'Ma Dugga Warriors won by 35 runs.', winner: 'WEST BENGAL' },
  { id: 30, team1: { name: 'ASSAM' }, team2: { name: 'PUNJAB' }, date: '2025-12-10', time: '18:00', status: 'completed', stage: 'ISCL MATCH 30', score: { team1: '41/7', team2: '88/7' }, summary: 'Punjab Golden Fighters won by 47 runs.', winner: 'PUNJAB' },
  { id: 29, team1: { name: 'DELHI' }, team2: { name: 'JHARKHAND' }, date: '2025-12-10', time: '15:30', status: 'completed', stage: 'ISCL MATCH 29', score: { team1: '68/10', team2: '60/6' }, summary: 'Delhi Dare Strikers won by 8 runs.', winner: 'DELHI' },
  { id: 28, team1: { name: 'GOA' }, team2: { name: 'RAJASTHAN' }, date: '2026-01-10', time: '13:00', status: 'completed', stage: 'ISCL MATCH 28', score: { team1: '77/10', team2: '91/3' }, summary: 'Royal Rajaputs won by 14 runs.', winner: 'RAJASTHAN' },
  { id: 27, team1: { name: 'RAJASTHAN' }, team2: { name: 'WEST BENGAL' }, date: '2026-01-09', time: '20:00', status: 'completed', stage: 'ISCL MATCH 27', score: { team1: '70/2', team2: '69/8' }, summary: 'Royal Rajaputs won by 8 wickets.', winner: 'RAJASTHAN' },
  { id: 26, team1: { name: 'GOA' }, team2: { name: 'UTTAR PRADESH RED' }, date: '2025-12-09', time: '16:00', status: 'completed', stage: 'ISCL MATCH 26', score: { team1: '71/8', team2: '72/8' }, summary: 'Twin Hills United won by 1 run.', winner: 'UTTAR PRADESH RED' },
  { id: 25, team1: { name: 'ASSAM' }, team2: { name: 'JHARKHAND' }, date: '2025-12-09', time: '13:30', status: 'completed', stage: 'ISCL MATCH 25', score: { team1: '67/8', team2: '90/6' }, summary: 'Jharkhand Strikers won by 23 runs.', winner: 'JHARKHAND' },
  { id: 24, team1: { name: 'LAKSHADWEEP' }, team2: { name: 'ANDAMAN' }, date: '2025-12-07', time: '18:00', status: 'completed', stage: 'ISCL MATCH 24', score: { team1: '65/5', team2: '95/6' }, summary: 'Andaman Admirals won by 30 runs.', winner: 'ANDAMAN' },
  { id: 23, team1: { name: 'SOUTH ZONE' }, team2: { name: 'UTTAR PRADESH BLUE' }, date: '2025-12-07', time: '16:00', status: 'completed', stage: 'ISCL MATCH 23', score: { team1: '60/8', team2: '98/6' }, summary: 'Kings UP Blue won by 38 runs.', winner: 'UTTAR PRADESH BLUE' },
  { id: 22, team1: { name: 'ANDHRA PRADESH' }, team2: { name: 'ANDAMAN' }, date: '2025-12-07', time: '13:30', status: 'completed', stage: 'ISCL MATCH 22', score: { team1: '93/4', team2: '76/3' }, summary: 'Andhra Warriors won by 17 runs.', winner: 'ANDHRA PRADESH' },
  { id: 21, team1: { name: 'MADHYA PRADESH' }, team2: { name: 'SOUTH ZONE' }, date: '2025-12-07', time: '11:00', status: 'completed', stage: 'ISCL MATCH 21', score: { team1: '58/9', team2: '59/9' }, summary: 'South Zone won by 1 runs.', winner: 'SOUTH ZONE' },
  { id: 20, team1: { name: 'LAKSHADWEEP' }, team2: { name: 'CHANDIGARH' }, date: '2025-12-06', time: '19:00', status: 'completed', stage: 'ISCL MATCH 20', score: { team1: '35/10', team2: '36/1' }, summary: 'Chandigarh won by 9 wickets.', winner: 'CHANDIGARH' },
  { id: 19, team1: { name: 'SOUTH ZONE' }, team2: { name: 'TAMIL NADU' }, date: '2025-12-06', time: '16:00', status: 'completed', stage: 'ISCL MATCH 19', score: { team1: '121/5', team2: '58/9' }, summary: 'South Zone won by 63 runs.', winner: 'SOUTH ZONE' },
  { id: 18, team1: { name: 'ANDHRA PRADESH' }, team2: { name: 'LAKSHADWEEP' }, date: '2025-12-06', time: '13:30', status: 'completed', stage: 'ISCL MATCH 18', score: { team1: '50/2', team2: '49/5' }, summary: 'Andhra Warriors won by 8 wickets.', winner: 'ANDHRA PRADESH' },
  { id: 17, team1: { name: 'UTTAR PRADESH BLUE' }, team2: { name: 'MADHYA PRADESH' }, date: '2025-12-05', time: '20:00', status: 'completed', stage: 'ISCL MATCH 17', score: { team1: '79/8', team2: '81/5' }, summary: 'Malwa Royals won by 5 wickets.', winner: 'MADHYA PRADESH' },
  { id: 16, team1: { name: 'CHANDIGARH' }, team2: { name: 'ANDAMAN' }, date: '2025-12-05', time: '17:30', status: 'completed', stage: 'ISCL MATCH 16', score: { team1: '94/6', team2: '70/6' }, summary: 'Chandigarh won by 24 runs.', winner: 'CHANDIGARH' },
  { id: 15, team1: { name: 'MADHYA PRADESH' }, team2: { name: 'TAMIL NADU' }, date: '2025-12-05', time: '15:00', status: 'completed', stage: 'ISCL MATCH 15', score: { team1: '136/1', team2: '46/3' }, summary: 'Malwa Royals won by 90 runs.', winner: 'MADHYA PRADESH' },
  { id: 14, team1: { name: 'ANDHRA PRADESH' }, team2: { name: 'CHANDIGARH' }, date: '2025-12-05', time: '12:00', status: 'completed', stage: 'ISCL MATCH 14', score: { team1: '98/5', team2: '147/2' }, summary: 'Chandigarh won by 49 runs.', winner: 'CHANDIGARH' },
  { id: 13, team1: { name: 'UTTAR PRADESH BLUE' }, team2: { name: 'TAMIL NADU' }, date: '2025-12-04', time: '20:00', status: 'completed', stage: 'ISCL MATCH 13', score: { team1: '92/6', team2: '90/7' }, summary: 'Kings UP Blue won by 2 runs.', winner: 'UTTAR PRADESH BLUE' },
  { id: 12, team1: { name: 'UTTARAKHAND' }, team2: { name: 'BENGALURU' }, date: '2025-12-04', time: '14:00', status: 'completed', stage: 'ISCL MATCH 12', score: { team1: '82/5', team2: '84/4' }, summary: 'Real Challengers Bengaluru won by 6 wickets.', winner: 'BENGALURU' },
  { id: 11, team1: { name: 'NORTH EAST' }, team2: { name: 'MAHARASHTRA' }, date: '2025-12-03', time: '18:00', status: 'completed', stage: 'ISCL MATCH 11', score: { team1: '46/8', team2: '107/8' }, summary: 'Maharashtra won by 61 runs.', winner: 'MAHARASHTRA' },
  { id: 10, team1: { name: 'TELANGANA' }, team2: { name: 'BIHAR' }, date: '2025-12-03', time: '15:30', status: 'completed', stage: 'ISCL MATCH 10', score: { team1: '103/6', team2: '90/9' }, summary: 'Telangana won by 13 runs.', winner: 'TELANGANA' },
  { id: 9, team1: { name: 'GUJARAT' }, team2: { name: 'CHHATTISGARH' }, date: '2025-12-03', time: '15:30', status: 'completed', stage: 'ISCL MATCH 9', score: { team1: '120/8', team2: '39/10' }, summary: 'Gujarati Kings won by 81 runs.', winner: 'GUJARAT' },
  { id: 8, team1: { name: 'UTTARAKHAND' }, team2: { name: 'TELANGANA' }, date: '2025-12-03', time: '15:30', status: 'completed', stage: 'ISCL MATCH 8', score: { team1: '127/5', team2: '80/8' }, summary: 'Uttara Raptors won by 47 runs.', winner: 'UTTARAKHAND' },
  { id: 7, team1: { name: 'BENGALURU' }, team2: { name: 'BIHAR' }, date: '2025-12-02', time: '11:30', status: 'completed', stage: 'ISCL MATCH 7', score: { team1: '88/9', team2: '89/7' }, summary: 'Bihar won by 1 run.', winner: 'BIHAR' },
  { id: 6, team1: { name: 'MAHARASHTRA' }, team2: { name: 'CHHATTISGARH' }, date: '2025-12-02', time: '14:30', status: 'completed', stage: 'ISCL MATCH 6', score: { team1: '59/9', team2: '54/9' }, summary: 'Maharashtra won by 5 runs.', winner: 'MAHARASHTRA' },
  { id: 5, team1: { name: 'GUJARAT' }, team2: { name: 'NORTH EAST' }, date: '2025-12-02', time: '08:00', status: 'completed', stage: 'ISCL MATCH 5', score: { team1: '69/0', team2: '66/8' }, summary: 'Gujarati Kings won by 10 wickets.', winner: 'GUJARAT' },
  { id: 4, team1: { name: 'BENGALURU' }, team2: { name: 'TELANGANA' }, date: '2025-12-02', time: '08:00', status: 'completed', stage: 'ISCL MATCH 4', score: { team1: '73/8', team2: '90/4' }, summary: 'Telangana won by 17 runs.', winner: 'TELANGANA' },
  { id: 3, team1: { name: 'NORTH EAST' }, team2: { name: 'CHHATTISGARH' }, date: '2025-12-01', time: '15:30', status: 'completed', stage: 'ISCL MATCH 3', score: { team1: '72/4', team2: '73/1' }, summary: 'Raipur Rage won by 9 wickets.', winner: 'CHHATTISGARH' },
  { id: 2, team1: { name: 'BIHAR' }, team2: { name: 'UTTARAKHAND' }, date: '2025-12-01', time: '13:00', status: 'completed', stage: 'ISCL MATCH 2', score: { team1: '69/7', team2: '70/5' }, summary: 'Uttara Raptors won by 5 wickets.', winner: 'UTTARAKHAND' },
  { id: 1, team1: { name: 'GUJARAT' }, team2: { name: 'MAHARASHTRA' }, date: '2025-12-01', time: '10:00', status: 'completed', stage: 'ISCL MATCH 1', score: { team1: '109/5', team2: '42/10' }, summary: 'Gujarati Kings won by 67 runs.', winner: 'GUJARAT' }
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

// 5. MASTER LEADERBOARD STANDINGS MATRIX
export const pointsTable = [
  { position: 1, team: { name: "PUNJAB", logo: "🏏" }, played: 7, won: 7, lost: 0, nr: 0, nrr: "+1.946", forRuns: "606/61.83", againstRuns: "495/63.00", points: 14, lastFive: ["W", "W", "W", "W", "W"] },
  { position: 2, team: { name: "RAJASTHAN", logo: "🏏" }, played: 6, won: 5, lost: 1, nr: 0, nrr: "+1.435", forRuns: "510/53.33", againstRuns: "419/51.50", points: 10, lastFive: ["W", "W", "W", "W", "L"] },
  { position: 3, team: { name: "UTTAR PRADESH BLUE", logo: "🏏" }, played: 7, won: 5, lost: 2, nr: 0, nrr: "+1.356", forRuns: "648/63.00", againstRuns: "560/62.67", points: 10, lastFive: ["W", "W", "L", "W", "L"] },
  { position: 4, team: { name: "UTTARAKHAND", logo: "🏏" }, played: 6, won: 4, lost: 2, nr: 0, nrr: "+2.314", forRuns: "485/48.33", againstRuns: "417/54.00", points: 8, lastFive: ["W", "L", "W", "W", "L"] },
  { position: 5, team: { name: "CHANDIGARH", logo: "🏏" }, played: 4, won: 3, lost: 1, nr: 0, nrr: "+3.883", forRuns: "359/29.33", againstRuns: "298/35.67", points: 6, lastFive: ["W", "W", "W", "L"] },
  { position: 6, team: { name: "MAHARASHTRA", logo: "🏏" }, played: 5, won: 3, lost: 2, nr: 0, nrr: "+2.073", forRuns: "375/40.00", againstRuns: "375/51.33", points: 6, lastFive: ["W", "L", "W", "L", "W"] },
  { position: 7, team: { name: "KARNATAKA", logo: "🏏" }, played: 5, won: 3, lost: 2, nr: 0, nrr: "+1.793", forRuns: "397/38.00", againstRuns: "384/44.33", points: 6, lastFive: ["L", "W", "W", "L", "W"] },
  { position: 8, team: { name: "GUJARAT", logo: "🏏" }, played: 5, won: 3, lost: 2, nr: 0, nrr: "+0.344", forRuns: "487/52.17", againstRuns: "339/37.67", points: 6, lastFive: ["W", "L", "L", "W", "W"] },
  { position: 9, team: { name: "HARYANA", logo: "🏏" }, played: 4, won: 3, lost: 1, nr: 0, nrr: "+0.252", forRuns: "295/33.17", againstRuns: "278/32.17", points: 6, lastFive: ["W", "W", "L", "W"] },
  { position: 10, team: { name: "MUMBAI", logo: "🏏" }, played: 4, won: 3, lost: 1, nr: 0, nrr: "+0.013", forRuns: "323/35.33", againstRuns: "353/36.00", points: 6, lastFive: ["L", "W", "W", "W"] },
  { position: 11, team: { name: "ANDHRA PRADESH", logo: "🏏" }, played: 5, won: 3, lost: 2, nr: 0, nrr: "-0.273", forRuns: "374/40.00", againstRuns: "433/45.00", points: 6, lastFive: ["W", "L", "W", "L", "W"] },
  { position: 12, team: { name: "TELANGANA", logo: "🏏" }, played: 5, won: 3, lost: 2, nr: 0, nrr: "-0.884", forRuns: "414/43.67", againstRuns: "466/45.00", points: 6, lastFive: ["L", "W", "L", "W", "W"] },
  { position: 13, team: { name: "MADHYA PRADESH", logo: "🏏" }, played: 4, won: 2, lost: 2, nr: 0, nrr: "+2.423", forRuns: "347/35.67", againstRuns: "257/35.17", points: 4, lastFive: ["W", "L", "W", "L"] },
  { position: 14, team: { name: "SOUTH ZONE", logo: "🏏" }, played: 3, won: 2, lost: 1, nr: 0, nrr: "+0.962", forRuns: "240/27.00", againstRuns: "214/27.00", points: 4, lastFive: ["W", "L", "W"] },
  { position: 15, team: { name: "ODISHA", logo: "🏏" }, played: 5, won: 2, lost: 3, nr: 0, nrr: "-0.274", forRuns: "405/44.83", againstRuns: "400/43.00", points: 4, lastFive: ["L", "W", "L", "W", "L"] },
  { position: 16, team: { name: "WEST BENGAL", logo: "🏏" }, played: 4, won: 1, lost: 3, nr: 0, nrr: "+0.623", forRuns: "313/36.00", againstRuns: "284/35.17", points: 2, lastFive: ["L", "L", "W", "L"] },
  { position: 17, team: { name: "KERALA", logo: "🏏" }, played: 3, won: 1, lost: 2, nr: 0, nrr: "-0.252", forRuns: "208/26.00", againstRuns: "209/25.33", points: 2, lastFive: ["L", "W", "L"] },
  { position: 18, team: { name: "GOA", logo: "🏏" }, played: 3, won: 1, lost: 2, nr: 0, nrr: "-0.352", forRuns: "242/26.83", againstRuns: "253/27.00", points: 2, lastFive: ["W", "L", "L"] },
  { position: 19, team: { name: "ANDAMAN", logo: "🏏" }, played: 3, won: 1, lost: 2, nr: 0, nrr: "-0.412", forRuns: "241/27.00", againstRuns: "252/27.00", points: 2, lastFive: ["L", "L", "W"] },
  { position: 20, team: { name: "BENGALURU", logo: "🏏" }, played: 3, won: 1, lost: 2, nr: 0, nrr: "-0.592", forRuns: "245/27.00", againstRuns: "261/27.00", points: 2, lastFive: ["L", "W", "L"] },
  { position: 21, team: { name: "DELHI", logo: "🏏" }, played: 4, won: 1, lost: 3, nr: 0, nrr: "-0.612", forRuns: "266/34.50", againstRuns: "287/34.50", points: 2, lastFive: ["L", "L", "L", "W"] },
  { position: 22, team: { name: "JHARKHAND", logo: "🏏" }, played: 3, won: 1, lost: 2, nr: 0, nrr: "-0.632", forRuns: "232/27.00", againstRuns: "249/27.00", points: 2, lastFive: ["L", "W", "L"] },
  { position: 23, team: { name: "BIHAR", logo: "🏏" }, played: 3, won: 1, lost: 2, nr: 0, nrr: "-0.852", forRuns: "248/27.00", againstRuns: "261/26.00", points: 2, lastFive: ["W", "L", "L"] },
  { position: 24, team: { name: "NORTH ZONE", logo: "🏏" }, played: 3, won: 1, lost: 2, nr: 0, nrr: "-1.192", forRuns: "235/26.00", againstRuns: "237/23.17", points: 2, lastFive: ["L", "L", "W"] },
  { position: 25, team: { name: "UTTAR PRADESH RED", logo: "🏏" }, played: 4, won: 1, lost: 3, nr: 0, nrr: "-1.373", forRuns: "304/35.33", againstRuns: "359/36.00", points: 2, lastFive: ["L", "L", "W", "L"] },
  { position: 26, team: { name: "JAMMU AND KASHMIR", logo: "🏏" }, played: 3, won: 1, lost: 2, nr: 0, nrr: "-1.662", forRuns: "207/25.50", againstRuns: "251/25.67", points: 2, lastFive: ["L", "W", "L"] },
  { position: 27, team: { name: "CHHATTISGARH", logo: "🏏" }, played: 3, won: 1, lost: 2, nr: 0, nrr: "-2.231", forRuns: "166/23.50", againstRuns: "251/27.00", points: 2, lastFive: ["L", "L", "W"] },
  { position: 28, team: { name: "ASSAM", logo: "🏏" }, played: 3, won: 1, lost: 2, nr: 0, nrr: "-2.391", forRuns: "183/26.50", againstRuns: "251/27.00", points: 2, lastFive: ["W", "L", "L"] },
  { position: 29, team: { name: "HIMACHAL PRADESH", logo: "🏏" }, played: 3, won: 0, lost: 3, nr: 0, nrr: "-1.692", forRuns: "238/26.67", againstRuns: "276/26.00", points: 0, lastFive: ["L", "L", "L"] },
  { position: 30, team: { name: "NORTH EAST", logo: "🏏" }, played: 3, won: 0, lost: 3, nr: 0, nrr: "-5.231", forRuns: "184/27.00", againstRuns: "249/20.67", points: 0, lastFive: ["L", "L", "L"] },
  { position: 31, team: { name: "LAKSHADWEEP", logo: "🏏" }, played: 3, won: 0, lost: 3, nr: 0, nrr: "-5.611", forRuns: "149/26.67", againstRuns: "181/16.17", points: 0, lastFive: ["L", "L", "L"] },
  { position: 32, team: { name: "TAMIL NADU", logo: "🏏" }, played: 3, won: 0, lost: 3, nr: 0, nrr: "-5.741", forRuns: "194/27.00", againstRuns: "349/27.00", points: 0, lastFive: ["L", "L", "L"] }
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