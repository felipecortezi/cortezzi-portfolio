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

          setScrolled(y > 24);

          if (y < 10) {
            setVisible(true);
          } else if (delta > 4) {
            setVisible(false);
          } else if (delta < -4) {
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
      className="fixed left-1/2 -translate-x-1/2 z-50 bottom-[max(1rem,env(safe-area-inset-bottom))] pointer-events-none"
      aria-hidden={!visible}
    >
      <div
        className={[
          "pointer-events-auto flex items-center gap-3 sm:gap-4",
          "rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur",
          "px-3 py-2 sm:px-4 sm:py-2.5", // <-- estava quebrado aqui
          visible ? "translate-y-0 opacity-100" : "translate-y-[140%] opacity-0 pointer-events-none",
          "transition-all duration-300 ease-out will-change-transform",
          scrolled ? "shadow-xl" : "shadow-lg",
        ].join(" ")}
      >
        {/* LOGO (voltar pra home) */}
        <Link href="/" aria-label="Voltar para a home" className="flex items-center" title="Home">
          <Image
            src="/logo.svg"
            alt="Cortezzi"
            width={36}
            height={36}
            className="w-8 h-8 sm:w-9 sm:h-9 opacity-90 hover:opacity-100 transition"
            priority
          />
        </Link>

        <div className="w-px h-5 bg-neutral-800/70 mx-1 sm:mx-2" />

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
