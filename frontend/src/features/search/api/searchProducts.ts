import { useQuery } from "react-query";

import { axios } from "@/lib/axios";
import type { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

import type { SearchResult } from "../types";

export const searchProducts = ({
  query,
}: {
  query: string;
}): Promise<SearchResult[]> =>
  axios.get("/product/search", { params: { query } });

type QueryFnType = typeof searchProducts;

type UseSearchProductsOptions = {
  query: string;
  config?: QueryConfig<QueryFnType>;
};

export const useSearchProducts = ({
  query,
  config,
}: UseSearchProductsOptions) =>
  useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["search", query],
    queryFn: () => searchProducts({ query }),
    enabled: !!query,
  });
