import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-between">
      <Helmet>
        <title>Terms of Service - ISCL</title>
      </Helmet>
      
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-grow">
        {/* Title Heading with Soft Rose Gold to Peach Gradient */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          Terms and Conditions
        </h1>
        <p className="text-sm text-white/40 mb-10">Last Updated: 23-07-2025</p>
        
        {/* Terms Body */}
        <div className="space-y-8 text-white/70 leading-relaxed text-sm sm:text-base">
          <p className="text-base text-white/90">
            Welcome to the official website of the Indian Softball Cricket League (ISCL) accessible at <a href="https://www.iscl.cricket" className="text-[#FCA5A5] hover:text-[#FED7AA] underline underline-offset-4">www.iscl.cricket</a>. By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use this site.
          </p>
          
          <hr className="border-white/[0.08]" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">1. Use of the Website</h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-white/70">
              <li>You may use this website solely for informational and non-commercial purposes.</li>
              <li>You agree not to misuse, disrupt, or attempt unauthorized access to any part of the website.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">2. Intellectual Property</h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-white/70">
              <li>All logos, images, text, graphics, videos, and other content on this site are the property of Indian Softball Cricket Foundation (ISCF) or licensed third parties.</li>
              <li>Unauthorized use, reproduction, or distribution of any content is strictly prohibited.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">3. User Conduct</h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-white/70">
              <li>Users must not upload or transmit any harmful code, spam, or misleading content.</li>
              <li>Comments, submissions, or forms must be respectful, appropriate, and non-infringing on others' rights.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">4. Registration and Participation</h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-white/70">
              <li>If you register as a player, team owner, sponsor, or media partner, you must provide accurate information and maintain the confidentiality of your login credentials.</li>
              <li>ISCL reserves the right to deny or revoke access for any user in violation of these terms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">5. Third-Party Links</h2>
            <p>Our website may include links to third-party sites (such as sponsors, partners, media). We are not responsible for their content or policies.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">6. Disclaimer</h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-white/70">
              <li>ISCL makes every effort to ensure accuracy, but we do not guarantee the completeness or timeliness of any content.</li>
              <li>The website and its contents are provided "as is" without warranties of any kind.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">7. Limitation of Liability</h2>
            <p>ISCL and its affiliates will not be liable for any direct or indirect damages resulting from the use or inability to use the website.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">8. Changes to Terms</h2>
            <p>ISCL reserves the right to update these terms at any time. Continued use of the site constitutes acceptance of the revised terms.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase bg-gradient-to-r from-[#FCA5A5] to-[#FED7AA] bg-clip-text text-transparent">9. Governing Law</h2>
            <p>These terms shall be governed by and interpreted in accordance with the laws of India. Disputes shall be handled in Bengaluru jurisdiction.</p>
          </section>

          <hr className="border-white/[0.08]" />

          {/* Contact Support Block */}
          <section className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 space-y-4 max-w-md">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Contact Us</h2>
            <p className="text-sm text-white/60">For questions, please contact:</p>
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

export default TermsOfServicePage;