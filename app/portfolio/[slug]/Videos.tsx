"use client";

import React from "react";
import { toEmbed, Embed } from "./toEmbed";

type VideoItem = { url?: string | null; orientation?: "16:9" | "9:16" };

export default function Videos({ items }: { items?: VideoItem[] }) {
  try {
    const list: Embed[] = (items || [])
      .map((v) => toEmbed((v?.url || "").trim()))
      .filter((e): e is Embed => !!e);

    if (list.length === 0) return null;

    return (
      <section className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Vídeos</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {list.map((e, idx) => (
            <div
              key={idx}
              className={`relative w-full overflow-hidden rounded-2xl border border-neutral-800 ${
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
          ))}
        </div>
      </section>
    );
  } catch {
    // Nunca deixa a página quebrar
    return null;
  }
}
