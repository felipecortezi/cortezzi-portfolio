// app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-neutral-950">
      {/* BG image */}
      <Image
        src="/hero.jpg"
        alt="Cortezzi Studio"
        fill
        priority
        className="object-cover"
      />

      {/* overlay leve */}
      <div className="absolute inset-0 bg-black/45" />

      {/* texto centralizado */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <h1
          className="
            flex items-baseline gap-6
            text-white text-4xl md:text-5xl lg:text-6xl
            font-normal leading-tight text-center
          "
        >
          <span className="font-normal">Living</span>
          <span className="font-semibold">in&nbsp;motion</span>
        </h1>
      </div>
    </section>
  );
}
