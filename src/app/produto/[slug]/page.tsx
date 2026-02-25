import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getProductBySlug, products } from "@/mock";
import { ProductImageGallery } from "@/components/product/product-image-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { ProductSpecs } from "@/components/product/product-specs";
import { ProductCard } from "@/components/product/product-card";
import { SITE_NAME } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produto não encontrado" };

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | ${SITE_NAME}`,
      description: product.shortDescription,
      images: product.images[0]
        ? [{ url: product.images[0].url, width: 800, height: 800, alt: product.images[0].alt }]
        : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => product.relatedProductIds.includes(p.id) && p.id !== product.id)
    .slice(0, 4);

  const categoryHref = `/${product.category}`;
  const categoryName =
    product.category === "iphone"
      ? "iPhone"
      : product.category === "mac"
      ? "Mac"
      : product.category === "ipad"
      ? "iPad"
      : "Acessórios";

  return (
    <div className="min-h-screen bg-[#080808] pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 py-6 text-sm text-[#6E6E73]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Início</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={categoryHref} className="hover:text-white transition-colors">{categoryName}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#A1A1A6] truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Product hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16">
          <ProductImageGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>

        {/* Specs */}
        <div className="border-t border-white/[0.06] py-16">
          <ProductSpecs specs={product.specs} description={product.description} />
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="border-t border-white/[0.06] py-16">
            <h2 className="font-display font-bold text-2xl text-white mb-8">
              Você também pode gostar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
