import { getCategoriesApi } from "../api/categoryApi";

export const getCategories = async () => {
  const res = await getCategoriesApi();
  return res.data; 
};