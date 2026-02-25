"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useCartStore, useCartItemCount } from "@/store/cart.store";
import { useUIStore } from "@/store/ui.store";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function CartBadge() {
  const count = useCartItemCount();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || count === 0) return null;

  return (
    <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0A84FF] text-[10px] font-bold text-white leading-none">
      {count > 9 ? "9+" : count}
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const openCart = useCartStore((s) => s.openCart);
  const { isMobileNavOpen, toggleMobileNav, closeMobileNav } = useUIStore();

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#080808]/95 backdrop-blur-xl border-b border-white/[0.08]"
            : "bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.06]"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-white font-display font-bold text-xl tracking-tight"
              onClick={closeMobileNav}
            >
              <span className="text-[#0A84FF]">i</span>Tech
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#A1A1A6] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link
                href="/busca"
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#A1A1A6] hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Buscar produtos"
              >
                <Search className="h-4 w-4" />
              </Link>

              <button
                onClick={openCart}
                className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#A1A1A6] hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Abrir lista de interesse"
              >
                <ShoppingCart className="h-4 w-4" />
                <CartBadge />
              </button>

              <Link href="/iphone" className="hidden md:flex">
                <Button
                  size="sm"
                  className="bg-[#0A84FF] text-white hover:bg-[#0A84FF]/90 font-medium text-sm px-4 rounded-full"
                >
                  Ver Produtos
                </Button>
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={toggleMobileNav}
                className="flex md:hidden h-9 w-9 items-center justify-center rounded-full text-[#A1A1A6] hover:text-white hover:bg-white/5 transition-colors"
                aria-label={isMobileNavOpen ? "Fechar menu" : "Abrir menu"}
              >
                {mounted && isMobileNavOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mounted && isMobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-white/[0.08] p-6"
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-lg font-medium text-white hover:text-[#0A84FF] transition-colors"
                    onClick={closeMobileNav}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 border-t border-white/[0.08]">
                <Link href="/iphone" onClick={closeMobileNav}>
                  <Button className="w-full bg-[#0A84FF] text-white hover:bg-[#0A84FF]/90 rounded-full">
                    Ver Produtos
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
