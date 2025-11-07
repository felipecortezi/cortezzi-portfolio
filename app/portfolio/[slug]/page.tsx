import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectHero from "./ProjectHero";
import PT from "./PT";
import Gallery from "./Gallery";
import Job from "../../components/Job";
import { client } from "../../../lib/sanity.client";
import { projectBySlugQuery, threeLatestExceptQuery } from "../../../lib/sanity.queries";

type RouteParams = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export default async function ProjectPage({ params }: RouteParams) {
  const { slug } = await params;

  // Busca dados do projeto + sugestões (3 mais recentes exceto este)
  const [project, suggestions] = await Promise.all([
    client.fetch(projectBySlugQuery, { slug }),
    client.fetch(threeLatestExceptQuery, { slug }),
  ]);

  const coverUrl = project?.coverUrl || project?.thumbUrl || null;

  return (
    <>
      <Header />
      {coverUrl && (
        <ProjectHero
          coverUrl={project?.coverUrl}
          thumbUrl={project?.thumbUrl}
          title={project?.title || ""}
        />
      )}

      <PT
        title={project?.title || ""}
        client={project?.client || ""}
        date={project?.date || ""}
        description={project?.description || ""}
        longDescription={project?.longDescription || []}
        videos={project?.videos || []}
        embedUrl={project?.embedUrl || null}
        link={project?.link || null}
      />

      <Gallery items={project?.gallery || []} />

      {/* Projetos sugeridos */}
      {Array.isArray(suggestions) && suggestions.length > 0 && (
        <section className="border-t border-neutral-800 bg-neutral-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-2xl font-semibold">Projetos sugeridos</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestions.map((p: any) => (
                <Job
                  key={p._id}
                  link={p?.slug ? `/portfolio/${p.slug}` : "#"}
                  title={p.title}
                  description={p.description || ""}
                  image={p.thumbUrl}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
