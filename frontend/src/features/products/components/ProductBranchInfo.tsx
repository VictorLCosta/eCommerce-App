import { Image } from "@/components/Elements/Image";

import { useProductBranchInfo } from "../api/getProductBranchInfo";

export function ProductBranchInfo({ branchId }: { branchId: string }) {
  const { data } = useProductBranchInfo({ branchId });

  if (!data) return null;

  return (
    <div className="flex bg-white rounded-[3px] w-full px-3 py-5 mb-3 shadow-4">
      <div>
        <Image src={data.pictureUrl} circular />
        <h4>{data.name}</h4>
      </div>
      <div />
    </div>
  );
}
