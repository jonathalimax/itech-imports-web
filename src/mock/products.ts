import type { Product } from "@/types";

function img(url: string, alt: string): { url: string; alt: string; width: number; height: number } {
  return { url, alt, width: 800, height: 800 };
}

export const products: Product[] = [
  // ─────────────────────────────────────────────
  // iPHONES
  // ─────────────────────────────────────────────
  {
    id: "iph-16pm-001",
    slug: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    shortDescription: "O iPhone mais avançado de todos os tempos. Câmera Pro, chip A18 Pro, titânio.",
    description: "O iPhone 16 Pro Max redefine o que um smartphone pode fazer. Com o chip A18 Pro, câmera de 48MP com zoom óptico 5x e tela Super Retina XDR de 6,9 polegadas, é a experiência Apple mais completa disponível.",
    category: "iphone",
    basePrice: 9999,
    installments: 12,
    badge: "mais-vendido",
    images: [
      img("/iphone16-10.webp", "iPhone 16 Pro Max — Desert Titanium"),
      img("/iphone16-13.webp", "iPhone 16 Pro Max — Black Titanium"),
    ],
    storageVariants: [
      { id: "256gb", label: "256 GB", type: "storage", priceDelta: 0, available: true },
      { id: "512gb", label: "512 GB", type: "storage", priceDelta: 1500, available: true },
      { id: "1tb", label: "1 TB", type: "storage", priceDelta: 4000, available: true },
    ],
    colorVariants: [
      { id: "natural", label: "Natural Titanium", type: "color", priceDelta: 0, available: true, colorHex: "#E3CFBC" },
      { id: "black", label: "Black Titanium", type: "color", priceDelta: 0, available: true, colorHex: "#4A4A4A" },
      { id: "white", label: "White Titanium", type: "color", priceDelta: 0, available: true, colorHex: "#F0EDE8" },
      { id: "desert", label: "Desert Titanium", type: "color", priceDelta: 0, available: true, colorHex: "#C5A97A" },
    ],
    specs: [
      { label: "Chip", value: "A18 Pro" },
      { label: "Tela", value: "Super Retina XDR 6,9\"" },
      { label: "Câmera principal", value: "48 MP, f/1.78" },
      { label: "Câmera ultrawide", value: "48 MP, f/2.2" },
      { label: "Zoom óptico", value: "5x" },
      { label: "Bateria", value: "Até 33h de reprodução de vídeo" },
      { label: "Resistência", value: "IP68" },
      { label: "Conector", value: "USB-C" },
      { label: "5G", value: "Sim" },
      { label: "Face ID", value: "Sim" },
    ],
    relatedProductIds: ["iph-16p-001", "iph-16-001", "acc-airpods-pro"],
    inStock: true,
    featured: true,
    createdAt: "2024-09-20T00:00:00Z",
  },
  {
    id: "iph-16p-001",
    slug: "iphone-16-pro",
    name: "iPhone 16 Pro",
    shortDescription: "Potência Pro em tamanho compacto. Chip A18 Pro, câmera 48MP, tela 6,3\".",
    description: "O iPhone 16 Pro traz todo o poder profissional em um formato mais compacto. Com A18 Pro, câmera Pro de 48MP e tela ProMotion de 6,3 polegadas, é a escolha perfeita para quem quer o melhor sem abrir mão da ergonomia.",
    category: "iphone",
    basePrice: 8499,
    installments: 12,
    badge: "novo",
    images: [
      img("/iphone16-4.webp", "iPhone 16 Pro — Black Titanium"),
      img("/iphone16-5.webp", "iPhone 16 Pro — Desert Titanium"),
    ],
    storageVariants: [
      { id: "128gb", label: "128 GB", type: "storage", priceDelta: 0, available: true },
      { id: "256gb", label: "256 GB", type: "storage", priceDelta: 1000, available: true },
      { id: "512gb", label: "512 GB", type: "storage", priceDelta: 2500, available: true },
    ],
    colorVariants: [
      { id: "natural", label: "Natural Titanium", type: "color", priceDelta: 0, available: true, colorHex: "#E3CFBC" },
      { id: "black", label: "Black Titanium", type: "color", priceDelta: 0, available: true, colorHex: "#4A4A4A" },
      { id: "white", label: "White Titanium", type: "color", priceDelta: 0, available: true, colorHex: "#F0EDE8" },
      { id: "desert", label: "Desert Titanium", type: "color", priceDelta: 0, available: true, colorHex: "#C5A97A" },
    ],
    specs: [
      { label: "Chip", value: "A18 Pro" },
      { label: "Tela", value: "Super Retina XDR 6,3\"" },
      { label: "Câmera principal", value: "48 MP, f/1.78" },
      { label: "Câmera ultrawide", value: "48 MP, f/2.2" },
      { label: "Zoom óptico", value: "5x" },
      { label: "Bateria", value: "Até 27h de reprodução de vídeo" },
      { label: "Resistência", value: "IP68" },
      { label: "Conector", value: "USB-C" },
      { label: "5G", value: "Sim" },
      { label: "Face ID", value: "Sim" },
    ],
    relatedProductIds: ["iph-16pm-001", "iph-16-001", "acc-airpods-pro"],
    inStock: true,
    featured: true,
    createdAt: "2024-09-20T00:00:00Z",
  },
  {
    id: "iph-16-001",
    slug: "iphone-16",
    name: "iPhone 16",
    shortDescription: "O poder do A18 para todos. Câmera 48MP, Action Button e USB-C.",
    description: "O iPhone 16 traz recursos que antes eram exclusivos do Pro. Com o chip A18, câmera de 48MP, Action Button e Controle de Câmera, é um salto enorme para qualquer um que queira entrar no ecossistema Apple.",
    category: "iphone",
    basePrice: 6499,
    installments: 12,
    badge: "novo",
    images: [
      img("/iphone16-13.webp", "iPhone 16 — Ultramarine"),
      img("/iphone16-10.webp", "iPhone 16 — Black"),
    ],
    storageVariants: [
      { id: "128gb", label: "128 GB", type: "storage", priceDelta: 0, available: true },
      { id: "256gb", label: "256 GB", type: "storage", priceDelta: 1000, available: true },
    ],
    colorVariants: [
      { id: "black", label: "Preto", type: "color", priceDelta: 0, available: true, colorHex: "#1C1C1E" },
      { id: "white", label: "Branco", type: "color", priceDelta: 0, available: true, colorHex: "#F5F5F7" },
      { id: "ultramarine", label: "Ultramarino", type: "color", priceDelta: 0, available: true, colorHex: "#3A5A9B" },
      { id: "teal", label: "Verde-azulado", type: "color", priceDelta: 0, available: true, colorHex: "#4A9B8A" },
      { id: "pink", label: "Rosa", type: "color", priceDelta: 0, available: true, colorHex: "#E8A0BF" },
    ],
    specs: [
      { label: "Chip", value: "A18" },
      { label: "Tela", value: "Super Retina XDR 6,1\"" },
      { label: "Câmera principal", value: "48 MP, f/1.6" },
      { label: "Câmera ultrawide", value: "12 MP, f/2.2" },
      { label: "Zoom óptico", value: "2x" },
      { label: "Bateria", value: "Até 22h de reprodução de vídeo" },
      { label: "Resistência", value: "IP68" },
      { label: "Conector", value: "USB-C" },
      { label: "5G", value: "Sim" },
      { label: "Face ID", value: "Sim" },
    ],
    relatedProductIds: ["iph-16p-001", "iph-15-001", "acc-airpods-4"],
    inStock: true,
    featured: true,
    createdAt: "2024-09-20T00:00:00Z",
  },
  {
    id: "iph-15-001",
    slug: "iphone-15",
    name: "iPhone 15",
    shortDescription: "Dynamic Island, câmera 48MP e USB-C. A geração anterior a preço acessível.",
    description: "O iPhone 15 trouxe o Dynamic Island para todos, câmera principal de 48MP e a transição para USB-C. Uma excelente opção para quem quer uma experiência premium Apple com investimento mais acessível.",
    category: "iphone",
    basePrice: 4999,
    installments: 12,
    badge: "oferta",
    images: [
      img("/iphone16-5.webp", "iPhone 15 — Pink"),
      img("/iphone16-4.webp", "iPhone 15 — Black"),
    ],
    storageVariants: [
      { id: "128gb", label: "128 GB", type: "storage", priceDelta: 0, available: true },
      { id: "256gb", label: "256 GB", type: "storage", priceDelta: 1000, available: true },
    ],
    colorVariants: [
      { id: "black", label: "Preto", type: "color", priceDelta: 0, available: true, colorHex: "#1C1C1E" },
      { id: "blue", label: "Azul", type: "color", priceDelta: 0, available: true, colorHex: "#4A7FA5" },
      { id: "green", label: "Verde", type: "color", priceDelta: 0, available: true, colorHex: "#5A9B6A" },
      { id: "yellow", label: "Amarelo", type: "color", priceDelta: 0, available: true, colorHex: "#F5D547" },
      { id: "pink", label: "Rosa", type: "color", priceDelta: 0, available: true, colorHex: "#F2A8C4" },
    ],
    specs: [
      { label: "Chip", value: "A16 Bionic" },
      { label: "Tela", value: "Super Retina XDR 6,1\"" },
      { label: "Câmera principal", value: "48 MP, f/1.6" },
      { label: "Câmera ultrawide", value: "12 MP, f/2.4" },
      { label: "Zoom óptico", value: "2x" },
      { label: "Bateria", value: "Até 20h de reprodução de vídeo" },
      { label: "Resistência", value: "IP68" },
      { label: "Conector", value: "USB-C" },
      { label: "5G", value: "Sim" },
      { label: "Face ID", value: "Sim" },
    ],
    relatedProductIds: ["iph-16-001", "acc-airpods-4", "acc-magsafe"],
    inStock: true,
    featured: false,
    createdAt: "2023-09-22T00:00:00Z",
  },

  // ─────────────────────────────────────────────
  // MACs
  // ─────────────────────────────────────────────
  {
    id: "mac-mbp14-m4p",
    slug: "macbook-pro-14-m4-pro",
    name: "MacBook Pro 14\" M4 Pro",
    shortDescription: "Performance profissional extrema. Chip M4 Pro, tela Liquid Retina XDR, até 24h de bateria.",
    description: "O MacBook Pro 14\" com M4 Pro é a ferramenta definitiva para profissionais criativos e técnicos. Com desempenho até 3x mais rápido que modelos Intel, tela de 120Hz com ProMotion e autonomia de bateria sem precedentes.",
    category: "mac",
    basePrice: 19999,
    installments: 12,
    badge: "novo",
    images: [
      img("/macbook-air-15-m4.webp", "MacBook Pro 14\" M4 Pro"),
      img("/macbook-air-15-m4.webp", "MacBook Pro 14\" — detalhe teclado"),
    ],
    storageVariants: [
      { id: "512gb", label: "512 GB SSD", type: "storage", priceDelta: 0, available: true },
      { id: "1tb", label: "1 TB SSD", type: "storage", priceDelta: 5000, available: true },
    ],
    colorVariants: [
      { id: "space-black", label: "Space Black", type: "color", priceDelta: 0, available: true, colorHex: "#1C1C1E" },
      { id: "silver", label: "Silver", type: "color", priceDelta: 0, available: true, colorHex: "#E3E4E5" },
    ],
    specs: [
      { label: "Chip", value: "Apple M4 Pro" },
      { label: "CPU", value: "14 núcleos (10P + 4E)" },
      { label: "GPU", value: "20 núcleos" },
      { label: "RAM", value: "24 GB unificada" },
      { label: "Tela", value: "Liquid Retina XDR 14,2\", 120Hz" },
      { label: "Bateria", value: "Até 24h" },
      { label: "Portas", value: "3x Thunderbolt 4, HDMI, SD, MagSafe 3" },
      { label: "Câmera", value: "12 MP Center Stage" },
    ],
    relatedProductIds: ["mac-mba15-m3", "mac-mba13-m3", "acc-airpods-pro"],
    inStock: true,
    featured: true,
    createdAt: "2024-11-01T00:00:00Z",
  },
  {
    id: "mac-mba15-m3",
    slug: "macbook-air-15-m3",
    name: "MacBook Air 15\" M3",
    shortDescription: "O notebook ultrafino mais poderoso do mundo. Tela 15,3\", chip M3, sem ventoinha.",
    description: "O MacBook Air 15\" com M3 combina a maior tela do Air com o silício Apple mais avançado para notebooks. Design fanless, perfeitamente silencioso, com autonomia para o dia todo.",
    category: "mac",
    basePrice: 12499,
    installments: 12,
    badge: "mais-vendido",
    images: [
      img("/macbook-air-15-m4.webp", "MacBook Air 15\" M3 — Midnight"),
      img("/macbook-air-15-m4.webp", "MacBook Air 15\" M3 — Starlight"),
    ],
    storageVariants: [
      { id: "512gb", label: "512 GB SSD", type: "storage", priceDelta: 0, available: true },
      { id: "1tb", label: "1 TB SSD", type: "storage", priceDelta: 2500, available: true },
    ],
    colorVariants: [
      { id: "midnight", label: "Midnight", type: "color", priceDelta: 0, available: true, colorHex: "#1D2951" },
      { id: "starlight", label: "Starlight", type: "color", priceDelta: 0, available: true, colorHex: "#E8DED5" },
      { id: "space-gray", label: "Space Gray", type: "color", priceDelta: 0, available: true, colorHex: "#6E6E73" },
    ],
    specs: [
      { label: "Chip", value: "Apple M3" },
      { label: "CPU", value: "8 núcleos (4P + 4E)" },
      { label: "GPU", value: "10 núcleos" },
      { label: "RAM", value: "16 GB unificada" },
      { label: "Tela", value: "Liquid Retina 15,3\"" },
      { label: "Bateria", value: "Até 18h" },
      { label: "Portas", value: "2x Thunderbolt / USB 4, MagSafe 3" },
      { label: "Câmera", value: "1080p FaceTime HD" },
    ],
    relatedProductIds: ["mac-mba13-m3", "mac-mbp14-m4p", "acc-airpods-pro"],
    inStock: true,
    featured: true,
    createdAt: "2024-03-08T00:00:00Z",
  },
  {
    id: "mac-mba13-m3",
    slug: "macbook-air-13-m3",
    name: "MacBook Air 13\" M3",
    shortDescription: "Leveza e potência redefinidas. O Air mais popular com chip M3.",
    description: "O MacBook Air 13\" com M3 é o companheiro ideal para estudantes e profissionais que precisam de portabilidade máxima sem abrir mão de desempenho. Ultradelgado, silencioso e incrivelmente rápido.",
    category: "mac",
    basePrice: 9999,
    installments: 12,
    badge: undefined,
    images: [
      img("/macbook-air-15-m4.webp", "MacBook Air 13\" M3 — Starlight"),
      img("/macbook-air-15-m4.webp", "MacBook Air 13\" M3 — Midnight"),
    ],
    storageVariants: [
      { id: "256gb", label: "256 GB SSD", type: "storage", priceDelta: 0, available: true },
      { id: "512gb", label: "512 GB SSD", type: "storage", priceDelta: 1500, available: true },
    ],
    colorVariants: [
      { id: "midnight", label: "Midnight", type: "color", priceDelta: 0, available: true, colorHex: "#1D2951" },
      { id: "starlight", label: "Starlight", type: "color", priceDelta: 0, available: true, colorHex: "#E8DED5" },
      { id: "space-gray", label: "Space Gray", type: "color", priceDelta: 0, available: true, colorHex: "#6E6E73" },
    ],
    specs: [
      { label: "Chip", value: "Apple M3" },
      { label: "CPU", value: "8 núcleos (4P + 4E)" },
      { label: "GPU", value: "8 núcleos" },
      { label: "RAM", value: "16 GB unificada" },
      { label: "Tela", value: "Liquid Retina 13,6\"" },
      { label: "Bateria", value: "Até 18h" },
      { label: "Portas", value: "2x Thunderbolt / USB 4, MagSafe 3" },
      { label: "Câmera", value: "1080p FaceTime HD" },
    ],
    relatedProductIds: ["mac-mba15-m3", "mac-mbp14-m4p", "acc-airpods-4"],
    inStock: true,
    featured: false,
    createdAt: "2024-03-08T00:00:00Z",
  },

  // ─────────────────────────────────────────────
  // iPADs
  // ─────────────────────────────────────────────
  {
    id: "ipad-pro13-m4",
    slug: "ipad-pro-13-m4",
    name: "iPad Pro 13\" M4",
    shortDescription: "O mais fino produto Apple de sempre. Tela OLED Ultra Retina XDR, chip M4.",
    description: "O iPad Pro 13\" com M4 é o mais poderoso e fino produto Apple já criado. Com tela OLED Ultra Retina XDR de 13 polegadas, chip M4 e compatível com Apple Pencil Pro, redefine o que um tablet pode fazer.",
    category: "ipad",
    basePrice: 12999,
    installments: 12,
    badge: "novo",
    images: [
      img("/ipad-air.webp", "iPad Pro 13\" M4 — Space Black"),
      img("/ipad-air.webp", "iPad Pro 13\" M4 — Silver"),
    ],
    storageVariants: [
      { id: "256gb", label: "256 GB", type: "storage", priceDelta: 0, available: true },
      { id: "512gb", label: "512 GB", type: "storage", priceDelta: 2500, available: true },
    ],
    colorVariants: [
      { id: "space-black", label: "Space Black", type: "color", priceDelta: 0, available: true, colorHex: "#1C1C1E" },
      { id: "silver", label: "Silver", type: "color", priceDelta: 0, available: true, colorHex: "#E3E4E5" },
    ],
    specs: [
      { label: "Chip", value: "Apple M4" },
      { label: "Tela", value: "OLED Ultra Retina XDR 13\"" },
      { label: "Câmera traseira", value: "12 MP" },
      { label: "Câmera frontal", value: "12 MP ultrawide" },
      { label: "Conector", value: "USB-C (Thunderbolt 4)" },
      { label: "Face ID", value: "Sim" },
      { label: "Apple Pencil Pro", value: "Compatível" },
      { label: "Magic Keyboard", value: "Compatível" },
    ],
    relatedProductIds: ["ipad-air13-m2", "ipad-mini7", "acc-airpods-pro"],
    inStock: true,
    featured: true,
    createdAt: "2024-05-15T00:00:00Z",
  },
  {
    id: "ipad-air13-m2",
    slug: "ipad-air-13-m2",
    name: "iPad Air 13\" M2",
    shortDescription: "Poderoso, colorido e versátil. Chip M2 em uma tela deslumbrante de 13\".",
    description: "O iPad Air 13\" com M2 oferece uma tela maior e o chip M2 em um design leve e colorido. Compatível com Apple Pencil Pro e Magic Keyboard, é a escolha ideal para criatividade e produtividade.",
    category: "ipad",
    basePrice: 7499,
    installments: 12,
    badge: "mais-vendido",
    images: [
      img("/ipad-air.webp", "iPad Air 13\" M2 — Blue"),
      img("/ipad-air.webp", "iPad Air 13\" — traseira"),
    ],
    storageVariants: [
      { id: "128gb", label: "128 GB", type: "storage", priceDelta: 0, available: true },
      { id: "256gb", label: "256 GB", type: "storage", priceDelta: 1500, available: true },
    ],
    colorVariants: [
      { id: "blue", label: "Azul", type: "color", priceDelta: 0, available: true, colorHex: "#5B8DB8" },
      { id: "purple", label: "Roxo", type: "color", priceDelta: 0, available: true, colorHex: "#8B5E9B" },
      { id: "starlight", label: "Starlight", type: "color", priceDelta: 0, available: true, colorHex: "#E8DED5" },
      { id: "space-gray", label: "Space Gray", type: "color", priceDelta: 0, available: true, colorHex: "#6E6E73" },
    ],
    specs: [
      { label: "Chip", value: "Apple M2" },
      { label: "Tela", value: "Liquid Retina 13\"" },
      { label: "Câmera traseira", value: "12 MP" },
      { label: "Câmera frontal", value: "12 MP ultrawide" },
      { label: "Conector", value: "USB-C" },
      { label: "Touch ID", value: "Sim (lateral)" },
      { label: "Apple Pencil Pro", value: "Compatível" },
      { label: "Magic Keyboard", value: "Compatível" },
    ],
    relatedProductIds: ["ipad-pro13-m4", "ipad-mini7", "acc-airpods-4"],
    inStock: true,
    featured: false,
    createdAt: "2024-03-08T00:00:00Z",
  },
  {
    id: "ipad-mini7",
    slug: "ipad-mini-7",
    name: "iPad mini 7",
    shortDescription: "O iPad mais compacto e poderoso. Chip A17 Pro, tela 8,3\", suporte a Apple Pencil Pro.",
    description: "O iPad mini 7 traz o poderoso chip A17 Pro para o formato mais compacto do iPad. Com tela Liquid Retina de 8,3 polegadas e suporte ao Apple Pencil Pro, é o parceiro perfeito para quem está sempre em movimento.",
    category: "ipad",
    basePrice: 5499,
    installments: 12,
    badge: "novo",
    images: [
      img("/ipad-air.webp", "iPad mini 7 — Starlight"),
      img("/ipad-air.webp", "iPad mini 7 — traseira"),
    ],
    storageVariants: [
      { id: "128gb", label: "128 GB", type: "storage", priceDelta: 0, available: true },
    ],
    colorVariants: [
      { id: "starlight", label: "Starlight", type: "color", priceDelta: 0, available: true, colorHex: "#E8DED5" },
      { id: "space-gray", label: "Space Gray", type: "color", priceDelta: 0, available: true, colorHex: "#6E6E73" },
      { id: "blue", label: "Azul", type: "color", priceDelta: 0, available: true, colorHex: "#5B8DB8" },
      { id: "pink", label: "Rosa", type: "color", priceDelta: 0, available: true, colorHex: "#F2A8C4" },
    ],
    specs: [
      { label: "Chip", value: "Apple A17 Pro" },
      { label: "Tela", value: "Liquid Retina 8,3\"" },
      { label: "Câmera traseira", value: "12 MP" },
      { label: "Câmera frontal", value: "12 MP ultrawide" },
      { label: "Conector", value: "USB-C" },
      { label: "Touch ID", value: "Sim (lateral)" },
      { label: "Apple Pencil Pro", value: "Compatível" },
    ],
    relatedProductIds: ["ipad-air13-m2", "ipad-pro13-m4", "acc-airpods-4"],
    inStock: true,
    featured: false,
    createdAt: "2024-10-23T00:00:00Z",
  },

  // ─────────────────────────────────────────────
  // ACESSÓRIOS
  // ─────────────────────────────────────────────
  {
    id: "acc-airpods-pro",
    slug: "airpods-pro-2",
    name: "AirPods Pro (2ª geração)",
    shortDescription: "Cancelamento de ruído ativo adaptativo. Áudio espacial personalizado. USB-C.",
    description: "Os AirPods Pro de 2ª geração oferecem o melhor cancelamento de ruído do mundo em fones de ouvido, com Áudio Espacial Personalizado e o novo chip H2 para uma experiência sonora sem igual.",
    category: "acessorios",
    basePrice: 2499,
    installments: 12,
    badge: "mais-vendido",
    images: [
      img("/airpods-pro.webp", "AirPods Pro 2ª geração — White"),
      img("/airpods-pro.webp", "AirPods Pro 2 — fone"),
    ],
    storageVariants: [],
    colorVariants: [
      { id: "white", label: "Branco", type: "color", priceDelta: 0, available: true, colorHex: "#F5F5F7" },
    ],
    specs: [
      { label: "Chip", value: "Apple H2" },
      { label: "Cancelamento de ruído", value: "Ativo Adaptativo" },
      { label: "Áudio Espacial", value: "Personalizado com rastreamento de cabeça" },
      { label: "Resistência", value: "IP54" },
      { label: "Case", value: "IP54, carregamento USB-C e MagSafe" },
      { label: "Bateria (fones)", value: "Até 6h (ANC ligado)" },
      { label: "Bateria (total com case)", value: "Até 30h" },
    ],
    relatedProductIds: ["acc-airpods-4", "acc-magsafe", "iph-16pm-001"],
    inStock: true,
    featured: true,
    createdAt: "2023-09-22T00:00:00Z",
  },
  {
    id: "acc-airpods-4",
    slug: "airpods-4",
    name: "AirPods 4",
    shortDescription: "Design reimaginado, som extraordinário. Cancelamento de ruído ativo.",
    description: "Os AirPods 4 reimaginam completamente o design dos AirPods com novo formato ergonômico, chip H2 e cancelamento de ruído ativo opcional. A melhor experiência de fone sem nada no ouvido.",
    category: "acessorios",
    basePrice: 1799,
    installments: 12,
    badge: "novo",
    images: [
      img("/airpods-pro.webp", "AirPods 4 — White"),
      img("/airpods-pro.webp", "AirPods 4 com ANC"),
    ],
    storageVariants: [],
    colorVariants: [
      { id: "white", label: "Branco", type: "color", priceDelta: 0, available: true, colorHex: "#F5F5F7" },
    ],
    specs: [
      { label: "Chip", value: "Apple H2" },
      { label: "Cancelamento de ruído", value: "Ativo" },
      { label: "Áudio Espacial", value: "Sim" },
      { label: "Resistência (fones)", value: "IP54" },
      { label: "Bateria (fones)", value: "Até 5h" },
      { label: "Bateria (total com case)", value: "Até 30h" },
      { label: "Case", value: "Carregamento USB-C e MagSafe" },
    ],
    relatedProductIds: ["acc-airpods-pro", "acc-magsafe", "iph-16-001"],
    inStock: true,
    featured: false,
    createdAt: "2024-09-09T00:00:00Z",
  },
  {
    id: "acc-magsafe",
    slug: "magsafe-charger",
    name: "Carregador MagSafe",
    shortDescription: "Carregamento magnético rápido de até 25W para iPhone 12 e modelos posteriores.",
    description: "O Carregador MagSafe se conecta magneticamente ao iPhone para um carregamento rápido e seguro de até 25W. Compatível com todos os iPhones com MagSafe.",
    category: "acessorios",
    basePrice: 349,
    installments: 1,
    badge: "novo",
    images: [
      img("/carregador-magsafe.png", "Carregador MagSafe — White"),
      img("/carregador-magsafe.png", "MagSafe — conectado ao iPhone"),
    ],
    storageVariants: [],
    colorVariants: [
      { id: "white", label: "Branco", type: "color", priceDelta: 0, available: true, colorHex: "#F5F5F7" },
    ],
    specs: [
      { label: "Potência máxima", value: "25W" },
      { label: "Compatibilidade", value: "iPhone 12 e posteriores" },
      { label: "Cabo", value: "USB-C integrado (1m)" },
      { label: "MagSafe", value: "Sim" },
      { label: "Qi2", value: "Compatível" },
    ],
    relatedProductIds: ["acc-airpods-pro", "acc-airpods-4", "iph-16pm-001"],
    inStock: true,
    featured: true,
    createdAt: "2024-09-09T00:00:00Z",
  },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q)
  );
}

export function getRelatedProducts(ids: string[]): Product[] {
  return products.filter((p) => ids.includes(p.id));
}
