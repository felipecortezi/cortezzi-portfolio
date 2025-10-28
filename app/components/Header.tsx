import Image from 'next/image'

export default function Header() {

    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-900/90 border-b border-neutral-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="Logo Cortezzi" width={146} height={40} priority />
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <a className="opacity-80 hover:opacity-100" href="#portfolio">Portfólio</a>
                    <a className="opacity-80 hover:opacity-100" href="#services">Serviços</a>
                    <a className="opacity-80 hover:opacity-100" href="#about">Sobre</a>
                    <a className="opacity-80 hover:opacity-100" href="#cta">Contato</a>
                    <a className="ml-2 inline-flex items-center rounded-xl bg-white text-neutral-900 px-4 py-2 font-medium hover:bg-neutral-200 transition" href="#cta">Orçar agora</a>
                </nav>
                <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-xl bg-neutral-800">≡</button>
            </div>
        </header>
    )
}
