import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="bg-neutral-900/40 border-y border-neutral-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                    <div className="relative w-full aspect-square max-w-sm">
  <Image src="/felipe.webp" alt="Luis" fill sizes="(max-width: 640px) 100vw, 400px" className="object-cover rounded-xl" />
</div>
                </div>
                <div className="lg:col-span-6 space-y-4">
                    <h2 className="text-2xl font-semibold">Sobre</h2>
                    <p className="text-neutral-300">Eu sou o Felipe Cortezi. Comecei há 10 anos filmando, editei por anos e fui para o motion quando entendi que design + ritmo mudam a forma como as pessoas percebem uma mensagem. Criei a Cortezzi para unir tudo isso em um lugar só: ideia, execução e resultado.</p>
                    <p className="text-neutral-300">A Cortezzi é um estúdio criativo que pensa conteúdo como produto: tem estratégia, tem forma e tem finalidade. A gente reduz o ruído, simplifica o discurso e entrega peças claras, bonitas e que funcionam na landing page, no anúncio, no feed e no palco.</p>
                    <p className="text-neutral-300">Se o objetivo é posicionar, lançar, vender ou fortalecer marca, a Cortezzi entra para transformar briefing em história que move.</p>
                    <div className="grid grid-cols-3 gap-3">
                        {["Captação", "Edição", "Motion"].map((k) => (
                            <div key={k} className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-neutral-300">{k}</div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
