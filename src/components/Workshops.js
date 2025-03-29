import React from 'react';

function Workshops() {
  return (
    <section id="colaboracion" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Cómo podemos trabajar juntos</h2>
          <p className="text-xl text-gray-600">Elige la opción que mejor se adapte a tus necesidades</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Option 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="h-48 bg-mintGreen flex justify-center items-center text-teal text-xl font-medium">
              Sesiones individuales
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Sesiones individuales</h3>
              <p className="text-gray-600 mb-6">
                Sesiones personalizadas one-to-one donde trabajamos específicamente en tus objetivos y necesidades, con un plan adaptado exclusivamente para ti.
              </p>
              <button className="bg-teal hover:bg-darkTeal text-white font-medium py-2 px-5 rounded-lg transition duration-300">
                Más información
              </button>
            </div>
          </div>

          {/* Option 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="h-48 bg-mintGreen flex justify-center items-center text-teal text-xl font-medium">
              Programas personalizados
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Programas personalizados</h3>
              <p className="text-gray-600 mb-6">
                Programas completos con seguimiento continuo durante varias semanas, diseñados para lograr transformaciones profundas y resultados duraderos.
              </p>
              <button className="bg-teal hover:bg-darkTeal text-white font-medium py-2 px-5 rounded-lg transition duration-300">
                Más información
              </button>
            </div>
          </div>

          {/* Option 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="h-48 bg-mintGreen flex justify-center items-center text-teal text-xl font-medium">
              Talleres grupales
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Talleres grupales</h3>
              <p className="text-gray-600 mb-6">
                Experiencias en grupo donde compartir y aprender colectivamente, desarrollando habilidades específicas en un ambiente colaborativo y de apoyo mutuo.
              </p>
              <button className="bg-teal hover:bg-darkTeal text-white font-medium py-2 px-5 rounded-lg transition duration-300">
                Más información
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workshops; 