import React, { useState, useRef, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const cloudinaryVideoUrl = "https://res.cloudinary.com/dzhv9e639/video/upload/v1743261106/hero_video_rjjcnc.mp4";
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    fechaHora: '',
    mensaje: ''
  });
  const contentRef = useRef(null);
  const videoContainerRef = useRef(null);
  
  // Effect to match video height to content height
  useEffect(() => {
    const adjustHeight = () => {
      if (contentRef.current && videoContainerRef.current) {
        const contentHeight = contentRef.current.offsetHeight;
        // Update a CSS custom property instead of inline style
        document.documentElement.style.setProperty('--content-height', `${contentHeight}px`);
      }
    };
    
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    
    return () => {
      window.removeEventListener('resize', adjustHeight);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí se procesaría el envío del formulario
  };

  return (
    <section id="inicio" className="pt-24 min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div ref={contentRef} className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0 text-left">
            <h1 className="text-left text-4xl font-bold text-gray-800 mb-2 uppercase">
              Desbloquea tu potencial
            </h1>
            <p className="text-gray-500 text-2xl mb-6 font-light uppercase">
              diseña la vida que quieres
            </p>
            <h3 className="text-gray-600 text-lg mb-6 leading-relaxed">
              Coaching y mentoring para crecimiento personal y profesional. 
              Te acompaño a transformar bloqueos en oportunidades con herramientas 
              prácticas y acompañamiento estratégico
            </h3>
            
            <div className="bg-mintGreen p-6 rounded-lg shadow-md hidden">
              <h4 className="text-darkSage font-semibold mb-4">Reserva tu primera sesión</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-darkSage mb-1">Nombre</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={formData.nombre} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal"
                  />
                </div>
                
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-darkSage mb-1">Correo</label>
                  <input 
                    type="email" 
                    id="correo" 
                    name="correo" 
                    value={formData.correo} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal"
                  />
                </div>
                
                <div>
                  <label htmlFor="fechaHora" className="block text-sm font-medium text-darkSage mb-1">Fecha y hora</label>
                  <input 
                    type="datetime-local" 
                    id="fechaHora" 
                    name="fechaHora" 
                    value={formData.fechaHora} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-darkSage mb-1">Mensaje (opcional)</label>
                  <textarea 
                    id="mensaje" 
                    name="mensaje" 
                    value={formData.mensaje} 
                    onChange={handleChange} 
                    rows="3" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-teal hover:bg-darkTeal text-white font-medium py-3 px-6 rounded-lg transition duration-300 uppercase tracking-wide"
                >
                  Ver disponibilidad
                </button>
              </form>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div ref={videoContainerRef} className="video-container rounded-lg overflow-hidden shadow-lg relative w-full">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={cloudinaryVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 