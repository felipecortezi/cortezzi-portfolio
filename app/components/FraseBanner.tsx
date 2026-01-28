"use client";

import Image from "next/image";

export default function FraseBanner() {
  return (
    <section
      className="w-full py-24 md:py-28 lg:py-32"
      style={{
        // gradiente: começa em #FFFBEF e termina em #2D6BFF
        backgroundImage:
          "linear-gradient(to bottom, #FFFBEF 0%, #FFFBEF 45%, #2D6BFF 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8">
        {/* SVG da frase */}
        <div className="relative w-full max-w-3xl aspect-[16/4]">
          <Image
            src="/frase.svg"
            alt="A Cortezzi transforma o ordinário em cinematográfico."
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Subfrase */}
        <p className="text-sm md:text-base text-[#E0ECFF] font-[300]">
          Somos a sua produtora audiovisual!
        </p>
      </div>
    </section>
  );
}
