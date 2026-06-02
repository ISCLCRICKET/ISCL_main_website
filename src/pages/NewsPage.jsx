import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MarqueeScoreTicker from '@/components/MarqueeScoreTicker.jsx';
import FilterBar from '@/components/FilterBar.jsx';
import NewsCard from '@/components/NewsCard.jsx';
import GlassmorphismCard from '@/components/GlassmorphismCard.jsx';
import { news } from '@/lib/mockData.js';

const NewsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Match reports', value: 'Match Report' },
    { label: 'Highlights', value: 'Highlight' },
    { label: 'Press releases', value: 'Press Release' },
    { label: 'Interviews', value: 'Interview' }
  ];

  const filteredNews = activeFilter === 'all' 
    ? news 
    : news.filter(n => n.tag === activeFilter);

  const featuredArticle = news[0];

  return (
    <>
      <Helmet>
        <title>News - ISCL</title>
        <meta name="description" content="Stay updated with the latest news, match reports, interviews, and highlights from India's biggest street cricket league." />
      </Helmet>

      <MarqueeScoreTicker />
      <Header />

      <main className="min-h-screen bg-[#0A0A0A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '-0.02em', textBalance: 'balance' }}>
              Latest news
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Stay updated with all the action from ISCL
            </p>
          </motion.div>

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <GlassmorphismCard>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-video lg:aspect-auto">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover rounded-l-2xl"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2563EB]/20 text-[#2563EB] border border-[#2563EB]/30">
                      {featuredArticle.tag}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 leading-snug" style={{ fontFamily: 'Rajdhani, sans-serif', textBalance: 'balance' }}>
                    {featuredArticle.title}
                  </h2>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50">
                      {new Date(featuredArticle.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                    <button className="px-6 py-3 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/30 text-[#2563EB] font-semibold hover:bg-[#2563EB]/30 transition-all duration-200 active:scale-[0.98]">
                      Read full article
                    </button>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <FilterBar 
              filters={filters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </motion.div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NewsCard article={article} />
              </motion.div>
            ))}
          </div>

          {filteredNews.length <= 1 && (
            <div className="text-center py-20">
              <p className="text-white/60 text-lg">No news articles found</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NewsPage;