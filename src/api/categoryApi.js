import { getToken } from "../services/authService";

const BASE_URL = "http://localhost:8095";

export const getCategoriesApi = async () => {
  const token = getToken();

  const res = await fetch(`${BASE_URL}/categories`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
};