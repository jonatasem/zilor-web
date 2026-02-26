"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, ArrowRight, Sparkles } from "lucide-react";

export default function CallToAction() {
  return (
    <section id="carreiras" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Flex-col para mobile, flex-row para desktop
          className="relative bg-[#1b4332] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-20 overflow-hidden shadow-[0_20px_50px_rgba(27,67,50,0.3)] flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Elementos Decorativos de Background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2d6a4f] rounded-full blur-[100px] opacity-40 -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />

          {/* Lado Esquerdo: Conteúdo */}
          <div className="relative z-10 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 transition-all hover:bg-white/20">
              <Sparkles size={16} className="text-[#f59e0b]" />
              <span className="text-white text-xs uppercase tracking-[0.2em] font-bold">Carreiras Zilor</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Construa o futuro <br className="hidden lg:block" /> 
              com a gente.
            </h2>
            
            <p className="text-base md:text-xl text-white/70 max-w-xl font-light leading-relaxed">
              Buscamos talentos que queiram inovar no setor sucroenergético e construir soluções sustentáveis para o mundo.
            </p>
          </div>

          {/* Lado Direito: Ação */}
          <div className="relative z-10 w-full md:w-auto">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full"
            >
              <Link 
                href="/carreiras" 
                className="group flex items-center justify-center gap-4 bg-[#f59e0b] hover:bg-[#ffb02e] text-white px-10 py-6 rounded-full text-lg font-bold shadow-2xl transition-all w-full md:w-max whitespace-nowrap"
              >
                Ver vagas abertas
                <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-all">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
            
            {/* Tag auxiliar abaixo do botão */}
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-4 text-center">
              + de 3.500 colaboradores
            </p>
          </div>

          {/* Ícone de background flutuante */}
          <Briefcase className="absolute -bottom-10 -right-10 w-48 h-48 text-white/[0.03] -rotate-12 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}