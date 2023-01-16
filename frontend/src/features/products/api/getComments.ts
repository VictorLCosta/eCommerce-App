import { useQuery } from "react-query";

import { axios } from "@/lib/axios";
import type { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

import type { ProductBriefDto } from "../types";

export const getProducts = (): Promise<ProductBriefDto[]> =>
  axios.get("/product");

type QueryFnType = typeof getProducts;

type UseProductsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useProducts = ({ config }: UseProductsOptions = {}) =>
  useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
