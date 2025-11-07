// app/portfolio/[slug]/PT.tsx
import React from "react";
import { toEmbed } from "./toEmbed";

type VideoItem = { url: string; orientation?: "16:9" | "9:16" };

type Props = {
  title: string;
  client: string;
  date: string;
  description?: string;
  longDescription?: any[]; // mantendo flexível pra não quebrar
  videos?: VideoItem[];
  embedUrl?: string | null;
  link?: string | null; // fallback (YouTube normal) caso não tenha embedUrl
};

function fmtDate(iso?: string) {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("pt-BR", { year: "numeric", month: "short" });
  } catch {
    return iso;
  }
}

export default function PT({
  title,
  client,
  date,
  description,
  longDescription = [],
  videos = [],
  embedUrl = null,
  link = null,
}: Props) {
  // vídeo PRINCIPAL: tenta embedUrl, senão link (normal/shorts), senão null
  const main = toEmbed(embedUrl || link || "");

  return (
    <section className="border-y border-neutral-800 bg-neutral-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Cabeçalho */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Coluna esquerda: infos */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              {title}
            </h1>

            {client && (
              <p className="text-neutral-400 text-base">{client}</p>
            )}

            <div className="text-neutral-300 space-y-2">
              {description && (
                <p className="text-neutral-200">{description}</p>
              )}

              {/* descrição longa simples, sem libs extras */}
              {Array.isArray(longDescription) && longDescription.length > 0 && (
                <div className="pt-2 space-y-2">
                  {longDescription.map((blk: any, i: number) => {
                    // tenta achar texto nos children (estrutura típica do Sanity)
                    const txt =
                      Array.isArray(blk?.children)
                        ? blk.children.map((c: any) => c?.text).join("")
                        : typeof blk === "string"
                        ? blk
                        : "";
                    return txt ? (
                      <p key={i} className="text-neutral-300">
                        {txt}
                      </p>
                    ) : null;
                  })}
                </div>
              )}

              {date && (
                <p className="text-sm text-neutral-400">
                  {fmtDate(date)}
                </p>
              )}
            </div>
          </div>

          {/* Coluna direita: VÍDEO PRINCIPAL */}
          <div
            className={
              main?.aspect === "9:16"
                ? "flex justify-center md:justify-end"
                : ""
            }
          >
            {main ? (
              <div
                className={`relative overflow-hidden rounded-2xl border border-neutral-800 ${
                  main.aspect === "9:16"
                    // Shorts: box mais estreito, centralizado no mobile
                    ? "aspect-[9/16] w-[min(90vw,420px)] md:w-[380px]"
                    : // 16:9 permanece full
                      "aspect-video w-full"
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
            ) : (
              <div className="rounded-2xl border border-neutral-800 p-4 text-neutral-400">
                Sem vídeo para este projeto.
              </div>
            )}
          </div>
        </div>

        {/* Lista de VÍDEOS adicionais (se houver) */}
        {Array.isArray(videos) && videos.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Vídeos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {videos.map((v, idx) => {
                const e = toEmbed(v?.url || "");
                if (!e) {
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-neutral-800 p-6 text-center text-neutral-500"
                    >
                      Link inválido
                    </div>
                  );
                }
                return (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-2xl border border-neutral-800 ${
                      e.aspect === "9:16" ? "aspect-[9/16]" : "aspect-video"
                    }`}
                  >
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={e.src}
                      title={`video-${idx}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
