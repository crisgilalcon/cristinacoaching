import React from 'react';

function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-darkTeal mb-4">Cómo puedo ayudarte</h2>
          <p className="text-xl text-gray-600">Soluciones personalizadas para tu crecimiento personal y profesional</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
            <div className="text-teal text-5xl mb-6">
              <i className="fas fa-user-friends"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Acompañamiento personalizado</h3>
            <p className="text-gray-600">
              Sesiones individuales adaptadas a tus necesidades específicas para ayudarte a superar obstáculos y avanzar hacia tus metas.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
            <div className="text-teal text-5xl mb-6">
              <i className="fas fa-key"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Estrategias para desbloquear tu potencial</h3>
            <p className="text-gray-600">
              Herramientas prácticas y técnicas efectivas que te permitirán identificar y superar limitaciones para alcanzar tu máximo potencial.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
            <div className="text-teal text-5xl mb-6">
              <i className="fas fa-tasks"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Sesiones prácticas y efectivas</h3>
            <p className="text-gray-600">
              Encuentros enfocados en resultados concretos, con ejercicios aplicables a tu día a día y seguimiento continuo para asegurar tu progreso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services; 