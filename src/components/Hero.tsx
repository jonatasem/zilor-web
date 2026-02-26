"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zilor-green text-white">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-85"
        >
          <source src="https://www.dropbox.com/scl/fi/j7khnbujhtddzbtk96s75/intro-zilor.mp4?rlkey=j268zusc6vsc8bp0puj799l7i&st=jf2ew555&raw=1" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        
        {/* Overlay opcional para garantir leitura do texto */}
        <div className="absolute inset-0 bg-black/20 z-0" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg leading-tight"
        >
          Energia que transforma, <br/> Alimentos que nutrem.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95"
        >
          Líder no setor sucroenergético, inovando para um futuro mais sustentável.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10"
        >
          <Link 
            href="#sobre" 
            className="inline-block bg-zilor-amber text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
          >
            Saiba Mais
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
