"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProductImage } from "@/types";

interface ProductImageGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const prev = () => goTo(Math.max(0, activeIndex - 1));
  const next = () => goTo(Math.min(images.length - 1, activeIndex + 1));

  if (images.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F5F5F7] border border-white/[0.06] image-skeleton">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[activeIndex].url}
              alt={images[activeIndex].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain transition-opacity duration-500 opacity-0 data-[loaded=true]:opacity-100"
              priority={activeIndex === 0}
              onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/800x800/111111/222222?text=iTech";
                e.currentTarget.setAttribute("data-loaded", "true");
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full glass text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={activeIndex === images.length - 1}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full glass text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`relative flex-shrink-0 h-20 w-20 rounded-xl overflow-hidden border-2 transition-all duration-200 bg-[#F5F5F7] image-skeleton ${
                i === activeIndex
                  ? "border-[#0A84FF] ring-2 ring-[#0A84FF]/30"
                  : "border-white/[0.08] hover:border-white/20"
              }`}
              aria-label={`Ver ${img.alt}`}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                sizes="80px"
                className="object-contain transition-opacity duration-500 opacity-0 data-[loaded=true]:opacity-100"
                onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/800x800/111111/222222?text=iTech";
                  e.currentTarget.setAttribute("data-loaded", "true");
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
