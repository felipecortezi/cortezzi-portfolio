export default function Contact() {

    return (
        <section id="contact" className="bg-gradient-to-b from-neutral-950 to-neutral-900 border-y border-neutral-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
                <h2 className="text-3xl font-semibold">Vamos tirar sua ideia do papel?</h2>
                <p className="text-neutral-300">Respondo rápido. Manda um “oi” que eu já pego o briefing.</p>
                <div className="flex items-center justify-center gap-3">
                    <a href="https://wa.me/5516991464415?text=Quero%20fazer%20um%20orçamento!"
                        target="_blank"
                        className="inline-flex rounded-xl bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-neutral-200 transition">Falar no WhatsApp</a>
                </div>
            </div>
        </section>
    )
}
