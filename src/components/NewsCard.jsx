import React from 'react';
import { Link } from 'react-router-dom';
import GlassmorphismCard from './GlassmorphismCard.jsx';

const NewsCard = ({ article }) => {
  const tagColors = {
    'Match Report': 'bg-[#2563EB]/20 text-[#2563EB] border-[#2563EB]/30',
    'Highlight': 'bg-[#E91E8C]/20 text-[#E91E8C] border-[#E91E8C]/30',
    'Press Release': 'bg-[#AACC00]/20 text-[#AACC00] border-[#AACC00]/30',
    'Interview': 'bg-[#FF6B1A]/20 text-[#FF6B1A] border-[#FF6B1A]/30'
  };

  return (
    <GlassmorphismCard className="h-full">
      <div className="flex flex-col h-full">
        {/* Image */}
        <div className="relative aspect-video rounded-t-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Tag Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${tagColors[article.tag] || 'bg-white/10 text-white border-white/20'}`}>
              {article.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 space-y-3 flex flex-col">
          <h3 className="text-lg font-bold text-white leading-snug line-clamp-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            {article.title}
          </h3>
          
          <p className="text-sm text-white/60 line-clamp-2 flex-1">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] mt-auto">
            <span className="text-xs text-white/50">
              {new Date(article.date).toLocaleDateString('en-IN', { 
                day: 'numeric', 
                month: 'short', 
                year: 'numeric' 
              })}
            </span>
            <Link to={`/news/${article.id}`} className="text-sm font-semibold text-[#2563EB] hover:text-[#2563EB]/80 transition-colors duration-200">
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </GlassmorphismCard>
  );
};

export default NewsCard;