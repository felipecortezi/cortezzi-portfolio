import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { client } from "../../../lib/sanity.client";
import { projectBySlugQuery } from "../../../lib/sanity.queries";

export const revalidate = 60;

// Converte links do YouTube (watch / youtu.be / shorts) para /embed/
function toEmbed(url?: string | null): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1` : null;
    }
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
      const m = u.pathname.match(/\/shorts\/([^/?#]+)/);
      if (m?.[1]) return `https://www.youtube.com/embed/${m[1]}?rel=0&modestbranding=1`;
      if (u.pathname.startsWith("/embed/")) return url;
    }
  } catch {}
  return null;
}

function aspectClass(aspect?: string) {
  switch (aspect) {
    case "9-16": return "aspect-[9/16]";
    case "1-1":  return "aspect-square";
    default:     return "aspect-video"; // 16:9
  }
}

export default async function ProjectPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const data = await client.fetch(projectBySlugQuery, { slug });

  if (!data) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-2xl font-semibold">Projeto não encontrado</h1>
          <p className="text-neutral-400 mt-2">
            Verifique o endereço ou <a href="/portfolio" className="underline">volte ao portfólio</a>.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  const {
    title,
    client: cli,
    date,
    description,     // curta (cards)
    details,         // detalhada (história)
    thumbUrl,
    coverUrl,        // banner/faixa
    link,
    embedUrl,
    gallery = [],
    videos = [],
  } = data;

  const mainVideo = embedUrl || toEmbed(link);

  return (
    <>
      <Header />
      <main className="bg-neutral-950">
        {/* Banner/Capa em "faixa" (diferente da thumb) */}
        <section className="border-b border-neutral-800 bg-neutral-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <nav className="mb-4 text-sm text-neutral-400">
              <a href="/portfolio" className="hover:underline">Portfólio</a>
              <span className="mx-2">/</span>
              <span className="text-neutral-300">{title}</span>
            </nav>

            <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
              {coverUrl ? (
                // faixa mais cinematográfica (21:9). Ajuste para aspect-video se preferir 16:9
                <div className="relative w-full aspect-[21/9]">
                  <Image src={coverUrl} alt={title} fill className="object-cover" />
                </div>
              ) : thumbUrl ? (
                <div className="relative w-full aspect-video">
                  <Image src={thumbUrl} alt={title} fill className="object-cover" />
                </div>
              ) : (
                <div className="aspect-video grid place-items-center text-neutral-400">
                  Sem capa — adicione **Capa (banner)** no Admin.
                </div>
              )}
            </div>

            {/* Cabeçalho */}
            <header className="mt-6">
              <h1 className="text-3xl sm:text-4xl font-semibold">{title}</h1>
              <p className="text-neutral-300 mt-1">
                {cli ? `${cli}` : ""}
                {cli && date ? " • " : ""}
                {date ? new Date(date).getFullYear() : ""}
              </p>

              {/* Descrição curta opcional */}
              {description && (
                <p className="mt-3 text-neutral-300">{description}</p>
              )}

              {/* Descrição detalhada */}
              {details && (
                <div className="prose prose-invert prose-neutral mt-6 max-w-none">
                  <p className="leading-relaxed">{details}</p>
                </div>
              )}
            </header>
          </div>
        </section>

        {/* Vídeo principal (se quiser manter um destaque de vídeo) */}
        {mainVideo && (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 aspect-video">
              <iframe
                className="h-full w-full"
                src={mainVideo}
                title={title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* Galeria de imagens/frames */}
        {gallery.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-xl font-semibold mb-4">Galeria</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map((g: any, i: number) => (
                <div
                  key={i}
                  className="relative w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 aspect-[4/3]"
                >
                  <Image src={g.url} alt={`Frame ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Vários vídeos (com proporções configuráveis) */}
        {videos.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-xl font-semibold mb-4">Vídeos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((v: any, i: number) => {
                const src = v.embedUrl || toEmbed(v.link);
                return (
                  <div
                    key={i}
                    className={`relative w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 ${aspectClass(v.aspect)}`}
                  >
                    {src ? (
                      <iframe
                        className="h-full w-full"
                        src={src}
                        title={v.title || `Vídeo ${i + 1}`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <div className="grid place-items-center h-full text-neutral-400 p-6 text-center">
                        Adicione o **Link** ou **Embed URL** deste vídeo no Admin.
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
