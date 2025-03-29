import React from 'react';

function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-5">
            <p className="accent-text" style={{ fontSize: '36px' }}>Conecta</p>
            <h2 className="title is-2">Contáctame</h2>
            
            <div className="content">
              <p className="mb-4">
                Estoy aquí para ayudarte en tu camino de crecimiento personal y profesional. 
                Si tienes alguna pregunta o deseas agendar una sesión, no dudes en contactarme.
              </p>
              
              <div className="contact-info">
                <div className="contact-item mb-3">
                  <span className="icon mr-3" style={{ color: 'var(--gold)' }}>
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span>info@cristinacoaching.com</span>
                </div>
                
                <div className="contact-item mb-3">
                  <span className="icon mr-3" style={{ color: 'var(--gold)' }}>
                    <i className="fas fa-phone"></i>
                  </span>
                  <span>+34 600 000 000</span>
                </div>
                
                <div className="contact-item mb-5">
                  <span className="icon mr-3" style={{ color: 'var(--gold)' }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span>Madrid, España (Sesiones presenciales y online)</span>
                </div>
              </div>
              
              <div className="social-media">
                <h4 className="title is-5 mb-3">Sígueme en redes sociales</h4>
                <div className="buttons">
                  <button className="button is-rounded" style={{ backgroundColor: 'var(--teal)', color: 'white' }}>
                    <span className="icon">
                      <i className="fab fa-instagram"></i>
                    </span>
                  </button>
                  <button className="button is-rounded" style={{ backgroundColor: 'var(--teal)', color: 'white' }}>
                    <span className="icon">
                      <i className="fab fa-linkedin"></i>
                    </span>
                  </button>
                  <button className="button is-rounded" style={{ backgroundColor: 'var(--teal)', color: 'white' }}>
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="column is-6 is-offset-1">
            <div className="box" style={{ boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <h3 className="title is-4 mb-4">Envíame un mensaje</h3>
              
              <div className="field">
                <label className="label">Nombre</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Tu nombre" />
                </div>
              </div>
              
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="email" placeholder="Tu email" />
                </div>
              </div>
              
              <div className="field">
                <label className="label">Asunto</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Asunto de tu mensaje" />
                </div>
              </div>
              
              <div className="field">
                <label className="label">Mensaje</label>
                <div className="control">
                  <textarea className="textarea" placeholder="Escribe tu mensaje aquí" rows="5"></textarea>
                </div>
              </div>
              
              <div className="field">
                <div className="control">
                  <button className="button-primary">Enviar Mensaje</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 