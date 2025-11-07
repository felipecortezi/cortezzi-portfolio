"use client";

import toEmbed from "./toEmbed";

type VideoItem = { url?: string | null };

// 👉 Ajuste aqui: inclua `link?: string | null` nas props
type Props = {
  title: string;
  client?: string;
  date?: string;
  description?: string;
  longDescription?: string[]; // ou PortableText, se você estiver usando
  videos?: VideoItem[];
  embedUrl?: string | null;
  link?: string | null; // <- NOVO
};

export default function PT({
  title,
  client,
  date,
  description,
  longDescription = [],
  videos = [],
  embedUrl = null,
  link = null, // <- NOVO
}: Props) {
  // Converte o embed principal (se existir)
  const main = toEmbed(embedUrl);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Título e metadados */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-semibold">{title}</h1>
          {client && <p className="text-neutral-300 mt-2">{client}</p>}
          {date && <p className="text-neutral-400 text-sm">{date}</p>}
          {description && <p className="mt-4 text-neutral-200">{description}</p>}
          {Array.isArray(longDescription) && longDescription.length > 0 && (
            <div className="mt-4 space-y-3 text-neutral-300">
              {longDescription.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </div>
          )}
        </div>

        {/* Bloco de destaque à direita */}
        <aside className="lg:col-span-1">
          {!main && !link && (
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 text-neutral-400">
              Sem vídeo para este projeto.
            </div>
          )}

          {/* Se não tiver embed mas tiver link, mostra CTA */}
          {!main && link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-700 px-5 py-2.5 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-neutral-600 transition"
            >
              Assistir no YouTube
            </a>
          )}
        </aside>
      </div>

      {/* Vídeo principal (embed) */}
      {main && (
        <div className={`mt-8 w-full overflow-hidden rounded-2xl bg-black ${main.isShort ? "aspect-[9/16]" : "aspect-video"}`}>
          <iframe
            className="h-full w-full"
            src={main.src}
            title="Vídeo principal"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      )}

      {/* Galeria de vídeos adicionais */}
      {Array.isArray(videos) && videos.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Vídeos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((v, i) => {
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
      )}
    </section>
  );
}
