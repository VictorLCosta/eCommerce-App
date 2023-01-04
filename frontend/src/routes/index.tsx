/* eslint-disable react/jsx-no-useless-fragment */
import { useRoutes } from "react-router-dom";

import { Home } from "@/features/misc";

import publicRoutes from "./public";

export default function AppRoutes() {
  const commonRoutes = [{ path: "/", element: <Home /> }];

  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
}
