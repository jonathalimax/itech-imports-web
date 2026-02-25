import Link from "next/link";
import { Instagram, MessageCircle, MapPin } from "lucide-react";
import { NAV_LINKS, SITE_NAME, WHATSAPP_NUMBER, INSTAGRAM_HANDLE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#080808]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-display font-bold text-2xl text-white tracking-tight">
              <span className="text-[#0A84FF]">i</span>Tech Imports
            </Link>
            <p className="mt-4 text-[#A1A1A6] text-sm leading-relaxed max-w-xs">
              Revendedor premium Apple no Brasil. Produtos 100% originais, nota fiscal garantida e entrega para todo o país.
            </p>
            <div className="mt-6 flex items-center gap-2 text-[#6E6E73] text-sm">
              <MapPin className="h-4 w-4 text-[#0A84FF]" />
              <span>Curitiba, Paraná — Brasil</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Produtos</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A1A1A6] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#A1A1A6] hover:text-white transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${INSTAGRAM_HANDLE.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#A1A1A6] hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4 text-pink-500" />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6E6E73] text-xs">
            © {new Date().getFullYear()} {SITE_NAME}. Todos os direitos reservados.
          </p>
          <p className="text-[#6E6E73] text-xs">
            Produto original lacrado · Nota Fiscal inclusa · Garantia Apple
          </p>
        </div>
      </div>
    </footer>
  );
}
