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

export default async function PortfolioPage() {
  const [featured, projects] = await Promise.all([
    client.fetch(featuredProjectQuery),
    client.fetch(allProjectsQuery),
  ]);

  return (
    <>
      <Header />
      <main className="bg-neutral-950">
        <section className="border-y border-neutral-800 bg-neutral-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold">Todos os trabalhos</h1>
              <p className="text-neutral-300 mt-1">Seleção de cases recentes em captação, edição e motion.</p>
            </div>

            {featured && (
              <div className="mb-10">
                <FeaturedProject
                  link={featured.link || "#"}
                  title={featured.title}
                  description={featured.description || ""}
                  image={featured.thumbUrl}
                  embedUrl={featured.embedUrl || undefined}
                />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p: any) => (
                <Job
                  key={p._id}
                  link={p.link || "#"}
                  title={p.title}
                  description={p.description || ""}
                  image={p.thumbUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const revalidate = 60;
