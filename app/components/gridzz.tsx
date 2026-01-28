// app/components/gridzz.tsx

import Image from "next/image";

export default function GridZZ() {
  return (
    <section className="w-full relative aspect-video"> 
      {/* "aspect-video" garante a proporção 16:9 automática baseada na largura da tela */}
      <Image
        src="/portfolio-mosaic.jpg"
        alt="Portfolio Mosaic"
        fill
        priority
        className="object-contain" 
        /* "object-contain" garante que a imagem inteira apareça sem cortes */
      />
    </section>
  );
}
