"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { trackHeroCtaClick } from "@/lib/analytics";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const EASE_SPRING = [0.22, 1, 0.36, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SPRING },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#080808]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#0A84FF]/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0A84FF]/[0.04] rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center rounded-full border border-[#0A84FF]/30 bg-[#0A84FF]/10 px-3 py-1 text-xs font-medium text-[#0A84FF] mb-6">
                ✦ Revendedor Premium Apple no Brasil
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display font-bold leading-tight text-white"
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
                O melhor
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#0A84FF]">
                da Apple.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-[#A1A1A6] max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Originais lacrados. Nota fiscal garantida.{" "}
              <br className="hidden sm:block" />
              Entrega em todo o Brasil.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white rounded-full px-8 font-medium text-base glow-blue transition-all duration-300 hover:scale-[1.02]"
                asChild
              >
                <Link href="/iphone" onClick={() => trackHeroCtaClick("comprar_agora")}>
                  Comprar agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/[0.15] text-white hover:bg-white/5 rounded-full px-8 font-medium text-base backdrop-blur-sm"
                asChild
              >
                <Link href="/iphone" onClick={() => trackHeroCtaClick("ver_todos")}>Ver todos os produtos</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0"
            >
              {[
                { value: "+4.250", label: "Produtos vendidos" },
                { value: "12x", label: "Sem juros" },
                { value: "100%", label: "Original lacrado" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display font-bold text-2xl text-white">{stat.value}</div>
                  <div className="text-[#6E6E73] text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-[40px] bg-[#0A84FF]/10 blur-[40px] scale-110" />
              {/* Phone mockup placeholder */}
              <div className="relative w-64 h-[520px] sm:w-80 sm:h-[640px] rounded-[40px] bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.08] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/5 to-transparent" />
                <div className="text-center z-10">
                  <div className="text-6xl mb-4"></div>
                  <p className="text-[#6E6E73] text-sm">iPhone 16 Pro Max</p>
                  <p className="text-[#0A84FF] font-price font-bold text-xl mt-2">R$ 9.999</p>
                </div>
                {/* Shine effect */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/[0.04] to-transparent rounded-t-[40px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6E6E73]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-xs">Role para explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
