// Cortezzi Creative – Visual Wireframe (React + Tailwind)

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Grid from "./components/Grid"; // antigo, não usamos mais aqui
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import Testimonies from "./components/Testimonies";
import FraseBanner from "./components/FraseBanner";
import GridZZ from "./components/GridZZ"; // ⬅ novo mosaico estático (portfolio-mosaic.jpg)

export const revalidate = 1; // força atualizar a lista de projetos com frequência

export default function CortezziWireframe() {
  return (
    <>
      <Header />
      <Hero />

      {/* Faixa de vídeo do hero */}
      <HeroBanner />

      {/* A Cortezzi (bloco bege) */}
      <About />

      {/* Banner azul da frase */}
      <FraseBanner />

      {/* Mosaico de portfólio estático (storytelling • produção • motion design) */}
      <GridZZ />

      {/* Blocos de serviços, depoimentos e contato */}
      <Services />
      <Testimonies />
      <Contact />
      <Footer />
    </>
  );
}
