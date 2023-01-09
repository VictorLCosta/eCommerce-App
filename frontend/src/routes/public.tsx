import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Spinner } from "@/components/Elements/Spinner";

function App() {
  return (
    <Suspense
      fallback={
        <div className="h-full w-full flex items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
}

const publicRoutes = [
  {
    path: "/*",
    element: <App />,
    children: [],
  },
];

export default publicRoutes;
