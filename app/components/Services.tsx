import React from 'react';

export default function Services() {
  const categories = [
    {
      label: "Filmes & Captação",
      items: [
        "Institucional / manifesto",
        "Reels / Ads / campanhas",
        "Cobertura de evento (com nossa estética \"filme\")",
        "Direção & Captação"
      ],
      // z-index alto para ficar no topo, sem margem extra
      className: "z-[30]" 
    },
    {
      label: "Edição & Pós-produção",
      items: [
        "Montagem + ritmo + storytelling",
        "Color grading (look cinema)",
        "Sound design (impacto e emoção)"
      ],
      // Empilha embaixo do primeiro e desloca para a direita
      className: "z-[20] -mt-12 ml-6 md:ml-12"
    },
    {
      label: "Motion Design",
      items: [
        "Vinhetas / animações de marca",
        "Lower thirds / legendas animadas",
        "Vídeos explicativos curtos (produto/serviço)"
      ],
      // Empilha embaixo do segundo e desloca mais para a direita
      className: "z-[10] -mt-12 ml-12 md:ml-24"
    }
  ];

  return (
    <section id="services" className="bg-neutral-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Cabeçalho centralizado com a nova tipografia */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            O que a <span className="font-extrabold uppercase italic">Cortezzi</span> pode <span className="font-light italic">te entregar?</span>
          </h2>
          <p className="text-neutral-400 mt-4 text-lg max-w-2xl mx-auto font-light">
            Soluções completas, do conceito ao vídeo final com linguagem cinematográfica e foco em resultado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Sua foto blusa.jpeg */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px]">
              <img 
                src="/blusa.jpeg" 
                alt="Estética Cortezzi" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Lado Direito: Cards em cascata */}
          <div className="relative flex flex-col pb-12">
            {categories.map((cat, idx) => (
              <div 
                key={idx}
                className={`bg-[#FDFCF7] p-8 md:p-10 rounded-[35px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 ${cat.className} transition-transform hover:scale-[1.02] duration-300`}
              >
                {/* Pill Azul (Badge) */}
                <div className="inline-block bg-[#436AFA] text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                  {cat.label}
                </div>

                {/* Lista de tópicos com bullet points sutis */}
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start text-[#4A4A4A] text-sm md:text-base font-medium">
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
