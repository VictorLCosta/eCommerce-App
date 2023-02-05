import clsx from "clsx";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

import { Button } from "@/components/Elements/Button";
import { Icon } from "@/components/Elements/Icon";

import { useSearchProducts } from "../api/searchProducts";

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useSearchProducts({ query: searchQuery });

  const classes = clsx(
    "flex items-center gap-3 text-sonic-silver px-4 py-[5px] text-lg",
    "w-full sm:w-3/6 rounded-md border border-solid border-cultured2 focus-within:border-onyx transition-colors",
  );

  return (
    <div className={classes}>
      <input
        type="text"
        value={searchQuery}
        className="w-full"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button size="xs" variant="basic">
        <Icon icon={IoSearchOutline} />
      </Button>
    </div>
  );
}
