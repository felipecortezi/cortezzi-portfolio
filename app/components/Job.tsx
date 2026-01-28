// app/components/Job.tsx
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type Img = StaticImageData | string;

type Props = {
  title: string;
  image: Img;
  slug?: string | null;
  link?: string;
  tags?: string[]; // Agora o componente aceita as tags que vêm do Admin
};

export default function Job({ title, image, slug, link, tags }: Props) {
  const href = slug ? `/portfolio/${slug}` : (link || "#");

  // Se não houver tags no Sanity, podemos definir tags padrão ou deixar vazio []
  const displayTags = tags && tags.length > 0 ? tags : ["Direção", "Captação", "Edição"];

  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-[25px] aspect-square bg-neutral-200" 
      /* Reduzi de 45px para 25px para uma borda mais suave */
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
        <Image
          src={image as any}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
      </div>

      {/* Tags Dinâmicas */}
      <div className="absolute top-5 left-6 flex flex-wrap gap-2">
        {displayTags.map((tag) => (
          <span 
            key={tag} 
            className="bg-black/30 backdrop-blur-md text-white text-[9px] px-3 py-1 rounded-full uppercase tracking-widest font-light border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Rodapé do Card */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
        <h3 className="text-white text-lg md:text-xl font-medium tracking-tight truncate mr-2">
          {title}
        </h3>
        
        {/* Botão mais fino e em uma linha só */}
        <span className="text-white text-[9px] border border-white/40 rounded-full px-4 py-1.5 uppercase tracking-widest whitespace-nowrap backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-300">
          ver mais +
        </span>
      </div>
    </Link>
  );
}
