import { MdOutlineFilterAlt } from "react-icons/md";

import { Button } from "@/components/Elements/Button";
import { Icon } from "@/components/Elements/Icon";

export function ProductFilters() {
  return (
    <div className="sticky hidden top-[16rem] bg-white max-w-lg max-h-[30rem] h-full p-5 rounded-md text-onyx sm:block">
      <div className="flex justify-between items-center pb-3 mb-4 border border-solid border-b-cultured2 border-x-transparent border-t-transparent">
        <h2 className="text-3xl font-semibold">Filters</h2>
        <Icon icon={MdOutlineFilterAlt} />
      </div>
      {/* TODO: Needs to add the filters */}
      <Button content="Clear Filters" className="uppercase mt-2" />
    </div>
  );
}
