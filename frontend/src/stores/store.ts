import { createContext, useContext } from "react";
import BranchStore from "./branchStore";
import CommonStore from "./commonStore";
import ProductStore from "./productStore";

interface Store {
	productStore: ProductStore;
	branchStore: BranchStore;
	commonStore: CommonStore;
}

export const store: Store = {
	productStore: new ProductStore(),
	branchStore: new BranchStore(),
	commonStore: new CommonStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
	return useContext(StoreContext);
}
