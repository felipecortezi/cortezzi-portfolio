import Image, { StaticImageData } from "next/image";

export default function Testimony({name, role, company, testimony, photo}: {name: string, role: string, company: string, testimony: string, photo: StaticImageData}) {

    return (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-3">
            <div className="flex items-center gap-3">
                <Image src={photo} alt="Foto do usuário do relato" className="h-10 w-10 rounded-full bg-neutral-700" />
                <div>
                    <div className="font-medium">{name}</div>
                    <div className="text-xs text-neutral-400">{role} • {company}</div>
                </div>
            </div>
            <p className="text-sm text-neutral-300">“{testimony}”</p>
        </div>
    )
}