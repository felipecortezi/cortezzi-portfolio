// app/components/Cases.tsx
import Image from "next/image";

export default function Cases() {
  return (
    <section className="w-full bg-[#F9F7F0] py-20 md:py-32 px-6 flex flex-col items-center">
      
      {/* Título - SF Pro Semibold em minúsculo */}
      <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-2 tracking-tighter lowercase">
        cases
      </h2>
      
      {/* Subtítulo - SF Pro Light */}
      <p className="text-base md:text-lg font-light text-gray-400 mb-16 md:mb-24">
        Quem confia na Cortezzi©
      </p>

      {/* Container das Logos - Ajustado para não ficar gigante */}
      <div className="w-full max-w-4xl opacity-80">
        <Image
          src="/Clientes.png"
          alt="nossos clientes"
          width={1200}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Frase de baixo - SF Pro Light */}
      <p className="mt-16 md:mt-24 text-gray-400 text-xs md:text-sm font-light text-center max-w-xl leading-relaxed">
        Algumas marcas e pessoas que confiaram e confiam no nosso trabalho!
      </p>
      
    </section>
  );
}
