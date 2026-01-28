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
import GridZZ from "./components/gridzz"; 
import Cases from "./components/Cases"; // <- ADICIONEI ESTE IMPORT

export const revalidate = 1; 

export default function CortezziWireframe() {
  return (
    <>
      <Header />
      <Hero />
      <HeroBanner />

      {/* A Cortezzi (bege) */}
      <About />

      {/* Banner azul da frase */}
      <FraseBanner />

      {/* Mosaico estático de cases */}
      <GridZZ />

      {/* BLOCO DE CLIENTES (PNG) - Adicionado logo após o GridZZ */}
      <Cases />

      {/* GRID com os 6 últimos projetos do CMS */}
      <Grid />

      <Services />
      <Testimonies />
      <Contact />
      <Footer />
    </>
  );
}
