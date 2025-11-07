"use client";

import clsx from "clsx";
import { PortableText } from "next-sanity";
import type { PortableTextBlock } from "sanity";
import { toEmbed } from "./toEmbed";

type VideoItem = {
  url?: string | null;
  orientation?: "landscape" | "portrait";
};

type Props = {
  title: string;
  client?: string;
  date?: string;
  description?: string;
  longDescription?: PortableTextBlock[];
  /** pode vir o embed direto… */
  embedUrl?: string | null;
  /** …ou o link normal (watch/shorts/youtu.be); a gente converte */
  link?: string | null;
  videos?: VideoItem[];
};

export default function PT({
  title,
  client,
  date,
  description,
  longDescription = [],
  embedUrl,
  link,
  videos = [],
}: Props) {
  // Aceita embed OU link comum
  const mainEmbed =
    toEmbed(embedUrl || "") ||
    toEmbed(link || "");

  // Filtra só vídeos válidos
  const extra = (videos || [])
    .map((v) => ({ ...v, _embed: toEmbed(v?.url || "") }))
    .filter((v) => !!v._embed);

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LADO ESQUERDO — infos */}
        <div>
          <h1 className="text-3xl font-semibold">{title}</h1>
          {(client || date) && (
            <p className="text-neutral-400 mt-1">
              {client ? client : ""}{client && date ? " • " : ""}{date ? date : ""}
            </p>
          )}

          {description && (
            <p className="text-neutral-200 mt-6">{description}</p>
          )}

          {longDescription?.length ? (
            <div className="prose prose-invert prose-neutral max-w-none mt-6">
              <PortableText value={longDescription} />
            </div>
          ) : null}
        </div>

        {/* LADO DIREITO — vídeo principal */}
        <div className="rounded-2xl border border-neutral-800/70 p-1">
          {mainEmbed ? (
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                className="h-full w-full"
                src={mainEmbed}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 px-4 py-6 text-neutral-400">
              Sem vídeo para este projeto.
            </div>
          )}
        </div>
      </div>

      {/* VÍDEOS EXTRAS — só renderiza se houver pelo menos 1 válido */}
      {extra.length > 0 && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-xl font-semibold mb-4">Vídeos</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {extra.map((v, i) => (
              <div
                key={i}
                className={clsx(
                  "rounded-2xl border border-neutral-800/70 p-1",
                )}
              >
                <div
                  className={clsx(
                    "w-full overflow-hidden rounded-xl",
                    v.orientation === "portrait" ? "aspect-[9/16]" : "aspect-video"
                  )}
                >
                  <iframe
                    className="h-full w-full"
                    src={v._embed as string}
                    title={`Vídeo ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
