import Service from "./Service"
import social from '../../public/social.svg'
import producao from '../../public/producao.svg'
import design from '../../public/design.svg'
import motion from '../../public/motion.svg'

export default function Services() {

    return (
        <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-3">
                    <h2 className="text-2xl font-semibold">Serviços</h2>
                    <p className="text-neutral-300">Pacotes enxutos para marcas que querem constância.</p>
                </div>
                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                    <Service title="Produção " description="Roteiro, direção, captação, edição, color." logo={producao} />
                    <Service title="Design" description="Carrosséis, banners, anúncios, impressos, social kit." logo={design} />
                    <Service title="Motion" description="Reels animados, intros, lower thirds, animações 2d." logo={motion} />
                    <Service title="Social Media" description="conteúdo mensal, agendamento, monitoramento, otimização." logo={social} />
                </div>
            </div>
        </section>
    )
}