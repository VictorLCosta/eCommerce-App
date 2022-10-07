import { createContext, useContext } from "react"
import CommonStore from "./commonStore";
import ProductStore from './productStore';

interface Store {
    productStore: ProductStore,
    commonStore: CommonStore
}

export const store: Store = {
    productStore: new ProductStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}