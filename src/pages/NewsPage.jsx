import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MarqueeScoreTicker from '@/components/MarqueeScoreTicker.jsx';
import FilterBar from '@/components/FilterBar.jsx';
import { news as mockNews } from '@/lib/mockData.js';
import { db } from '@/lib/supabaseClient.js';

const NewsPage = () => {
  const [news, setNews] = useState(mockNews);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const fetchedNews = await db.getNews();
        if (fetchedNews && fetchedNews.length) {
          setNews(fetchedNews);
        }
      } catch (err) {
        console.warn("News page database fetch failed:", err);
      }
    };
    fetchNewsData();
  }, []);

  const filters = [
    { label: 'All Articles', value: 'all' },
    { label: 'Match reports', value: 'Match Report' },
    { label: 'Highlights', value: 'Highlight' },
    { label: 'Press releases', value: 'Press Release' },
    { label: 'Interviews', value: 'Interview' }
  ];

  const filteredNews = activeFilter === 'all' 
    ? news 
    : news.filter(n => n.tag === activeFilter);

  const featuredArticle = news[0];

  // Simple handler to open external links safely
  const handleArticleClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <Helmet>
        <title>News & Media - ISCL</title>
        <meta name="description" content="Stay updated with the latest news, match reports, interviews, and highlights from India's biggest street cricket league." />
      </Helmet>

      <MarqueeScoreTicker />
      <Header />

      <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Layout Section */}
          <div className="border-b border-white/10 pb-8 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Media Room
              </h1>
              <p className="text-lg text-white/50 mt-2 max-w-md">
                Stories, match breakdowns, and statements straight from the heart of the league.
              </p>
            </motion.div>

            {/* Premium Filter Placement */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-start md:justify-end"
            >
              <FilterBar 
                filters={filters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </motion.div>
          </div>

          {/* Featured Article Section */}
          {activeFilter === 'all' && featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              onClick={() => handleArticleClick(featuredArticle.url)}
              className="mb-24 group cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Large Featured Image Column */}
                <div className="lg:col-span-7 overflow-hidden rounded-3xl border border-white/10 bg-[#141414] shadow-2xl relative aspect-[16/10]">
                  <motion.img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover origin-center"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#E91E8C] text-white shadow-lg">
                      🔥 {featuredArticle.tag}
                    </span>
                  </div>
                </div>

                {/* Text Content Column */}
                <div className="lg:col-span-5 h-full flex flex-col justify-between py-2">
                  <div>
                    <div className="text-sm font-semibold tracking-widest text-[#E91E8C] uppercase mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {new Date(featuredArticle.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight group-hover:text-white/80 transition-colors duration-200" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {featuredArticle.title}
                    </h2>
                    
                    <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 font-light">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div>
                    <span className="inline-flex items-center text-sm font-bold text-white uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                      Register Your Team Now <span className="ml-2 text-[#2563EB]">→</span>
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* Elegant Horizontal Divider */}
          <div className="w-full h-[1px] bg-white/5 mb-16" />

          {/* 3-Column Editorial News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {(activeFilter === 'all' ? filteredNews.slice(1) : filteredNews).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                onClick={() => handleArticleClick(article.url)}
                className="group cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  {/* Clean Image Frame Container */}
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-[#141414] mb-6 relative">
                    <motion.img 
                      src={article.image}
                      alt={article.title}
                      className={`w-full h-full object-cover ${article.image.includes('stadium') ? 'object-bottom' : 'origin-center'}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-black/70 text-white backdrop-blur-md border border-white/10">
                        {article.tag}
                      </span>
                    </div>
                  </div>

                  {/* Dateline */}
                  <div className="text-xs font-medium text-white/40 mb-3 uppercase tracking-wider">
                    {new Date(article.date).toLocaleDateString('en-IN', { 
                      day: 'numeric', 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </div>

                  {/* Article Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-white/80 transition-colors duration-150 line-clamp-2" style={{ fontFamily: 'Rajdhani, sans-serif', lineHeight: '1.2' }}>
                    {article.title}
                  </h3>

                  {/* Excerpt Summary */}
                  <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                    {article.excerpt}
                  </p>
                </div>

                {/* Premium Card Footer Action */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest uppercase text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                    View Story
                  </span>
                  <span className="text-white/30 group-hover:text-[#2563EB] text-sm transition-colors duration-200">→</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty Fallback State */}
          {filteredNews.length === 0 && (
            <div className="text-center py-24 border border-dashed border-white/5 rounded-3xl bg-[#141414]/20">
              <p className="text-white/40 text-lg">No stories found under this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NewsPage;