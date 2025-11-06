import Job from "./Job";
import { projects } from "../data/projects";

export default function Grid() {
  return (
    <section id="portfolio" className="bg-neutral-900/40 border-y border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Título + subtítulo (sem botão aqui) */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Portfólio</h2>
            <p className="text-neutral-300">Alguns cases recentes. Veja todos na página de portfólio.</p>
          </div>
        </div>

        {/* Grid com 6 projetos */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((p, i) => (
            <Job
              key={i}
              link={p.link}
              title={p.title}
              description={p.description}
              image={p.image}
            />
          ))}
        </div>

        {/* Botão centralizado abaixo do grid */}
        <div className="mt-10 flex justify-center">
          <a
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-neutral-700 px-5 py-2.5 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-neutral-600 transition"
          >
            Ver mais
          </a>
        </div>
      </div>
    </section>
  );
}
