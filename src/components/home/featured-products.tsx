"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product/product-card";
import { staggerContainerVariant, fadeUpVariant } from "@/lib/constants";
import type { Product } from "@/types";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-24 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Mais Vendidos
            </h2>
            <p className="mt-2 text-[#A1A1A6]">
              Os produtos Apple mais desejados no Brasil
            </p>
          </div>
          <Link
            href="/iphone"
            className="hidden sm:flex items-center gap-1.5 text-sm text-[#0A84FF] hover:gap-2.5 transition-all duration-200"
          >
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={fadeUpVariant}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile view all */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/iphone"
            className="inline-flex items-center gap-1.5 text-sm text-[#0A84FF]"
          >
            Ver todos os produtos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
