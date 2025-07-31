import { create } from "zustand";

type SidebarStore = {
  menuOpen: boolean;

  toggleMenu: (status: boolean) => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  menuOpen: false,

  toggleMenu: (status) => {
    set({ menuOpen: status });
  },
}));
