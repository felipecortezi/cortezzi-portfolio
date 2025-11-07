"use client";

import Image from "next/image";
import { useMemo } from "react";

type Props = {
  title: string;
  description?: string;
  image?: string; // url da thumb
  link?: string; // url normal (watch / youtu.be)
  embedUrl?: string; // url já no formato /embed/
};

function toYouTubeEmbed(url?: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    // youtu.be/<id>
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1` : null;
    }
    // www.youtube.com/watch?v=<id>
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
      // shorts/<id>
      const m = u.pathname.match(/\/shorts\/([^/?#]+)/);
      if (m?.[1]) return `https://www.youtube.com/embed/${m[1]}?rel=0&modestbranding=1`;
      // já é /embed/
      if (u.pathname.startsWith("/embed/")) return url;
    }
  } catch {}
  return null;
}

export default function FeaturedProject({ title, description, image, link, embedUrl }: Props) {
  const finalEmbed = useMemo(() => embedUrl || toYouTubeEmbed(link), [embedUrl, link]);

  return (
    <article className="w-full">
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
        {finalEmbed ? (
          <iframe
            className="h-full w-full"
            src={finalEmbed}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : image ? (
          <a
            href={link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full w-full"
            aria-label={`Abrir ${title} no YouTube`}
          >
            {/* Thumb como fallback */}
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/20" />
          </a>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-neutral-400">
            Sem player nem thumb — adicione o **Embed URL** ou **Link** no admin.
          </div>
        )}
      </div>

      <header className="mt-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        {description ? <p className="text-neutral-300">{description}</p> : null}
      </header>

      {!finalEmbed && link ? (
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800 transition"
          >
            Ver no YouTube
          </a>
        </div>
      ) : null}
    </article>
  );
}
