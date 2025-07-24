import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      // Ejecutar reCAPTCHA v3
      const recaptchaToken = await window.grecaptcha.execute('6LeGKI4rAAAAAITGXYtm_N8tICYSH66VtmJjIKsx', { action: 'submit' });
      const dataWithToken = { ...formData, recaptchaToken };
      await emailjs.send(
        'service_9uoc429',
        'template_947x64j',
        dataWithToken,
        'nnPDNIdydbo_GPyr9'
      );
      setStatus('success');
      setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
    } catch (error) {
      setStatus('error');
    }
  };

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
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center min-h-[400px]">
              {status !== 'success' && (
                <h3 className="text-2xl font-semibold mb-6">Envíame un mensaje</h3>
              )}
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <span className="text-darkTeal text-xl font-semibold text-center" style={{ fontFamily: 'var(--subheading-font)' }}>
                    ¡Gracias por tu mensaje! En breve me pondré en contacto contigo. También si lo deseas tienes mis datos de contacto en la web.
                  </span>
                </div>
              ) : (
                <>
                  {status === 'error' && (
                    <div className="mb-6 text-red-600 font-medium">
                      Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Nombre <span className="text-red-500">*</span></label>
                      <input 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                        type="text" 
                        name="nombre"
                        placeholder="Tu nombre" 
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                      <input 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                        type="email" 
                        name="email"
                        placeholder="Tu email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Teléfono <span className="text-red-500">*</span></label>
                      <input 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                        type="tel" 
                        name="telefono"
                        placeholder="Tu teléfono" 
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Asunto <span className="text-red-500">*</span></label>
                      <input 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                        type="text" 
                        name="asunto"
                        placeholder="Asunto de tu mensaje" 
                        value={formData.asunto}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">Mensaje <span className="text-red-500">*</span></label>
                      <textarea 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" 
                        name="mensaje"
                        placeholder="Escribe tu mensaje aquí" 
                        rows="5"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="bg-teal hover:bg-darkTeal text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                      Enviar Mensaje
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 