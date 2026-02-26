"use client"
import Image from "next/image";

export default function MapSection() {
  return (
    <section id="unidades" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-zilor-green mb-4">Nossa Presença Nacional</h2>
        <p className="text-lg text-gray-700 mb-16">Conheça as 4 Unidades Produtivas que impulsionam a Zilor.</p>
        
        <div className="relative aspect-video bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
          {/* Placeholder para o Mapa Real (SVG ou imagem de fundo detalhada) */}
          <Image 
            src="/images/map-chart.png" 
            alt="Mapa do Brasil com destaque para São Paulo" 
            fill 
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
