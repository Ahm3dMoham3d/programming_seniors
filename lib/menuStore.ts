import { create } from "zustand";

export const useMenuStore = create((set) => ({
  isOpened: false,
  toggleMenu: () => set((state: any) => ({ isOpened: !state.isOpened })),
}));
