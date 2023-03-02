import { Route, Routes } from "react-router-dom";

import { Product } from "./Product";
import { Products } from "./Products";

export function ProductsRoutes() {
  return (
    <Routes>
      <Route path="" element={<Products />} />
      <Route path=":productId" element={<Product />} />
    </Routes>
  );
}
