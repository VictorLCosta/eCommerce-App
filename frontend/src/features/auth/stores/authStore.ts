/* eslint-disable no-return-assign */
import { makeAutoObservable, reaction } from "mobx";

import cookies from "@/utils/cookies";

import { loginWithEmailAndPassword } from "../api/login";

import type { LoginDTO } from "../api/login";
import type { AuthUser } from "../types";

export class AuthStore {
  currentAuthUser: AuthUser | null = null;

  token?: string = cookies.get("jwt");

  isLogging = false;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.token,
      (token) => {
        if (token) {
          cookies.set("jwt", token);
        } else {
          cookies.remove("jwt");
        }
      },
    );
  }

  login = async (loginDto: LoginDTO) => {
    this.isLogging = true;

    const userResponse = await loginWithEmailAndPassword({
      email: loginDto.email,
      password: loginDto.password,
    });

    this.setCurrentAuthUser(userResponse);

    this.isLogging = false;
  };

  setToken = (token: string | undefined) => {
    this.token = token;
  };

  setCurrentAuthUser = (user: AuthUser) => {
    this.currentAuthUser = user;

    this.setToken(user.token);
  };
}
