// app/components/gridzz.tsx
import Image from "next/image";

export default function GridZZ() {
  return (
    <section className="w-full">
      <Image
        src="/portfolio-mosaic.jpg"
        alt="Portfolio Mosaic"
        width={1920} // Largura original da sua foto
        height={1080} // Altura original da sua foto
        priority
        className="w-full h-auto block" 
        /* "w-full" garante que ela ocupe toda a largura */
        /* "h-auto" faz a altura se ajustar proporcionalmente sem cortar */
      />
    </section>
  );
}
