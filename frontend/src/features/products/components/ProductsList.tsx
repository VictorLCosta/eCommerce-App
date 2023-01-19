import { GridColumn } from "@/components/Elements/GridColumn";
import { Spinner } from "@/components/Elements/Spinner";
import { InfiniteScroll } from "@/components/InfiniteScroll";

import { useProducts } from "../api/getProducts";

import { ProductCard } from "./ProductCard";

function LoadingComponent() {
  return (
    <div className="h-full w-full flex items-center justify-center col-span-1 sm:col-span-4">
      <Spinner size="xl" className="text-onyx" />
    </div>
  );
}

export function ProductsList() {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useProducts({
    pageNumber: 1,
  });

  return (
    <InfiniteScroll
      className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4"
      hasNextPage={hasNextPage}
      loader={<LoadingComponent />}
      loading={isFetchingNextPage}
      onLoadMore={fetchNextPage}
    >
      {data?.pages
        .flatMap((pages) => pages.items)
        .map((product) => (
          <GridColumn key={product.id} span={0} offset={0} textAlign="center">
            <ProductCard product={product} />
          </GridColumn>
        ))}
    </InfiniteScroll>
  );
}
