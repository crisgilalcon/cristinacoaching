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
                Soy Cristina Gil, y desde hace más de 17 años acompaño a personas y equipos a transformar su vida y alcanzar todo su potencial.
              </p>
              
              <p>
                Mi misión es ayudarte a crecer, a superar tus bloqueos y a descubrir recursos que quizás hoy ni imaginas.
              </p>
              
              <p>
                He trabajado con perfiles muy diversos, desde directivos y managers que buscaban llevar su liderazgo al siguiente nivel, hasta personas que deseaban incorporar el desarrollo personal a su día a día.
              </p>
              
              <p>
                Mi enfoque integra la psicología, el coaching, el desarrollo humano y el arte, creando un espacio de confianza donde puedas avanzar a tu ritmo y con sentido.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-medium text-teal mb-3">Mi formación:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Licenciatura en Psicología - UAB</li>
                  <li>Postgrado en Desarrollo de Talento - UB</li>
                  <li>Desarrollo Organizacional y Consultoría de Procesos - Itamar Rogovsky</li>
                  <li>Postgrado en Arte Terapia - Metàfora Centro de Estudios</li>
                  <li>Certificación en Executive Coaching por ICF - EEC</li>
                </ul>
              </div>
              
              <div className="mt-6 italic border-l-4 border-teal pl-4 py-2">
                "Hace años me enfrenté a uno de los mayores retos de mi vida: el dolor crónico. Una experiencia que cambió por completo mi manera de ver y entender el cuerpo, las emociones y la mente. Durante ese proceso descubrí, gracias a la neurociencia, cómo nuestras emociones impactan directamente en el dolor y cómo podemos crear nuevas conexiones neuronales que nos permitan sanar y desarrollar habilidades que nos parecen inalcanzables. Hoy puedo decir que estoy totalmente recuperada. Esta vivencia no solo me transformó personalmente, sino que marcó mi forma de acompañar a otros."
              </div>
              
              <div className="mt-6 italic border-l-4 border-teal pl-4 py-2">
                "Mi enfoque de coaching integra el conocimiento profundo de la gestión emocional, la resiliencia y el potencial humano para superar límites que a veces creemos inamovibles. Hoy trabajo como coach personal y profesional, ayudando a personas a alcanzar sus objetivos, a fortalecer su liderazgo y a reconectarse con su propósito. Y también acompaño a quienes viven con dolor crónico, sabiendo de primera mano que es posible volver a vivir sin dolor, recuperar la confianza y diseñar un camino de cambio real."
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