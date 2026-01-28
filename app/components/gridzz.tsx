// app/components/gridzz.tsx

import Image from "next/image";

export default function GridZZ() {
  return (
    <section className="w-full h-[1080px] relative overflow-hidden">
      <Image
        src="/portfolio-mosaic.jpg"
        alt="Portfolio Mosaic"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}
