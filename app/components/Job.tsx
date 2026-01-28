// app/components/Job.tsx
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type Img = StaticImageData | string;

type Props = {
  title: string;
  description?: string;
  image: Img;
  slug?: string | null;   // abre /portfolio/[slug] quando houver
  link?: string;          // fallback (YouTube etc.) caso não tenha slug
};

export default function Job({ title, image, slug, link }: Props) {
  const href = slug ? `/portfolio/${slug}` : (link || "#");

  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-[45px] aspect-square bg-neutral-200"
    >
      {/* Container da Imagem com Zoom */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
        <Image
          src={image as any}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        {/* Overlay para dar contraste aos textos brancos */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
      </div>

      {/* Tags (Fixas conforme o design, ou você pode mapear do Sanity depois) */}
      <div className="absolute top-6 left-8 flex gap-2">
        {["Direção", "Captação", "Edição"].map((tag) => (
          <span 
            key={tag} 
            className="bg-black/20 backdrop-blur-md text-white text-[10px] px-4 py-1.5 rounded-full uppercase tracking-widest font-light border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Informações na parte inferior */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
        <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">
          {title}
        </h3>
        
        <span className="text-white text-[10px] border border-white/40 rounded-full px-5 py-2 uppercase tracking-widest backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-300">
          Ver mais +
        </span>
      </div>
    </Link>
  );
}
