"use client"
import { motion } from "framer-motion";
import { FileText, Download, CheckCircle2, ChevronRight } from "lucide-react";

export default function SustainabilityReport() {
  const edicoes = ["2022/2023", "2020/2022", "2018/2020", "2016/2018"];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#f8f9fa] rounded-[4rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col lg:flex-row">
          
          <div className="lg:w-2/3 p-12 md:p-20">
            <div className="flex items-center gap-3 text-[#1b4332] mb-6">
              <FileText />
              <span className="font-black uppercase tracking-widest text-xs">Relatório Anual 2023/2024</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#1b4332] mb-8 tracking-tighter uppercase">Transparência <br /> e Governança</h2>
            
            <p className="text-gray-600 mb-10 max-w-xl">
              Nossa 10ª edição reporta 10 temas materiais alinhados à Agenda 2030 da ONU (ODS), seguindo normas globais GRI, SASB e TCFD.
            </p>

            <a href="#" className="inline-flex items-center gap-4 bg-[#1b4332] text-white px-10 py-5 rounded-full font-bold hover:bg-[#2d6a4f] transition-all group">
              Baixar Relatório Completo (PDF)
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>

            <div className="mt-12 flex flex-wrap gap-8 grayscale opacity-50">
              <span className="font-black text-sm tracking-tighter">GRI 2021</span>
              <span className="font-black text-sm tracking-tighter">SASB INDEX</span>
              <span className="font-black text-sm tracking-tighter">TCFD ALIGNED</span>
              <span className="font-black text-sm tracking-tighter">ONU ODS</span>
            </div>
          </div>

          <div className="lg:w-1/3 bg-[#1b4332] p-12 text-white flex flex-col justify-center">
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-[#f59e0b]">Edições Anteriores</h4>
            <div className="space-y-4">
              {edicoes.map((edicao, i) => (
                <button key={i} className="flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm group">
                  Safra {edicao}
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform text-[#f59e0b]" />
                </button>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
