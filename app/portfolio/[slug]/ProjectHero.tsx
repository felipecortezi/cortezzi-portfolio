import Image from "next/image";

export default function ProjectHero({ src }: { src: string }) {
  if (!src) return null;

  return (
    <section
      className="
        relative w-screen 
        left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]
      "
    >
      <div className="relative h-[44vh] md:h-[60vh]">
        <Image
          src={src}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 pointer-events-none" />
      </div>
    </section>
  );
}
