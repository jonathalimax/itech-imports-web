import { describe, it, expect } from "vitest";
import { formatBRL, formatInstallment, formatDiscount } from "./format";

describe("formatBRL", () => {
  it("formats whole numbers correctly", () => {
    const result = formatBRL(9999);
    expect(result).toContain("9.999");
    expect(result).toContain("R$");
  });

  it("formats decimal values correctly", () => {
    const result = formatBRL(29.9);
    expect(result).toContain("29,90");
  });

  it("formats zero correctly", () => {
    const result = formatBRL(0);
    expect(result).toContain("0,00");
  });
});

describe("formatInstallment", () => {
  it("returns correct installment string for 12x", () => {
    const result = formatInstallment(9999, 12);
    expect(result).toContain("12x");
    expect(result).toContain("sem juros");
  });

  it("uses 12 installments by default", () => {
    const result = formatInstallment(12000);
    expect(result).toContain("12x");
  });
});

describe("formatDiscount", () => {
  it("calculates 50% discount correctly", () => {
    expect(formatDiscount(200, 100)).toBe("-50%");
  });

  it("calculates 25% discount correctly", () => {
    expect(formatDiscount(100, 75)).toBe("-25%");
  });
});
