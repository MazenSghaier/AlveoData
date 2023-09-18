import create from "zustand";
import { persist } from "zustand/middleware";

const appStore = (set) => ({
  dopen: true,
  updateOpen: (dopen) => set((state) => ({ dopen: dopen })),
});

const showContactAndSocial = (set) => ({
  show: true,
  updateShow: (show) => set((state) => ({ show: show })),
});

const persistedAppStore = persist(appStore, { name: "my_first_app" });
const persistedshowContactAndSocial = persist(showContactAndSocial, { name: "my_first_app" });

export const useAppStore = create(persistedAppStore);
export const useContactAndSocial = create(persistedshowContactAndSocial);