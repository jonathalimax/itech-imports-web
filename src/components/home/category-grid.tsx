"use client";

import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { trackCategoryCardClick } from "@/lib/analytics";

const categories = [
  {
    slug: "iphone",
    name: "iPhone",
    description: "Do 15 ao 16 Pro Max",
    emoji: "📱",
    gradient: "from-blue-600/20 to-blue-900/10",
    count: "4 modelos",
    highlight: "#0A84FF",
  },
  {
    slug: "mac",
    name: "Mac",
    description: "MacBook Air e Pro",
    emoji: "💻",
    gradient: "from-violet-600/20 to-violet-900/10",
    count: "3 modelos",
    highlight: "#BF5AF2",
  },
  {
    slug: "ipad",
    name: "iPad",
    description: "Pro, Air e mini",
    emoji: "🖥️",
    gradient: "from-cyan-600/20 to-cyan-900/10",
    count: "3 modelos",
    highlight: "#32ADE6",
  },
  {
    slug: "acessorios",
    name: "Acessórios",
    description: "AirPods, Watch e mais",
    emoji: "🎧",
    gradient: "from-emerald-600/20 to-emerald-900/10",
    count: "4 produtos",
    highlight: "#30D158",
  },
];

const EASE_SPRING = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_SPRING },
  },
};

export function CategoryGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={cardVariants} className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Explore por categoria
          </h2>
          <p className="mt-3 text-[#A1A1A6] text-lg">
            Encontre o produto Apple perfeito para você
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <motion.div key={cat.slug} variants={cardVariants}>
              <Link
                href={`/${cat.slug}`}
                className="group relative flex flex-col h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1"
                onClick={() => trackCategoryCardClick(cat.slug)}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${cat.highlight}15, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full p-5">
                  {/* Count badge */}
                  <span
                    className="self-start text-xs font-medium px-2 py-0.5 rounded-full border"
                    style={{
                      color: cat.highlight,
                      borderColor: `${cat.highlight}30`,
                      background: `${cat.highlight}10`,
                    }}
                  >
                    {cat.count}
                  </span>

                  {/* Emoji */}
                  <div className="flex-1 flex items-center justify-center text-5xl sm:text-6xl">
                    {cat.emoji}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-white transition-colors">
                      {cat.name}
                    </h3>
                    <div className="flex items-center justify-between mt-0.5">
                      <p className="text-xs text-[#6E6E73]">{cat.description}</p>
                      <ArrowRight
                        className="h-4 w-4 text-[#6E6E73] group-hover:translate-x-1 group-hover:text-white transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
