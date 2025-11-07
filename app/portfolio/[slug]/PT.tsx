"use client";

import toEmbed, { Embed } from "./toEmbed";

type Props = {
  title: string;
  client?: string;
  date?: string;
  description?: string;
  longDescription?: Array<any>;
  embedUrl?: string | null;
  videos?: Array<{ url?: string | null }>;
};

export default function PT({
  title,
  client,
  date,
  description,
  longDescription = [],
  embedUrl,
  videos = [],
}: Props) {
  const main: Embed | null = toEmbed(embedUrl || null);
  const mainRatioClass = main?.isShort ? "aspect-[9/16]" : "aspect-video";

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* topo: infos + player */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Infos */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">{title}</h1>
          {client ? <p className="text-neutral-300">{client}</p> : null}
          {date ? <p className="text-neutral-400 text-sm">{date}</p> : null}
          {description ? <p className="text-neutral-200">{description}</p> : null}

          {/* Descrição longa (quando existir) */}
          {Array.isArray(longDescription) && longDescription.length > 0 && (
            <div className="prose prose-invert prose-neutral max-w-none">
              {longDescription.map((b, i) => (
                <p key={i}>{typeof b === "string" ? b : JSON.stringify(b)}</p>
              ))}
            </div>
          )}
        </div>

        {/* Player principal */}
        <div className="w-full">
          {main ? (
            <div className={`w-full overflow-hidden rounded-2xl bg-black ${mainRatioClass}`}>
              <iframe
                className="h-full w-full"
                src={main.src}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ) : (
            <div className="rounded-xl border border-neutral-800 px-4 py-3 text-neutral-400">
              Sem vídeo para este projeto.
            </div>
          )}
        </div>
      </div>

      {/* Vídeos extras */}
      {Array.isArray(videos) && videos.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((v, i) => {
              const e = toEmbed(v?.url || null);
              if (!e) return null;
              const cls = e.isShort ? "aspect-[9/16]" : "aspect-video";
              return (
                <div key={i} className={`w-full overflow-hidden rounded-2xl bg-black ${cls}`}>
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
        </div>
      )}
    </section>
  );
}
