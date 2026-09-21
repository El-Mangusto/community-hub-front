import { post } from "./httpClient.js";

export function register(data) {
  return post("/api/v1/auth/register", data);
}

export function login(data) {
  return post("/api/v1/auth/login", data);
}
