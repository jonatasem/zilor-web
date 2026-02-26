import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Coluna 1: Logo e Descrição */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image src="/logo.svg" alt="Zilor Logo" width={32} height={32} className="filter invert" /> {/* Inverte a cor do SVG para branco */}
            <span className="text-2xl font-bold text-white">Zilor</span>
          </Link>
          <p className="text-sm">
            Líder no setor sucroenergético, impulsionando a sustentabilidade e a inovação para o futuro.
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
          <ul className="space-y-2">
            <li><Link href="#sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
            <li><Link href="#unidades" className="hover:text-white transition-colors">Nossas Unidades</Link></li>
            <li><Link href="#sustentabilidade" className="hover:text-white transition-colors">Sustentabilidade</Link></li>
            <li><Link href="#carreiras" className="hover:text-white transition-colors">Trabalhe Conosco</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
          <p className="text-sm">Av. Brasil, 1234 - Cidade - SP</p>
          <p className="text-sm">CEP: 12345-678</p>
          <p className="text-sm">Telefone: (11) 98765-4321</p>
          <p className="text-sm">Email: contato@zilor.com.br</p>
        </div>

        {/* Coluna 4: Redes Sociais */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Redes Sociais</h3>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook size={24} /></Link>
            <Link href="#" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram size={24} /></Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin size={24} /></Link>
            <Link href="#" aria-label="YouTube" className="hover:text-white transition-colors"><Youtube size={24} /></Link>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Zilor. Todos os direitos reservados.
      </div>
    </footer>
  );
}