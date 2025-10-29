
export default function Hero() {

    return (
        <section className="relative isolate">
            <div className="absolute inset-0">
                <div className="h-full w-full bg-gradient-to-b from-neutral-900 to-neutral-950" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-6 space-y-6">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Living in Motion</h1>
                        <p className="text-neutral-300 max-w-xl">Produção audiovisual & Design</p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <a href="#cta" className="inline-flex rounded-xl bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-neutral-200 transition">Pedir Orçamento</a>
                        </div>
                        <div className="flex items-center gap-6 pt-4 opacity-80 text-sm">
                            <div className="space-y-1">
                                <div className="font-semibold text-lg">+10</div>
                                <div>Anos</div>
                            </div>
                            <div className="space-y-1">
                                <div className="font-semibold text-lg">+200</div>
                                <div>Projetos</div>
                            </div>
                            <div className="space-y-1">
                                <div className="font-semibold text-lg">+10M</div>
                                <div>Visualizações</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <video autoPlay muted loop style={{ borderRadius: '20px' }}>
                            <source src="hero.mp4" type="video/mp4"></source>
                        </video>

                    </div>
                </div>
            </div>
        </section>
    )
}
