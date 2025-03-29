import React from 'react';

function Method() {
  return (
    <section id="metodo" className="section">
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 className="title is-2">Mi método</h2>
          <p className="subtitle mt-3">Un enfoque estructurado para alcanzar tus objetivos</p>
        </div>

        <div className="columns is-multiline">
          <div className="column is-3">
            <div className="method-step">
              <div className="method-number">1</div>
              <h3 className="title is-4">Exploramos tu situación actual</h3>
              <p>Analizamos juntos dónde estás ahora, identificando puntos fuertes y áreas de mejora.</p>
            </div>
          </div>

          <div className="column is-3">
            <div className="method-step">
              <div className="method-number">2</div>
              <h3 className="title is-4">Definimos objetivos</h3>
              <p>Establecemos metas claras y alcanzables que te motiven y te ayuden a avanzar.</p>
            </div>
          </div>

          <div className="column is-3">
            <div className="method-step">
              <div className="method-number">3</div>
              <h3 className="title is-4">Diseñamos un plan de acción</h3>
              <p>Creamos estrategias personalizadas y pasos concretos para conseguir tus objetivos.</p>
            </div>
          </div>

          <div className="column is-3">
            <div className="method-step">
              <div className="method-number">4</div>
              <h3 className="title is-4">Implementamos cambios</h3>
              <p>Te acompaño durante todo el proceso de transformación, ajustando el plan cuando sea necesario.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Method; 