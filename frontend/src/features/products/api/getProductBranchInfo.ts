import { useQuery } from "react-query";

import { axios } from "@/lib/axios";
import type { ExtractFnReturnType } from "@/lib/react-query";

import type { ProductBranchBriefInfoDto } from "../types";

export const getProductBranchInfo = (
  branchId: string,
): Promise<ProductBranchBriefInfoDto> => axios.get(`/branch/info/${branchId}`);

type QueryFnType = typeof getProductBranchInfo;

type UseProductBranchInfoOptions = {
  branchId: string;
};

export const useProductBranchInfo = ({
  branchId,
}: UseProductBranchInfoOptions) =>
  useQuery<ExtractFnReturnType<QueryFnType>>({
    retry: true,
    queryKey: ["product-branch", branchId],
    queryFn: () => getProductBranchInfo(branchId),
  });
