import { axios } from "@/lib/axios";

import type { UserResponse } from "../types";

export type LoginDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = (
  loginDto: LoginDTO,
): Promise<UserResponse> => axios.post("/auth/login", loginDto);
