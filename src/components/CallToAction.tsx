"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section id="carreiras" className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#1b4332] p-12 md:p-20 rounded-[3rem] shadow-2xl text-center relative overflow-hidden"
        >
          {/* Efeito visual de fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
          
          <Briefcase className="w-16 h-16 text-[#f59e0b] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Faça Parte do Nosso Time!</h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light">
            A Zilor busca talentos que queiram inovar e construir um futuro sustentável conosco. Venha crescer com a gente.
          </p>
          <Link 
            href="#" 
            className="group inline-flex items-center gap-3 bg-[#f59e0b] text-white text-lg font-bold px-12 py-5 rounded-full hover:bg-yellow-500 transition-all hover:scale-105"
          >
            Ver Vagas Abertas
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}