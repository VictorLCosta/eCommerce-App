import { createContext, useContext } from "react"
import ProductStore from './productStore';

interface Store {
    productStore: ProductStore
}

export const store: Store = {
    productStore: new ProductStore()
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}