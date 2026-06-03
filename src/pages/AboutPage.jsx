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
    {
      year: '2025',
      title: 'League Launch',
      event: 'The Indian Softball Cricket League was launched with a vision to provide a professional national platform for softball cricket talent across India.'
    },
    {
      year: '2025',
      title: 'Historic First Season',
      event: "Season 01 featured 32 inter-state franchise teams and more than 500 players competing in India's largest softball cricket championship."
    },
    {
      year: '2025',
      title: 'National Broadcast',
      event: 'ISCL achieved nationwide visibility through live telecasts on DD Sports, bringing softball cricket to audiences across the country.'
    },
    {
      year: '2025',
      title: 'First Champions Crowned',
      event: 'Punjab Golden Fighters became the inaugural ISCL Champions after defeating Uttar Pradesh Blue in the Season 01 Final on December 21, 2025.' 
    },
    {
      year: '2026',
      title: 'Season 02 Expansion',
      event: 'Following the success of Season 01, ISCL announced Season 02 with an enhanced inter-state championship format and greater opportunities for emerging players.'
    },
    {
      year: '2026',
      title: 'Sony Sports Network Partnership',
      event: 'ISCL partnered with Sony Sports Network to expand national coverage, strengthen media outreach, and elevate the visibility of softball cricket across India.'
    }
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
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#141414]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">

              {/* Left Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* 1. Founder Section (Aligned with Image Top) */}
                <div className="border-l-4 border-[#E91E8C] pl-6 py-1 mb-4"> 
                  <h3
                    className="text-4xl font-extrabold text-white tracking-tight"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    Dr. Gangadhar Raju
                  </h3>

                  <p className="text-[#E91E8C] text-lg font-semibold mt-1 uppercase tracking-wider">
                    Founder & President, ISCL
                  </p>
                </div>

                {/* Founder Bio Description */}
                <p className="text-white/90 text-base leading-relaxed max-w-lg mb-14">
                  Visionary leader dedicated to creating opportunities for
                  softball cricket players across India and transforming
                  grassroots talent into national sporting excellence.
                </p>

                {/* 2. Born on the Streets Section (Bottom) */}
                <h1
                  className="text-4xl md:text-5xl font-bold text-white mb-5"
                  style={{
                    fontFamily: 'Rajdhani, sans-serif',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.1'
                  }}
                >
                  Born on the Streets of India
                </h1>

                <p className="text-xl text-white/75 leading-relaxed">
                  The Indian Softball Cricket League (ISCL) is India's first-ever
                  national platform dedicated to revolutionizing softball cricket
                  across the country. Founded under the visionary leadership of
                  Dr. Gangadhar Raju, ISCL is more than a league—it's a movement
                  that creates opportunities for talented players, promotes
                  grassroots participation, and works towards making softball
                  cricket a globally recognized sport. 
                </p>
              </motion.div>

              {/* Right Side - Founder Image with Baseline Ventures inspired slow pan/zoom animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-center pt-1"
              >
                <div className="w-full max-w-md h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <motion.img
                    src="/images/founder.jpeg"
                    alt="Dr. Gangadhar Raju"
                    className="w-full h-full object-cover origin-center"
                    animate={{ 
                      scale: [1, 1.04, 1],
                      y: [0, -5, 0] 
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    whileHover={{ scale: 1.06, transition: { duration: 0.3 } }}
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SCF Foundation Section */}
        <section className="py-20 bg-[#141414]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              
              {/* Left Column - Image with subtle floating scale loop */}
              <motion.div 
                className="md:col-span-5 flex justify-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full max-w-sm aspect-square bg-white rounded-3xl p-6 shadow-2xl border border-white/5 flex items-center justify-center overflow-hidden group">
                  <motion.img
                    src="/images/scf.jpeg"
                    alt="Softball Cricket Foundation Logo"
                    className="w-full h-full object-contain"
                    animate={{ 
                      scale: [1, 1.03, 1] 
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div 
                className="md:col-span-7"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  SCF Foundation
                </h2>

                <p className="text-lg text-white/70 leading-relaxed mb-10">
                  At the heart of our sporting ecosystem lies a profound commitment
                  to social responsibility and talent development. The Softball
                  Cricket Foundation (SCF) serves as the charitable and development
                  wing of ISCL, empowering aspiring athletes and strengthening
                  grassroots cricket communities across India.
                </p>

                <div className="grid sm:grid-cols-2 gap-10 text-left">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Grassroots Development
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      Providing sports equipment, structured training systems,
                      mentorship, and financial assistance to talented athletes
                      from underprivileged regions and emerging cricket communities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Social Inclusivity
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      Using cricket as a powerful tool for social impact, leadership
                      development, discipline, and creating professional pathways
                      for athletes from diverse backgrounds.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Brand Ambassadors Section */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Brand Ambassadors
              </h2>
              <p className="text-white/60 mt-2 max-w-xl mx-auto">
                Guiding our athletes and grounding our league in professional excellence with elite icons of international cricket.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              
              {/* Harbhajan Singh */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-[#141414] rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-xl group"
              >
                <div className="w-full h-96 overflow-hidden relative">
                  <motion.img 
                    src="/images/harbhajan.png" 
                    alt="Harbhajan Singh" 
                    className="w-full h-full object-cover object-top origin-top" 
                    animate={{ 
                      scale: [1, 1.03, 1],
                      x: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 9, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Harbhajan Singh
                  </h3>
                  <p className="text-[#2563EB] text-sm font-semibold uppercase tracking-wider mb-4">
                    Global Brand Ambassador
                  </p>
                  <p className="text-white/70 text-base leading-relaxed">
                    Acts as the Global Brand Ambassador, giving the tournament a professional backbone. His presence ensures that the league is viewed as a serious platform for the players involved, transitioning them from local enthusiasts to recognized athletes.
                  </p>
                </div>
              </motion.div>

              {/* Suresh Raina */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-[#141414] rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-xl group"
              >
                <div className="w-full h-96 overflow-hidden relative">
                  <motion.img 
                    src="/images/suresh_raina.png" 
                    alt="Suresh Raina" 
                    className="w-full h-full object-cover object-top origin-top" 
                    animate={{ 
                      scale: [1, 1.03, 1],
                      x: [0, -2, 0]
                    }}
                    transition={{ 
                      duration: 9, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Suresh Raina
                  </h3>
                  <p className="text-[#FF6B1A] text-sm font-semibold uppercase tracking-wider mb-4">
                    League Brand Ambassador
                  </p>
                  <p className="text-white/70 text-base leading-relaxed">
                    Brings unmatched expertise and athletic prestige to ISCL. Renowned for his tactical brilliance and champion mindset, he inspires raw grassroots talents to scale their performance up to elite standards, bridging the gap from street to stadium.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Mission Statement Section with Cinematic "Gully Wickets" Background & Slow Zoom */}
        <section className="py-24 bg-[#141414] relative overflow-hidden flex items-center justify-center">
          
          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <motion.img 
              src="/images/gully-sunset.jpeg" /* Save your sunset silhouette image as gully-sunset.jpeg */
              alt="Gully Cricket Sunset"
              className="w-full h-full object-cover origin-center opacity-[0.13]" 
              animate={{ 
                scale: [1, 1.06, 1],
                y: [0, -8, 0]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            {/* Soft color mask overlays to maintain text contrast seamlessly */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-[#141414]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-[#141414]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center bg-[#0A0A0A]/60 backdrop-blur-md p-10 md:p-14 rounded-3xl border border-white/5 shadow-2xl"
            >
              <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#E91E8C]/20 to-[#2563EB]/20 border border-white/10 mb-8">
                <span className="text-sm font-semibold text-white tracking-wide uppercase">Our mission</span>
              </div>
              
              <div className="mb-8">
                <span 
                  className="block text-xl md:text-2xl font-medium text-white/60 uppercase tracking-widest mb-2"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  We believe
                </span>
                <h2 
                  className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight" 
                  style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '-0.01em', lineHeight: '1' }}
                >
                  Every gully has a champion
                </h2>
              </div>

              <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
                 ISCL is dedicated to discovering and nurturing cricket talent from every corner of India. By providing a professional platform, structured competitions, and nationwide visibility, we aim to elevate softball cricket and inspire the next generation of players.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Our journey
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                    className="flex gap-6 items-start bg-[#141414]/40 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#E91E8C]/20 border border-white/10 flex items-center justify-center shadow-inner">
                        <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3
                        className="text-xl font-bold text-white mb-2"
                        style={{ fontFamily: 'Rajdhani, sans-serif' }}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {milestone.event}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default AboutPage;