import { ProductsList } from "../components/ProductsList";

export function Products() {
  return (
    <>
      <div>
        <span>Filters</span>
      </div>
      <div>
        <ProductsList />
      </div>
    </>
  );
}
