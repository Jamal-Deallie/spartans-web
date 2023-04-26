import { create } from 'zustand';
interface StoreState {
  navIsOpened: boolean;
  setNavIsOpened: (value: boolean) => void;
}

export const useStore = create<StoreState>(set => ({
  navIsOpened: false,
  setNavIsOpened: (value: any) => set({ navIsOpened: value }),
}));
