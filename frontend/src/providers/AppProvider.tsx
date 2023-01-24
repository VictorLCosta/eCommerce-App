import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

import { Spinner } from "@/components/Elements/Spinner";
import { ErrorFallback } from "@/components/Error/ErrorFallback";
import { queryClient } from "@/lib/react-query";
import { store, StoreContext } from "@/stores";

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <StoreContext.Provider value={store}>
              <Router>{children}</Router>
            </StoreContext.Provider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
