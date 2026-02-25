"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUpVariant, fadeInVariant, staggerContainerVariant } from "@/lib/constants";
import type { Variants } from "framer-motion";

type AnimationVariant = "fadeUp" | "fadeIn" | "stagger";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

const variantMap: Record<AnimationVariant, Variants> = {
  fadeUp: fadeUpVariant,
  fadeIn: fadeInVariant,
  stagger: staggerContainerVariant,
};

export function AnimatedSection({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  as = "div",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const selectedVariant = variantMap[variant];
  const customVariant: Variants =
    delay > 0
      ? {
          hidden: selectedVariant.hidden,
          visible: {
            ...selectedVariant.visible,
            transition: {
              ...(typeof selectedVariant.visible === "object" &&
              "transition" in selectedVariant.visible
                ? (selectedVariant.visible.transition as object)
                : {}),
              delay,
            },
          },
        }
      : selectedVariant;

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      ref={ref}
      variants={customVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
