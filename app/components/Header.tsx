"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || 0;
          const last = lastYRef.current;
          const delta = y - last;

          // sombra quando sai do topo
          setScrolled(y > 24);

          // lógica de direção
          if (y < 10) {
            setVisible(true); // no topo: sempre mostra
          } else if (delta > 4) {
            // rolando pra baixo
            setVisible(false);
          } else if (delta < -4) {
            // rolando pra cima
            setVisible(true);
          }

          lastYRef.current = y;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
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

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-50
                 bottom-[max(1rem,env(safe-area-inset-bottom))]
                 pointer-events-none"
      aria-hidden={!visible}
    >
      <div
        className={[
          "pointer-events-auto flex items-center gap-3 sm:gap-4",
          "rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur",
          "px-3 py-2 sm
