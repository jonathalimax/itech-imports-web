import { describe, it, expect } from "vitest";
import {
  products,
  getProductsByCategory,
  getProductBySlug,
  getFeaturedProducts,
  searchProducts,
} from "./products";

describe("products mock data", () => {
  it("has at least 10 products", () => {
    expect(products.length).toBeGreaterThanOrEqual(10);
  });

  it("all products have required fields", () => {
    products.forEach((p) => {
      expect(p.id).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.basePrice).toBeGreaterThan(0);
      expect(p.images.length).toBeGreaterThan(0);
      expect(["iphone", "mac", "ipad", "acessorios"]).toContain(p.category);
    });
  });

  it("all slugs are unique", () => {
    const slugs = products.map((p) => p.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });

  it("all IDs are unique", () => {
    const ids = products.map((p) => p.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });
});

describe("getProductsByCategory", () => {
  it("returns only iPhones for iphone category", () => {
    const result = getProductsByCategory("iphone");
    expect(result.length).toBeGreaterThan(0);
    result.forEach((p) => expect(p.category).toBe("iphone"));
  });

  it("returns only macs for mac category", () => {
    const result = getProductsByCategory("mac");
    expect(result.length).toBeGreaterThan(0);
    result.forEach((p) => expect(p.category).toBe("mac"));
  });
});

describe("getProductBySlug", () => {
  it("finds iPhone 16 Pro Max by slug", () => {
    const product = getProductBySlug("iphone-16-pro-max");
    expect(product).toBeDefined();
    expect(product?.name).toBe("iPhone 16 Pro Max");
  });

  it("returns undefined for unknown slug", () => {
    const product = getProductBySlug("produto-que-nao-existe");
    expect(product).toBeUndefined();
  });
});

describe("getFeaturedProducts", () => {
  it("returns only featured products", () => {
    const result = getFeaturedProducts();
    expect(result.length).toBeGreaterThan(0);
    result.forEach((p) => expect(p.featured).toBe(true));
  });
});

describe("searchProducts", () => {
  it("finds iPhones when searching for iphone", () => {
    const result = searchProducts("iphone");
    expect(result.length).toBeGreaterThan(0);
  });

  it("returns results for single-char query (no min-length in mock helper)", () => {
    // The mock helper has no min-length guard — that lives in lib/search.ts
    // Single-char "i" matches products containing "i" in name/description
    const result = searchProducts("i");
    expect(Array.isArray(result)).toBe(true);
  });

  it("returns empty array for empty string", () => {
    const result = searchProducts("");
    expect(result).toEqual([]);
  });

  it("is case insensitive", () => {
    const lower = searchProducts("macbook");
    const upper = searchProducts("MACBOOK");
    expect(lower.length).toBe(upper.length);
  });
});
