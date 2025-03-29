import React from 'react';

function Hero() {
  const cloudinaryVideoUrl = "https://res.cloudinary.com/dzhv9e639/video/upload/v1743261106/hero_video_rjjcnc.mp4";

  return (
    <section id="inicio" className="pt-24 min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0 text-left">
            <h1 className="text-left text-4xl font-bold text-gray-800 mb-6">
              Desbloquea tu potencial y diseña la vida que quieres.
            </h1>
            <h3 className="text-gray-600 text-lg mb-8 leading-relaxed">
              Coaching y mentoring para crecimiento personal y profesional. 
              Te acompaño a transformar bloqueos en oportunidades con herramientas 
              prácticas y acompañamiento estratégico.
            </h3>
            
            <button className="bg-teal hover:bg-darkTeal text-white font-medium py-3 px-6 rounded-lg transition duration-300 uppercase tracking-wide">
              Reserva tu primera sesión
            </button>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg relative">
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