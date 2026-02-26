"use client"
import { motion } from "framer-motion";
import { Atom, Leaf, Factory, Recycle } from "lucide-react";
import Link from "next/link";

const Card = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
  >
    <div className="w-16 h-16 rounded-full bg-[#1b4332]/10 flex items-center justify-center mb-6 group-hover:bg-[#1b4332] transition-colors">
      <Icon className="w-8 h-8 text-[#1b4332] group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-black text-[#1b4332] mb-6 tracking-tighter">Missão e Valores</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Transformar biomassa em energia limpa e alimentos de qualidade, promovendo um desenvolvimento sustentável para as futuras gerações.
          </p>
          <Link href="#" className="inline-block bg-[#1b4332] text-white px-10 py-4 rounded-full font-bold hover:bg-[#2d6a4f] transition-transform hover:scale-105">
            Nossa História
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Card icon={Factory} title="Inovação" description="Processos inteligentes e modernos." delay={0.1} />
          <Card icon={Atom} title="Energia" description="Fontes limpas e renováveis." delay={0.2} />
          <Card icon={Recycle} title="Circular" description="Resíduo zero na produção." delay={0.3} />
          <Card icon={Leaf} title="Natureza" description="Respeito total ao meio ambiente." delay={0.4} />
        </div>
      </div>
    </section>
  );
}
