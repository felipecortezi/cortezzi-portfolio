import Image, { StaticImageData } from "next/image";

type Img = StaticImageData | string;

type Props = {
  link: string;
  title: string;
  description: string;
  image: Img;
};

export default function Job({ link, title, description, image }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition-colors"
    >
      {/* Área da mídia: mantém o retângulo fixo, só a imagem escala */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl bg-neutral-800">
        <Image
          src={image as any}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06] group-focus-visible:scale-[1.06]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="p-4">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="mt-1 text-sm text-neutral-400">{description}</p>
      </div>
    </a>
  );
}
