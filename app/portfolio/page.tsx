import Header from "../components/Header";
import Footer from "../components/Footer";
import Job from "../components/Job";

import renanMazer from '../../public/1.png'
import preWedding from '../../public/2.png'
import fibraw from '../../public/3.png'
import agrishow from '../../public/4.png'
import novokids from '../../public/5.png'
import artis from '../../public/6.png'

export const metadata = {
  title: "Portfólio • Cortezzi",
  description: "Trabalhos e cases de Felipe Cortezi",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="bg-neutral-950">
        <section className="border-y border-neutral-800 bg-neutral-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold">Todos os trabalhos</h1>
              <p className="text-neutral-300 mt-1">Seleção de cases recentes em captação, edição e motion.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Job link="https://youtu.be/O54EjAK1ATY" title="Pré-wedding Bruna & Pedro" description="Bruna & Pedro • 2025 • Captação & Edição" image={preWedding} />
              <Job link="https://youtu.be/Q6MU7rZ9OMY" title="Fibraw – Institucional" description="Fibraw • 2025 • Captação & Edição" image={fibraw} />
              <Job link="https://youtu.be/9vBLhxoOzxE" title="Canal Rural – Cobertura Agrishow" description="Canal Rural • 2025 • Captação" image={agrishow} />
              <Job link="https://youtu.be/o37egYio23M" title="Renan Mazer – Videoclipe" description="Renan Mazer • 2025 • Captação & Edição" image={renanMazer} />
              <Job link="https://youtu.be/9xWoFBFOPAE" title="NovoKids – Aftermovie" description="Igreja Missionária • 2025 • Captação & Edição" image={novokids} />
              <Job link="https://youtu.be/uKjzFb4R8qI" title="Artis Studio – Reel Motion" description="Artis Studio • 2025 • Motion Design" image={artis} />
              <Job link="https://youtu.be/uKjzFb4R8qI" title="Artis Studio – Reel Motion" description="Artis Studio • 2025 • Motion Design" image={artis} />
              <Job link="https://youtu.be/uKjzFb4R8qI" title="Artis Studio – Reel Motion" description="Artis Studio • 2025 • Motion Design" image={artis} />
              <Job link="https://youtu.be/uKjzFb4R8qI" title="Artis Studio – Reel Motion" description="Artis Studio • 2025 • Motion Design" image={artis} />
              <Job link="https://youtu.be/uKjzFb4R8qI" title="Artis Studio – Reel Motion" description="Artis Studio • 2025 • Motion Design" image={artis} />
              <Job link="https://youtu.be/uKjzFb4R8qI" title="Artis Studio – Reel Motion" description="Artis Studio • 2025 • Motion Design" image={artis} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
