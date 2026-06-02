import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Teams', path: '/teams' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Points table', path: '/points-table' },
    { name: 'Players', path: '/players' },
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
         <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E91E8C] via-[#8B5CF6] to-[#2563EB] rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 "></div>

            <div className="relative">
              <img
                src="/images/logo.png"
                alt="ISCL"
                className="h-12 w-auto sm:h-14 md:h-16"
              />
            </div>
          </div>
        </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-[#2563EB]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-[#2563EB]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Watch Live Button */}
          <div className="hidden md:block">
            <button className="relative px-6 py-2 rounded-full bg-gradient-to-r from-[#E91E8C] to-[#FF6B1A] text-white font-semibold text-sm overflow-hidden group transition-all duration-200 active:scale-[0.98]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B1A] to-[#E91E8C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Watch live
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/[0.08] bg-[#0A0A0A]/98 backdrop-blur-md"
          >
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20'
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#E91E8C] to-[#FF6B1A] text-white font-semibold text-sm transition-all duration-200 active:scale-[0.98]">
                <span className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Watch live
                </span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;