import { useMutation } from "react-query";

import { axios } from "@/lib/axios";
import type { MutationConfig } from "@/lib/react-query";
import { queryClient } from "@/lib/react-query";

export const deleteCartItem = (id: string): Promise<boolean> =>
  axios.delete(`/cart/delete-item/${id}`);

type UseDeleteCartItemOptions = {
  config?: MutationConfig<typeof deleteCartItem>;
};

export const useDeleteCartItem = ({ config }: UseDeleteCartItemOptions) =>
  useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
    ...config,
    mutationFn: deleteCartItem,
  });
