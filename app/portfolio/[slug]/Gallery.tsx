import Image from "next/image";

type Item = { imageUrl: string; ratio?: "5:4" | "4:5" | "1:1" | "16:9" };
type Props = { items?: Item[] };

function ratioClass(r?: Item["ratio"]) {
  switch (r) {
    case "4:5":
      return "aspect-[4/5]";
    case "1:1":
      return "aspect-square";
    case "16:9":
      return "aspect-video";
    case "5:4":
    default:
      return "aspect-[5/4]";
  }
}

export default function Gallery({ items }: Props) {
  if (!items?.length) return null;

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <h3 className="text-xl font-medium mb-6">Galeria</h3>

      {/* MOBILE: carrossel horizontal (mantém grid no desktop) */}
      <div className="md:hidden -mx-4 px-4">
        <div
          className="
            flex gap-3 overflow-x-auto pb-1
            snap-x snap-mandatory scroll-pl-4
            [scrollbar-width:none] [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
            touch-pan-x
          "
        >
          {items.map((it, i) => (
            <div
              key={i}
              className={`
                snap-start shrink-0 w-[85%]
                rounded-xl border border-neutral-800 bg-neutral-900/30
                overflow-hidden ${ratioClass(it.ratio)}
              `}
            >
              <div className="relative w-full h-full">
                <Image
                  src={it.imageUrl}
                  alt={`Imagem ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, 0px"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP: seu grid original, intacto */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <div
            key={i}
            className={`group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30 ${ratioClass(it.ratio)}`}
          >
            <div className="relative w-full h-full">
              {/* zoom somente no conteúdo (desktop) */}
              <Image
                src={it.imageUrl}
                alt={`Imagem ${i + 1}`}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading={i < 3 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
