import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--dark-sage)', color: 'white' }}>
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <h3 className="accent-text" style={{ fontSize: '32px', color: 'var(--sand)' }}>CristinaCoaching</h3>
            <p className="mt-3" style={{ color: 'var(--off-white)' }}>
              Servicios profesionales de coaching para ayudarte a alcanzar tus objetivos 
              personales y profesionales, mejorando tu calidad de vida.
            </p>
            <div className="social-icons mt-4">
              <a href="https://facebook.com" className="mr-3" style={{ color: 'var(--sand)', fontSize: '1.5rem' }}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://instagram.com" className="mr-3" style={{ color: 'var(--sand)', fontSize: '1.5rem' }}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" style={{ color: 'var(--sand)', fontSize: '1.5rem' }}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          
          <div className="column is-2 is-offset-1">
            <h4 className="footer-title" style={{ color: 'var(--sand)' }}>Enlaces</h4>
            <ul style={{ marginTop: '1rem', color: 'var(--off-white)' }}>
              <li><a href="#inicio" style={{ color: 'var(--off-white)' }}>Inicio</a></li>
              <li><a href="#sobre-mi" style={{ color: 'var(--off-white)' }}>Sobre Mí</a></li>
              <li><a href="#servicios" style={{ color: 'var(--off-white)' }}>Servicios</a></li>
              <li><a href="#testimonios" style={{ color: 'var(--off-white)' }}>Testimonios</a></li>
              <li><a href="#contacto" style={{ color: 'var(--off-white)' }}>Contacto</a></li>
            </ul>
          </div>
          
          <div className="column is-2">
            <h4 className="footer-title" style={{ color: 'var(--sand)' }}>Servicios</h4>
            <ul style={{ marginTop: '1rem', color: 'var(--off-white)' }}>
              <li>Life Coaching</li>
              <li>Executive Coaching</li>
              <li>Talleres de Dolor Crónico</li>
              <li>Sensibilización Central</li>
              <li>Síndrome de Boca Ardiente</li>
            </ul>
          </div>
          
          <div className="column is-3">
            <h4 className="footer-title" style={{ color: 'var(--sand)' }}>Contacto</h4>
            <ul style={{ marginTop: '1rem', color: 'var(--off-white)' }}>
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" style={{ color: 'var(--sand)' }} />
                <a href="mailto:info@cristinacoaching.com" style={{ color: 'var(--off-white)' }}>info@cristinacoaching.com</a>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" style={{ color: 'var(--sand)' }} />
                <a href="tel:+34600000000" style={{ color: 'var(--off-white)' }}>+34 600 00 00 00</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" style={{ color: 'var(--sand)' }} />
                <span>Barcelona, España</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="has-text-centered mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--off-white)' }}>
          <p>&copy; {new Date().getFullYear()} CristinaCoaching. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 