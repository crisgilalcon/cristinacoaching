import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Method from './components/Method';
import Workshops from './components/Workshops';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Method />
        <Workshops />
        <Testimonials />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
