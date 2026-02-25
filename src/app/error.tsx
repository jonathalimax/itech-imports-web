"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-red-400 text-sm font-medium mb-4">Algo deu errado</p>
        <h1 className="font-display font-bold text-4xl text-white mb-4">
          Erro inesperado
        </h1>
        <p className="text-[#A1A1A6] mb-8">
          Pedimos desculpas pelo transtorno. Tente novamente.
        </p>
        <Button
          onClick={reset}
          className="bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white rounded-full px-8"
        >
          Tentar novamente
        </Button>
      </div>
    </div>
  );
}
