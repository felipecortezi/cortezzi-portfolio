// app/components/Cases.tsx
import Image from "next/image";

export default function Cases() {
  return (
    <section className="w-full bg-[#F9F7F0] py-24 md:py-40 px-6 flex flex-col items-center">
      
      {/* Título - Aumentado para 6xl/7xl para dar mais peso visual */}
      <h2 className="text-6xl md:text-8xl font-bold text-[#1A1A1A] mb-4 tracking-tighter lowercase">
        cases
      </h2>
      
      {/* Subtítulo - SF Pro Light aumentado para XL */}
      <p className="text-lg md:text-2xl font-light text-gray-400 mb-20 md:mb-32">
        Quem confia na Cortezzi©
      </p>

      {/* Container das Logos - Expandido de max-w-4xl para max-w-6xl e opacity 100% */}
      <div className="w-full max-w-6xl opacity-100 transition-opacity duration-500">
        <Image
          src="/Clientes.png"
          alt="nossos clientes"
          width={1800} // Aumentado para garantir resolução no resize
          height={900}
          className="w-full h-auto object-contain scale-110" // scale-110 dá um ganho extra de tamanho
          priority
        />
      </div>

      {/* Frase de baixo - Aumentada para base/lg */}
      <p className="mt-20 md:mt-32 text-gray-400 text-sm md:text-base font-light text-center max-w-2xl leading-relaxed tracking-wide">
        Algumas marcas e pessoas que confiaram e confiam no nosso trabalho!
      </p>
      
    </section>
  );
}
