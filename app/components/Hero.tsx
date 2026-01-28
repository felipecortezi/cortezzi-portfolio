// app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] min-h-[620px] overflow-hidden">
      {/* Fundo */}
      <Image
        src="/hero.jpg"
        alt="Cortezzi Studio"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Título centralizado com o buraco para a logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-lg sm:text-2xl md:text-3xl tracking-tight flex items-center gap-32 sm:gap-48 md:gap-64 uppercase">
          {/* O "gap" acima cria o espaço vazio no meio para a logo aparecer */}
          
          <span className="font-normal">Living</span>
          
          <span className="font-bold whitespace-nowrap">in motion</span>
        </h1>
      </div>
    </section>
  );
}
