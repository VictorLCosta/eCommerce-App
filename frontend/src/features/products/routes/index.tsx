import { Route, Routes } from "react-router-dom";

import { Products } from "./Products";

export function ProductsRoutes() {
  return (
    <Routes>
      <Route path="" element={<Products />} />
    </Routes>
  );
}
