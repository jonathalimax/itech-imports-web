"use client";

import { create } from "zustand";

interface UIStore {
  isMobileNavOpen: boolean;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  toggleMobileNav: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isMobileNavOpen: false,
  openMobileNav: () => set({ isMobileNavOpen: true }),
  closeMobileNav: () => set({ isMobileNavOpen: false }),
  toggleMobileNav: () => set((s) => ({ isMobileNavOpen: !s.isMobileNavOpen })),
  isSearchOpen: false,
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
}));
