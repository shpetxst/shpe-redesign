import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import EventsSection from './components/EventsSection';
import AboutSection from './components/AboutSection';
import MembershipSection from './components/MembershipSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Hero />
          <EventsSection />
          <AboutSection />
          <MembershipSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;