// app/components/Grid.tsx
import Job from "./Job";
import { client } from "../../lib/sanity.client";
import { sixLatestProjectsQuery } from "../../lib/sanity.queries";

export default async function Grid() {
  const projects = await client.fetch(sixLatestProjectsQuery);

  return (
    <section id="portfolio" className="bg-[#F9F7F0] py-24 md:py-40">
      {/* 1. Mantive o container amplo para os projetos brilharem */}
      <div className="mx-auto max-w-[1600px] px-6">
        
        {/* 2. Título reduzido pela metade e com espaçamento refinado */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tighter lowercase">
            projetos recentes
          </h2>
        </div>

        {projects?.length ? (
          /* 3. Grid preenchendo bem a tela */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {projects.map((p: any) => (
              <Job
                key={p._id}
                slug={p.slug}
                link={p.link || "#"}
                title={p.title}
                tags={p.tags || []}
                image={p.thumbUrl}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 font-light">Em breve, novos projetos aqui.</p>
        )}

        {/* Botão de Ver Mais */}
        <div className="mt-24 md:mt-32 flex justify-center">
          <a
            href="/portfolio"
            className="px-10 py-4 border border-gray-300 rounded-full text-gray-500 text-base font-light hover:bg-[#1A1A1A] hover:border-[#1A1A1A] hover:text-white transition-all duration-500"
          >
            Clique aqui para ver mais projetos.
          </a>
        </div>
      </div>
    </section>
  );
}

export const revalidate = 1;
