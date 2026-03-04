"use client"
import EconomicSection from "@/components/EconomicSection";
import Footer from "@/components/Footer";
import SocialResponsibility from "@/components/SocialResponsibility";
import SustainabilityReport from "@/components/SustainabilityReport";
import { motion } from "framer-motion";
import { Leaf, TrendingUp, Users, FileText, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    title: "Ambiental",
    description: "Preservação da biodiversidade, créditos de carbono e gestão de resíduos.",
    icon: Leaf,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    id: "ambiental"
  },
  {
    title: "Econômica",
    description: "Crescimento perene, eficiência industrial e presença global com a Biorigin.",
    icon: TrendingUp,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    id: "economica"
  },
  {
    title: "Social",
    description: "Investimento nas comunidades, educação e o Programa Aprender Sempre.",
    icon: Users,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    id: "social"
  },
  {
    title: "Relatórios",
    description: "Transparência total e indicadores ESG (GRI, SASB e TCFD).",
    icon: FileText,
    color: "bg-gray-100",
    iconColor: "text-gray-600",
    id: "relatorios"
  }
];

export default function SustainabilityMenu() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
        <section id="sustentabilidade" className="py-20 bg-white">
            {/* Botão Flutuante de Voltar */}
            <Link href="/" className="fixed top-8 left-8 z-50 flex items-center gap-2 bg-[white] text-[#1b4332] px-5 py-2.5 rounded-full shadow-xl font-bold group hover:bg-[#1b4332] hover:text-white transition-all ">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Voltar ao Início
            </Link>
            <div className="max-w-7xl mx-auto px-6">
                {/* Cabeçalho do Menu */}
                <div className="text-center mb-16">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-[#1b4332] uppercase tracking-tighter"
                >
                    Sustentabilidade <span className="text-[#f59e0b]">Zilor</span>
                </motion.h1>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto italic font-light">
                    Explore nossos compromissos e resultados através dos quatro pilares fundamentais.
                </p>
                </div>

                {/* Grade de Navegação */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {menuItems.map((item, index) => (
                    <motion.button
                    key={index}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group text-left p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#f59e0b]/30 transition-all flex flex-col justify-between h-full"
                    >
                    <div>
                        <div className={`w-14 h-14 rounded-2xl ${item.color} ${item.iconColor} flex items-center justify-center mb-6 transition-colors group-hover:bg-[#1b4332] group-hover:text-white`}>
                        <item.icon size={28} />
                        </div>
                        <h3 className="text-xl font-black text-[#1b4332] mb-3 uppercase tracking-tight">
                        {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                        {item.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-[#f59e0b] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                        Ver detalhes <ArrowRight size={14} />
                    </div>
                    </motion.button>
                ))}
            </div>
        </div>
        <SocialResponsibility />
        <EconomicSection />
        <SustainabilityReport />
        </section>
        <Footer />
    </>
    
  );
}