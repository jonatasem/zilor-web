"use client"
import { motion } from "framer-motion";
import { GraduationCap, Heart, Users, Star } from "lucide-react";

export default function SocialResponsibility() {
  return (
    <section className="py-24 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#f59e0b] font-bold uppercase tracking-widest text-sm italic">Cidadania e Educação</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1b4332] mt-4 tracking-tighter">INVESTIMENTO SOCIAL PRIVADO (ISP)</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
              <GraduationCap className="text-[#1b4332] mb-6" size={40} />
              <h3 className="text-2xl font-bold text-[#1b4332] mb-4">Programa Aprender Sempre</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Desde 2001, alavancamos o desenvolvimento educacional de jovens entre 7 e 17 anos em Lençóis Paulista, Macatuba e Quatá. Focamos em competências socioemocionais, cinema e sustentabilidade.
              </p>
              <div className="flex gap-4">
                <span className="bg-[#1b4332]/5 px-4 py-2 rounded-full text-[#1b4332] text-xs font-bold uppercase">Tecnologia</span>
                <span className="bg-[#1b4332]/5 px-4 py-2 rounded-full text-[#1b4332] text-xs font-bold uppercase">Cultura</span>
                <span className="bg-[#1b4332]/5 px-4 py-2 rounded-full text-[#1b4332] text-xs font-bold uppercase">Esporte</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#f59e0b] p-10 rounded-[3rem] text-white">
              <Heart className="mb-4" />
              <h4 className="text-xl font-bold mb-2 tracking-tight italic">Projeto Eu Amo Chiquinho</h4>
              <p className="text-sm text-white/80">Inclusão digital em Quatá com doação de 65 aparelhos e capacitação docente.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 flex flex-col justify-between">
              <h4 className="font-bold text-[#1b4332] uppercase text-xs tracking-widest mb-4">Incentivos Fiscais</h4>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>• Lei Rouanet / Cultura</li>
                <li>• Fundo da Criança e do Idoso</li>
                <li>• Lei do Desporto</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


