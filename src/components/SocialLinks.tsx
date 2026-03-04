"use client"
import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin, Share2 } from "lucide-react";

const socialMedias = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/zilor",
    color: "hover:bg-[#0077b5]",
    label: "Carreiras e Negócios"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/zilorenergiaealimentos",
    color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    label: "Nosso Dia a Dia"
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/channel/UC7JTltypsm2C9yqOelimirA",
    color: "hover:bg-[#ff0000]",
    label: "Vídeos e Safra"
  }
  /*
  {
    name: "Telegram",
    icon: Send,
    url: "#", 
    color: "hover:bg-[#229ED9]",
    label: "Informativos"
  }
  */
];

export default function SocialLinks() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Texto de Chamada */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 text-[#f59e0b] mb-2 justify-center md:justify-start">
              <Share2 size={20} />
              <span className="font-black uppercase tracking-widest text-xs">Conecte-se</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1b4332] tracking-tighter uppercase">
              Acompanhe a Zilor <br /> nas redes sociais
            </h2>
          </div>

          {/* Grid de Ícones */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
            {socialMedias.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}
                className={`group relative flex flex-col items-center justify-center p-6 bg-white rounded-[2rem] shadow-sm border border-gray-100 transition-all duration-300 ${social.color}`}
              >
                <div className="text-[#1b4332] group-hover:text-white transition-colors duration-300">
                  <social.icon size={32} strokeWidth={1.5} />
                </div>
                <span className="absolute -bottom-12 scale-0 group-hover:scale-100 bg-[#1b4332] text-white text-[10px] font-bold py-2 px-4 rounded-full transition-all whitespace-nowrap shadow-xl z-10">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}