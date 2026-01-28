"use client";

import Image from "next/image";

export default function FraseBanner() {
  return (
    <section
      className="w-full flex items-center justify-center"
      style={{
        minHeight: "70vh",
        // Degradê ajustado: já está azul perto do meio
        backgroundImage:
          "linear-gradient(to bottom, #FFFBEF 0%, #FFFBEF 25%, #2D6BFF 55%, #2D6BFF 100%)",
      }}
    >
      <div className="relative w-full max-w-4xl px-6">
        <Image
          src="/frase.svg"
          alt="A Cortezzi transforma o ordinário em cinematográfico"
          width={1600}
          height={600}
          className="mx-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
