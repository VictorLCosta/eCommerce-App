import { useQuery } from "react-query";

import { axios } from "@/lib/axios";
import type { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

import type { Cart } from "../types";

export const getCart = (cartId: string): Promise<Cart> =>
  axios.get(`/cart/${cartId}`);

type QueryFnType = typeof getCart;

type UseCartOptions = {
  cartId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useCart = ({ cartId, config }: UseCartOptions) =>
  useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["cart", cartId],
    queryFn: () => getCart(cartId),
    cacheTime: 600000,
  });
