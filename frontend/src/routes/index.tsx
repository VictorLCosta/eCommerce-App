/* eslint-disable react/jsx-no-useless-fragment */

import { useRoutes } from "react-router-dom";

import { lazyImport } from "@/utils/lazyImport";

import { publicRoutes } from "./public";

const { NotFound } = lazyImport(() => import("@/features/misc"), "NotFound");

export function AppRoutes() {
  const commonRoutes = [{ path: "*", element: <NotFound /> }];

  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
}
