import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Users, Trophy, Calendar } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MarqueeScoreTicker from '@/components/MarqueeScoreTicker.jsx';
import StatsBar from '@/components/StatsBar.jsx';

const AboutPage = () => {
  const milestones = [
    { year: '2020', event: 'ISCL founded with vision to bring street cricket to the mainstream' },
    { year: '2021', event: 'First season launched with 4 teams across Mumbai and Delhi' },
    { year: '2023', event: 'Expanded to 8 teams covering major Indian cities' },
    { year: '2024', event: 'Reached 1 million live viewers milestone' },
    { year: '2026', event: 'Current season with record-breaking viewership and engagement' }
  ];

  return (
    <>
      <Helmet>
        <title>About - ISCL</title>
        <meta name="description" content="Learn about ISCL's mission to celebrate street cricket culture and discover every gully champion across India." />
      </Helmet>

      <MarqueeScoreTicker />
      <Header />

      <main className="min-h-screen bg-[#0A0A0A]">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#141414]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '-0.02em', textBalance: 'balance' }}>
                Born on the streets of India
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                ISCL is more than a cricket league. It's a celebration of the raw talent, fierce competition, and unbreakable spirit that defines street cricket across India.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-[#141414]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#E91E8C]/20 to-[#2563EB]/20 border border-white/10 mb-8">
                <span className="text-sm font-semibold text-white tracking-wide uppercase">Our mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '-0.02em', textBalance: 'balance' }}>
                We believe every gully has a champion
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">
                From narrow lanes to packed stadiums, we're bringing the authentic street cricket experience to millions. Our mission is to discover, celebrate, and elevate the incredible talent that exists in every corner of India.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Our journey
              </h2>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#E91E8C]/20 border border-white/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 pt-4">
                      <p className="text-white/80 leading-relaxed">{milestone.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Milestones Stats */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Impact by numbers
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <StatsBar icon={MapPin} value={8} label="Cities covered" color="#2563EB" />
                <StatsBar icon={Users} value={8} label="Teams" color="#E91E8C" />
                <StatsBar icon={Trophy} value={48} label="Matches played" color="#FF6B1A" />
                <StatsBar icon={Calendar} value={3} label="Seasons completed" color="#AACC00" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#141414]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Partners and sponsors
              </h2>
              <p className="text-white/60 mb-12 max-w-2xl mx-auto">
                We're proud to work with brands that share our passion for grassroots cricket
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-video rounded-xl bg-white/5 border border-white/[0.08] flex items-center justify-center">
                    <span className="text-white/40 text-sm">Partner logo</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-[#141414]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif', textBalance: 'balance' }}>
                Want to partner with us?
              </h2>
              <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                Join us in celebrating India's street cricket culture. Get in touch to explore partnership opportunities.
              </p>
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] text-white font-bold text-lg hover:brightness-110 transition-all duration-200 active:scale-[0.98]">
                Contact us
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;