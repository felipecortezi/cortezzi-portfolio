import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cortezzi Creative",
  description: "Vídeo que dá movimento à sua marca",
  icons: {
    icon: "/flavicon.png",           // <-- certifique-se do nome do arquivo
    shortcut: "/flavicon.png",
    apple: "/apple-touch-icon.png",
  },
  // themeColor: "#0a0a0a", // (opcional) barra do navegador no mobile escura
  // metadataBase: new URL("https://www.cortezzi.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Força dark sempre
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
                    bg-neutral-950 text-neutral-100`}
      >
        {children}
      </body>
    </html>
  );
}
