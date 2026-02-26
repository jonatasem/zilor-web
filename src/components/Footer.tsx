import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1b4332] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        
        {/* Logo e Info Legal */}
        <div className="space-y-6">
          <Image src="/images/logo.svg" alt="Zilor" width={120} height={45} className="brightness-0 invert" />
          <div className="text-sm text-white/60 space-y-1">
            <p className="font-bold text-white">Açucareira Quatá S.A</p>
            <p>CNPJ: 60.855.574/0001-73</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#f59e0b] transition-colors"><Linkedin size={20} /></Link>
            <Link href="#" className="hover:text-[#f59e0b] transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-[#f59e0b] transition-colors"><Youtube size={20} /></Link>
          </div>
        </div>

        {/* Unidades Corporativas */}
        <div>
          <h4 className="font-bold mb-6 text-[#f59e0b] uppercase text-xs tracking-widest">Escritórios</h4>
          <div className="space-y-4 text-sm text-white/70">
            <div>
              <p className="text-white font-medium">São Paulo</p>
              <p>Av. Pres. Juscelino Kubitschek, 1400</p>
              <p>Vila Olímpia - SP</p>
            </div>
            <div>
              <p className="text-white font-medium">Lençóis Paulista</p>
              <p>Rua 15 de Novembro, 865</p>
              <p>Centro - SP</p>
            </div>
          </div>
        </div>

        {/* Links Rápidos */}
        <div>
          <h4 className="font-bold mb-6 text-[#f59e0b] uppercase text-xs tracking-widest">Navegação</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#sobre" className="hover:text-[#f59e0b] transition-colors">Sobre a Zilor</Link></li>
            <li><Link href="#unidades" className="hover:text-[#f59e0b] transition-colors">Unidades</Link></li>
            <li><Link href="#sustentabilidade" className="hover:text-[#f59e0b] transition-colors">Sustentabilidade</Link></li>
            <li><Link href="#carreiras" className="hover:text-[#f59e0b] transition-colors">Trabalhe Conosco</Link></li>
          </ul>
        </div>

        {/* Suporte */}
        <div>
          <h4 className="font-bold mb-6 text-[#f59e0b] uppercase text-xs tracking-widest">Privacidade</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-[#f59e0b] transition-colors">Política de Privacidade</Link></li>
            <li><Link href="#" className="hover:text-[#f59e0b] transition-colors">Termos de Uso</Link></li>
            <li><Link href="#" className="hover:text-[#f59e0b] transition-colors">Canal de Ética</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-medium">
        <p>© {currentYear} Zilor. Todos os direitos reservados.</p>
        <p>Jonatas Elieser Moreira</p>
      </div>
    </footer>
  );
}