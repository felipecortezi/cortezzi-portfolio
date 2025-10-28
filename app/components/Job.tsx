import Image, { StaticImageData } from "next/image";

export default function Job({ link, title, description, image }: { link: string, title: string, description: string, image: StaticImageData }) {

    return (
        <a href={link} target="_blank" className="group">
            <div className="aspect-video w-full rounded-2xl bg-neutral-800 border border-neutral-700 overflow-hidden flex items-center justify-center">
                <Image src={image} className="group-hover:opacity-80 transition" alt="Thumbnail do serviço"></Image>
            </div>
            <div className="mt-3 flex items-center justify-between">
                <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-sm text-neutral-400">{description}</p>
                </div>
                <span className="text-xs opacity-70">+ ver case</span>
            </div>
        </a>
    )
}