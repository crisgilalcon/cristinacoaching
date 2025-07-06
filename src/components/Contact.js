import React from 'react';

function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="w-full md:w-5/12 mb-12 md:mb-0">
            <h2 className="text-4xl font-semibold text-darkTeal mb-6">Contáctame</h2>
            
            <div>
              <p className="text-gray-600 mb-8">
                Estoy aquí para acompañarte en tu camino de crecimiento personal y profesional.
                Si quieres más información o reservar tu <strong>primera sesión gratis</strong>, escríbeme sin compromiso. ¡Será un placer ayudarte!
              </p>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <span className="text-[#8ea6aa] mr-4 text-xl">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="text-gray-700">cristinagilcoaching@gmail.com</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-[#8ea6aa] mr-4 text-xl">
                    <i className="fas fa-phone"></i>
                  </span>
                  <span className="text-gray-700">+34 679 92 60 03</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-[#8ea6aa] mr-4 text-xl">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span className="text-gray-700">Barcelona, España (Sesiones presenciales y online)</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Sígueme en redes sociales</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/cristinagilcoaching?igsh=YnJrMmlvZTU5c2c1&utm_source=qr" className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center hover:bg-darkTeal transition duration-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://linkedin.com/in/cristinagilalcon" className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center hover:bg-darkTeal transition duration-300">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-6/12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6">Envíame un mensaje</h3>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nombre <span className="text-red-500">*</span></label>
                <input 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                  type="text" 
                  placeholder="Tu nombre" 
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                <input 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                  type="email" 
                  placeholder="Tu email" 
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Teléfono <span className="text-red-500">*</span></label>
                <input 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                  type="tel" 
                  placeholder="Tu teléfono" 
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Asunto <span className="text-red-500">*</span></label>
                <input 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                  type="text" 
                  placeholder="Asunto de tu mensaje" 
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Mensaje <span className="text-red-500">*</span></label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                  placeholder="Escribe tu mensaje aquí" 
                  rows="5"
                  required
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