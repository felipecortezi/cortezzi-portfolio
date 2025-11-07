import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectHero from "./ProjectHero";
import Gallery from "./Gallery";
import PT from "./PT";
import { client } from "../../../lib/sanity.client";
import { projectBySlugQuery } from "../../../lib/sanity.queries";
import { toEmbed } from "./toEmbed";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const data = await client.fetch(projectBySlugQuery, { slug });

  return {
    title: data?.title ? `${data.title} • Cortezzi` : "Projeto • Cortezzi",
    description: data?.description || "Projeto do portfólio Cortezzi",
    openGraph: {
      images: data?.coverUrl ? [{ url: data.coverUrl }] : [],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const data = await client.fetch(projectBySlugQuery, { slug });

  if (!data) {
    // fallback elegante
    return (
      <>
        <Header />
        <main className="min-h-[50vh] flex items-center justify-center">
          <p className="text-neutral-400">Projeto não encontrado.</p>
        </main>
        <Footer />
      </>
    );
  }

  // vídeo: usa primeiro de videos[]; se não tiver, usa embedUrl/link
  const mainVideo =
    data.videos?.[0]?.url || data.embedUrl || data.link || null;
  const embed = toEmbed(mainVideo);

  const year =
    data?.date ? new Date(data.date).getFullYear().toString() : undefined;

  return (
    <>
      <Header />

      {/* Capa full-bleed */}
      <ProjectHero src={data.coverUrl} />

      {/* Bloco principal */}
      <main className="bg-neutral-950">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {/* GRID: Infos (esq) / Vídeo (dir) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Infos */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h1 className="text-3xl font-semibold">{data.title}</h1>
                <div className="mt-2 text-sm text-neutral-300 space-x-3">
                  {data.client && (
                    <span className="inline-block bg-neutral-800/70 px-2 py-1 rounded-md">
                      {data.client}
                    </span>
                  )}
                  {year && (
                    <span className="inline-block bg-neutral-800/70 px-2 py-1 rounded-md">
                      {year}
                    </span>
                  )}
                </div>
              </div>

              {data.description && (
                <p className="text-neutral-300">{data.description}</p>
              )}

              {/* descrição longa (Portable Text) */}
              {data.longDescription && <PT value={data.longDescription} />}
            </div>

            {/* Vídeo principal */}
            <div className="lg:col-span-2">
              {embed ? (
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-800 bg-black">
                  <iframe
                    src={embed}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="aspect-video w-full rounded-2xl border border-neutral-800 bg-neutral-900/40 flex items-center justify-center text-neutral-400">
                  Vídeo em breve
                </div>
              )}
            </div>
          </div>

          {/* Galeria (se houver) */}
          {data.gallery?.length ? <Gallery items={data.gallery} /> : null}
        </section>
      </main>

      <Footer />
    </>
  );
}

export const revalidate = 60;
