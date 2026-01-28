import Image from "next/image";

export default function GridZZ() {
  return (
    <section className="w-full py-8 md:py-12 bg-[#000000]">
      <div className="w-full max-w-[1920px] mx-auto">
        <Image
          src="/portfolio-mosaic.jpg"
          alt="Portfolio Cortezzi"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
}
