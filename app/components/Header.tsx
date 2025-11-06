"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "/#portfolio", label: "Portfólio" },
    { href: "/portfolio", label: "Todos os cases" },
    { href: "/#services", label: "Serviços" },
    { href: "/#contact", label: "Contato" },
  ];

  return (
    <div className="fixed left-1/2 -translate-x-1/2 z-50
                    bottom-[max(1rem,env(safe-area-inset-bottom))]
                    pointer-events-none">
      <div
        className={[
          "pointer-events-auto flex items-center gap-3 sm:gap-4",
          "rounded-2xl border border-neutral-800 bg-neutral-900/80",
          "backdrop-blur px-3 py-2 sm:px-4 sm:py-2.5",
          "shadow-lg transition-shadow",
          scrolled ? "shadow-xl" : "shadow-lg",
        ].join(" ")}
      >
        {/* Logo → volta pra home */}
        <Link
          href="/"
          aria-label="Voltar para a home"
          className="flex items-center gap-2 group"
        >
          <Image
            src="/logo.svg"
            alt="Cortezzi"
            width={22}
            height={22}
            className="opacity-90 group-hover:opacity-100"
            priority
          />
          <span className="text-sm font-medium hidden sm:block">Cortezzi</span>
        </Link>

        {/* divisor */}
        <div className="w-px h-5 bg-neutral-800/70 mx-1 sm:mx-2" />

        {/* Navegação compacta */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-xs sm:text-sm rounded-full
                         hover:bg-neutral-800/80 text-neutral-200 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
