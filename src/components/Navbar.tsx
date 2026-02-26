"use client"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, Info, MapPin, Leaf, Briefcase } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links da Navbar para evitar repetição de código
  const navLinks = [
    { name: "Sobre", href: "#sobre", icon: Info },
    { name: "Unidades", href: "#unidades", icon: MapPin },
    { name: "Sustentabilidade", href: "#sustentabilidade", icon: Leaf },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }}
        className={cn(
          "fixed w-full z-[60] flex justify-between items-center px-6 md:px-12 transition-all duration-300",
          scrolled || isOpen ? "bg-white py-4 shadow-md" : "bg-transparent py-6"
        )}
      >
        {/* LOGO */}
        <Link href="/" className="relative z-[70]">
          <Image 
            src="/images/logo.svg" 
            alt="Zilor Logo" 
            width={110} 
            height={40} 
            className={cn(
              "transition-all duration-300", 
              (!scrolled && !isOpen) && "brightness-0 invert"
            )} 
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className={cn(
          "hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em]",
          scrolled ? "text-gray-800" : "text-white"
        )}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[#f59e0b] transition-colors">
              {link.name}
            </Link>
          ))}
          <Link 
            href="#carreiras" 
            className="bg-[#1b4332] text-white px-6 py-2.5 rounded-full hover:bg-[#2d6a4f] transition shadow-lg"
          >
            Trabalhe Conosco
          </Link>
        </div>

        {/* MOBILE TOGGLE (BOTÃO HAMBÚRGUER) */}
        <button 
          className="md:hidden relative z-[70] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-gray-800" size={28} />
          ) : (
            <Menu className={cn(scrolled ? "text-gray-800" : "text-white")} size={28} />
          )}
        </button>
      </motion.nav>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[50] bg-white flex flex-col pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  key={link.name}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-2xl font-black text-[#1b4332] uppercase tracking-tighter"
                  >
                    <link.icon className="text-[#f59e0b]" size={24} />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-10 border-t border-gray-100"
              >
                <Link 
                  href="#carreiras"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 w-full bg-[#1b4332] text-white py-5 rounded-2xl font-bold text-lg shadow-xl"
                >
                  <Briefcase size={20} />
                  Trabalhe Conosco
                </Link>
              </motion.div>
            </div>

            {/* Rodapé do Menu Mobile */}
            <div className="mt-auto pb-10 text-center">
              <p className="text-gray-400 text-sm font-medium">Energia que transforma.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
