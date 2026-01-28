import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#FFFBEF] pt-12 pb-12 md:pt-16 md:pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* Bloco da imagem */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-[32px] bg-[#111111] overflow-hidden">
            <Image
              src="/about-cortezzi.jpg"
              alt="Setup Cortezzi"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Bloco de texto */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            A Cortezzi
          </h2>

          <p
            className="text-[15px] md:text-[16px] leading-relaxed text-[#3d3d3d]"
            style={{ textAlign: "justify" }}
          >
            Movida por paixão e criatividade, a Cortezzi é um estúdio focado em
            vídeo que une direção, captação, edição e motion design para criar
            conteúdos sob medida. A gente acredita que imagem boa não é só
            “bonita” é intencional. Por isso, nosso trabalho nasce de um olhar
            cinematográfico, com narrativa, ritmo e acabamento premium,
            transformando o ordinário em algo que prende, comunica e permanece.
            <br />
            <br />
            Para nós, cada projeto começa no essencial: um espaço em branco
            cheio de possibilidades. É ali que as ideias ganham forma, crescem e
            viram história com identidade, consistência e cuidado em cada
            detalhe, do primeiro frame à entrega final. Nosso estilo visual
            caminha entre o moderno e o atemporal: limpo quando precisa,
            texturizado quando pede, sempre com personalidade. Porque no fim,
            não se trata só de produzir vídeos e sim de dar movimento ao que a
            sua marca quer dizer.
          </p>

          <p className="mt-5 text-sm text-[#6b6b6b]">
            living in motion — do briefing ao vídeo final.
          </p>
        </div>
      </div>
    </section>
  );
}
