"use client"
import { motion } from "framer-motion";
import { Leaf, Recycle, Wind, Bird, TreeDeciduous } from "lucide-react";

export default function EnvironmentalSection() {
  const highlights = [
    { icon: Wind, title: "Crédito de Carbono", text: "Primeira do setor com projeto de Mecanismo de Desenvolvimento Limpo (Protocolo de Kyoto)." },
    { icon: Recycle, title: "Resíduos", text: "Gerenciamento completo: da separação industrial à destinação licenciada de materiais perigosos." },
    { icon: Bird, title: "Fauna e Flora", text: "Mais de 7 mil hectares preservados e monitoramento de 242 espécies, incluindo onças-pardas." },
    { icon: TreeDeciduous, title: "Cinturão Verde", text: "Reflorestamento de 252 hectares com plantio de 420 mil mudas nativas." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center mb-16">
          <div className="flex-1">
            <span className="text-[#f59e0b] font-bold uppercase tracking-widest text-sm">Responsabilidade Ambiental</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1b4332] mt-4 mb-6 tracking-tighter">PRESERVANDO O FUTURO HOJE</h2>
            <p className="text-gray-600 leading-relaxed">
              Praticamos a gestão proativa para a proteção ambiental, fundamental para garantir qualidade de vida às comunidades onde atuamos. Através de fontes renováveis, estimulamos a educação ambiental e a economia verde.
            </p>
          </div>
          <div className="flex-1 bg-[#1b4332] rounded-[3rem] p-10 text-white relative overflow-hidden">
            <Leaf className="absolute -right-10 -top-10 w-40 h-40 text-white/5 rotate-12" />
            <h4 className="text-2xl font-bold mb-4">Recomposição Rio Lençóis</h4>
            <p className="text-white/70 text-sm">Mais de 725 mil mudas de árvores nativas plantadas entre 2010 e 2019, o equivalente a 609 campos de futebol.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-gray-100 bg-[#f8f9fa] hover:bg-white hover:shadow-xl transition-all"
            >
              <item.icon className="text-[#f59e0b] mb-4" size={32} />
              <h5 className="font-bold text-[#1b4332] mb-2 uppercase text-sm">{item.title}</h5>
              <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
