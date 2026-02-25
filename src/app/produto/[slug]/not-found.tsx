import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-[#0A84FF] text-sm font-medium mb-4">404</p>
        <h1 className="font-display font-bold text-4xl text-white mb-4">
          Produto não encontrado
        </h1>
        <p className="text-[#A1A1A6] text-lg mb-8">
          O produto que você está procurando não existe ou foi removido.
        </p>
        <Button className="bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white rounded-full px-8" asChild>
          <Link href="/iphone">Explorar produtos</Link>
        </Button>
      </div>
    </div>
  );
}
