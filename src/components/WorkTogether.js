import React from 'react';

function WorkTogether() {
  const categories = [
    {
      title: "Desarrollo personal",
      description: "Autoestima, confianza, gestión del tiempo, hábitos.",
      icon: "fa-solid fa-seedling"
    },
    {
      title: "Carrera profesional",
      description: "Planificación de trayectoria, liderazgo, gestión de equipos.",
      icon: "fa-solid fa-briefcase"
    },
    {
      title: "Relaciones",
      description: "Comunicación efectiva, resolución de conflictos.",
      icon: "fa-solid fa-handshake"
    },
    {
      title: "Salud emocional",
      description: "Gestión del estrés, emociones, bienestar integral.",
      icon: "fa-solid fa-heart-pulse"
    },
    {
      title: "Habilidades clave",
      description: "Creatividad, toma de decisiones, autoconocimiento.",
      icon: "fa-solid fa-lightbulb"
    },
    {
      title: "Metas y propósito",
      description: "Encontrar claridad en tus objetivos y diseñar un plan para lograrlos.",
      icon: "fa-solid fa-compass"
    }
  ];

  return (
    <section id="trabajo-juntos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-3 text-darkSage">¿Qué podemos trabajar juntos?</h2>
          <h3 className="text-2xl text-teal mb-6">El coaching a tu medida: Tú eliges el camino, yo te acompaño.</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Cada persona es única, por eso diseñamos sesiones personalizadas en función de lo que necesitas. Podemos trabajar juntos en:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-mintGreen rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-teal flex">
              <div className="mr-4 text-4xl text-teal">
                <i className={category.icon}></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-darkSage">{category.title}</h4>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contacto" className="bg-teal hover:bg-darkTeal text-white font-medium py-3 px-8 rounded-lg transition duration-300 inline-flex items-center">
            Descubre cómo podemos empezar
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default WorkTogether; 