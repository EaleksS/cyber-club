import { create } from "zustand";
import { devtools } from "zustand/middleware";

type useNav = {
  page: string;
  scrollNav: string;
  setSrollNav: (scroll: string) => void;
  setPage: (page: string) => void;
};

export const useNav = create(
  devtools<useNav>((set) => ({
    page: "home",
    scrollNav: "home",
    setSrollNav: (scroll) => {
      set({ scrollNav: scroll });
    },
    setPage: (page: string) => {
      set({ page: page });
    },
  }))
);
