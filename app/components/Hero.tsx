export default function Hero() {
  return (
    // -mb-* puxa a próxima seção pra cima (reduz o respiro inferior real)
    <section className="relative isolate -mb-8 md:-mb-10 lg:-mb-12">
      {/* fundo/gradiente */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-b from-neutral-900 to-neutral-950" />
      </div>

      {/* wrapper: bem pouco padding no topo e embaixo */}
      <div
        className="
          relative mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-8
          pt-6 md:pt-8 lg:pt-10
          pb-12 md:pb-16 lg:pb-20
        "
      >
        {/* altura mínima menor pra já revelar a faixa seguinte */}
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[46vh]">
          {/* Coluna esquerda */}
          <div className="lg:col-span-6 space-y-5">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Living in Motion
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 max-w-xl">
              Produção audiovisual &amp; Design
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#cta"
                className="inline-flex rounded-xl bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-neutral-200 transition text-base md:text-lg"
              >
                Pedir Orçamento
              </a>
            </div>

            <div className="flex items-center gap-6 pt-3 opacity-80 text-sm md:text-base">
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
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
