import React from 'react';

function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Acompañamiento personalizado para tu crecimiento y bienestar.</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Cada persona es única, y su proceso de crecimiento también lo es. Por eso, mis sesiones están diseñadas para adaptarse a tus necesidades, ya sea que busques alcanzar una meta personal o profesional, mejorar tu bienestar emocional o recibir orientación profesional. A través del coaching y mentoring, te ofrezco un espacio de confianza para reflexionar, desbloquear obstáculos y tomar acción con claridad y seguridad.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-10 text-gray-700">Tipos de acompañamiento que ofrezco:</h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Coaching Individual */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-lightTeal hover:shadow-xl transition duration-300 flex flex-col h-full">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dzhv9e639/image/upload/v1744308985/nadine-e-VA9xSQekC8c-unsplash_nqedvx.jpg" 
                alt="Coaching Individual" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="p-8">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">Coaching Individual</h3>
                <p className="text-lg italic text-gray-700 mt-2">Un viaje de transformación personal</p>
              </div>
              
              <div className="space-y-5">
                <div>
                  <h4 className="font-medium text-teal mb-2">¿Para quién?</h4>
                  <p className="text-gray-600">Para personas que quieren alcanzar un objetivo, mejorar algún aspecto de su vida, gestión emocional o desarrollar su máximo potencial.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-teal mb-2">¿Cómo funciona?</h4>
                  <p className="text-gray-600">A través de sesiones 100% personalizadas, trabajamos en identificar bloqueos, clarificar objetivos y definir un plan de acción alineado con tu propósito.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-teal mb-2">Ejemplos de temas:</h4>
                  <p className="text-gray-600">Gestión del estrés, gestión de emociones, autoestima, toma de decisiones, planificación de metas.</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a href="#contacto" className="bg-teal hover:bg-darkTeal text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-block">
                  Reserva tu sesión de coaching
                </a>
              </div>
            </div>
          </div>

          {/* Mentoring Individual */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-lightTeal hover:shadow-xl transition duration-300 flex flex-col h-full">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dzhv9e639/image/upload/v1744308986/ivana-cajina-e6f8IaRQY7M-unsplash_exikwq.jpg" 
                alt="Mentoring Individual" 
                className="w-full h-full object-cover object-bottom"
              />
            </div>
            
            <div className="p-8">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">Mentoring Individual</h3>
                <p className="text-lg italic text-gray-700 mt-2">Guía y acompañamiento con experiencia</p>
              </div>
              
              <div className="space-y-5">
                <div>
                  <h4 className="font-medium text-teal mb-2">¿Para quién?</h4>
                  <p className="text-gray-600">Para quienes buscan orientación en su desarrollo profesional o personal con apoyo basado en experiencia y conocimientos específicos.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-teal mb-2">¿Cómo funciona?</h4>
                  <p className="text-gray-600">En sesiones personalizadas, comparto estrategias, herramientas y aprendizajes que pueden acelerar tu crecimiento y ayudarte a tomar decisiones informadas.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-teal mb-2">Ejemplos de temas:</h4>
                  <p className="text-gray-600">Desarrollo de carrera, liderazgo, cambio profesional, gestión de equipos, emprendimiento.</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a href="#contacto" className="bg-teal hover:bg-darkTeal text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-block">
                  Solicita una sesión de mentoring
                </a>
              </div>
            </div>
          </div>

          {/* Taller de Gestión Emocional */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-lightTeal hover:shadow-xl transition duration-300 flex flex-col h-full">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dzhv9e639/image/upload/v1744308985/fuu-j-r2nJPbEYuSQ-unsplash_cw1duj.jpg" 
                alt="Taller de Gestión Emocional" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="p-8">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">Taller de Gestión Emocional del Dolor Crónico</h3>
                <p className="text-lg italic text-gray-700 mt-2">Aprende a vivir mejor con el dolor</p>
              </div>
              
              <div className="space-y-5">
                <div>
                  <h4 className="font-medium text-teal mb-2">¿Para quién?</h4>
                  <p className="text-gray-600">Para personas que conviven con dolor crónico y buscan herramientas para gestionar sus emociones y mejorar su bienestar.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-teal mb-2">¿Cómo funciona?</h4>
                  <p className="text-gray-600">Es un programa estructurado en sesiones grupales, con dinámicas prácticas y técnicas basadas en la psicología del bienestar y la resiliencia.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-teal mb-2">¿Qué aprenderás?</h4>
                  <p className="text-gray-600">Estrategias para manejar la ansiedad y el miedo al dolor. Reducir el impacto emocional del dolor y reconectar con tu bienestar entendiendo como funciona nuestro cerebro ante el dolor.</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a href="#contacto" className="bg-teal hover:bg-darkTeal text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-block">
                  Descubre el taller
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services; 