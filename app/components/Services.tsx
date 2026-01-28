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
      className: "z-[20] -mt-10 ml-8 md:ml-16" // Diminuí o recuo negativo para não tampar a pill
    },
    {
      label: "Motion Design",
      items: ["Vinhetas / animações de marca", "Lower thirds / legendas animadas", "Vídeos explicativos curtos (produto/serviço)"],
      className: "z-[10] -mt-10 ml-16 md:ml-32"
    }
  ];

  return (
    <section id="services" className="bg-neutral-950 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Título com SF Pro Light e Bold */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">
            <span className="font-extralight">O que a </span>
            <span className="font-bold">Cortezzi</span>
            <span className="font-extralight italic text-neutral-300"> pode </span>
            <span className="font-bold italic">te entregar?</span>
          </h2>
          <p className="text-neutral-400 mt-6 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Soluções completas, do conceito ao vídeo final com linguagem cinematográfica e foco em resultado.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          
          {/* Lado Esquerdo: Foto da Blusa - Ajustada para .jpg */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end pr-0 lg:pr-8">
            <div className="relative w-full max-w-[500px]">
              <img 
                src="/blusa.jpg" 
                alt="Estética Cortezzi" 
                className="w-full h-auto object-cover rounded-2xl"
                onError={(e) => {
                  console.log("Erro ao carregar blusa.jpg");
                  // Fallback caso o navegador tenha problema com cache
                  e.currentTarget.src = "/blusa.jpg?v=1";
                }}
              />
            </div>
          </div>

          {/* Lado Direito: Cards Maiores e Empilhamento Corrigido */}
          <div className="w-full lg:w-1/2 flex flex-col relative pt-4">
            {categories.map((cat, idx) => (
              <div 
                key={idx}
                className={`bg-[#FDFCF7] p-8 md:p-10 rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] w-full max-w-[520px] border border-white/5 ${cat.className}`}
              >
                {/* Badge Azul (Pill) */}
                <span className="inline-block bg-[#436AFA] text-white text-[10px] font-bold px-5 py-2 rounded-full mb-8 uppercase tracking-widest shadow-lg shadow-blue-900/20">
                  {cat.label}
                </span>

                {/* Itens com SF Pro Light/Medium */}
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start text-neutral-500 font-medium text-sm md:text-base leading-snug tracking-tight">
                      <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-neutral-300 rounded-full flex-shrink-0" />
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
