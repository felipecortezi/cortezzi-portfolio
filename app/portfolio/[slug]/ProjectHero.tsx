"use client";
import Image from "next/image";
import clsx from "clsx";

type Props = { coverUrl?: string; thumbUrl?: string; title: string };

export default function ProjectHero({ coverUrl, thumbUrl, title }: Props) {
  const src = coverUrl || thumbUrl;
  if (!src) return null;

  return (
    <section className="relative w-full">
      {/* faixa full-bleed com proporção mais cinematográfica */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[18/7] lg:aspect-[32/9] overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          priority
          className={clsx(
            "object-cover",
            // zoom SÓ no conteúdo
            "transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          )}
          sizes="100vw"
        />
      </div>
    </section>
  );
}
