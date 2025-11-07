"use client";

import toEmbed from "./toEmbed";

type VideoItem = { url?: string | null };

export default function Videos({ items = [] as VideoItem[] }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Vídeos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((v, i) => {
          const e = toEmbed(v?.url || null);
          if (!e) return null;
          const ratio = e.isShort ? "aspect-[9/16]" : "aspect-video";
          return (
            <div key={i} className={`w-full overflow-hidden rounded-2xl bg-black ${ratio}`}>
              <iframe
                className="h-full w-full"
                src={e.src}
                title={`Vídeo ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
