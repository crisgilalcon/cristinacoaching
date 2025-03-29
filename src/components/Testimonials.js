import React, { useState } from 'react';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Las sesiones con Cristina han sido transformadoras. Su enfoque personalizado me ayudó a desbloquear mi potencial y alcanzar mis metas profesionales.",
      name: "Ana García",
      position: "Profesional en desarrollo"
    },
    {
      quote: "El acompañamiento de Cristina me dio las herramientas que necesitaba para superar mis bloqueos. Su metodología práctica marca la diferencia.",
      name: "Carlos Martínez",
      position: "Emprendedor"
    },
    {
      quote: "Gracias a Cristina he podido transformar mis inseguridades en fortalezas y diseñar un plan de acción efectivo para mis objetivos personales.",
      name: "Laura Rodríguez",
      position: "Gerente de proyectos"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-darkTeal mb-4">Testimonios destacados</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center">
              <div className="text-lightTeal text-4xl mb-6">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-xl text-gray-700 mb-8">
                {testimonials[currentIndex].quote}
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-1">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600 text-sm">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-8">
            <button 
              className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center mr-4 hover:bg-darkTeal transition duration-300"
              onClick={prevTestimonial}
              aria-label="Testimonio anterior"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${index === currentIndex ? 'bg-teal' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
            
            <button 
              className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center ml-4 hover:bg-darkTeal transition duration-300"
              onClick={nextTestimonial}
              aria-label="Testimonio siguiente"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 