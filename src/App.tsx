import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import EventsSection from './components/EventsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Carousel, { CarouselItem } from './components/Carousel';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SHPEtinas from './components/pages/SHPEtinas';
import Athletics from './components/pages/Athletics';
import Merits from './components/pages/Merits';
import Officers from "./components/Officers";

// Sample carousel data - replace with actual sponsor/partner data
const sponsors: CarouselItem[] = [
  {
    image: '/public/assets/icons/logo.svg',
    title: 'Partner 1',
    subtitle: 'Supporting SHPE since 2020',
    alt: 'Partner 1 Logo'
  },
  {
    image: '/public/assets/icons/logo.svg',
    title: 'Partner 2',
    subtitle: 'Empowering future engineers',
    alt: 'Partner 2 Logo'
  },
  {
    image: '/public/assets/icons/logo.svg',
    title: 'Partner 3',
    subtitle: 'Committed to diversity in STEM',
    alt: 'Partner 3 Logo'
  },
  {
    image: '/public/assets/icons/logo.svg',
    title: 'Partner 4',
    subtitle: 'Building tomorrow together',
    alt: 'Partner 4 Logo'
  },
];

// Home page component
const HomePage = () => (
  <main className="animate-fade-in">
    <Hero />
    <EventsSection />
    <AboutSection />
    <ContactSection />
    <Carousel 
      items={sponsors}
      title="Thank you to our sponsors!"
      description="We're grateful for the support of our partners who help us achieve our mission"
    />
  </main>
);

// AppContent component
const AppContent = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs/shpetinas" element={<SHPEtinas />} />
        <Route path="/programs/athletics" element={<Athletics />} />
        <Route path="/programs/merits" element={<Merits />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;