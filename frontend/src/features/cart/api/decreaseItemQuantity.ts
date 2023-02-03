import { useMutation } from "react-query";

import { axios } from "@/lib/axios";
import type { MutationConfig } from "@/lib/react-query";
import { queryClient } from "@/lib/react-query";

import type { CartItem } from "../types";

export const decreaseItemQuantity = (id: string): Promise<number> =>
  axios.put(`/cart/decrease/${id}`);

type UseDecreaseItemQuantity = {
  config?: MutationConfig<typeof decreaseItemQuantity>;
};

export const useDecreaseItemQuantity = ({ config }: UseDecreaseItemQuantity) =>
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
    mutationFn: decreaseItemQuantity,
  });
