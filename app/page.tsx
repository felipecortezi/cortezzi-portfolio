// Cortezzi Creative – Visual Wireframe (React + Tailwind)
// Observação: é um layout-base para referência visual (proporções, hierarquia e ritmo).
// Substitua textos e placeholders no Figma depois.

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import Testimonies from "./components/Testimonies";

export const revalidate = 1; // força atualizar a lista de projetos com frequência

export default function CortezziWireframe() {
  return (
    <>
      <Header />
      <Hero />
      <HeroBanner />

      {/* GRID com os 6 últimos projetos do CMS */}
      <Grid />

      <Services />
      <About />
      <Testimonies />
      <Contact />
      <Footer />
    </>
  );
}
