import React from 'react';

function Footer() {
  return (
    <footer className="py-16 bg-darkSage text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h3 className="accent-text mb-4" style={{ fontSize: '35px', color: 'white' }}>Cristina Gil Coaching</h3>
            <p className="text-offWhite mb-6">
              Servicios profesionales de coaching para ayudarte a alcanzar tus objetivos 
              personales y profesionales, mejorando tu calidad de vida.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white text-2xl hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="text-white text-2xl hover:text-white transition duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xl text-white font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-offWhite">
              <li><a href="#inicio" className="hover:text-white transition duration-300">Inicio</a></li>
              <li><a href="#sobre-mi" className="hover:text-white transition duration-300">Sobre Mí</a></li>
              <li><a href="#servicios" className="hover:text-white transition duration-300">Servicios</a></li>
              <li><a href="#method" className="hover:text-white transition duration-300">Mi Método</a></li>
              <li><a href="#testimonios" className="hover:text-white transition duration-300">Testimonios</a></li>
              <li><a href="#contacto" className="hover:text-white transition duration-300">Contacto</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-xl text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-offWhite">
              <li>Life Coaching</li>
              <li>Executive Coaching</li>
              <li>Talleres de Dolor Crónico</li>
              <li>Sensibilización Central</li>
              <li>Síndrome de Boca Ardiente</li>
            </ul>
          </div>
          
          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="text-xl text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-offWhite">
              <li className="flex items-center">
                <i className="fas fa-envelope text-[#8ea6aa] mr-3"></i>
                <a href="mailto:cristinagilcoaching@gmail.com" className="hover:text-white transition duration-300">cristinagilcoaching@gmail.com</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-[#8ea6aa] mr-3"></i>
                <a href="tel:+34679926003" className="hover:text-white transition duration-300">+34 679 92 60 03</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-[#8ea6aa] mr-3"></i>
                <span>Barcelona, España</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12 pt-6 border-t border-white border-opacity-10 text-offWhite">
          <p>&copy; {new Date().getFullYear()} Cristina Gil Coaching. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 