// app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] min-h-[620px] overflow-hidden">
      {/* Apenas a Imagem de Fundo */}
      <Image
        src="/hero.jpg"
        alt="Cortezzi Studio"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
