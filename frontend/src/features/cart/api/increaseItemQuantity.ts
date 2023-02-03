import { useMutation } from "react-query";

import { axios } from "@/lib/axios";
import type { MutationConfig } from "@/lib/react-query";
import { queryClient } from "@/lib/react-query";

import type { CartItem } from "../types";

export const increaseItemQuantity = (id: string): Promise<number> =>
  axios.put(`/cart/increase/${id}`);

type UseIncreaseItemQuantity = {
  config?: MutationConfig<typeof increaseItemQuantity>;
};

export const useIncreaseItemQuantity = ({ config }: UseIncreaseItemQuantity) =>
  useMutation({
    onMutate: async (newCartData) => {
      await queryClient.cancelQueries("cart");

      const oldCartData = queryClient.getQueryData<CartItem[]>("cart");

      queryClient.setQueryData("cart", [oldCartData || newCartData]);

      return { oldCartData };
    },
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
    ...config,
    mutationFn: increaseItemQuantity,
  });
