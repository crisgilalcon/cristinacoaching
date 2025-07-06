import React, { useState } from 'react';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Cristina me ayudó a definir objetivos claros desde el primer día y fuimos trabajando paso a paso hacia el cambio. Terminé las sesiones con herramientas concretas que aplico en mi día a día y sobre todo interiorizando decisiones y conclusiones que me ayudaron a seguir adelante tanto a nivel personal como profesional. Super recomendable!!",
      name: "L.S",
      position: ""
    },
    {
      quote: "Hay veces en la vida que las cosas se complican y no sabes muy bien cómo, pero sí sabes que necesitas que te echen un cable. Y Cris es ese cable. Es fácil conectar con ella, y a partir de ahí empieza el trabajo. Serán pasos adelante y pasos atrás, pero un buen día te percatas de que todo está mejor, y otro día de que es hora de finalizar el proceso. Hace falta confiar mucho en alguien para explicarle lo que pocas personas saben de ti. Cris, gracias por tu profesionalidad, por tu saber hacer y en definitiva, por tu ayuda.",
      name: "I.P",
      position: ""
    },
    {
      quote: "Gracias a Cristina he analizado situaciones que daba por normales y no lo eran. Me ha hecho creer en mí y en mi fuerza para afrontar los problemas y dilemas que nos encontramos cada día. Cristina me ha enseñado las herramientas para conseguirlo. Ha sido una suerte contar contigo.",
      name: "M.M",
      position: ""
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-20 bg-offWhite">
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