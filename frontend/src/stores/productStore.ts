import { makeAutoObservable } from "mobx";

export default class ProductStore {
    

    constructor() {
        makeAutoObservable(this)
    }
}