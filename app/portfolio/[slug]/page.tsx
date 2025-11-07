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

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const data = await client.fetch(projectBySlugQuery, { slug: params.slug });

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

  const { title, client: cli, date, description, thumbUrl, link, embedUrl } = data;
  const video = embedUrl || toEmbed(link);

  return (
    <>
      <Header />
      <main className="bg-neutral-950">
        {/* Capa (usa a thumb como banner por enquanto) */}
        <section className="border-b border-neutral-800 bg-neutral-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <nav className="mb-4 text-sm text-neutral-400">
              <a href="/portfolio" className="hover:underline">Portfólio</a>
              <span className="mx-2">/</span>
              <span className="text-neutral-300">{title}</span>
            </nav>

            <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
              {thumbUrl ? (
                <div className="relative w-full aspect-video">
                  <Image src={thumbUrl} alt={title} fill className="object-cover" />
                </div>
              ) : (
                <div className="aspect-video grid place-items-center text-neutral-400">
                  Sem capa — adicione uma Thumb no Admin.
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
              {description && (
                <p className="mt-4 text-neutral-200 leading-relaxed">{description}</p>
              )}
            </header>
          </div>
        </section>

        {/* Vídeo principal (se houver) */}
        {video && (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 aspect-video">
              <iframe
                className="h-full w-full"
                src={video}
                title={title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
