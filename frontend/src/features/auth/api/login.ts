import { axios } from "@/lib/axios";

import type { AuthUser } from "../types";

export type LoginDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = (
  loginDto: LoginDTO,
): Promise<AuthUser> => axios.post("/auth/login", loginDto);
