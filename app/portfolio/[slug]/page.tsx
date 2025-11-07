import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { client } from "../../../lib/sanity.client";
import { projectBySlugQuery } from "../../../lib/sanity.queries";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 60;

/** Converte links comuns do YouTube/Vimeo em "embed" quando possível */
function toEmbed(url?: string | null): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    // YouTube
    if (host.includes("youtube.com") || host === "youtu.be") {
      if (host === "youtu.be") {
        const id = u.pathname.replace("/", "");
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
      const parts = u.pathname.split("/");
      const shortId = parts.includes("shorts") ? parts.pop() : null;
      if (shortId) return `https://www.youtube.com/embed/${shortId}`;
    }

    // Vimeo
    if (host.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
    return null;
  } catch {
    return null;
  }
}

/** Metadata dinâmica por projeto */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const project: any = await client.fetch(projectBySlugQuery, { slug });
  if (!project) return { title: "Projeto não encontrado • Cortezzi" };

  const desc =
    (Array.isArray(project.detail) &&
      project.detail[0]?.children?.map((c: any) => c.text).join(" ").slice(0, 160)) ||
    project.description ||
    "Projeto do portfólio Cortezzi";

  return {
    title: `${project.title} • Cortezzi`,
    description: desc,
    openGraph: {
      title: project.title,
      description: desc,
      images: project.bannerUrl ? [{ url: project.bannerUrl }] : undefined,
    },
  };
}

/** Página do Projeto */
export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project: any = await client.fetch(projectBySlugQuery, { slug });
  if (!project) notFound();

  const {
    title,
    client: clientName,
    date,
    description,
    detail,
    bannerUrl,
    thumbUrl,
    embedUrl,
    link,
    galleryUrls = [],
    videos = [],
  } = project;

  const year = date ? new Date(date).getFullYear() : undefined;
  const mainEmbed = embedUrl || toEmbed(link) || null;

  return (
    <>
      <Header />
      <main className="bg-neutral-950">
        {/* Banner de capa (sem fallback para thumb para evitar confusão) */}
        {bannerUrl && (
          <section className="relative border-b border-neutral-800 bg-neutral-900/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
              <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-800">
                <div className="relative aspect-[21/9] w-full">
                  <Image
                    src={bannerUrl}
                    alt={title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Cabeçalho */}
        <section className="border-b border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-semibold">{title}</h1>
              <div className="text-neutral-300">
                {clientName && <span className="mr-3">Cliente: {clientName}</span>}
                {year && <span>• {year}</span>}
              </div>

              {/* descrição curta */}
              {description && (
                <p className="text-neutral-300 max-w-3xl">{description}</p>
              )}
            </div>
          </div>
        </section>

        {/* Vídeo principal */}
        {mainEmbed && (
          <section className="border-b border-neutral-800 bg-neutral-900/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
              <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-800">
                <div className="relative aspect-video w-full">
                  <iframe
                    src={mainEmbed}
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

        {/* Descrição detalhada (Portable Text simples) */}
        {Array.isArray(detail) && detail.length > 0 && (
          <section className="border-b border-neutral-800">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 prose prose-invert">
              {detail.map((block: any, i: number) =>
                block._type === "block" ? (
                  <p key={i}>{(block.children || []).map((c: any) => c?.text).join("")}</p>
                ) : null
              )}
            </div>
          </section>
        )}

        {/* Galeria */}
        {Array.isArray(galleryUrls) && galleryUrls.length > 0 && (
          <section className="border-b border-neutral-800 bg-neutral-900/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
              <h2 className="text-xl font-semibold mb-6">Galeria</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryUrls.map((url: string, idx: number) => (
                  <div key={idx} className="relative overflow-hidden rounded-xl border border-neutral-800">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={url}
                        alt={`${title} - imagem ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Demais vídeos com orientação */}
        {Array.isArray(videos) && videos.length > 0 && (
          <section className="border-b border-neutral-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
              <h2 className="text-xl font-semibold mb-6">Vídeos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos.map((v: any, idx: number) => {
                  const emb = v?.embedUrl || toEmbed(v?.url);
                  if (!emb) return null;
                  const aspect =
                    v?.orientation === "vertical" ? "aspect-[9/16]" : "aspect-video";
                  return (
                    <div key={idx} className="relative overflow-hidden rounded-2xl border border-neutral-800">
                      <div className={`relative ${aspect} w-full`}>
                        <iframe
                          src={emb}
                          className="absolute inset-0 h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          title={`${title} – vídeo ${idx + 1}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
