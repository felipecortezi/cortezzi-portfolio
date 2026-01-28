"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#FFFBEF] w-full min-h-[900px] py-32 lg:py-40">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* --- IMAGEM --- */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-black/90 aspect-[4/3]">
          <Image
            src="/about.jpg"
            alt="Cortezzi Studio"
            fill
            className="object-cover"
          />
        </div>

        {/* --- TEXTOS --- */}
        <div className="flex flex-col gap-6">
          {/* alinhado com o topo da imagem */}
          <h2 className="text-4xl lg:text-[40px] font-semibold tracking-tight text-neutral-900">
            A Cortezzi
          </h2>

          <p className="text-[15px] leading-[1.8] text-neutral-800 text-justify font-[300]">
            Movida por paixão e criatividade, a Cortezzi é um estúdio focado em vídeo que une direção, captação, edição e motion design para criar conteúdos sob medida. A gente acredita que imagem boa não é só “bonita” é intencional. Por isso, nosso trabalho nasce de um olhar cinematográfico, com narrativa, ritmo e acabamento premium, transformando o ordinário em algo que prende, comunica e permanece.
          </p>

          <p className="text-[15px] leading-[1.8] text-neutral-800 text-justify font-[300]">
            Para nós, cada projeto começa no essencial: um espaço em branco cheio de possibilidades. É ali que as ideias ganham forma, crescem e viram história com identidade, consistência e cuidado em cada detalhe, do primeiro frame à entrega final. Nosso estilo visual caminha entre o moderno e o atemporal: limpo quando precisa, texturizado quando pede, sempre com personalidade. Porque no fim, não se trata só de produzir vídeos e sim de dar movimento ao que a sua marca quer dizer.
          </p>

          <p className="text-[13px] text-neutral-600">
            living in motion — do briefing ao vídeo final.
          </p>
        </div>
      </div>
    </section>
  );
}
