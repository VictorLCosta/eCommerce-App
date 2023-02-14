import { axios } from "@/lib/axios";

import type { AuthUser } from "../types";

export const getUser = (): Promise<AuthUser> => axios.get("/auth/me");
