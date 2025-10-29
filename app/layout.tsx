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
    icon: "/flavicon.png",            // ícone da aba
    shortcut: "/flavicon.png",        // fallback para alguns navegadores
    apple: "/apple-touch-icon.png",  // ícone quando “Adicionar à tela inicial” no iPhone
  },
  // (opcional) já que seu domínio está pronto:
  // metadataBase: new URL("https://www.cortezzi.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
