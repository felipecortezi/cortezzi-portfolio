"use client";

import React from "react";
import { toEmbed } from "./toEmbed";
import Videos from "./Videos";

type PortableBlock = any;

type Props = {
  title: string;
  client?: string;
  date?: string;
  description?: string;
  longDescription?: PortableBlock[];
  videos?: { url?: string | null }[];
  embedUrl?: string | null;
  link?: string | null; // opcional: link bruto do vídeo (fallback)
};

export default function PT({
  title,
  client,
  date,
  description,
  longDescription,
  videos = [],
  embedUrl,
  link,
}: Props) {
  // Se tiver embedUrl usa; senão tenta o link como fallback
  const main = toEmbed(embedUrl || link || null);

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Lado esquerdo: infos */}
          <div>
            <h1 className="text-3xl font-semibold">{title}</h1>
            {client && <p className="text-neutral-300 mt-1">{client}</p>}
            {description && (
              <p className="text-neutral-300 mt-4">{description}</p>
            )}
            {date && (
              <p className="text-neutral-400 mt-2 text-sm">
                {new Date(date).toLocaleDateString("pt-BR")}
              </p>
            )}
            {Array.isArray(longDescription) && longDescription.length > 0 && (
              <div className="prose prose-invert max-w-none mt-6 text-neutral-200">
                {/* Render simples; troque por PortableText se quiser mais rico */}
                {longDescription.map((b: any, i: number) => (
                  <p key={i}>{typeof b === "string" ? b : b?.children?.[0]?.text}</p>
                ))}
              </div>
            )}
          </div>

          {/* Lado direito: vídeo principal (ou CTA / aviso) */}
          <div>
            {main ? (
              <div
                className={`relative overflow-hidden rounded-2xl border border-neutral-800 ${
                  main.aspect === "9:16" ? "aspect-[9/16]" : "aspect-video"
                }`}
              >
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={main.src}
                  title="video-principal"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ) : link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-700 px-5 py-2.5 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-neutral-600 transition"
              >
                Assistir no YouTube
              </a>
            ) : (
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 text-neutral-300">
                Sem vídeo para este projeto.
              </div>
            )}
          </div>
        </div>

        {/* Se houver vídeos adicionais válidos, aparece; senão não renderiza */}
        <Videos items={videos} />
      </div>
    </section>
  );
}
