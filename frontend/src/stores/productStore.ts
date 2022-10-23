import { makeAutoObservable, runInAction } from "mobx";
import { Product, ProductBriefDto } from './../models/product';
import agent from "../lib/fetch";

export default class ProductStore {
    productRegistry = new Map<string, ProductBriefDto>();
    currentProduct: Product | undefined = undefined;
    loading = false;

    constructor() {
        makeAutoObservable(this)
    }

    get productList() {
        return Array.from(this.productRegistry.values())
    }

    loadProducts = async () => {
        try {
            var result = await agent.Products.list()
            result.forEach(product => {
                this.setProduct(product)
            })
        } catch (error) {
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