import React from 'react';

function Hero() {
  const cloudinaryVideoUrl = "https://res.cloudinary.com/dzhv9e639/video/upload/v1743261106/hero_video_rjjcnc.mp4";

  return (
    <section id="inicio" className="hero is-fullheight" style={{ backgroundColor: 'white' }}>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6 has-text-left">
              <h1 className="heading">Desbloquea tu potencial y diseña la vida que quieres.</h1>
              <h3 className="mb-5">Coaching y mentoring para crecimiento personal y profesional. Te acompaño a transformar bloqueos en oportunidades con herramientas prácticas y acompañamiento estratégico.</h3>
              
              <div className="buttons">
                <button className="button-primary">Reserva tu primera sesión gratuita</button>
              </div>
            </div>
            <div className="column is-5 is-offset-1">
              <div className="hero-video" style={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                position: 'relative'
              }}>
                <video
                  style={{ width: '100%', height: 'auto', display: 'block' }}
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
      </div>
    </section>
  );
}

export default Hero; 