import Header from "../components/Header";
import Footer from "../components/Footer";
import Job from "../components/Job";
import FeaturedProject from "../components/FeaturedProject";
import { projects, featuredProject, featuredEmbedUrl } from "../data/projects";

export const metadata = {
  title: "Portfólio • Cortezzi",
  description: "Trabalhos e cases de Felipe Cortezi",
};

export default function PortfolioPage() {
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

            {/* PROJETO EM DESTAQUE */}
            <div className="mb-10">
              <FeaturedProject
                link={featuredProject.link}
                title={featuredProject.title}
                description={featuredProject.description}
                image={featuredProject.image}
                embedUrl={featuredEmbedUrl}
              />
            </div>

            {/* GRID COM TODOS OS PROJETOS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <Job key={i} link={p.link} title={p.title} description={p.description} image={p.image} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
