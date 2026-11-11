import { APIGetTemplate } from "./commonApi.types";

export interface User {
  id: number;
  fullName: string;
  username: string;
  email: string;
  roles: string[];
  token?: string;
}

export interface LoginDto {
  username: string;
  password: string;
}

export type LoginResponse = APIGetTemplate<{
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
}>;

export interface RefreshTokenResponse {
  AccessToken: string;
  RefreshToken: string;
  AccessTokenExpiresAtUtc: string;
  Roles: [];
}
