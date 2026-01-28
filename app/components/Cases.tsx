// app/components/Cases.tsx
import Image from "next/image";

export default function Cases() {
  return (
    <section className="w-full bg-[#F9F7F0] flex justify-center">
      <div className="w-full max-w-[1920px]">
        <Image
          src="/Clientes.png"
          alt="Nossos Clientes"
          width={1920}
          height={1080}
          className="w-full h-auto block"
          priority
        />
      </div>
    </section>
  );
}
