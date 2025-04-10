import React from 'react';

function Method() {
  return (
    <section id="metodo" className="py-20 bg-mintGreen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Mi método</h2>
          <p className="accent-text text-4xl mb-6 font-bold" style={{ color: 'var(--old-gold)' }}>
            Un espacio para ti, a tu ritmo
          </p>
          
          <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
            <p>
              Cada persona y situación es única. Mi enfoque combina estrategia, autoconocimiento y herramientas 
              probadas para lograr resultados concretos y sostenibles.
            </p>
            <p>
              Las sesiones son 100% personalizadas y se adaptan a tus necesidades y objetivos. Como coach, 
              mi rol es acompañarte, desafiarte con preguntas estratégicas y ayudarte a ganar claridad. 
              Tú decides el ritmo y el rumbo de tu proceso.
            </p>
          </div>
        </div>

        {/* Session details with icons */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="text-teal mr-4">
                <i className="fas fa-clock text-3xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Duración</h3>
                <p className="text-gray-600">60 minutos por sesión.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-teal mr-4">
                <i className="fas fa-video text-3xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Formato</h3>
                <p className="text-gray-600">Online o presencial (según disponibilidad).</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-teal mr-4">
                <i className="fas fa-calendar-alt text-3xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Frecuencia</h3>
                <p className="text-gray-600">Flexible según tu proceso y necesidades.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-teal mr-4">
                <i className="fas fa-compass text-3xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Enfoque</h3>
                <p className="text-gray-600">Basado en técnicas prácticas y reflexivas que te ayudarán a avanzar con confianza.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <h3 className="text-2xl font-semibold text-center mb-12 text-gray-800">Mi proceso</h3>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-lightTeal -translate-y-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-teal text-white flex items-center justify-center text-3xl font-bold mb-5 shadow-lg z-10">
                1
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-full text-center hover:shadow-lg transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-3 text-teal">Exploramos</h3>
                <p className="text-gray-600">Evaluamos tu punto de partida y desafíos.</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-teal text-white flex items-center justify-center text-3xl font-bold mb-5 shadow-lg z-10">
                2
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-full text-center hover:shadow-lg transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-3 text-teal">Definimos</h3>
                <p className="text-gray-600">Creamos un plan personalizado.</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-teal text-white flex items-center justify-center text-3xl font-bold mb-5 shadow-lg z-10">
                3
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-full text-center hover:shadow-lg transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-3 text-teal">Accionamos</h3>
                <p className="text-gray-600">Pasos concretos con seguimiento y acompañamiento.</p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-teal text-white flex items-center justify-center text-3xl font-bold mb-5 shadow-lg z-10">
                4
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-full text-center hover:shadow-lg transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-3 text-teal">Transformamos</h3>
                <p className="text-gray-600">Resultados sostenibles en el tiempo.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-16">
          <a href="#contacto" className="bg-teal hover:bg-darkTeal text-white font-medium py-3 px-8 rounded-lg transition duration-300 inline-block shadow-md">
            Agenda tu primera sesión gratuita
          </a>
        </div>
      </div>
    </section>
  );
}

export default Method; 