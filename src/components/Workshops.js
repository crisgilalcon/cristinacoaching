import React from 'react';

function Workshops() {
  return (
    <section id="colaboracion" className="section has-background-light">
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 className="title is-2">Cómo podemos trabajar juntos</h2>
          <p className="subtitle mt-3">Elige la opción que mejor se adapte a tus necesidades</p>
        </div>

        <div className="columns is-multiline">
          {/* Option 1 */}
          <div className="column is-4">
            <div className="card workshop-card">
              <div className="card-image">
                <div className="workshop-image-placeholder" style={{
                  height: '200px',
                  backgroundColor: 'var(--mint)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'var(--teal)'
                }}>
                  Sesiones individuales
                </div>
              </div>
              <div className="card-content">
                <h3 className="title is-4">Sesiones individuales</h3>
                <p>
                  Sesiones personalizadas one-to-one donde trabajamos específicamente en tus objetivos y necesidades, con un plan adaptado exclusivamente para ti.
                </p>
                <button className="button-primary mt-4">Más información</button>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div className="column is-4">
            <div className="card workshop-card">
              <div className="card-image">
                <div className="workshop-image-placeholder" style={{
                  height: '200px',
                  backgroundColor: 'var(--mint)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'var(--teal)'
                }}>
                  Programas personalizados
                </div>
              </div>
              <div className="card-content">
                <h3 className="title is-4">Programas personalizados</h3>
                <p>
                  Programas completos con seguimiento continuo durante varias semanas, diseñados para lograr transformaciones profundas y resultados duraderos.
                </p>
                <button className="button-primary mt-4">Más información</button>
              </div>
            </div>
          </div>

          {/* Option 3 */}
          <div className="column is-4">
            <div className="card workshop-card">
              <div className="card-image">
                <div className="workshop-image-placeholder" style={{
                  height: '200px',
                  backgroundColor: 'var(--mint)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'var(--teal)'
                }}>
                  Talleres grupales
                </div>
              </div>
              <div className="card-content">
                <h3 className="title is-4">Talleres grupales</h3>
                <p>
                  Experiencias en grupo donde compartir y aprender colectivamente, desarrollando habilidades específicas en un ambiente colaborativo y de apoyo mutuo.
                </p>
                <button className="button-primary mt-4">Más información</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workshops; 