import { useQuery } from "react-query";

import { axios } from "@/lib/axios";
import type { ExtractFnReturnType } from "@/lib/react-query";

import type { ImageDto } from "../types";

export const getProductImages = (productId: string): Promise<ImageDto[]> =>
  axios.get(`/product/product-images/${productId}`);

type QueryFnType = typeof getProductImages;

type UseProductOptions = {
  productId: string;
};

export const useProductImages = ({ productId }: UseProductOptions) =>
  useQuery<ExtractFnReturnType<QueryFnType>>({
    retry: true,
    queryKey: ["product-images", productId],
    queryFn: () => getProductImages(productId),
  });
