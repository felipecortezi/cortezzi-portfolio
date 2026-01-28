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

      {/* Título central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight">
          Living in motion
        </h1>
      </div>
    </section>
  );
}
