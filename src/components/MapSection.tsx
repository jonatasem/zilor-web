"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Printer } from "lucide-react";

// 1. Definição dos Dados
const corporativas = [
  {
    nome: "Escritório São Paulo",
    imagem: "escri-saopaulo.jpg",
    endereco: "Av. Pres. Juscelino Kubitschek, 1400 – Vila Olímpia, São Paulo – SP, 04543-000",
    tel: "+55 (11) 2126-6200",
    fax: "+55 (14) 3269-9210"
  },
  {
    nome: "Escritório Lençóis Paulista",
    imagem: "escri-lencois.jpg", // Certifique-se que este nome existe na pasta images
    endereco: "Rua 15 de Novembro, 865 – Centro, Lençóis Paulista – SP, 18680-900",
    tel: "+55 (14) 3269-9000",
    fax: "+55 (14) 3269-9210"
  }
];

const agroindustriais = [
  {
    nome: "Unidade Barra Grande",
    imagem: "barra grande.png",
    endereco: "Rodovia Marechal Rondon, Km 289 – Lençóis Paulista – SP, 18680-900",
    tel: "+55 (14) 3269-9000",
    caixa: "Caixa Postal 356"
  },
  {
    nome: "Unidade São José",
    imagem: "sao jose.png",
    endereco: "Usina São José, s/n – Macatuba – SP, 17290-000",
    tel: "+55 (14) 3269-9000",
    caixa: "Caixa Postal 25"
  },
  {
    nome: "Unidade Quatá",
    imagem: "quata.png",
    endereco: "Fazenda Quatá, s/n – Quatá – SP, 19780-000",
    tel: "+55 (18) 3366-9800",
    caixa: "Caixa Postal 21"
  },
  {
    nome: "Unidade Salto Botelho",
    imagem: "salto.png",
    endereco: "P. Milton Lentini – Estr. Vicinal – Km 18, Lucélia – SP, 17780-000",
    tel: "+55 (18) 3551-9630",
  }
];

export default function MapSection() {
  return (
    <section id="unidades" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SEÇÃO CORPORATIVA */}
        <article className="mb-20">
          <h1 className="text-3xl font-black text-[#1b4332] mb-10 uppercase tracking-tighter border-b-2 border-[#f59e0b] pb-2 inline-block">
            Unidades Corporativas
          </h1>
          
          <div className="grid md:grid-cols-2 gap-10">
            {corporativas.map((unidade, index) => (
              <div key={index} className="group">
                <h2 className="text-xl font-bold text-[#1b4332] mb-4">{unidade.nome}</h2>
                <div className="flex flex-col md:flex-row gap-6 bg-[#f8f9fa] p-6 rounded-3xl border border-gray-100 transition-all hover:shadow-lg">
                  <div className="relative w-full md:w-48 h-48 shrink-0 rounded-2xl overflow-hidden">
                    <Image 
                      src={`/images/${unidade.imagem}`} 
                      alt={unidade.nome} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-2 text-gray-600">
                      <MapPin size={18} className="text-[#f59e0b] shrink-0" />
                      <p className="text-sm">{unidade.endereco}</p>
                    </div>
                    <div className="flex gap-2 text-gray-600">
                      <Phone size={18} className="text-[#1b4332] shrink-0" />
                      <p className="text-sm font-semibold">{unidade.tel}</p>
                    </div>
                    <div className="flex gap-2 text-gray-500">
                      <Printer size={18} className="shrink-0" />
                      <p className="text-xs">FAX: {unidade.fax}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* SEÇÃO AGROINDUSTRIAL */}
        <article>
          <h1 className="text-3xl font-black text-[#1b4332] mb-10 uppercase tracking-tighter border-b-2 border-[#f59e0b] pb-2 inline-block">
            Unidades Agroindustriais
          </h1>
          
          <div className="grid md:grid-cols-2 gap-10">
            {agroindustriais.map((unidade, index) => (
              <div key={index} className="group">
                <h2 className="text-xl font-bold text-[#1b4332] mb-4">{unidade.nome}</h2>
                <div className="flex flex-col md:flex-row gap-6 bg-[#f8f9fa] p-6 rounded-3xl border border-gray-100 transition-all hover:shadow-lg">
                  <div className="relative w-full md:w-48 h-48 shrink-0 rounded-2xl overflow-hidden">
                    <Image 
                      src={`/images/${unidade.imagem}`} 
                      alt={unidade.nome} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-2 text-gray-600">
                      <MapPin size={18} className="text-[#f59e0b] shrink-0" />
                      <p className="text-sm">{unidade.endereco}</p>
                    </div>
                    {unidade.caixa && (
                       <p className="text-xs font-bold text-[#1b4332] bg-white px-3 py-1 rounded-full w-fit">
                         {unidade.caixa}
                       </p>
                    )}
                    <div className="flex gap-2 text-gray-600 pt-2">
                      <Phone size={18} className="text-[#1b4332] shrink-0" />
                      <p className="text-sm font-semibold">{unidade.tel}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

      </div>
    </section>
  );
}