// Cortezzi Creative – Visual Wireframe (React + Tailwind)

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import Testimonies from "./components/Testimonies";
import FraseBanner from "./components/FraseBanner";
import GridZZ from "./components/gridzz"; // <- IMPORT CERTO AQUI

export const revalidate = 1; // força atualizar a lista de projetos com frequência

export default function CortezziWireframe() {
  return (
    <>
      <Header />
      <Hero />
      {/* faixa de vídeo do hero */}
      <HeroBanner />

      {/* A Cortezzi (bege) */}
      <About />

      {/* Banner azul da frase */}
      <FraseBanner />

      {/* Mosaico estático de cases */}
      <GridZZ />

      {/* GRID com os 6 últimos projetos do CMS */}
      <Grid />

      <Services />
      <Testimonies />
      <Contact />
      <Footer />
    </>
  );
}
