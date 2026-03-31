import { loginApi } from "../api/authApi";

export const login = async (credentials) => {
  const data = await loginApi(credentials);

  // store token
  localStorage.setItem("token", data.token);

  return data;
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};