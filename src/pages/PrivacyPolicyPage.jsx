import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-between">
      <Helmet>
        <title>Privacy Policy - ISCL</title>
      </Helmet>
      
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-grow">
        {/* Title Heading with Soft Rose Gold to Peach Gradient */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          Privacy Policy
        </h1>
        <p className="text-sm text-white/40 mb-10">Last Updated: 23-07-2025</p>
        
        {/* Policy Body */}
        <div className="space-y-8 text-white/70 leading-relaxed text-sm sm:text-base">
          <p className="text-base text-white/90">
            The Indian Softball Cricket League (ISCL) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.
          </p>
          
          <hr className="border-white/[0.08]" />

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-white/70">
              <li>Personal data (name, contact details, age) through registration forms.</li>
              <li>Browsing data via cookies and analytics tools.</li>
              <li>Content shared through forms, comments, or media uploads.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-white/70">
              <li>Player, franchise, sponsor, and media registration and management.</li>
              <li>Sending relevant updates, announcements, or alerts.</li>
              <li>Improving website content, performance, and user experience.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">
              3. Sharing of Information
            </h2>
            <p>We do not sell or trade your information. We may share data with:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-white/70">
              <li>Official sponsors and media partners (with your consent).</li>
              <li>Service providers (hosting, security, analytics).</li>
              <li>Government or legal entities if required by law.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">
              4. Data Security
            </h2>
            <p>We use secure servers, encryption, and limited access protocols to protect your data. While we strive to ensure security, no online transmission is 100% secure.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">
              5. Cookies and Tracking
            </h2>
            <p>We use cookies to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-white/70">
              <li>Analyze traffic via Google Analytics.</li>
              <li>Improve user experience and display relevant content.</li>
            </ul>
            <p className="text-sm text-white/40 italic mt-1">You can modify cookie preferences through your browser settings.</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">
              6. Third-Party Links
            </h2>
            <p>We are not responsible for the privacy practices of third-party websites linked from our site.</p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">
              7. Your Rights
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-white/70">
              <li>You may request access, correction, or deletion of your personal data by contacting us.</li>
              <li>You may opt out of communications at any time.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">
              8. Updates to This Policy
            </h2>
            <p>We may update this Privacy Policy periodically. Check this page regularly for the latest version.</p>
          </section>

          <hr className="border-white/[0.08]" />

          {/* Contact Support Block */}
          <section className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 space-y-4 max-w-md">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Contact Us</h2>
            <p className="text-sm text-white/60">For all privacy concerns, please contact:</p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-base">📧</span>
                <a href="mailto:marketing@isclcricket.com" className="text-[#FCA5A5] hover:text-[#FED7AA] hover:underline font-medium transition-all">
                  marketing@isclcricket.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-base">📞</span>
                <a href="tel:+919900993926" className="text-[#FCA5A5] hover:text-[#FED7AA] hover:underline font-medium transition-all">
                  +91 99009 93926
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;