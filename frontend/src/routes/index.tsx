/* eslint-disable react/jsx-no-useless-fragment */

import { useRoutes } from "react-router-dom";

import { NotFound } from "@/features/misc";

import { publicRoutes } from "./public";

export function AppRoutes() {
  const commonRoutes = [{ path: "*", element: <NotFound /> }];

  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
}
