export function formatBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatInstallment(price: number, installments = 12): string {
  return `${installments}x de ${formatBRL(price / installments)} sem juros`;
}

export function formatDiscount(original: number, discounted: number): string {
  const pct = Math.round(((original - discounted) / original) * 100);
  return `-${pct}%`;
}
