import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { 
  Award, Users, Tv, Cpu, ShieldCheck, Briefcase, 
  MapPin, Trophy, Flame, TrendingUp 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarqueeScoreTicker from "@/components/MarqueeScoreTicker";
import GlassmorphismCard from "@/components/GlassmorphismCard";

const PartnerPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5h1fnab",
        "template_1wcv8v7",
        form.current,
        "TYXomcXBiCOt9P38J"
      )
      .then(
        (result) => {
          alert("Discussion request sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send, please try again.");
          console.error(error);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  const opportunities = [
    { title: "Title Sponsor", desc: "Command ultimate brand presence across league identity, uniforms, and primary broadcast assets.", icon: Award },
    { title: "Associate Sponsor", desc: "Secure highly visible ground signage, secondary kit integration, and prime digital inventory.", icon: ShieldCheck },
    { title: "Media Partner", desc: "Gain exclusive premium media rights, press room branding, and shared cross-platform distributions.", icon: Tv },
    { title: "Technology Partner", desc: "Power the league's analytics, custom applications, software framework, and data systems.", icon: Cpu },
    { title: "Equipment Partner", desc: "Equip world-class athletes with premium customized apparel, kits, and official match gear.", icon: Briefcase },
    { title: "Franchise Partner", desc: "Own a stake in the action. Secure regional territory rights and lead an elite team franchise.", icon: Trophy },
  ];

  const metrics = [
    { value: "28 & 8", label: "States & Union Territories", icon: MapPin },
    { value: "500+", label: "Elite Athletes", icon: Users },
    { value: "127", label: "High-Octane Matches", icon: Flame },
    { value: "1B+", label: "Digital & Broadcast Views", icon: TrendingUp },
  ];

  const pastSponsors = [
    { name: "Aarna Tech Build", logo: "/images/Aarna.png" },
    { name: "Ameya Quartet", logo: "/images/Ameya.jpg" }, 
    { name: "Aanya", logo: "/images/Aanya.png" },
    { name: "Virya", logo: "/images/Virya.jpg" },
    { name: "Carplanet", logo: "/images/Carplanet.jpeg" },
    { name: "M/S Naveesh", logo: "/images/Naveen.png" },
    { name: "The Hindu", logo: "/images/Hindu.png" },
    { name: "BIG FM", logo: "/images/big_fm.png" },
  ];

  return (
    <>
      <Helmet>
        <title>Partner With ISCL</title>
        <meta name="description" content="Partner with India's fastest growing softball cricket league." />
      </Helmet>

      <MarqueeScoreTicker />
      <Header />

      <main className="min-h-screen bg-[#060606] text-white py-16 overflow-hidden relative">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-2/3 right-[-10%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none" />

        <section className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
              Growth & Commercial Opportunities
            </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold tracking-tight mt-6 mb-6 uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E8C] to-[#FF6B1A]">ISCL</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl leading-relaxed font-light">
            Join India's fastest-growing softball cricket movement. Collaborate with ISCL through high-impact sponsorships, global media rights, technology installations, and premium franchise ownership paths.
          </motion.p>
        </section>

        <section className="max-w-5xl mx-auto px-6 mb-24 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <GlassmorphismCard>
              <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-gradient-to-br from-white/[0.02] to-transparent">
                <div className="w-full md:w-2/5 max-w-[320px] aspect-square flex items-center justify-center bg-[#0d0d0d] rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl group relative">
                  <img src="/images/sony-sports.jpg" alt="Sony Sports Network" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-1 text-center md:text-left flex flex-col justify-center py-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] block mb-3">Media Ecosystem</span>
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-white" style={{ fontFamily: "Rajdhani, sans-serif" }}>Official Broadcast Partner</h2>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl font-light">
                    Bringing elite ISCL stadium action directly to millions of screens, high-definition streaming devices, and households across India.
                  </p>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
          <h2 className="text-4xl font-bold text-center tracking-tight mb-12 uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>Partnership Opportunities</h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div key={idx} variants={itemVariants} className="group h-full">
                  <GlassmorphismCard>
                    <div className="p-8 flex flex-col h-full justify-between transition-all duration-300 group-hover:border-white/20">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E91E8C]/10 to-[#FF6B1A]/10 border border-white/10 flex items-center justify-center mb-6 text-[#FF6B1A] group-hover:scale-110 transition-transform duration-300">
                          <IconComponent size={22} />
                        </div>
                        <h3 className="text-xl font-bold tracking-tight mb-3 text-white group-hover:text-[#FF6B1A] transition-colors duration-200">{item.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </GlassmorphismCard>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
          <h2 className="text-4xl font-bold text-center tracking-tight mb-12 uppercase" style={{ fontFamily: "Rajdhani, sans-serif" }}>Why Partner With ISCL?</h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => {
              const MetricIcon = metric.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <GlassmorphismCard>
                    <div className="p-8 text-center relative overflow-hidden group">
                      <h3 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-[#2563EB] to-purple-400 bg-clip-text text-transparent">{metric.value}</h3>
                      <p className="mt-4 text-white/80 text-sm font-medium tracking-wide uppercase">{metric.label}</p>
                    </div>
                  </GlassmorphismCard>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        <section className="max-w-5xl mx-auto px-6 mb-28 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-10 uppercase text-white/40" style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "2px" }}>Our Valued Partners</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 bg-white/[0.02] border border-white/[0.05] p-8 md:p-10 rounded-3xl backdrop-blur-sm justify-items-center items-center">
              {pastSponsors.map((sponsor, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.05 }} className="flex items-center justify-center w-full aspect-[3/2] max-w-[180px] bg-white p-4 rounded-xl shadow-lg group relative overflow-hidden transition-all duration-300">
                  <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <GlassmorphismCard>
              <div className="p-8 md:p-12 relative">
                <h2 className="text-4xl font-extrabold text-center mb-2 uppercase tracking-tight" style={{ fontFamily: "Rajdhani, sans-serif" }}>Partner Inquiry</h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input type="text" name="organization_name" placeholder="Organization Name" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm" required />
                    <input type="text" name="contact_person" placeholder="Contact Person" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input type="email" name="user_email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm" required />
                    <input type="text" name="user_phone" placeholder="Phone Number" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm" />
                  </div>
                  <select name="tier" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm">
                    <option>Title Sponsor</option>
                    <option>Associate Sponsor</option>
                    <option>Media Partner</option>
                    <option>Technology Partner</option>
                    <option>Equipment Partner</option>
                    <option>Franchise Partner</option>
                  </select>
                  <textarea name="message" rows="4" placeholder="Strategic Alignment Brief..." className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm" />
                  <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E91E8C] to-[#FF6B1A] font-bold text-sm uppercase shadow-xl">
                    Schedule A Discussion
                  </button>
                </form>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PartnerPage;