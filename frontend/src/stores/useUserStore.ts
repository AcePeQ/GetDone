import { create } from "zustand";

export type TUser = {
  _id: string;
  email: string;
  username: string;
};

type UserStore = {
  user: TUser | null;
  login: (userData: TUser) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: JSON.parse(sessionStorage.getItem("user") as string) || null,

  login: (userData) => {
    set(() => ({ user: userData }));
  },
  logout: () => {
    set(() => ({ user: null }));
  },
}));
