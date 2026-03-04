
"use client"
import { motion } from "framer-motion";
import { TrendingUp, Globe, Factory, BarChart3 } from "lucide-react";

export default function EconomicSection() {
  return (
    <section className="py-24 bg-[#1b4332] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[#f59e0b] font-bold uppercase tracking-widest text-sm">Responsabilidade Econômica</span>
            <h2 className="text-5xl font-black tracking-tighter uppercase leading-[1.1]">Compromisso com o Crescimento Perene</h2>
            <p className="text-white/70 text-lg">
              Com capacidade de moagem de 12 milhões de toneladas por ano, somos um dos players mais importantes do setor, focados na diversificação de portfólio e valor agregado.
            </p>
            
            <div className="flex gap-10">
              <div>
                <span className="text-3xl font-black text-[#f59e0b]">60+</span>
                <p className="text-xs uppercase font-bold text-white/50 tracking-widest">Países Atendidos</p>
              </div>
              <div>
                <span className="text-3xl font-black text-[#f59e0b]">3</span>
                <p className="text-xs uppercase font-bold text-white/50 tracking-widest">Unidades Industriais</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <Globe className="text-[#f59e0b] mb-4" />
              <h4 className="font-bold mb-2">Biorigin</h4>
              <p className="text-sm text-white/60">Multinacional de biotecnologia com ingredientes 100% naturais para nutrição humana e animal.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 sm:mt-8">
              <Factory className="text-[#f59e0b] mb-4" />
              <h4 className="font-bold mb-2">Copersucar</h4>
              <p className="text-sm text-white/60">Somos a unidade mais representativa da maior exportadora de açúcar e etanol do país.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}