import React from 'react';

function Hero() {
  const cloudinaryVideoUrl = "https://res.cloudinary.com/dzhv9e639/video/upload/v1743261106/hero_video_rjjcnc.mp4";

  return (
    <section id="inicio" className="pt-24 min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0 text-left">
            <h1 className="heading text-left" style={{ 
              fontSize: '3rem', 
              fontFamily: 'var(--heading-font)', 
              color: 'var(--teal)', 
              fontWeight: 700,
              marginBottom: '1.5rem' 
            }}>
              Desbloquea tu potencial y diseña la vida que quieres.
            </h1>
            <h3 style={{ 
              fontFamily: 'var(--subheading-font)', 
              color: 'var(--dark-sage)',
              fontWeight: 400,
              marginBottom: '2rem',
              fontSize: '1.125rem',
              lineHeight: '1.6'
            }}>
              Coaching y mentoring para crecimiento personal y profesional. 
              Te acompaño a transformar bloqueos en oportunidades con herramientas 
              prácticas y acompañamiento estratégico.
            </h3>
            
            <button style={{ 
              backgroundColor: 'var(--teal)',
              color: 'white',
              borderRadius: '4px',
              padding: '0.75rem 1.5rem',
              fontFamily: 'var(--subheading-font)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'background-color 0.3s ease'
            }}
            className="hover:bg-[var(--dark-sage)]">
              Reserva tu primera sesión
            </button>
          </div>
          
          <div className="w-full md:w-1/2">
            <div style={{
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              position: 'relative'
            }}>
              <video
                className="w-full h-auto block"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={cloudinaryVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 