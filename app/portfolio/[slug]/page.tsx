import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectHero from "./ProjectHero";
import PT from "./PT";
import Gallery from "./Gallery";
import { client } from "../../../lib/sanity.client";
import { projectBySlugQuery } from "../../../lib/sanity.queries";

type RouteParams = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export default async function ProjectPage({ params }: RouteParams) {
  const { slug } = await params;
  const project = await client.fetch(projectBySlugQuery, { slug });

  // Guardas para evitar quebrar quando algo faltar
  const coverUrl = project?.coverUrl || project?.thumbUrl || null;

  return (
    <>
      <Header />
      {coverUrl && (
        <ProjectHero coverUrl={project?.coverUrl} thumbUrl={project?.thumbUrl} title={project?.title || ""} />
      )}

      <PT
        title={project?.title || ""}
        client={project?.client || ""}
        date={project?.date || ""}
        description={project?.description || ""}
        longDescription={project?.longDescription || []}
        videos={project?.videos || []}
        embedUrl={project?.embedUrl || null}
      />

      <Gallery items={project?.gallery || []} />

      <Footer />
    </>
  );
}
