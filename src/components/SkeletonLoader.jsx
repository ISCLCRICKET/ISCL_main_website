import React from 'react';

const SkeletonLoader = ({ type = 'card', count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="bg-[#141414]/80 backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 space-y-4 animate-pulse">
            <div className="aspect-video bg-white/5 rounded-xl"></div>
            <div className="space-y-2">
              <div className="h-4 bg-white/5 rounded w-3/4"></div>
              <div className="h-4 bg-white/5 rounded w-1/2"></div>
            </div>
          </div>
        );
      
      case 'player':
        return (
          <div className="bg-[#141414]/80 backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 space-y-4 animate-pulse">
            <div className="aspect-square bg-white/5 rounded-xl"></div>
            <div className="space-y-2">
              <div className="h-4 bg-white/5 rounded w-2/3"></div>
              <div className="h-3 bg-white/5 rounded w-1/2"></div>
            </div>
          </div>
        );
      
      case 'text':
        return (
          <div className="space-y-2 animate-pulse">
            <div className="h-4 bg-white/5 rounded w-full"></div>
            <div className="h-4 bg-white/5 rounded w-5/6"></div>
            <div className="h-4 bg-white/5 rounded w-4/6"></div>
          </div>
        );
      
      default:
        return (
          <div className="h-32 bg-white/5 rounded-xl animate-pulse"></div>
        );
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;