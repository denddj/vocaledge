import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import AudioDemo from './components/AudioDemo';
import BackendShowcase from './components/BackendShowcase';
import BookDemo from './components/BookDemo';
import BookCall from './components/BookCall';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Contact from './components/Contact';
import TestimonialSection from './components/testimonials/TestimonialSection';
import Favicon from './components/common/Favicon';
import { useScrollToSection } from './hooks/useScrollToSection';

function App() {
  useScrollToSection();

  return (
    <div className="min-h-screen bg-white">
      <Favicon />
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AudioDemo />
              <Benefits />
              <BackendShowcase />
              <BookDemo />
              <Pricing />
              <BookCall />
              <TestimonialSection />
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;