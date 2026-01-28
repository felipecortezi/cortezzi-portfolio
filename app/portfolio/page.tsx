import Header from "../components/Header";
import Footer from "../components/Footer";
import Job from "../components/Job";
import FeaturedProject from "../components/FeaturedProject";
import { client } from "../../lib/sanity.client";
import { allProjectsQuery, featuredProjectQuery } from "../../lib/sanity.queries";

export const metadata = {
  title: "Portfólio • Cortezzi",
  description: "Trabalhos e cases de Felipe Cortezi",
};

export const revalidate = 60;

export default async function PortfolioPage() {
  const [featured, projects] = await Promise.all([
    client.fetch(featuredProjectQuery),
    client.fetch(allProjectsQuery),
  ]);

  // monta href do destaque priorizando o slug
  const featuredHref =
    (featured && featured.slug)
      ? `/portfolio/${featured.slug}`
      : (featured?.link || "#");

  return (
    <>
      <Header />
      <main className="bg-[#F9F7F0]"> {/* Ajustado para o bege do novo design */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-bold tracking-tighter text-[#1A1A1A] lowercase">
                todos os trabalhos
              </h1>
              <p className="text-neutral-500 mt-2 font-light">
                Seleção de cases recentes em captação, edição e motion.
              </p>
            </div>

            {!!featured && (
              <div className="mb-16">
                <FeaturedProject
                  link={featuredHref}
                  title={featured.title}
                  description={featured.description || ""}
                  image={featured.thumbUrl}
                  embedUrl={featured.embedUrl || undefined}
                />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p: any) => {
                const href = p.slug ? `/portfolio/${p.slug}` : (p.link || "#");
                return (
                  <Job
                    key={p._id}
                    link={href}
                    title={p.title}
                    // A linha 'description' foi removida aqui para corrigir o erro de build
                    image={p.thumbUrl}
                    tags={p.tags} // Adicionado para exibir as tags conforme o design
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
