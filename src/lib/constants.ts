import type { Variants } from "framer-motion";

export const SITE_NAME = "iTech Imports";
export const SITE_URL = "https://itechimports.com.br";
export const SITE_DESCRIPTION =
  "Revendedor premium Apple no Brasil. iPhones, MacBooks, iPads e acessórios 100% originais com nota fiscal e garantia Apple.";
export const FREE_SHIPPING_THRESHOLD = 500;
export const WHATSAPP_NUMBER = "5541991144626";
export const INSTAGRAM_HANDLE = "@itechimports";

export const NAV_LINKS = [
  { label: "iPhone", href: "/iphone" },
  { label: "Mac", href: "/mac" },
  { label: "iPad", href: "/ipad" },
  { label: "Acessórios", href: "/acessorios" },
] as const;

export const TRUST_ITEMS = [
  "Produto 100% Original",
  "Nota Fiscal Garantida",
  "Parcelamento em até 12x",
  "Envio para todo o Brasil",
  "+4.250 Maçãs Vendidas",
  "Garantia Apple Oficial",
  "Suporte via WhatsApp",
] as const;

// Framer Motion Variants
const EASE_SPRING = [0.22, 1, 0.36, 1] as const;

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_SPRING },
  },
};

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const slideLeftVariant: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_SPRING },
  },
};

export const staggerContainerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const scaleInVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_SPRING },
  },
};
