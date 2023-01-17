import { ProductFilters } from "../components/ProductFilters";
import { ProductsList } from "../components/ProductsList";

export function Products() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-[250px_minmax(0px,_1fr)] gap-x-6">
      <ProductFilters />
      <ProductsList />
    </section>
  );
}
