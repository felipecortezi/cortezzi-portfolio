// app/components/gridzz.tsx
import Image from "next/image";

export default function GridZZ() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <Image
          src="/portfolio-mosaic.jpg"
          alt="Mosaico de projetos Cortezzi"
          width={1920}
          height={1080}
          className="w-full h-auto rounded-3xl object-cover"
          priority
        />
      </div>
    </section>
  );
}
