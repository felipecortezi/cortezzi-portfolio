import { PortableText } from "@portabletext/react";
import { toEmbed } from "./toEmbed";

type Video = { url: string; orientation?: "16:9" | "9:16" };
type Props = {
  title: string;
  client?: string;
  date?: string;
  description?: string;
  longDescription?: any;
  videos?: Video[];
  embedUrl?: string | null;
};

function formatDate(iso?: string) {
  if (!iso) return null;
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("pt-BR", { year: "numeric", month: "long" });
  } catch {
    return null;
  }
}

export default function PT({
  title, client, date, description, longDescription, videos, embedUrl
}: Props) {
  const firstVideo = (videos || []).find(v => v?.url);
  const embed = toEmbed(firstVideo?.url ?? embedUrl ?? null);
  const isVertical = firstVideo?.orientation === "9:16";

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Infos */}
        <div className="space-y-5">
          <div>
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="text-neutral-400">
              {client ? client : ""}{client && date ? " • " : ""}{formatDate(date) || ""}
            </p>
          </div>

          {description && (
            <p className="text-neutral-200">{description}</p>
          )}

          {longDescription?.length ? (
            <div className="prose prose-invert prose-neutral max-w-none">
              <PortableText value={longDescription} />
            </div>
          ) : null}
        </div>

        {/* Vídeo */}
        <div>
          {embed ? (
            <div className={isVertical ? "aspect-[9/16] w-full" : "aspect-video w-full"}>
              <iframe
                src={embed}
                className="w-full h-full rounded-2xl border border-neutral-800"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : (
            <div className="rounded-2xl border border-neutral-800 p-6 text-neutral-400">
              Sem vídeo para este projeto.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
