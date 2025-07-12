import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import EventsSection from './components/EventsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SHPEtinas from './components/pages/SHPEtinas';
import Athletics from './components/pages/Athletics';
import Merits from './components/pages/Merits';

// Home page component
const HomePage = () => (
  <main className="animate-fade-in">
    <Hero />
    <EventsSection />
    <AboutSection />
    <ContactSection />
  </main>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs/shpetinas" element={<SHPEtinas />} />
          <Route path="/programs/athletics" element={<Athletics />} />
          <Route path="/programs/merits" element={<Merits />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;