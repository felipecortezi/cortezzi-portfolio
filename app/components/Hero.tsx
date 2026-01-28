// app/components/Hero.tsx
import Image from "next/image";

function BrandStrip() {
  // quantidade de quadradinhos — ajusta se quiser mais/menos
  const COUNT = 28;
  return (
    <div className="absolute bottom-0 left-0 w-full z-20 select-none">
      <div className="mx-auto max-w-none">
        <ul
          className="
            grid grid-flow-col auto-cols-[120px] 
            sm:auto-cols-[132px] md:auto-cols-[144px]
            gap-3 sm:gap-4 md:gap-5
            px-3 sm:px-4 md:px-5
            pb-4
          "
        >
          {Array.from({ length: COUNT }).map((_, i) => (
            <li
              key={i}
              className={[
                "h-[64px] sm:h-[72px] md:h-[80px] rounded-2xl",
                // alterna claro/escuro
                i % 2 === 0 ? "bg-neutral-50" : "bg-black",
                // borda bem suave pra lembrar a ref
                "border border-neutral-800/40",
                "flex items-center justify-center",
              ].join(" ")}
            >
              <Image
                src="/mark.svg"
                alt="Cortezzi mark"
                width={44}
                height={44}
                className={[
                  "pointer-events-none",
                  // quando fundo é escuro mantemos o ícone claro;
                  // se seu mark.svg já é preto, e você preferir invertê-lo,
                  // descomente a próxima linha pra forçar branco no tile escuro:
                  // i % 2 !== 0 ? "invert" : "",
                ].join(" ")}
                priority
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Cortezzi Studio"
        fill
        priority
        className="object-cover"
      />

      {/* Headline central, fora da logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[28%] z-10">
        <h1
          className="
            flex items-baseline
            gap-24 sm:gap-32 lg:gap-48 xl:gap-64
            text-white text-2xl md:text-3xl lg:text-4xl
            font-normal leading-tight text-center whitespace-nowrap
          "
        >
          <span className="font-normal">Living</span>
          <span className="font-semibold">in&nbsp;motion</span>
        </h1>
      </div>

      {/* Faixa quadriculada */}
      <BrandStrip />
    </section>
  );
}
