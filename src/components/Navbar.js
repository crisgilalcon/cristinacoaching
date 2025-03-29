import React, { useState } from 'react';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <span className="accent-text" style={{ fontSize: '28px' }}>CristinaCoaching</span>
          </a>

          <a 
            role="button" 
            className={`navbar-burger ${isActive ? 'is-active' : ''}`} 
            aria-label="menu" 
            aria-expanded="false" 
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a className="navbar-item" href="#inicio">
              Inicio
            </a>
            <a className="navbar-item" href="#sobre-mi">
              Sobre Mí
            </a>
            <a className="navbar-item" href="#servicios">
              Servicios
            </a>
            <a className="navbar-item" href="#testimonios">
              Testimonios
            </a>
            <a className="navbar-item" href="#contacto">
              Contacto
            </a>
            <div className="navbar-item">
              <button className="button-primary">Reserva tu sesión gratuita</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 