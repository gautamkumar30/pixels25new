import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import EventsOverview from '../components/EventsOverview';
import QuickLinks from '../components/QuickLinks';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <About />
      <EventsOverview />
      <QuickLinks />
      <Footer />
    </div>
  );
};

export default HomePage;