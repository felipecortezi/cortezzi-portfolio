import Image, { StaticImageData } from "next/image";

type Props = {
  link: string;
  title: string;
  description: string;
  image: StaticImageData;
};

export default function FeaturedProject({ link, title, description, image }: Props) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50">
      <a href={link} target="_blank" className="group block">
        <div className="aspect-video w-full overflow-hidden rounded-t-3xl bg-neutral-800">
          <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover group-hover:opacity-90 transition"
            priority
          />
        </div>
      </a>

      <div className="p-6 sm:p-8 flex items-start justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">{title}</h2>
          <p className="mt-2 text-neutral-300">{description}</p>
        </div>
        <a
          href={link}
          target="_blank"
          className="shrink-0 inline-flex items-center rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-neutral-600 transition"
        >
          Assistir case
        </a>
      </div>
    </section>
  );
}
