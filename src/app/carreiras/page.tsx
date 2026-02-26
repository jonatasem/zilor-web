"use client"
import { motion } from "framer-motion";
import { Users, GraduationCap, Heart, ExternalLink, Search, UserPlus, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CarreirasPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Botão de Voltar */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-[#1b4332] font-bold hover:bg-[#1b4332] hover:text-white transition-all">
          <ArrowLeft size={20} /> Voltar ao Site
        </Link>
      </div>

      <section className="relative h-[50vh] flex items-center justify-center bg-[#1b4332]">
        <Image 
          src="/images/equipe-zilor.jpg" 
          alt="Time Zilor" fill className="object-cover opacity-30 grayscale"
        />
        <div className="relative z-10 text-center text-white">
          <span className="text-[#f59e0b] font-black uppercase tracking-widest text-sm block mb-2">Trabalhe Conosco</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">#VemPraZilor</h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-20 pb-20">
        {/* Links Principais */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <a href="https://zilor.senior.com.br" target="_blank" className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 flex flex-col items-center text-center group">
            <UserPlus size={48} className="text-[#f59e0b] mb-6" />
            <h3 className="text-2xl font-black text-[#1b4332] mb-4">Candidato Externo</h3>
            <p className="text-gray-500 mb-8">Faça parte de uma das maiores empresas do setor. Cadastre seu currículo.</p>
            <span className="w-full bg-[#1b4332] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:scale-105 transition-transform">
              Quero me candidatar <ExternalLink size={18}/>
            </span>
          </a>

          <a href="#" className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 flex flex-col items-center text-center group">
            <Search size={48} className="text-[#1b4332] mb-6" />
            <h3 className="text-2xl font-black text-[#1b4332] mb-4">Recrutamento Interno</h3>
            <p className="text-gray-500 mb-8">Já é do time? Explore novas oportunidades dentro das nossas unidades.</p>
            <span className="w-full border-2 border-[#1b4332] text-[#1b4332] py-5 rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:bg-[#1b4332] group-hover:text-white transition-all">
              Ver vagas internas <ExternalLink size={18}/>
            </span>
          </a>
        </div>

        {/* Texto Institucional (O que você mandou) */}
        <div className="grid lg:grid-cols-3 gap-12 border-t pt-20">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-4xl font-black text-[#1b4332] uppercase tracking-tighter">Nossa Gente</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A história de mais de 79 anos da Zilor foi construída pelas pessoas que ao longo da nossa trajetória compartilharam dos nossos Valores e cresceram junto com a gente! Somos um time que conta com mais de 4,4 mil colaboradores.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#f8f9fa] p-6 rounded-2xl">
                <Users className="text-[#f59e0b] mb-4" />
                <h4 className="font-bold text-[#1b4332] mb-2">Diversidade</h4>
                <p className="text-sm text-gray-500 italic">"A diversidade é uma alavanca para sermos mais inovadores."</p>
              </div>
              <div className="bg-[#f8f9fa] p-6 rounded-2xl">
                <GraduationCap className="text-[#1b4332] mb-4" />
                <h4 className="font-bold text-[#1b4332] mb-2">Desenvolvimento</h4>
                <p className="text-sm text-gray-500">Programas focados na evolução técnica e comportamental.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1b4332] rounded-[2.5rem] p-10 text-white flex flex-col justify-between">
            <Heart size={40} className="text-[#f59e0b]" />
            <div>
              <h4 className="text-2xl font-bold mb-4 leading-tight">Engajamento e Propósito</h4>
              <p className="text-white/70 text-sm">Buscamos profissionais que queiram continuar escrevendo nossa história de empreendedorismo.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}