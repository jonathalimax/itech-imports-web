"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, CreditCard, Package } from "lucide-react";

const trustFeatures = [
  {
    icon: Package,
    title: "Lacrado original",
    description: "Todos os produtos são 100% originais, lacrados de fábrica",
  },
  {
    icon: Shield,
    title: "Garantia Apple",
    description: "Garantia oficial Apple de 1 ano em todos os produtos",
  },
  {
    icon: CreditCard,
    title: "12x sem juros",
    description: "Parcelamento facilitado no cartão de crédito",
  },
  {
    icon: Truck,
    title: "Frete para todo o Brasil",
    description: "Enviamos para qualquer endereço no território nacional",
  },
];

export function PromoBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A84FF]/5 via-transparent to-[#0A84FF]/5" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white">
            Financiamento em até{" "}
            <span className="text-[#0A84FF]">12x sem juros</span>
          </h2>
          <p className="mt-4 text-[#A1A1A6] text-lg max-w-xl mx-auto">
            Parcele seu iPhone, MacBook ou iPad sem pagar nada a mais. Aprovação rápida no cartão de crédito.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white rounded-full px-8 font-medium glow-blue"
              asChild
            >
              <Link href="/iphone">
                Ver iPhones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/[0.15] text-white hover:bg-white/5 rounded-full px-8 font-medium"
              asChild
            >
              <Link href="/mac">Ver MacBooks</Link>
            </Button>
          </div>
        </motion.div>

        {/* Trust features grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {trustFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="glass rounded-xl p-5"
            >
              <feature.icon className="h-6 w-6 text-[#0A84FF] mb-3" />
              <h3 className="font-semibold text-white text-sm">{feature.title}</h3>
              <p className="text-[#6E6E73] text-xs mt-1 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
