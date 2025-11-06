import Image, { StaticImageData } from "next/image";

type Img = StaticImageData | string;

type Props = {
  link: string;
  title: string;
  description: string;
  image: Img;
  embedUrl?: string;
};

export default function FeaturedProject({ link, title, description, image, embedUrl }: Props) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50">
      <div className="aspect-video w-full overflow-hidden rounded-t-3xl bg-neutral-800">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={image as any}
              alt={title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8 flex items-start justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">{title}</h2>
          <p className="mt-2 text-neutral-300">{description}</p>
        </div>
        {!embedUrl && (
          <a
            href={link}
            target="_blank"
            className="shrink-0 inline-flex items-center rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-neutral-600 transition"
          >
            Assistir case
          </a>
        )}
      </div>
    </section>
  );
}
