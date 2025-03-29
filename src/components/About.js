import React from 'react';

function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-5">
            <div className="image-placeholder about-image" style={{
              height: '450px',
              borderRadius: '10px',
              backgroundColor: 'var(--mint)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--light-teal)'
            }}>
              <p className="has-text-centered" style={{ color: 'var(--teal)' }}>
                Imagen de Cristina en un entorno profesional
              </p>
              <div className="gold-accent"></div>
            </div>
          </div>
          
          <div className="column is-6 is-offset-1">
            <h2 className="title is-2">Conóceme mejor</h2>
            
            <div className="content">
              <p>
                Soy Cristina, coach profesional con años de experiencia ayudando a personas a desbloquear su potencial y alcanzar sus metas.
              </p>
              
              <div className="buttons mt-5">
                <button className="button-primary">Descubre más sobre mí</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 