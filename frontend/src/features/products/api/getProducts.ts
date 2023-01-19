import { useInfiniteQuery } from "react-query";

import { axios } from "@/lib/axios";
import type { ExtractFnReturnType } from "@/lib/react-query";
import type { PaginatedList } from "@/types";

import type { ProductBriefDto } from "../types";

export const getProducts = (
  pageNumber: number,
): Promise<PaginatedList<ProductBriefDto>> =>
  axios.get("/product", { params: { pageNumber } });

type QueryFnType = typeof getProducts;

type UseProductsOptions = {
  pageNumber: number;
};

export const useProducts = ({ pageNumber }: UseProductsOptions) =>
  useInfiniteQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["product", pageNumber],
    getNextPageParam: (prevPage) =>
      prevPage.hasNextPage ? prevPage.pageNumber + 1 : undefined,
    queryFn: ({ pageParam = 1 }) => getProducts(pageParam),
  });
