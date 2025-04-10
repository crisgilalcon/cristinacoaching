import React from 'react';

function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-offWhite">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-5/12">
            <div className="rounded-lg bg-mintGreen shadow-lg relative overflow-hidden border border-lightTeal">
              <img 
                src="https://res.cloudinary.com/dzhv9e639/image/upload/v1744188328/CristinaGil_apusz6.jpg" 
                alt="Cristina Gil" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="w-full md:w-6/12">
            <h2 className="text-4xl font-semibold mb-6 text-gray-800">Conóceme mejor</h2>
            
            <div className="text-gray-600 space-y-4">
              <p>
                Mi nombre es Cristina Gil Alcón, y llevo 17 años trabajando, creando y cambiando la vida de las personas. Mi trayectoria combina la psicología, el desarrollo humano, el arte y el coaching, herramientas con las que he acompañado a cientos de personas en su transformación personal y profesional.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-medium text-teal mb-3">Mi formación:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Licenciatura en Psicología de las Organizaciones</li>
                  <li>Postgrado en Desarrollo de Talento</li>
                  <li>Seminario Internacional en Desarrollo Organizacional y Consultoría de Procesos</li>
                  <li>Postgrado en Arte Terapia</li>
                  <li>Certificación en Executive Coaching por ICF</li>
                </ul>
              </div>
              
              <div className="mt-6 italic border-l-4 border-teal pl-4 py-2">
                "Hace años me enfrenté a uno de los mayores desafíos de mi vida: el dolor crónico. Fue una experiencia que me transformó y me llevó a desarrollar un enfoque de coaching basado en la comprensión real de los procesos emocionales. Desde entonces, acompaño a personas en su crecimiento personal y profesional, ayudándolas a recuperar su confianza y diseñar estrategias efectivas para avanzar."
              </div>
              
              <div className="mt-8">
                <a href="#contacto" className="bg-teal hover:bg-darkTeal text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-block">
                  ¿Hablamos?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 