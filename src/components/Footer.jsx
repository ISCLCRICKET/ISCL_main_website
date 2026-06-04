import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.08] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Adjusted grid column ratios to pull the Contact Us column to the left */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1.5fr_1fr] gap-8 md:gap-12">
          
          {/* Column 1 - Logo & Tagline */}
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

          {/* Column 2 - Contact Details (Shifted Left) */}
          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block text-white/90">
              Contact us
            </span>
            <ul className="space-y-3 text-sm">
              {/* UPDATED ADDRESS LINK: Configured with your custom Google Maps app shortcut */}
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-[#2563EB] flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/sRAUnRktE51iCVAq8?g_st=aw"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#2563EB] transition-colors duration-200"
                >
                  NO.8/1-2 Palace Loop road,Opp. Mount Carmel College, Vidhana Soudha, Bangalore North, Bangalore-560001, Karnataka, India
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#2563EB] flex-shrink-0" />
                <a href="tel:+919980745035" className="hover:text-[#2563EB] transition-colors">
                  +91 99807 45035
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#2563EB] flex-shrink-0" />
                <a href="mailto:info@iscl.cricket" className="hover:text-[#2563EB] transition-colors break-all">
                  info@iscl.cricket
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Links */}
          <div className="md:justify-self-end">
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block text-white/90 md:text-right">
              Follow us
            </span>
            <div className="flex gap-4">
              {/* Official Instagram Page */}
              <a
                href="https://www.instagram.com/indiansoftballcricketleague?igsh=NHk3MGtwN2F1Njlm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-200 hover:scale-110 hover:bg-white/10 hover:text-[#E91E8C]"
              >
                <Instagram size={20} />
              </a>

              {/* YouTube Placeholder */}
              <a
                href="https://www.youtube.com/@iscl_cricket_dummy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-200 hover:scale-110 hover:bg-white/10 hover:text-[#FF6B1A]"
              >
                <Youtube size={20} />
              </a>

              {/* Modern X Icon Placeholder */}
              <a
                href="https://x.com/iscl_cricket_dummy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-200 hover:scale-110 hover:bg-white/10 hover:text-[#2563EB] flex items-center justify-center"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  aria-hidden="true" 
                  className="w-5 h-5 fill-current"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section - Legal Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2026 ISCL. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-sm hover:text-[#2563EB] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm hover:text-[#2563EB] transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;