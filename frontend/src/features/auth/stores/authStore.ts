/* eslint-disable no-return-assign */
import { makeAutoObservable, reaction } from "mobx";

import cookies from "@/utils/cookies";

import { getUser } from "../api/getUser";
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

  get isLoggedIn() {
    return !!this.currentAuthUser;
  }

  getCurrentUser = async () => {
    const user = await getUser();

    this.setCurrentAuthUser(user);
  };

  login = async (loginDto: LoginDTO) => {
    this.isLogging = true;

    const userResponse = await loginWithEmailAndPassword({
      email: loginDto.email,
      password: loginDto.password,
    });

    this.setCurrentAuthUser(userResponse.user);
    this.setToken(userResponse.token);

    cookies.set("jwt", userResponse.token);

    this.isLogging = false;
  };

  logout = () => {
    this.token = undefined;
    this.currentAuthUser = null;
  };

  setToken = (token: string | undefined) => {
    this.token = token;
  };

  setCurrentAuthUser = (user: AuthUser) => {
    this.currentAuthUser = user;
  };
}
