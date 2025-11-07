"use client";
import { useState } from "react";
import Image from "next/image";

type Item = { _key: string; url: string; alt?: string };

export default function Gallery({ items }: { items: Item[] }) {
  const [active, setActive] = useState<Item | null>(null);
  if (!items?.length) return null;

  return (
    <section className="mt-12">
      <h3 className="text-lg font-medium mb-4">Galeria</h3>

      {/* Masonry com columns; imagens evitam quebra */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {items.map((it) => (
          <button
            key={it._key}
            className="mb-4 block w-full overflow-hidden rounded-xl hover:scale-[1.02] transition will-change-transform"
            onClick={() => setActive(it)}
          >
            {/* Nota: object-cover + altura automática via intrinsic */}
            <Image
              src={it.url}
              alt={it.alt || ""}
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl"
              sizes="(max-width:1024px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative max-w-6xl w-full">
            <Image
              src={active.url}
              alt={active.alt || ""}
              width={2000}
              height={1400}
              className="w-full h-auto rounded-2xl"
              sizes="100vw"
              priority
            />
            <button
              className="absolute top-3 right-3 bg-white/10 rounded-full px-3 py-1 text-sm hover:bg-white/20"
              onClick={() => setActive(null)}
            >
              fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
