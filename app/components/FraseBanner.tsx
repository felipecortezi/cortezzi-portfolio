"use client";

import Image from "next/image";

export default function FraseBanner() {
  return (
    <section
      className="w-full flex items-center justify-center py-20 md:py-28"
      style={{
        // Degradê mais suave e azul chegando mais cedo
        backgroundImage:
          "linear-gradient(to bottom, #FFFBEF 0%, #FFFBEF 10%, #F0F4FF 20%, #2D6BFF 35%, #2D6BFF 100%)",
      }}
    >
      <div className="relative w-full max-w-5xl px-6">
        <Image
          src="/frase.svg"
          alt="A Cortezzi transforma o ordinário em cinematográfico"
          width={1920}
          height={1080}
          className="mx-auto w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
