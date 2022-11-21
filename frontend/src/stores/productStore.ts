import { makeAutoObservable, runInAction } from "mobx";
import agent from "../lib/fetch";
import type { Product, ProductBriefDto } from "./../models/product";

export default class ProductStore {
	productRegistry = new Map<string, ProductBriefDto>();
	currentProduct: Product | undefined = undefined;
	loadingInitial = false;
	loading = false;

	constructor() {
		makeAutoObservable(this);
	}

	get productList() {
		return Array.from(this.productRegistry.values());
	}

	loadProducts = async () => {
		this.setLoadingIntital(true);
		try {
			const result = await agent.Products.list();
			result.forEach((product) => {
				this.setProduct(product);
			});
			this.setLoadingIntital(false);
		} catch (error) {
			this.setLoadingIntital(false);
			console.error(error);
		}
	};

	loadProduct = async (id: string) => {
		this.loading = true;
		try {
			const product = await agent.Products.details(id);
			runInAction(() => {
				this.currentProduct = product;
				this.loading = false;
			});

			return product;
		} catch (error) {
			console.error(error);
			this.loading = false;
		}
	};

	setProduct = (product: ProductBriefDto) => {
		this.productRegistry.set(product.id, product);
	};

	setLoadingIntital = (state: boolean) => {
		this.loadingInitial = state;
	};

	clearCurrentProduct = () => {
		this.currentProduct = undefined;
	};
}
