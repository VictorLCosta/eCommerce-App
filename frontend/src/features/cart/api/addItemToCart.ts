import { useMutation } from "react-query";

import type { ProductBriefDto } from "@/features/products/types";
import { axios } from "@/lib/axios";
import type { MutationConfig } from "@/lib/react-query";
import { queryClient } from "@/lib/react-query";

import type { CartItem } from "../types";

export const addItemToCart = (productId: string): Promise<CartItem> =>
  axios.post(`/cart/add/${productId}`);

type UseAddItemToCartOptions = {
  config?: MutationConfig<typeof addItemToCart>;
};

export const useAddItemToCart = ({ config }: UseAddItemToCartOptions) =>
  useMutation({
    onMutate: async (productId) => {
      await queryClient.cancelQueries("cart");

      const oldCartData = queryClient.getQueryData<CartItem[]>("cart");

      const newCartData = queryClient
        .getQueryData<ProductBriefDto[]>("product")
        ?.find((x) => x.id === productId);

      queryClient.setQueryData("cart", [oldCartData || newCartData]);

      return { oldCartData };
    },
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
    ...config,
    mutationFn: addItemToCart,
  });
