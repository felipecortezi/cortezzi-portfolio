// app/components/gridzz.tsx

import Image from "next/image";

export default function GridZZ() {
  return (
    <section className="w-full h-[1080px] relative overflow-hidden">
      <Image
        src="/portfolio-mosaic.jpg"
        alt="Mosaico de projetos Cortezzi"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute bottom-6 w-full text-center text-sm tracking-[0.3em] text-white">
        STORYTELLING • PRODUÇÃO • MOTION DESIGN
      </div>
    </section>
  );
}
