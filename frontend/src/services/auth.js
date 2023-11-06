import http from "./api";

// Authentication
/**
 * login
 * @param {string} email
 * @param {string} password
 * @returns
 */

export function userLogin(email, password) {
  const user = {
    email,
    password,
  };
  return http.post("/v2/auth/login", user);
}
export function fetchUserLoged() {
  return http.get("/v2/auth/user");
}
