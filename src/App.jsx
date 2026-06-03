import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import TeamsPage from './pages/TeamsPage.jsx';
import SchedulePage from './pages/SchedulePage.jsx';
import PointsTablePage from './pages/PointsTablePage.jsx';
import PlayersPage from './pages/PlayersPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PlayerProfilePage from './pages/PlayerProfilePage.jsx';
import PartnerPage from "./pages/PartnerPage.jsx";
import RegistrationModal from './components/RegistrationModal.jsx'; // Corrected relative path format
function App() {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    // This listener allows any sub-component or page (like HomePage or Navbar)
    // to open the registration modal using: window.dispatchEvent(new Event('open-registration'));
    useEffect(() => {
        const handleOpenModal = () => setIsRegisterOpen(true);
        window.addEventListener('open-registration', handleOpenModal);
        
        return () => {
            window.removeEventListener('open-registration', handleOpenModal);
        };
    }, []);

    return (
        <Router>
            <ScrollToTop />
            
            {/* Global Registration Modal available across all pages */}
            <RegistrationModal 
                isOpen={isRegisterOpen} 
                onClose={() => setIsRegisterOpen(false)} 
            />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/teams" element={<TeamsPage />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/points-table" element={<PointsTablePage />} />
                <Route path="/players" element={<PlayersPage />} />
                <Route path="/players/:playerId" element={<PlayerProfilePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/partner" element={<PartnerPage />} />
                <Route path="*" element={
                    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>404</h1>
                            <p className="text-white/60 mb-8">Page not found</p>
                            <a href="/" className="px-6 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] text-white font-semibold hover:brightness-110 transition-all duration-200">
                                Back to home
                            </a>
                        </div>
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;