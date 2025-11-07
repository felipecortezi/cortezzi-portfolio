import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectHero from "./ProjectHero";
import PT from "./PT";
import Gallery from "./Gallery";
import Videos from "./Videos"; // <- NOVO
import { client } from "../../../lib/sanity.client";
import { projectBySlugQuery } from "../../../lib/sanity.queries";

export const revalidate = 60;

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = await client.fetch(projectBySlugQuery, { slug });

  // Evita quebrar quando faltar algo
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

      <Footer />
    </>
  );
}
