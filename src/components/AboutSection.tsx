"use client"
import { motion } from "framer-motion";
import { Atom, Leaf, Factory, Recycle, ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  isOffset?: boolean; // Para criar o efeito de escada
}

const Card = ({ icon: Icon, title, description, delay, isOffset }: CardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
    className={`bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group
                ${isOffset ? 'md:mt-12' : ''}`}
  >
    <div className="w-14 h-14 rounded-2xl bg-[#f8f9fa] flex items-center justify-center mb-6 
                    group-hover:bg-[#f59e0b] group-hover:rotate-6 transition-all duration-500">
      <Icon className="w-7 h-7 text-[#1b4332] group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-black text-[#1b4332] mb-3 tracking-tight uppercase">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

export default function AboutSection() {
  return (
    <section id="sobre" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Lado Esquerdo: Conteúdo */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="relative"
        >
          {/* Badge decorativa */}
          <span className="text-[#f59e0b] font-black uppercase tracking-[0.3em] text-xs mb-4 block">
            Nossa Essência
          </span>
          
          <h2 className="text-5xl md:text-6xl font-black text-[#1b4332] mb-8 tracking-tighter leading-[1.1]">
            Transformando <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b4332] to-[#2d6a4f]">
              Biomassa em Futuro.
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
            A Zilor é movida pela inovação e pelo compromisso com o planeta. 
            Nossa missão é produzir energia limpa e alimentos que nutrem o mundo, 
            respeitando o ciclo natural da vida.
          </p>

          <Link 
            href="/museu" // Roteamento para a página do Museu
            className="group inline-flex items-center gap-4 bg-[#1b4332] text-white px-10 py-5 rounded-full font-bold hover:bg-[#2d6a4f] transition-all shadow-lg shadow-[#1b4332]/20"
          >
            Conhecer Nossa História
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>

          {/* Elemento decorativo de fundo */}
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#f59e0b]/5 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* Lado Direito: Grid de Cards com Offset */}
        <div className="grid sm:grid-cols-2 gap-6 relative">
          <Card 
            icon={Factory} 
            title="Inovação" 
            description="Tecnologia de ponta para extrair o máximo valor da cana-de-açúcar." 
            delay={0.1} 
          />
          <Card 
            icon={Atom} 
            title="Energia" 
            description="Bioeletricidade limpa para abastecer milhares de lares e indústrias." 
            delay={0.2} 
            isOffset // Este card fica mais baixo
          />
          <Card 
            icon={Recycle} 
            title="Circular" 
            description="Aproveitamento integral dos resíduos, fechando o ciclo produtivo." 
            delay={0.3} 
          />
          <Card 
            icon={Leaf} 
            title="Sustentabilidade" 
            description="Cuidado rigoroso com o solo e com a biodiversidade em nossas regiões." 
            delay={0.4} 
            isOffset // Este card fica mais baixo
          />
        </div>

      </div>
    </section>
  );
}