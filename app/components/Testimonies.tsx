import Testimony from "./Testimony";
import cat from '../../public/cat.jpg'

export default function Testimonies() {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                    <h2 className="text-2xl font-semibold">O que falam</h2>
                    <p className="text-neutral-400">Depoimentos reais para reforçar autoridade.</p>
                </div>
                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                    <Testimony name="Douglas Higoshi" role="Programador" company="ME" photo={cat} testimony="Serviço muito rápido e profissional"/>
                    <Testimony name="Bruna" role="Marketing Interno" company="Fibraw" photo={cat} testimony="Superou as expectativas, o projeto ficou lindo."/>
                    
                </div>
            </div>
        </section>
    )
}
