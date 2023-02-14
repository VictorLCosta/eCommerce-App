import { axios } from "@/lib/axios";

import type { AuthUser } from "../types";

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
};

export const registerWithEmailAndPassword = (
  registerDto: RegisterCredentialsDTO,
): Promise<AuthUser> => axios.post("/auth/register", registerDto);
