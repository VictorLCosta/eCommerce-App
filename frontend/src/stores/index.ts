import { createContext, useContext } from "react";

import { AuthStore } from "@/features/auth";

import { ModalStore } from "./modalStore";

interface Store {
  authStore: AuthStore;
  modalStore: ModalStore;
}

export const store: Store = {
  authStore: new AuthStore(),
  modalStore: new ModalStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
