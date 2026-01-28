"use client";

import Image from "next/image";

export default function FraseBanner() {
  return (
    <section
      className="
        w-full
        flex items-center justify-center
        min-h-[680px] md:min-h-[860px]   /* altura bem próxima de 1080 no desktop */
        py-16 md:py-24                   /* respiro em cima e embaixo da frase */
      "
      style={{
        backgroundImage:
          // 0–25% off-white, 25–50% transição, 50–100% azul sólido
          "linear-gradient(to bottom, " +
          "#FFFBEF 0%, " +      // off white
          "#FFFBEF 25%, " +     // ainda claro
          "#AFC8FF 40%, " +     // começo da transição
          "#2D6BFF 50%, " +     // já totalmente azul aqui (50%)
          "#2D6BFF 100%)",      // azul sólido até o final
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
