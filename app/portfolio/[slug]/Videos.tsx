"use client";
import { toEmbed } from "./toEmbed";

type VideoItem = { url: string; orientation?: "16:9" | "9:16" };

export default function Videos({
  videos = [],
  embedUrl = null,
}: {
  videos?: VideoItem[];
  embedUrl?: string | null;
}) {
  // se tiver lista, usa todos; senão, tenta o embedUrl legado
  const list = (videos || []).filter(v => !!v?.url);
  const fallback = !list.length && embedUrl ? [{ url: embedUrl, orientation: "16:9" as const }] : [];

  const items = list.length ? list : fallback;
  if (!items.length) return null;

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      <h3 className="text-xl font-semibold mb-6">Vídeos</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((v, i) => {
          const src = toEmbed(v.url);
          const isVertical = v.orientation === "9:16";
          return (
            <div
              key={i}
              className={`${isVertical ? "aspect-[9/16]" : "aspect-video"} w-full overflow-hidden rounded-2xl border border-neutral-800 bg-black`}
            >
              {src ? (
                <iframe
                  src={src}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="w-full h-full grid place-items-center text-neutral-400 text-sm p-4">
                  Link inválido
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
