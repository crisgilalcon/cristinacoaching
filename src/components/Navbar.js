import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="/" className="accent-text" style={{ fontSize: '35px' }}>Cristina Gil Coaching</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Desktop menu - centered */}
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="flex items-center space-x-6 mx-auto">
              <a href="#inicio" className="hover:text-[var(--teal)] transition duration-300" style={{ fontFamily: 'var(--body-font)', color: 'var(--text-color)' }}>Inicio</a>
              <a href="#sobre-mi" className="hover:text-[var(--teal)] transition duration-300" style={{ fontFamily: 'var(--body-font)', color: 'var(--text-color)' }}>Sobre Mí</a>
              <a href="#servicios" className="hover:text-[var(--teal)] transition duration-300" style={{ fontFamily: 'var(--body-font)', color: 'var(--text-color)' }}>Servicios</a>
              <a href="#metodo" className="hover:text-[var(--teal)] transition duration-300" style={{ fontFamily: 'var(--body-font)', color: 'var(--text-color)' }}>Mi Método</a>
              <a href="#testimonios" className="hover:text-[var(--teal)] transition duration-300" style={{ fontFamily: 'var(--body-font)', color: 'var(--text-color)' }}>Testimonios</a>
              <a href="#contacto" className="hover:text-[var(--teal)] transition duration-300" style={{ fontFamily: 'var(--body-font)', color: 'var(--text-color)' }}>Contacto</a>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block bg-teal">
            <button style={{ 
              color: 'white',
              borderRadius: '4px',
              padding: '0.75rem 1.5rem',
              fontFamily: 'var(--subheading-font)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'background-color 0.3s ease'
            }}
            className="hover:bg-[var(--dark-sage)]">
              RESERVA TU SESIÓN GRATIS
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pt-4 pb-2`}>
          <div className="flex flex-col space-y-3">
            <a href="#inicio" className="hover:text-[var(--teal)] transition duration-300" style={{ fontFamily: 'var(--body-font)', color: 'var(--text-color)' }}>Inicio</a>
            <a href="#sobre-mi" className="hover:text-[var(--teal)] transition duration-300" style={{ fontFamily: 'var(--body-font)', color: 'var(--text-color)' }}>Sobre Mí</a>
            <a href="#servicios" className="hover:text-[var(--teal)] transition duration-300" style={{ fontFamily: 'var(--body-font)', color: 'var(--text-color)' }}>Servicios</a>
            <a href="#metodo" className="hover:text-[var(--teal)] transition duration-300" style={{ fontFamily: 'var(--body-font)', color: 'var(--text-color)' }}>Mi Método</a>
            <a href="#testimonios" className="hover:text-[var(--teal)] transition duration-300" style={{ fontFamily: 'var(--body-font)', color: 'var(--text-color)' }}>Testimonios</a>
            <a href="#contacto" className="hover:text-[var(--teal)] transition duration-300" style={{ fontFamily: 'var(--body-font)', color: 'var(--text-color)' }}>Contacto</a>
            <button style={{ 
              backgroundColor: 'var(--teal)',
              color: 'white',
              borderRadius: '4px',
              padding: '0.75rem 1.5rem',
              fontFamily: 'var(--subheading-font)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'background-color 0.3s ease',
              width: '100%'
            }}
            className="hover:bg-[var(--dark-sage)]">
              RESERVA TU SESIÓN GRATIS
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 