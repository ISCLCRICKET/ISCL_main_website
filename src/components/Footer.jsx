import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Teams', path: '/teams' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Points', path: '/points-table' },
    { name: 'Players', path: '/players' },
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-[#E91E8C]' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-[#FF6B1A]' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-[#2563EB]' }
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.08] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Section - Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg blur-md opacity-50"></div>
                <div className="flex items-center gap-3">
                  <img
                    src="/images/logo.png"
                    alt="ISCL"
                    className="h-20 w-auto"
                  />
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              India's biggest street cricket league
            </p>
          </div>

          {/* Center Section - Quick Links */}
          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">
              Quick links
            </span>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm hover:text-[#2563EB] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Section - Social Links */}
          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">
              Follow us
            </span>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-200 hover:scale-110 hover:bg-white/10 ${social.color}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2026 ISCL. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm hover:text-[#2563EB] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm hover:text-[#2563EB] transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;