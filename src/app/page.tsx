import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { TrustBar } from "@/components/home/trust-bar";
import { CategoryGrid } from "@/components/home/category-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { PromoBanner } from "@/components/home/promo-banner";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { getFeaturedProducts } from "@/mock";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Revendedor Premium Apple no Brasil`,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} — Revendedor Premium Apple no Brasil`,
    description: SITE_DESCRIPTION,
  },
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <HeroSection />
      <TrustBar />
      <CategoryGrid />
      <FeaturedProducts products={featuredProducts} />
      <PromoBanner />
      <NewsletterSection />
    </>
  );
}
