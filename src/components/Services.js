import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faKey, faTasks } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <section id="servicios" className="section has-background-light">
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 className="title is-2">Cómo puedo ayudarte</h2>
          <p className="subtitle mt-3">Soluciones personalizadas para tu crecimiento personal y profesional</p>
        </div>

        <div className="columns is-multiline">
          {/* Service 1 */}
          <div className="column is-4">
            <div className="card service-card">
              <div className="card-content">
                <div className="service-icon" style={{ color: 'var(--teal)', fontSize: '48px', marginBottom: '15px' }}>
                  <FontAwesomeIcon icon={faUserFriends} />
                </div>
                <h3 className="title is-4">Acompañamiento personalizado</h3>
                <p className="mt-3">
                  Sesiones individuales adaptadas a tus necesidades específicas para ayudarte a superar obstáculos y avanzar hacia tus metas.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="column is-4">
            <div className="card service-card">
              <div className="card-content">
                <div className="service-icon" style={{ color: 'var(--teal)', fontSize: '48px', marginBottom: '15px' }}>
                  <FontAwesomeIcon icon={faKey} />
                </div>
                <h3 className="title is-4">Estrategias para desbloquear tu potencial</h3>
                <p className="mt-3">
                  Herramientas prácticas y técnicas efectivas que te permitirán identificar y superar limitaciones para alcanzar tu máximo potencial.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="column is-4">
            <div className="card service-card">
              <div className="card-content">
                <div className="service-icon" style={{ color: 'var(--teal)', fontSize: '48px', marginBottom: '15px' }}>
                  <FontAwesomeIcon icon={faTasks} />
                </div>
                <h3 className="title is-4">Sesiones prácticas y efectivas</h3>
                <p className="mt-3">
                  Encuentros enfocados en resultados concretos, con ejercicios aplicables a tu día a día y seguimiento continuo para asegurar tu progreso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services; 