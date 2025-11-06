"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  // parâmetros de comportamento
  const MIN_Y_BEFORE_HIDE = 120;   // só começa a esconder depois de rolar isso
  const DOWN_THRESHOLD = 16;       // precisa descer pelo menos 16px para esconder
  const UP_THRESHOLD = 8;          // precisa subir 8px para mostrar
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const last = lastYRef.current;
        const delta = y - last;

        // sombra quando sai do topo
        setScrolled(y > 24);

        // sempre visível no topo
        if (y < MIN_Y_BEFORE_HIDE) {
          setVisible(true);
        } else {
          if (delta > DOWN_THRESHOLD) {
            // rolando pra baixo e passou do limite
            setVisible(false);
          } else if (delta < -UP_THRESHOLD) {
            // rolando pra cima
            setVisible(true);
          }
        }

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    lastYRef.current = window.scrollY || 0;
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

  // classes estáveis
  const base =
    "pointer-events-auto flex items-center gap-3 sm:gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-400 ease-out will-change-transform";
  const elevation = scrolled ? "shadow-xl" : "shadow-lg";
  const visibility = visible
    ? "translate-y-0 opacity-100"
    : "translate-y-[140%] opacity-0 pointer-events-none";

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-50 bottom-[max(1rem,env(safe-area-inset-bottom))] pointer-events-none"
      aria-hidden={!visible}
    >
      <div className={`${base} ${elevation} ${visibility}`}>
        {/* LOGO (voltar pra home) — tamanho maior forçado */}
        <Link href="/" aria-label="Voltar para a home" className="flex items-center" title="Home">
          <Image
            src="/logo.svg"
            alt="Cortezzi"
            width={56}
            height={56}
            className="w-12 h-12 sm:w-14 sm:h-14 opacity-90 hover:opacity-100 transition"
            priority
          />
        </Link>

        <div className="w-px h-6 bg-neutral-800/70 mx-2" />

        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-xs sm:text-sm rounded-full hover:bg-neutral-800/80 text-neutral-200 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
