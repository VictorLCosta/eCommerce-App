import { GridColumn } from "@/components/Elements/GridColumn";

import { useProducts } from "../api/getComments";

import { ProductCard } from "./ProductCard";

export function ProductsList() {
  const productsQuery = useProducts();

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
      {productsQuery.data?.map((product) => (
        <GridColumn key={product.id} span={0} offset={0} textAlign="center">
          <ProductCard product={product} />
        </GridColumn>
      ))}
    </div>
  );
}
