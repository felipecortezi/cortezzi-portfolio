// app/components/Hero.tsx
import Image from "next/image";

const HERO_IMG = "/hero.jpg"; // imagem em public/hero.jpg

export default function Hero() {
  return (
    <section className="relative isolate w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[88vh] overflow-hidden">
      {/* Background */}
      <Image
        src={HERO_IMG}
        alt="Cortezzi — Living in motion"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay suave para leitura */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[70vh] md:min-h-[80vh] lg:min-h-[88vh] items-center">
          <div className="text-white">
            {/* 'Living' regular + espaçamento + 'in motion' bold */}
            <h1 className="flex items-baseline gap-10 md:gap-14 lg:gap-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              <span className="font-normal">Living</span>
              <span className="font-bold">in&nbsp;motion</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
