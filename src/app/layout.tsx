import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zilor | Energia que transforma, Alimentos que nutrem",
  description: "Líder no setor sucroenergético, inovando para um futuro sustentável.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans}`}>
        {children}
      </body>
    </html>
  );
}
