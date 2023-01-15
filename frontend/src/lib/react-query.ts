import { QueryClient } from "react-query";

import type { AxiosError } from "axios";
import type {
  DefaultOptions,
  UseQueryOptions,
  UseMutationOptions,
} from "react-query";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<
  ReturnType<FnType>
>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> =
  UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    AxiosError,
    Parameters<MutationFnType>[0]
  >;
