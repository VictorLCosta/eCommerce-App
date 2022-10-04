import { makeAutoObservable } from "mobx";
import { Product, ProductBriefDto } from './../models/product';
import agent from "../lib/fetch";

export default class ProductStore {
    productRegistry = new Map<string, ProductBriefDto>()
    currentProduct: Product | null = null

    constructor() {
        makeAutoObservable(this)
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

    setProduct = (product: ProductBriefDto) => {
        this.productRegistry.set(product.id, product)
    }
}