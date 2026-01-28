import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="bg-[#FFFBEF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-center">
          {/* Imagem levemente vertical (quase quadrada) */}
          <div className="relative w-full aspect-[5/6] overflow-hidden rounded-2xl ring-1 ring-neutral-300 shadow-sm">
            <Image
              src="/about.jpg"
              alt="Estúdio Cortezzi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
              A Cortezzi
            </h2>

            <p className="mt-5 text-[17px] sm:text-lg leading-relaxed text-neutral-800 text-justify font-thin">
              Movida por paixão e criatividade, a Cortezzi é um estúdio focado em vídeo que une direção,
              captação, edição e motion design para criar conteúdos sob medida. A gente acredita que imagem
              boa não é só “bonita” — é intencional. Por isso, nosso trabalho nasce de um olhar
              cinematográfico, com narrativa, ritmo e acabamento premium, transformando o ordinário em algo
              que prende, comunica e permanece.
            </p>

            <p className="mt-4 text-[17px] sm:text-lg leading-relaxed text-neutral-800 text-justify font-thin">
              Para nós, cada projeto começa no essencial: um espaço em branco cheio de possibilidades.
              É ali que as ideias ganham forma, crescem e viram história com identidade, consistência e
              cuidado em cada detalhe, do primeiro frame à entrega final. Nosso estilo visual caminha entre
              o moderno e o atemporal: limpo quando precisa, texturizado quando pede, sempre com
              personalidade. Porque no fim, não se trata só de produzir vídeos e sim de dar movimento ao que
              a sua marca quer dizer.
            </p>

            <p className="mt-6 text-sm text-neutral-600 font-thin">
              <span className="text-neutral-900">living in motion</span> — do briefing ao vídeo final.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
