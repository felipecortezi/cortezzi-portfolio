import React from 'react';

export default function Services() {
  const categories = [
    {
      label: "Filmes & Captação",
      items: ["Institucional / manifesto", "Reels / Ads / campanhas", "Cobertura de evento (estética \"filme\")", "Direção & Captação"],
      className: "z-[30] self-start"
    },
    {
      label: "Edição & Pós-produção",
      items: ["Montagem + ritmo + storytelling", "Color grading (look cinema)", "Sound design (impacto e emoção)"],
      className: "z-[20] -mt-8 ml-8 md:ml-16" // Margem negativa menor para não tampar a pill
    },
    {
      label: "Motion Design",
      items: ["Vinhetas / animações de marca", "Lower thirds / legendas animadas", "Vídeos explicativos curtos"],
      className: "z-[10] -mt-8 ml-16 md:ml-32"
    }
  ];

  return (
    <section id="services" className="bg-neutral-950 py-24 px-6 overflow-hidden font-sans">
      <div className="mx-auto max-w-7xl">
        
        {/* Título Centralizado */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">
            <span className="font-light">O que a </span>
            <span className="font-bold">Cortezzi</span>
            <span className="font-light"> pode </span>
            <span className="font-bold">te entregar?</span>
          </h2>
          <p className="text-neutral-400 mt-6 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Soluções completas, do conceito ao vídeo final com linguagem cinematográfica e foco em resultado.
          </p>
        </div>

        {/* Layout centralizado: gap maior para equilibrar os lados */}
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
          
          {/* Lado Esquerdo: Foto da Blusa */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[480px]">
              <img 
                src="/blusa.jpg" 
                alt="Estética Cortezzi" 
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Lado Direito: Cards Esticados e Bordas Menos Arredondadas */}
          <div className="w-full lg:w-1/2 flex flex-col relative py-10 items-center lg:items-start">
            {categories.map((cat, idx) => (
              <div 
                key={idx}
                className={`bg-[#FDFCF7] p-8 md:p-10 rounded-[1.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] 
                w-full max-w-[540px] min-h-[240px] flex flex-col border border-white/5 ${cat.className}`}
              >
                {/* Badge Azul (Pill) */}
                <div className="mb-8">
                  <span className="inline-block bg-[#436AFA] text-white text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">
                    {cat.label}
                  </span>
                </div>

                {/* Lista de Itens */}
                <ul className="space-y-4 flex-grow">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start text-neutral-600 font-medium text-sm md:text-base leading-tight">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-neutral-300 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
