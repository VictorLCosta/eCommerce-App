export type AuthUser = {
  id: string;
  email: string;
  displayName: string;
  userName: string;
  pictureUrl: string;
};

export type UserResponse = {
  token: string;
  user: AuthUser;
};
