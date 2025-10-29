export default function Hero() {
  return (
    <section className="relative isolate">
      {/* fundo/gradiente */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-b from-neutral-900 to-neutral-950" />
      </div>

      {/* wrapper com mais respiro e altura mínima */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[70vh]">
          {/* Coluna esquerda */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Living in Motion
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 max-w-xl">
              Produção audiovisual &amp; Design
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#cta"
                className="inline-flex rounded-xl bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-neutral-200 transition text-base md:text-lg"
              >
                Pedir Orçamento
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 opacity-80 text-sm md:text-base">
              <div className="space-y-1">
                <div className="font-semibold text-lg md:text-xl">+10</div>
                <div>Anos</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-lg md:text-xl">+200</div>
                <div>Projetos</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-lg md:text-xl">+10M</div>
                <div>Visualizações</div>
              </div>
            </div>
          </div>

          {/* Coluna direita — vídeo */}
          <div className="lg:col-span-6">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-white/10"
              // poster="/hero-poster.jpg" // opcional: adicione um poster em /public
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
