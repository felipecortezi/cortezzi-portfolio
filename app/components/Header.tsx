"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  // comportamento mais "calmo"
  const MIN_Y_BEFORE_HIDE = 240; // só começa a avaliar hide depois disso
  const HIDE_AFTER = 180;        // precisa ter andado +180px para baixo desde que apareceu
  const DOWN_THRESHOLD = 24;     // passo mínimo de descida para considerar "descendo"
  const UP_THRESHOLD = 12;       // passo mínimo de subida para mostrar
  const lastYRef = useRef(0);
  const lastShowYRef = useRef(0); // posição Y quando o header foi mostrado por último
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

        // sempre visível antes do limite mínimo
        if (y < MIN_Y_BEFORE_HIDE) {
          if (!visible) setVisible(true);
          lastShowYRef.current = y;
        } else {
          // esconder: só se estiver descendo com passo bom e já percorreu HIDE_AFTER desde a última vez que mostrou
          if (delta > DOWN_THRESHOLD && y - lastShowYRef.current > HIDE_AFTER) {
            if (visible) setVisible(false);
          }
          // mostrar: ao subir um pouco
          else if (delta < -UP_THRESHOLD) {
            if (!visible) setVisible(true);
            lastShowYRef.current = y; // reseta o marco quando mostramos de novo
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

  // só 1 item: Portfólio -> /portfolio
  const nav = [{ href: "/portfolio", label: "Portfólio" }];

  // classes estáveis
  const base =
    "pointer-events-auto flex items-center gap-3 sm:gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-500 ease-out will-change-transform";
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
        {/* LOGO grande (forçado) e link pra home */}
        <Link href="/" aria-label="Voltar para a home" className="flex items-center" title="Home">
          {/* <img> para forçar escala do SVG */}
          <img
            src="/logo.svg"
            alt="Cortezzi"
            className="h-[40px] sm:h-[52px] w-auto scale-[1.6] origin-left opacity-90 hover:opacity-100 transition"
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
