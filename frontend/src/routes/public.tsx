import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Spinner } from "@/components/Elements/Spinner";
import { MainLayout } from "@/components/Layout";
import { lazyImport } from "@/utils/lazyImport";

import type { RouteObject } from "react-router-dom";

const { ProductsRoutes } = lazyImport(
  () => import("@/features/products/routes"),
  "ProductsRoutes",
);

function App() {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
}

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "/products/*", element: <ProductsRoutes /> }],
  },
];
