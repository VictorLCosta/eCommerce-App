import { createContext, useContext } from "react";

import { CartStore } from "@/features/cart";

interface Store {
  cartStore: CartStore;
}

export const store: Store = {
  cartStore: new CartStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
