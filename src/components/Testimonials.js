import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
    <section id="testimonios" className="section">
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 className="title is-2">Testimonios destacados</h2>
        </div>

        <div className="testimonial-carousel">
          <div className="columns is-centered">
            <div className="column is-8">
              <div className="card testimonial-card">
                <div className="card-content has-text-centered">
                  <div className="testimonial-quote">
                    <FontAwesomeIcon icon={faQuoteLeft} style={{ color: 'var(--light-teal)', fontSize: '36px' }} />
                  </div>
                  <p className="mt-4 mb-5 is-size-5">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div className="testimonial-author has-text-centered">
                    <h4 className="title is-5 mb-0">{testimonials[currentIndex].name}</h4>
                    <p className="is-size-7">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
              
              <div className="carousel-navigation has-text-centered mt-4">
                <button 
                  className="button is-rounded carousel-button" 
                  onClick={prevTestimonial}
                  aria-label="Testimonio anterior"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                {testimonials.map((_, index) => (
                  <span 
                    key={index} 
                    className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                  ></span>
                ))}
                <button 
                  className="button is-rounded carousel-button" 
                  onClick={nextTestimonial}
                  aria-label="Testimonio siguiente"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 