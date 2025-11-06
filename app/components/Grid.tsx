import Job from "./Job"
import renanMazer from '../../public/1.png'
import preWedding from '../../public/2.png'
import fibraw from '../../public/3.png'
import agrishow from '../../public/4.png'
import novokids from '../../public/5.png'
import artis from '../../public/6.png'

export default function Grid() {

    return (
        <section id="portfolio" className="bg-neutral-900/40 border-y border-neutral-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-semibold">Portfólio</h2>
                        <p className="text-neutral-400">Veja um pouco dos nossos projetos já entregues</p>
                    </div>

                    <a
                        href="/portfolio"
                        className="inline-flex items-center rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-neutral-600 transition"
                    >
                        Ver mais
                    </a>

                </div>
                <div className="mt-8">
                    <p className="text-neutral-300">Veja meus cases completos na página de portfólio.</p>
                  </div>
            </div>
        </section>
    )
}
