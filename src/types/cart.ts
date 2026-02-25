export interface CartItem {
  id: string; // composite: productId-storageVariantId-colorVariantId
  productId: string;
  slug: string;
  name: string;
  image: string;
  storageLabel: string;
  colorLabel: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}
