import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { client } from "../../../lib/sanity.client";
import { projectBySlugQuery } from "../../../lib/sanity.queries";
import type { Metadata } from "next";

// gerar metadados dinâmicos (seguro mesmo se faltar campos)
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const project = await client.fetch(projectBySlugQuery, { slug: params.slug });
  if (!project) return { title: "Projeto não encontrado • Cortezzi" };
  return {
    title: `${project.title} • Cortezzi`,
    description: project.description?.slice?.(0, 160) ?? "Projeto do portfólio Cortezzi",
  };
}

export const revalidate = 60;

// helper: converte link do YouTube para embed (retorna null se não der)
function toEmbed(url?: string | null): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    // youtube.com / youtu.be
    if (host.includes("youtube.com")) {
      // watch?v=ID ou shorts/ID
      if (u.pathname.startsWith("/watch")) {
        const id = u.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      if (u.pathname.startsWith("/shorts/")) {
        const id = u.pathname.split("/shorts/")[1]?.split("/")[0];
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
    }
    if (host.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    return null;
  } catch {
    return null;
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await client.fetch(projectBySlugQuery, { slug: params.slug });

  // 404 elegante se não existir
  if (!project) {
    return (
      <>
        <Header />
        <main className="bg-neutral-950">
          <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-3xl font-semibold">Projeto não encontrado</h1>
            <p className="text-neutral-400 mt-2">Verifique o link ou volte ao portfólio.</p>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const {
    title,
    client: cliente,
    date,
    description,
    thumbUrl,
    bannerUrl,           // pode estar undefined
    link,
    embedUrl,
    gallery,             // pode estar undefined
    videos,              // pode estar undefined
  } = project as any;

  // fallbacks seguros
  const heroImage = bannerUrl || thumbUrl || null;
  const embed = embedUrl || toEmbed(link) || null;
  const gallerySafe = Array.isArray(gallery) ? gallery : [];
  const videosSafe = Array.isArray(videos) ? videos : [];

  return (
    <>
      <Header />
      <main className="bg-neutral-950">

        {/* Banner (só renderiza se existir alguma imagem) */}
        {heroImage && (
          <section className="relative border-b border-neutral-800 bg-neutral-900/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
              <div className="overflow-hidden rounded-2xl border border-neutral-800">
                <div className="relative aspect-[21/9] w-full">
                  <Image
                    src={heroImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Cabeçalho do projeto */}
        <section className="border-b border-neutral-800 bg-neutral-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="text-neutral-300 mt-2">
              {cliente ? <span className="mr-2">Cliente: {cliente}</span> : null}
              {date ? <span>• {new Date(date).getFullYear()}</span> : null}
            </p>
            {description && (
              <p className="text-neutral-300 mt-4 max-w-3xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </section>

        {/* Vídeo principal (embed) */}
        {embed && (
          <section className="border-b border-neutral-800 bg-neutral-900/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
              <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-800">
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src={embed}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title={title}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Galeria de frames (só se tiver itens) */}
        {gallerySafe.length > 0 && (
          <section className="border-b border-neutral-800 bg-neutral-900/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
              <h2 className="text-xl font-semibold mb-4">Galeria</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gallerySafe.map((src: string, i: number) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-800">
                    <Image src={src} alt={`${title} – frame ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Vídeos adicionais (só se tiver itens) */}
        {videosSafe.length > 0 && (
          <section className="border-b border-neutral-800 bg-neutral-900/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
              <h2 className="text-xl font-semibold mb-4">Outros vídeos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videosSafe.map((v: string, i: number) => {
                  const e = toEmbed(v);
                  if (!e) return null;
                  return (
                    <div key={i} className="relative w-full overflow-hidden rounded-2xl border border-neutral-800">
                      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                        <iframe
                          src={e}
                          className="absolute inset-0 h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          title={`${title} – vídeo ${i + 1}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Link externo (se não tiver embed, ainda damos uma saída) */}
        {!embed && link && (
          <section className="border-b border-neutral-800 bg-neutral-900/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-neutral-700 px-5 py-2.5 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-neutral-600 transition"
              >
                Ver no YouTube
              </a>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
