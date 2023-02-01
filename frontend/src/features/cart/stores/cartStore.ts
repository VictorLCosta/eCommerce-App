import { makeAutoObservable } from "mobx";

import type { Product } from "@/features/products/types";

import type { Cart } from "../types";

export class CartStore {
  cart: Cart = {
    id: "",
    customerId: "",
    deliveryMethodId: "",
    cartItems: [],
    shippingPrice: {
      amount: 0,
      currency: {
        name: "BRL",
        symbol: "R$",
      },
    },
  };

  products = {};

  constructor() {
    makeAutoObservable(this);
  }

  get subTotal() {
    return this.cart?.cartItems
      .filter((item) => item.price)
      .reduce((sum, current) => sum + current.price, 0);
  }

  setCartData(newCartData: Cart) {
    this.cart = newCartData;
  }

  addNewCartItem(product: Product) {
    this.cart?.cartItems.push({
      id: crypto.randomUUID(),
      productName: product.name,
      price: product.defaultPrice.amount,
      quantity: 1,
      pictureUrl: product.pictureUrl,
      brand: product.branchName,
      type: product.type,
    });
  }
}
