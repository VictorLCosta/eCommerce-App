import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { Button } from "@/components/Elements/Button";
import { Icon } from "@/components/Elements/Icon";
import { Image } from "@/components/Elements/Image";

import { useSearchProducts } from "../api/searchProducts";

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isInFocus, setInFocus] = useState(false);

  const { data } = useSearchProducts({ query: searchQuery });
  const hasResults = !!data?.length;

  const classes = clsx(
    "flex items-center gap-3 text-sonic-silver px-4 py-[5px] text-lg",
    "w-full rounded-md border border-solid border-cultured2 focus-within:border-onyx transition-colors",
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setInFocus(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [inputRef]);

  return (
    <div className="relative w-full sm:w-3/6">
      <div className={classes}>
        <input
          ref={inputRef}
          id="search-bar-menu"
          aria-haspopup="true"
          type="text"
          value={searchQuery}
          className="w-full"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setInFocus(true)}
        />
        <Button size="xs" variant="basic">
          <Icon icon={IoSearchOutline} />
        </Button>
      </div>
      {hasResults && isInFocus && (
        <div
          className="absolute origin-top-right top-28 bg-white ring-1 ring-sonic-silver transition-all ease-out"
          role="menu"
          tabIndex={0}
        >
          {data?.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="flex gap-x-5 w-full py-5 px-4 bg-white hover:bg-gray-100"
              role="menuitem"
            >
              <Image src={item.pictureUrl} size="xs" />
              <div className="flex flex-col justify-between">
                <span className="text-xl text-onyx font-light relative overflow-hidden max-h-[calc(1_*_1em_*_1.3)] text-ellipsis">
                  {item.productName}
                </span>
                <span className="text-lg text-onyx font-semibold">
                  {item.brandName}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
