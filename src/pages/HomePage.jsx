import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Zap, Target, Users } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MarqueeScoreTicker from '@/components/MarqueeScoreTicker.jsx';
import ParticleHero from '@/components/ParticleHero.jsx';
import MatchCard from '@/components/MatchCard.jsx';
import NewsCard from '@/components/NewsCard.jsx';
import PlayerCard from '@/components/PlayerCard.jsx';
import StatsBar from '@/components/StatsBar.jsx';
import PointsTableWidget from "@/components/PointsTableWidget.jsx"; // Component successfully linked
import { matches, news, players, pointsTable, tournamentStats } from '@/lib/mockData.js';

const HomePage = () => {
  const featuredMatch = matches.find(m => m.status === 'upcoming') || matches[0];
  const latestNews = news.slice(0, 4);
  const featuredPlayer = players[0];
  const topTeams = pointsTable.slice(0, 4);

  return <>
      <Helmet>
        <title>ISCL - India's Biggest Softball Cricket Leagueee</title>

        <link
          rel="icon"
          type="image/png"
          href="/images/logo.png?v=1"
        />

        <meta
          name="description"
          content="Experience the fastest, fiercest, and most fearless street cricket action. Watch live matches, follow your favorite teams, and witness cricket like never before."
        />
      </Helmet>

      <MarqueeScoreTicker />
      <Header />

      {/* Hero Section */}
      <ParticleHero>
        <div className="relative min-h-screen flex items-center justify-center px-4">
          
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Logo with Glow */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5
          }} className="inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E91E8C] via-[#8B5CF6] to-[#2563EB] rounded-2xl blur-2xl opacity-0 "></div>
                  <div className="relative">
                    <img
                      src="/images/logo.png"
                      alt="ISCL"
                      className="h-20 w-auto sm:h-28 md:h-36 lg:h-44"
                    />
                  </div>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-white to-[#60A5FA] bg-clip-text text-transparent" style={{
            fontFamily: 'Rajdhani, sans-serif',
            letterSpacing: '-0.02em',
            textBalance: 'balance'
          }}>
              India's biggest softball cricket league
            </motion.h1>

            {/* Sub-headline */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="text-2xl md:text-3xl text-white/80 font-semibold" style={{
            fontFamily: 'Poppins, sans-serif'
          }}>
              Gully to Glory
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.dispatchEvent(new Event('open-registration'))}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] text-white font-bold text-lg hover:brightness-110 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#2563EB]/50"
              >
                Register now
              </button>
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#E91E8C] to-[#FF6B1A] text-white font-bold text-lg hover:brightness-110 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#E91E8C]/50">
                Watch live
              </button>
            </motion.div>
          </div>
        </div>
      </ParticleHero>

      {/* Featured Match */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center" style={{
            fontFamily: 'Rajdhani, sans-serif',
            textBalance: 'balance'
          }}>
              Featured match
            </h2>
            <div className="max-w-2xl mx-auto">
              <MatchCard match={featuredMatch} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Replaced Old Static Table Layout with the New Premium Scrollable Cards Widget */}
      <PointsTableWidget />

      {/* Latest News */}
      <section className="py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{
              fontFamily: 'Rajdhani, sans-serif'
            }}>
                Latest news
              </h2>
              <Link to="/news" className="text-[#2563EB] font-semibold hover:text-[#2563EB]/80 transition-colors duration-200">
                View all news →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestNews.map((article, index) => <motion.div key={article.id} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                  <NewsCard article={article} />
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Player Spotlight */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center" style={{
            fontFamily: 'Rajdhani, sans-serif',
            textBalance: 'balance'
          }}>
              Player of the week
            </h2>
            <div className="max-w-md mx-auto">
              <PlayerCard player={featuredPlayer} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tournament Stats */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            
          </motion.div>
        </div>
      </section>

      <Footer />
    </>;
};
export default HomePage;