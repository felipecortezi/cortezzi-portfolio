// app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Cortezzi Studio"
        fill
        priority
        className="object-cover"
      />

      {/* texto afastado e acima do centro */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[28%] z-10">
        <h1
          className="
            flex items-baseline
            gap-24 sm:gap-32 lg:gap-48 xl:gap-64    /* <<< AFASTAMENTO GRANDE */
            text-white text-2xl md:text-3xl lg:text-4xl
            font-normal leading-tight text-center whitespace-nowrap
          "
        >
          <span className="font-normal">Living</span>
          <span className="font-semibold">in&nbsp;motion</span>
        </h1>
      </div>
    </section>
  );
}
