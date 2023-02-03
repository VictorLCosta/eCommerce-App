import { useMutation } from "react-query";

import { axios } from "@/lib/axios";
import type { MutationConfig } from "@/lib/react-query";
import { queryClient } from "@/lib/react-query";

export const increaseItemQuantity = (id: string): Promise<number> =>
  axios.put(`/cart/increase/${id}`);

type UseIncreaseItemQuantity = {
  config?: MutationConfig<typeof increaseItemQuantity>;
};

export const useIncreaseItemQuantity = ({ config }: UseIncreaseItemQuantity) =>
  useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
    ...config,
    mutationFn: increaseItemQuantity,
  });
