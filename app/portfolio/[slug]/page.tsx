import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectHero from "./ProjectHero";
import PT from "./PT";
import Gallery from "./Gallery";
import Videos from "./Videos";
import { client } from "../../../lib/sanity.client";
import { projectBySlugQuery } from "../../../lib/sanity.queries";

export const revalidate = 60;

export default async function ProjectPage({ params }: any) {
  // Normaliza: pode vir como objeto OU como Promise
  const resolvedParams = params && typeof params.then === "function" ? await params : params;
  const slug: string | undefined = resolvedParams?.slug;

  const project = slug ? await client.fetch(projectBySlugQuery, { slug }) : null;

  const coverUrl = project?.coverUrl || project?.thumbUrl || null;

  return (
    <>
      <Header />

      {/* Banner/Capa (só renderiza se existir) */}
      {coverUrl && (
        <ProjectHero
          coverUrl={project?.coverUrl}
          thumbUrl={project?.thumbUrl}
          title={project?.title || ""}
        />
      )}

      {/* Infos à esquerda + vídeo principal à direita */}
      {project ? (
        <>
          <PT
            title={project?.title || ""}
            client={project?.client || ""}
            date={project?.date || ""}
            description={project?.description || ""}
            longDescription={project?.longDescription || []}
            videos={project?.videos || []}
            embedUrl={project?.embedUrl || null}
          />

          {/* Galeria de fotos */}
          <Gallery items={project?.gallery || []} />

          {/* VÍDEOS (lista completa) — pós galeria */}
          <Videos
            videos={project?.videos || []}
            embedUrl={project?.embedUrl || null}
          />
        </>
      ) : (
        <main className="min-h-[40vh] flex items-center justify-center">
          <p className="text-neutral-400">Projeto não encontrado.</p>
        </main>
      )}

      <Footer />
    </>
  );
}
