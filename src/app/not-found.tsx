import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-[#0A84FF] text-sm font-medium mb-4 tracking-widest uppercase">
          Erro 404
        </p>
        <h1 className="font-display font-bold text-5xl sm:text-7xl text-white mb-6">
          Página não encontrada
        </h1>
        <p className="text-[#A1A1A6] text-lg max-w-md mx-auto mb-10">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            className="bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white rounded-full px-8"
            asChild
          >
            <Link href="/">Ir para o início</Link>
          </Button>
          <Button
            variant="outline"
            className="border-white/[0.15] text-white hover:bg-white/5 rounded-full px-8"
            asChild
          >
            <Link href="/iphone">Ver produtos</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
