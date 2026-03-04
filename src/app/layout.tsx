import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Zilor | Energia que transforma, Alimentos que nutrem",
  description: "Líder no setor sucroenergético, inovando para um futuro sustentável.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
