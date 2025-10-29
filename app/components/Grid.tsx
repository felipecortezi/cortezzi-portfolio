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
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Job link="https://youtu.be/O54EjAK1ATY" title="Pré Wedding - Bruna & Pedro" description="Bruna & Pedro • 2025 • Captação & Edição" image={preWedding}/>
                    <Job link="https://youtu.be/Q6MU7rZ9OMY" title="Institucional Fibraw" description="Fibraw • 2025 • Captação & Edição" image={fibraw}/>
                    <Job link="https://youtu.be/9vBLhxoOzxE" title="AgriShow 2025" description="Canal Rural • 2025 • Captação" image={agrishow}/>
                    <Job link="https://youtu.be/o37egYio23M" title="Showreel: Renan Mazer" description="Renan Mazer • 2025 • Captação & Edição" image={renanMazer}/>
                    <Job link="https://youtu.be/9xWoFBFOPAE" title="Mini Documentário: O Novo Kids" description="Ágape Igreja Missionária • 2025 • Captação & Edição" image={novokids}/>
                    <Job link="https://youtu.be/uKjzFb4R8qI" title="Institucional Artis Studio" description="Artis Studio • 2025 • Motion Design" image={artis}/>
                </div>
            </div>
        </section>
    )
}
