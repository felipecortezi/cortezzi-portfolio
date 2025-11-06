"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  // comportamento mais "calmo"
  const MIN_Y_BEFORE_HIDE = 320; // só começa a avaliar hide depois disso
  const HIDE_AFTER = 240;        // precisa ter andado +240px para baixo desde que apareceu
  const DOWN_THRESHOLD = 24;     // passo mínimo de descida para esconder
  const UP_THRESHOLD = 12;       // passo mínimo de subida para mostrar

  const lastYRef = useRef(0);
  const lastShowYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const last = lastYRef.current;
        const delta = y - last;

        setScrolled(y > 24);

        if (y < MIN_Y_BEFORE_HIDE) {
          if (!visible) setVisible(true);
          lastShowYRef.current = y;
        } else {
          if (delta > DOWN_THRESHOLD && y - lastShowYRef.current > HIDE_AFTER) {
            if (visible) setVisible(false);
          } else if (delta < -UP_THRESHOLD) {
            if (!visible) setVisible(true);
            lastShowYRef.current = y;
          }
        }

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    lastYRef.current = window.scrollY || 0;
    lastShowYRef.current = lastYRef.current;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [visible]);

  // navegação (sem "Todos os cases"); Portfólio -> /portfolio
  const nav = [
    { href: "/portfolio", label: "Portfólio" },
    { href: "/#services", label: "Serviços" },
    { href: "/#contact", label: "Contato" },
  ];

  // classes
  const base =
    "pointer-events-auto flex items-center gap-4 sm:gap-6 rounded-[999px] border border-neutral-800 " +
    "bg-neutral-900/80 backdrop-blur-md px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 transition-all duration-500 ease-out will-change-transform";
  const elevation = scrolled ? "shadow-xl" : "shadow-lg";
  const visibilityCls = visible
    ? "translate-y-0 opacity-100"
    : "translate-y-[140%] opacity-0 pointer-events-none";

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-50 bottom-[max(1rem,env(safe-area-inset-bottom))] pointer-events-none"
      aria-hidden={!visible}
    >
      <div className={`${base} ${elevation} ${visibilityCls}`}>
        {/* LOGO maior com respiro + link pra home */}
        <Link href="/" aria-label="Voltar para a home" className="flex items-center" title="Home">
          {/* <img> para forçar escala do SVG mesmo com viewBox folgado */}
          <img
            src="/logo.svg"
            alt="Cortezzi"
            className="h-[54px] sm:h-[64px] w-auto scale-[1.35] origin-left opacity-90 hover:opacity-100 transition"
          />
        </Link>

        {/* divisor com mais respiro */}
        <div className="w-px h-8 bg-neutral-800/70 mx-4 sm:mx-5" />

        {/* navegação */}
        <nav className="flex items-center gap-4 sm:gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm rounded-full hover:bg-neutral-800/80 text-neutral-200 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
