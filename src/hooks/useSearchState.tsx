import { create } from "zustand";

type State = {
  orderBy: string;
};

type Action = {
  updateOrderBy: (orderBy: State["orderBy"]) => void;
};

export const useSearchState = create<State & Action>((set) => ({
  orderBy: "",
  updateOrderBy: (orderby) => set(() => ({ orderBy: orderby })),
}));
