import React from 'react';

const FilterBar = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
            activeFilter === filter.value
              ? 'bg-[#2563EB] text-white'
              : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;