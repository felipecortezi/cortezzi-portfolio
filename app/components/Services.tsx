import Service from "./Service";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-3">
          <h2 className="text-2xl font-semibold">Serviços</h2>
          <p className="text-neutral-300">Pacotes enxutos para marcas que querem constância.</p>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
          <Service title="Produção"      description="Roteiro, direção, captação, edição, color."                logo="/producao.svg" />
          <Service title="Design"        description="Carrosséis, banners, anúncios, impressos, social kit."     logo="/design.svg" />
          <Service title="Motion"        description="Reels animados, intros, lower thirds, animações 2d."       logo="/motion.svg" />
          <Service title="Social Media"  description="Conteúdo mensal, agendamento, monitoramento, otimização."  logo="/social.svg" />
        </div>
      </div>
    </section>
  );
}
