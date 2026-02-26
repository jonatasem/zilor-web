"use client"

import { motion } from "framer-motion";
import { ArrowLeft, History, Users, TreePine, Landmark, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const timeline = [
  {
    ano: "1904",
    titulo: "A União Zillo-Lorenzetti",
    desc: "Casamento de Giuseppe Zillo e Angela Lorenzetti, unindo duas linhagens de imigrantes italianos.",
    icon: Users
  },
  {
    ano: "1939",
    titulo: "O Início da Sociedade",
    desc: "Primeira sociedade formal entre as famílias para transformar um engenho em usina de açúcar.",
    icon: History
  },
  {
    ano: "1946",
    titulo: "A Primeira Safra",
    desc: "Origem da Usina São José em Macatuba, após a compra da Fazenda Patos.",
    icon: Landmark
  },
  {
    ano: "1947",
    titulo: "Expansão Barra Grande",
    desc: "A Usina Barra Grande entra em operação, consolidando a força da sociedade.",
    icon: TreePine
  },
  {
    ano: "1981",
    titulo: "Unidade Quatá",
    desc: "Aquisição da terceira usina, expandindo a presença no interior paulista.",
    icon: History
  }
];

const fundadores = [
  "José Antônio Lorenzetti", "Pedro Natálio Lorenzetti", "Comendador Antonio Lorenzetti Filho",
  "Juliano Lorenzetti", "Paulo Zillo", "Poério Zillo", "Nardy Zillo", "Antônio Avelino Lorenzetti"
];

export default function MuseuPage() {
  return (
    <main className="bg-[#fcfcfc] min-h-screen pb-20">
      {/* Botão Flutuante de Voltar */}
      <Link href="/" className="fixed top-8 left-8 z-50 flex items-center gap-2 bg-[#1b4332] text-white px-5 py-2.5 rounded-full shadow-xl hover:scale-105 transition-all font-bold group">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Voltar ao Início
      </Link>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#1b4332] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
         
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fcfcfc]" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase"
          >
            Museu <br /> <span className="text-[#f59e0b]">Virtual</span>
          </motion.h1>
          <p className="text-white/80 mt-6 max-w-2xl mx-auto text-lg md:text-xl font-light italic">
            "Transformando sonhos em energia há mais de sete décadas."
          </p>
        </div>
      </section>

      {/* Seção de História das Famílias */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 relative z-20 grid md:grid-cols-2 gap-8">
        {[
          { fam: "Zillo", cor: "#1b4332", desc: "Pequenos comerciantes italianos que chegaram em 1896 com tradição na Rocinha." },
          { fam: "Lorenzetti", cor: "#f59e0b", desc: "Pequenos agricultores com forte vocação agrícola e comercial desde o final do séc 19." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100"
          >
            {/* CORREÇÃO AQUI: Aspas adicionadas na className */}
            <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-4" style={{ color: item.cor }}>História da Família</h3>
            <h2 className="text-4xl font-black text-[#1b4332] mb-6 uppercase">Família {item.fam}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{item.desc}</p>
            <button className="flex items-center gap-2 font-bold text-[#1b4332] hover:underline">
              Saiba mais sobre essa história <ArrowLeft size={16} className="rotate-180" />
            </button>
          </motion.div>
        ))}
      </section>

      {/* Timeline Interativa */}
      <section className="py-32 max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-[#1b4332] uppercase tracking-tighter">Linha do Tempo</h2>
          <div className="h-1.5 w-24 bg-[#f59e0b] mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 md:left-1/2">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              /* CORREÇÃO AQUI: Uso de crases `` e ${} para a lógica de classes */
              className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:-left-[50%]' : 'md:pl-12 md:left-[0%]'}`}
            >
              <div className="absolute top-0 w-10 h-10 bg-[#1b4332] rounded-full -left-[21px] md:left-auto md:right-[-20px] flex items-center justify-center text-[#f59e0b] shadow-xl border-4 border-white">
                <item.icon size={16} />
              </div>
              <span className="text-3xl font-black text-[#f59e0b] block mb-2">{item.ano}</span>
              <h4 className="text-xl font-bold text-[#1b4332] mb-3 uppercase">{item.titulo}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Galeria de Fundadores */}
      <section className="bg-[#1b4332] py-24 px-6 rounded-[4rem] mx-4 md:mx-10 shadow-3xl text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter">Nossos Fundadores</h2>
              <p className="text-white/60 mt-4 max-w-xl">Os pioneiros que transformaram um pequeno engenho em uma das maiores potências agroindustriais do Brasil.</p>
            </div>
            <Quote size={80} className="text-[#f59e0b] opacity-20" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {fundadores.map((nome, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-[#f59e0b] rounded-full mx-auto mb-4 flex items-center justify-center text-[#1b4332] font-black text-xl">
                  {nome.charAt(0)}
                </div>
                <h5 className="font-bold text-sm uppercase tracking-wide">{nome}</h5>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}