export default function Footer() {

    return (
        <footer className="border-t border-neutral-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-3 gap-6 text-sm">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <span className="font-medium">Cortezzi Creative</span>
                    </div>
                    <p className="text-neutral-400">Filmmaker, edição e motion design. Ribeirão Preto / Sertãozinho – SP.</p>
                </div>
                <div className="space-y-2">
                    <div className="font-medium">Páginas</div>
                    <div className="flex flex-col gap-1 text-neutral-400">
                        <a href="#portfolio">Portfólio</a>
                        <a href="#services">Serviços</a>
                        <a href="#about">Sobre</a>
                        <a href="#contact">Contato</a>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="font-medium">Contato</div>
                    <div className="flex flex-col gap-1 text-neutral-400">
                        <a href="mailto:contato@cortezzi.com.br">contato@cortezzi.com.br</a>
                        <a href="https://wa.me/5516991464415" target="_blank">+55 (16) 9 9146-4415</a>
                        <a className="hover:neutral-200 transition" href="https://www.instagram.com/cortezzi.co/" target="_blank">@cortezzi.co</a>
                    </div>
                </div>
            </div>
            <div className="text-xs text-neutral-500 py-4 text-center">© 2025 Cortezzi Creative. Todos os direitos reservados.</div>
        </footer>
    )
}