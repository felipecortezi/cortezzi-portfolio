import renanMazer from '../../public/1.png'
import preWedding from '../../public/2.png'
import fibraw from '../../public/3.png'
import agrishow from '../../public/4.png'
import novokids from '../../public/5.png'
import artis from '../../public/6.png'

export type Project = {
  link: string
  title: string
  description: string
  image: StaticImageData
}

import type { StaticImageData } from "next/image";

export const projects: Project[] = [
  {
    link: "https://youtu.be/O54EjAK1ATY",
    title: "Pré-wedding Bruna & Pedro",
    description: "Bruna & Pedro • 2025 • Captação & Edição",
    image: preWedding,
  },
  {
    link: "https://youtu.be/Q6MU7rZ9OMY",
    title: "Fibraw – Institucional",
    description: "Fibraw • 2025 • Captação & Edição",
    image: fibraw,
  },
  {
    link: "https://youtu.be/9vBLhxoOzxE",
    title: "Canal Rural – Cobertura Agrishow",
    description: "Canal Rural • 2025 • Captação",
    image: agrishow,
  },
  {
    link: "https://youtu.be/o37egYio23M",
    title: "Renan Mazer – Videoclipe",
    description: "Renan Mazer • 2025 • Captação & Edição",
    image: renanMazer,
  },
  {
    link: "https://youtu.be/9xWoFBFOPAE",
    title: "NovoKids – Aftermovie",
    description: "Igreja Missionária • 2025 • Captação & Edição",
    image: novokids,
  },
  {
    link: "https://youtu.be/uKjzFb4R8qI",
    title: "Artis Studio – Reel Motion",
    description: "Artis Studio • 2025 • Motion Design",
    image: artis,
  },
];
