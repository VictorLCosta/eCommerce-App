import { makeAutoObservable, runInAction } from "mobx";
import { Product, ProductBriefDto } from './../models/product';
import agent from "../lib/fetch";

export default class ProductStore {
    productRegistry = new Map<string, ProductBriefDto>();
    currentProduct: Product | undefined = undefined;
    loadingInitial = false;
    loading = false;

    constructor() {
        makeAutoObservable(this)
    }

    get productList() {
        return Array.from(this.productRegistry.values())
    }

    loadProducts = async () => {
        this.loadingInitial = true;
        try {
            var result = await agent.Products.list()
            result.forEach(product => {
                this.setProduct(product)
            })
            this.loadingInitial = false;
        } catch (error) {
            this.loadingInitial = false;
            console.error(error)
        }
    }

    loadProduct = async (id: string) => {
        this.loading = true;
        try {

            let product = await agent.Products.details(id);
            runInAction(() => {
                this.currentProduct = product;
                this.loading = false;  
            })

            return product;

        } catch (error) {
            console.error(error)
            this.loading = false
        }
    }

    setProduct = (product: ProductBriefDto) => {
        this.productRegistry.set(product.id, product)
    }

    clearCurrentProduct = () => {
        this.currentProduct = undefined;
    }
}