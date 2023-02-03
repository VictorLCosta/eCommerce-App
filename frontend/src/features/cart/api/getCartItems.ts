import { useQuery } from "react-query";

import { axios } from "@/lib/axios";
import type { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

import type { CartItem } from "../types";

export const getCartItems = (): Promise<CartItem[]> => axios.get(`/cart/list`);

type QueryFnType = typeof getCartItems;

type UseCartOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useCartItems = ({ config }: UseCartOptions) =>
  useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["cart"],
    queryFn: () => getCartItems(),
    cacheTime: 600000,
  });
