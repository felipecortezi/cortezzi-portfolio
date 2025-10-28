import Image, { StaticImageData } from "next/image";

export default function Service({title, description, logo}: {title: string, description: string, logo: StaticImageData}) {

    return (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <div className="h-10 w-10 rounded-xl mb-4">
                <Image src={logo} alt="Logo Serviço"></Image>
            </div>
            
            <h3 className="font-medium mb-1">{title}</h3>
            <p className="text-sm text-neutral-400">{description}</p>
        </div>
    )
}