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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Coaching Individual */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-lightTeal hover:shadow-xl transition duration-300 flex flex-col h-full">
            <div className="bg-mintGreen p-6 text-center h-44 flex flex-col justify-center">
              <div className="text-teal text-5xl mb-3 mx-auto h-16 flex items-center justify-center">
                <i className="fas fa-user-friends"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Coaching Individual</h3>
              <p className="text-lg italic text-gray-700 mt-2">Un viaje de transformación personal</p>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <h4 className="font-medium text-teal mb-2">¿Para quién?</h4>
                <p className="text-gray-600">Para personas que quieren alcanzar un objetivo, mejorar algún aspecto de su vida, gestión emocional o desarrollar su máximo potencial.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-teal mb-2">¿Cómo funciona?</h4>
                <p className="text-gray-600">A través de sesiones 100% personalizadas, trabajamos en identificar bloqueos, clarificar objetivos y definir un plan de acción alineado con tu propósito.</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-teal mb-2">Ejemplos de temas:</h4>
                <p className="text-gray-600">Gestión del estrés, gestión de emociones, autoestima, toma de decisiones, planificación de metas.</p>
              </div>
              
              <div className="mt-auto text-center">
                <a href="#contacto" className="bg-teal hover:bg-darkTeal text-white font-medium py-2 px-6 rounded-lg transition duration-300 inline-block">
                  Reserva tu sesión de coaching
                </a>
              </div>
            </div>
          </div>

          {/* Mentoring Individual */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-lightTeal hover:shadow-xl transition duration-300 flex flex-col h-full">
            <div className="bg-mintGreen p-6 text-center h-44 flex flex-col justify-center">
              <div className="text-teal mb-3 mx-auto h-16 flex items-center justify-center">
                <div style={{ position: 'relative', width: '70px', height: '70px' }}>
                  <i className="fas fa-user-friends" style={{ position: 'absolute', bottom: '0', left: '0', fontSize: '2.5rem' }}></i>
                  <i className="fas fa-arrow-up" style={{ position: 'absolute', top: '0', right: '0', fontSize: '2.5rem' }}></i>
                  <i className="fas fa-star" style={{ position: 'absolute', top: '0', right: '20px', fontSize: '1.5rem' }}></i>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Mentoring Individual</h3>
              <p className="text-lg italic text-gray-700 mt-2">Guía y acompañamiento con experiencia</p>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <h4 className="font-medium text-teal mb-2">¿Para quién?</h4>
                <p className="text-gray-600">Para quienes buscan orientación en su desarrollo profesional o personal con apoyo basado en experiencia y conocimientos específicos.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-teal mb-2">¿Cómo funciona?</h4>
                <p className="text-gray-600">En sesiones personalizadas, comparto estrategias, herramientas y aprendizajes que pueden acelerar tu crecimiento y ayudarte a tomar decisiones informadas.</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-teal mb-2">Ejemplos de temas:</h4>
                <p className="text-gray-600">Desarrollo de carrera, liderazgo, cambio profesional, gestión de equipos, emprendimiento.</p>
              </div>
              
              <div className="mt-auto text-center">
                <a href="#contacto" className="bg-teal hover:bg-darkTeal text-white font-medium py-2 px-6 rounded-lg transition duration-300 inline-block">
                  Solicita una sesión de mentoring
                </a>
              </div>
            </div>
          </div>

          {/* Taller de Gestión Emocional */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-lightTeal hover:shadow-xl transition duration-300 flex flex-col h-full">
            <div className="bg-mintGreen p-6 text-center h-44 flex flex-col justify-center">
              <div className="text-teal text-5xl mb-3 mx-auto h-16 flex items-center justify-center">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Taller de Gestión Emocional del Dolor Crónico</h3>
              <p className="text-lg italic text-gray-700 mt-2">Aprende a vivir mejor con el dolor</p>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <h4 className="font-medium text-teal mb-2">¿Para quién?</h4>
                <p className="text-gray-600">Para personas que conviven con dolor crónico y buscan herramientas para gestionar sus emociones y mejorar su bienestar.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-teal mb-2">¿Cómo funciona?</h4>
                <p className="text-gray-600">Es un programa estructurado en sesiones grupales, con dinámicas prácticas y técnicas basadas en la psicología del bienestar y la resiliencia.</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-teal mb-2">¿Qué aprenderás?</h4>
                <p className="text-gray-600">Estrategias para manejar la ansiedad y el miedo al dolor. Reducir el impacto emocional del dolor y reconectar con tu bienestar entendiendo como funciona nuestro cerebro ante el dolor.</p>
              </div>
              
              <div className="mt-auto text-center">
                <a href="#contacto" className="bg-teal hover:bg-darkTeal text-white font-medium py-2 px-6 rounded-lg transition duration-300 inline-block">
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