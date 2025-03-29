import React from 'react';

function Contact() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="w-full md:w-5/12 mb-12 md:mb-0">
            <p className="text-4xl text-teal font-light mb-2">Conecta</p>
            <h2 className="text-4xl font-semibold text-darkTeal mb-6">Contáctame</h2>
            
            <div>
              <p className="text-gray-600 mb-8">
                Estoy aquí para ayudarte en tu camino de crecimiento personal y profesional. 
                Si tienes alguna pregunta o deseas agendar una sesión, no dudes en contactarme.
              </p>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <span className="text-gold mr-4 text-xl">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="text-gray-700">info@cristinacoaching.com</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-gold mr-4 text-xl">
                    <i className="fas fa-phone"></i>
                  </span>
                  <span className="text-gray-700">+34 600 000 000</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-gold mr-4 text-xl">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span className="text-gray-700">Madrid, España (Sesiones presenciales y online)</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Sígueme en redes sociales</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center hover:bg-darkTeal transition duration-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center hover:bg-darkTeal transition duration-300">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center hover:bg-darkTeal transition duration-300">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-6/12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6">Envíame un mensaje</h3>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nombre</label>
                <input 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                  type="text" 
                  placeholder="Tu nombre" 
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                  type="email" 
                  placeholder="Tu email" 
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Asunto</label>
                <input 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                  type="text" 
                  placeholder="Asunto de tu mensaje" 
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                  placeholder="Escribe tu mensaje aquí" 
                  rows="5"
                ></textarea>
              </div>
              
              <button className="bg-teal hover:bg-darkTeal text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                Enviar Mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 