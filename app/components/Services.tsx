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
      className: "z-[20] -mt-16 ml-12 md:ml-20"
    },
    {
      label: "Motion Design",
      items: ["Vinhetas / animações de marca", "Lower thirds / legendas animadas", "Vídeos explicativos curtos (produto/serviço)"],
      className: "z-[10] -mt-16 ml-24 md:ml-40"
    }
  ];

  return (
    <section id="services" className="bg-neutral-950 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Título com SF Pro Light e Bold */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">
            <span className="font-light">O que a </span>
            <span className="font-bold">Cortezzi</span>
            <span className="font-light italic"> pode </span>
            <span className="font-bold italic">te entregar?</span>
          </h2>
          <p className="text-neutral-400 mt-6 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Soluções completas, do conceito ao vídeo final com linguagem cinematográfica e foco em resultado.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
          
          {/* Lado Esquerdo: Foto da Blusa */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              <img 
                src="/blusa.jpeg" 
                alt="Estética Cortezzi" 
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Lado Direito: Cards com tamanho idêntico e escadinha */}
          <div className="w-full lg:w-1/2 flex flex-col relative py-10">
            {categories.map((cat, idx) => (
              <div 
                key={idx}
                className={`bg-[#FDFCF7] p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-[420px] border border-white/5 ${cat.className}`}
              >
                {/* Badge Azul */}
                <span className="inline-block bg-[#436AFA] text-white text-[10px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                  {cat.label}
                </span>

                {/* Itens */}
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start text-neutral-500 font-medium text-sm md:text-base leading-tight">
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
