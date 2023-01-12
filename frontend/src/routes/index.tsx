/* eslint-disable react/jsx-no-useless-fragment */

import { useRoutes } from "react-router-dom";

import { publicRoutes } from "./public";

export function AppRoutes() {
  const routes = publicRoutes;

  const element = useRoutes([...routes]);

  return <>{element}</>;
}
