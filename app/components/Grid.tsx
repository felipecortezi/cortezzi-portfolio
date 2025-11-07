import Job from "./Job";
import { client } from "../../lib/sanity.client";
import { sixLatestProjectsQuery } from "../../lib/sanity.queries";

export default async function Grid() {
  const projects = await client.fetch(sixLatestProjectsQuery);

  return (
    <section id="portfolio" className="bg-neutral-900/40 border-y border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Portfólio</h2>
            <p className="text-neutral-300">Alguns cases recentes. Veja todos na página de portfólio.</p>
          </div>
        </div>

        {projects?.length ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p: any) => (
              <Job
                key={p._id}
                slug={p.slug}
                link={p.link || "#"}
                title={p.title}
                description={p.description || ""}
                image={p.thumbUrl}
              />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-neutral-400">Em breve, novos projetos aqui.</p>
        )}

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

export const revalidate = 1;
// (alternativa) export const dynamic = "force-dynamic";
