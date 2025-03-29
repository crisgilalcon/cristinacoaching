import React from 'react';

function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-5/12">
            <div className="w-full h-[450px] rounded-lg bg-mintGreen flex justify-center items-center shadow-lg relative overflow-hidden border border-lightTeal">
              <p className="text-center text-teal">
                Imagen de Cristina en un entorno profesional
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-6/12">
            <h2 className="text-4xl font-semibold mb-6 text-gray-800">Conóceme mejor</h2>
            
            <div>
              <p className="text-gray-600 mb-6">
                Soy Cristina, coach profesional con años de experiencia ayudando a personas a desbloquear su potencial y alcanzar sus metas.
              </p>
              
              <div className="mt-8">
                <button className="bg-teal hover:bg-darkTeal text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                  Descubre más sobre mí
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 