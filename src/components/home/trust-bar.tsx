"use client";

import { motion } from "framer-motion";
import { TRUST_ITEMS } from "@/lib/constants";

export function TrustBar() {
  const doubled = [...TRUST_ITEMS, ...TRUST_ITEMS];

  return (
    <div className="border-y border-white/[0.06] bg-[#0A0A0A] py-4 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-sm text-[#A1A1A6]">
            <span className="text-[#0A84FF]">✦</span>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
