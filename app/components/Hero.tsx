// app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      {/* BG image */}
      <Image
        src="/hero.jpg"
        alt="Cortezzi Studio"
        fill
        priority
        className="object-cover"
      />

      {/* texto centralizado, levemente acima do centro */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[18%] z-10">
        <h1
          className="
            flex items-baseline gap-6
            text-white text-2xl md:text-3xl lg:text-4xl
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
