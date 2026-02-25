import { logEvent } from "firebase/analytics";
import { analyticsPromise } from "./firebase";

async function track(eventName: string, params?: Record<string, unknown>) {
  const analytics = await analyticsPromise;
  if (!analytics) return;
  logEvent(analytics, eventName, params as Record<string, string | number | boolean>);
}

// ─── Page View ───────────────────────────────────────────────────────────────

export function trackPageView(path: string) {
  return track("page_view", { page_path: path });
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export function trackNavClick(item: string) {
  return track("nav_click", { item });
}

export function trackMobileNavOpen() {
  return track("mobile_nav_open");
}

export function trackMobileNavClose() {
  return track("mobile_nav_close");
}

export function trackMobileNavItemClick(item: string) {
  return track("mobile_nav_item_click", { item });
}

// ─── Homepage ─────────────────────────────────────────────────────────────────

export function trackHeroCtaClick(cta: "comprar_agora" | "ver_todos") {
  return track("hero_cta_click", { cta });
}

export function trackCategoryCardClick(category: string) {
  return track("category_card_click", { category });
}

export function trackPromoBannerCtaClick(cta: "ver_iphones" | "ver_macbooks") {
  return track("promo_banner_cta_click", { cta });
}

export function trackNewsletterSubmitSuccess() {
  return track("newsletter_submit_success");
}

export function trackNewsletterSubmitError(error: string) {
  return track("newsletter_submit_error", { error });
}

// ─── Product Discovery ────────────────────────────────────────────────────────

export function trackCategoryPageView(category: string, productCount: number) {
  return track("category_page_view", { category, product_count: productCount });
}

export function trackFilterApplied(minPrice?: number, maxPrice?: number) {
  return track("filter_applied", {
    ...(minPrice !== undefined && { min_price: minPrice }),
    ...(maxPrice !== undefined && { max_price: maxPrice }),
  });
}

export function trackFilterCleared() {
  return track("filter_cleared");
}

export function trackSortChanged(sort: string) {
  return track("sort_changed", { sort });
}

export function trackProductCardClick(
  productId: string,
  productName: string,
  category: string,
  price: number
) {
  return track("product_card_click", {
    product_id: productId,
    product_name: productName,
    category,
    price,
  });
}

export function trackProductCardAddToCart(
  productId: string,
  productName: string,
  price: number
) {
  return track("product_card_add_to_cart", {
    product_id: productId,
    product_name: productName,
    price,
  });
}

// ─── Search ───────────────────────────────────────────────────────────────────

export function trackSearchPerformed(query: string, resultsCount: number) {
  return track("search_performed", { query, results_count: resultsCount });
}

export function trackSearchCleared() {
  return track("search_cleared");
}

export function trackSearchNoResults(query: string) {
  return track("search_no_results", { query });
}

export function trackSearchResultClick(
  productId: string,
  productName: string,
  query: string,
  position: number
) {
  return track("search_result_click", {
    product_id: productId,
    product_name: productName,
    query,
    position,
  });
}

export function trackSearchCategoryShortcutClick(category: string) {
  return track("search_category_shortcut_click", { category });
}

// ─── Product Detail ───────────────────────────────────────────────────────────

export function trackProductView(
  productId: string,
  productName: string,
  category: string,
  price: number
) {
  return track("view_item", {
    product_id: productId,
    product_name: productName,
    category,
    price,
  });
}

export function trackStorageVariantSelected(
  productId: string,
  storageLabel: string,
  priceDelta: number
) {
  return track("storage_variant_selected", {
    product_id: productId,
    storage_label: storageLabel,
    price_delta: priceDelta,
  });
}

export function trackColorVariantSelected(productId: string, colorLabel: string) {
  return track("color_variant_selected", { product_id: productId, color_label: colorLabel });
}

export function trackProductImageClicked(productId: string, imageIndex: number) {
  return track("product_image_clicked", { product_id: productId, image_index: imageIndex });
}

export function trackSpecsAccordionExpanded(productId: string) {
  return track("specs_accordion_expanded", { product_id: productId });
}

export function trackRelatedProductClick(productId: string, productName: string) {
  return track("related_product_click", { product_id: productId, product_name: productName });
}

export function trackBreadcrumbClick(destination: string) {
  return track("breadcrumb_click", { destination });
}

// ─── Cart ─────────────────────────────────────────────────────────────────────

export function trackAddToCart(
  productId: string,
  productName: string,
  storage: string,
  color: string,
  price: number
) {
  return track("add_to_cart", {
    product_id: productId,
    product_name: productName,
    storage,
    color,
    price,
  });
}

export function trackCartDrawerOpened(
  trigger: "cart_icon" | "add_to_cart" | "view_list_btn"
) {
  return track("cart_drawer_opened", { trigger });
}

export function trackCartDrawerClosed() {
  return track("cart_drawer_closed");
}

export function trackCartItemQuantityChanged(
  productId: string,
  direction: "increase" | "decrease",
  newQuantity: number
) {
  return track("cart_item_quantity_changed", {
    product_id: productId,
    direction,
    new_quantity: newQuantity,
  });
}

export function trackCartItemRemoved(
  productId: string,
  productName: string,
  price: number
) {
  return track("cart_item_removed", {
    product_id: productId,
    product_name: productName,
    price,
  });
}

export function trackCartListCleared(itemCount: number) {
  return track("cart_list_cleared", { item_count: itemCount });
}

export function trackCartContinueShoppingClick() {
  return track("cart_continue_shopping_click");
}

// ─── Conversions ──────────────────────────────────────────────────────────────

export function trackWhatsAppClickProduct(
  productId: string,
  productName: string,
  price: number
) {
  return track("whatsapp_click_product", {
    product_id: productId,
    product_name: productName,
    price,
  });
}

export function trackWhatsAppClickCartDrawer(itemCount: number, subtotal: number) {
  return track("whatsapp_click_cart_drawer", { item_count: itemCount, subtotal });
}

export function trackWhatsAppClickCartPage(itemCount: number, subtotal: number) {
  return track("whatsapp_click_cart_page", { item_count: itemCount, subtotal });
}

export function trackWhatsAppClickFooter() {
  return track("whatsapp_click_footer");
}

export function trackInstagramClick() {
  return track("instagram_click");
}
