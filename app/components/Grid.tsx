// app/components/Grid.tsx
import Job from "./Job";
import { client } from "../../lib/sanity.client";
import { sixLatestProjectsQuery } from "../../lib/sanity.queries";

export default async function Grid() {
  const projects = await client.fetch(sixLatestProjectsQuery);

  return (
    <section id="portfolio" className="bg-[#F9F7F0] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Título Centralizado e em Minúsculo */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] tracking-tighter lowercase">
            projetos recentes
          </h2>
        </div>

        {projects?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p: any) => (
              <Job
                key={p._id}
                slug={p.slug}
                link={p.link || "#"}
                title={p.title}
                tags={p.tags || []} // Adicionando suporte a tags se existirem no Sanity
                image={p.thumbUrl}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">Em breve, novos projetos aqui.</p>
        )}

        {/* Botão Arredondado do Figma */}
        <div className="mt-20 flex justify-center">
          <a
            href="/portfolio"
            className="px-10 py-4 border border-gray-400 rounded-full text-gray-500 font-light hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
          >
            Clique aqui para ver mais projetos.
          </a>
        </div>
      </div>
    </section>
  );
}

export const revalidate = 1;
