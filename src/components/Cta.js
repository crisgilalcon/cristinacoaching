import React from 'react';

function Cta() {
  return (
    <section id="cta" className="py-20 bg-teal">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">Empieza tu transformación hoy</h2>
          <p className="text-xl text-white opacity-90 mb-10">
            Da el primer paso hacia el cambio que deseas ver en tu vida profesional y personal
          </p>
          <button className="bg-white text-teal hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition duration-300">
            Reserva tu primera sesión
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cta; 