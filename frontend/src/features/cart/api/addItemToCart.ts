import { useMutation } from "react-query";

import { axios } from "@/lib/axios";
import type { MutationConfig } from "@/lib/react-query";
import { queryClient } from "@/lib/react-query";

import type { Cart } from "../types";

export const addItemToCart = (cart: Cart): Promise<Cart> =>
  axios.put("/cart", cart);

type UseAddItemToCartOptions = {
  config?: MutationConfig<typeof addItemToCart>;
};

export const useAddItemToCart = ({ config }: UseAddItemToCartOptions) =>
  useMutation({
    onMutate: async (newCartData) => {
      await queryClient.cancelQueries("cart");

      const oldCartData = queryClient.getQueryData<Cart>("cart");

      queryClient.setQueryData("cart", [oldCartData || newCartData]);

      return { oldCartData };
    },
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
    ...config,
    mutationFn: addItemToCart,
  });
