import type { Money } from "@/types";

export type Cart = {
  id: string;
  cartItems: CartItem[];
  shippingPrice: Money;
  deliveryMethodId: string;
  customerId: string;
};

export type CartItem = {
  id: string;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
};
