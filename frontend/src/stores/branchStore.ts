import { makeAutoObservable, runInAction } from "mobx";
import agent from "../lib/fetch";
import type { ProductBranch } from "./../models/productBranch";

export default class BranchStore {
	currentBranch: ProductBranch | undefined = undefined;
	loading = false;

	constructor() {
		makeAutoObservable(this);
	}

	loadBranch = async (id: string) => {
		this.loading = true;
		try {
			const productBranch = await agent.ProductBranches.get(id);
			runInAction(() => {
				this.currentBranch = productBranch;
				this.loading = false;
			});

			return productBranch;
		} catch (error) {
			this.loading = false;
			console.error(error);
		}
	};

	clearCurrentBranch = () => {
		this.currentBranch = undefined;
	};
}
