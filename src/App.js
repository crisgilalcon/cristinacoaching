import React from 'react';
import './fonts.css';
import './App.css';
import './components/styles.css';

// Import components
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

// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { 
  faUserFriends, 
  faKey, 
  faTasks,
  faQuoteLeft,
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

// Add icons to library
library.add(
  fab,
  faUserFriends, 
  faKey, 
  faTasks,
  faQuoteLeft,
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faFacebook,
  faInstagram,
  faLinkedin
);

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
