import { useQuery } from "react-query";

import { axios } from "@/lib/axios";
import type { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

import type { ProductDto } from "../types";

export const getProduct = (productId: string): Promise<ProductDto> =>
  axios.get(`/product/${productId}`);

type QueryFnType = typeof getProduct;

type UseProductOptions = {
  productId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useProduct = ({ productId, config }: UseProductOptions) =>
  useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    retry: true,
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });
