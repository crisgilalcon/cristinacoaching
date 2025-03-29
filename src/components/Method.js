import React from 'react';

function Method() {
  return (
    <section id="metodo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Mi método</h2>
          <p className="text-xl text-gray-600">Un enfoque estructurado para alcanzar tus objetivos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center text-2xl font-bold mb-5">1</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-700">Exploramos tu situación actual</h3>
            <p className="text-gray-600">Analizamos juntos dónde estás ahora, identificando puntos fuertes y áreas de mejora.</p>
          </div>

          <div className="p-6 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center text-2xl font-bold mb-5">2</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-700">Definimos objetivos</h3>
            <p className="text-gray-600">Establecemos metas claras y alcanzables que te motiven y te ayuden a avanzar.</p>
          </div>

          <div className="p-6 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center text-2xl font-bold mb-5">3</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-700">Diseñamos un plan de acción</h3>
            <p className="text-gray-600">Creamos estrategias personalizadas y pasos concretos para conseguir tus objetivos.</p>
          </div>

          <div className="p-6 hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center text-2xl font-bold mb-5">4</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-700">Implementamos cambios</h3>
            <p className="text-gray-600">Te acompaño durante todo el proceso de transformación, ajustando el plan cuando sea necesario.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Method; 