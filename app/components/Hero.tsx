// app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Cortezzi — Living in motion"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
