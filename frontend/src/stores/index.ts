import { createContext, useContext } from "react";

import { AuthStore } from "@/features/auth";

import { LayoutStore } from "./layoutStore";
import { ModalStore } from "./modalStore";

interface Store {
  authStore: AuthStore;
  layoutStore: LayoutStore;
  modalStore: ModalStore;
}

export const store: Store = {
  authStore: new AuthStore(),
  layoutStore: new LayoutStore(),
  modalStore: new ModalStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
