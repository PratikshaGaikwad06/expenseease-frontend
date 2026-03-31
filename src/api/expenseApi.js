import { getToken } from "../services/authService";

const BASE_URL = "http://localhost:8095";

export const createExpenseApi = async (expense) => {
  const token = getToken();

  const res = await fetch(`${BASE_URL}/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(expense)
  });

  if (!res.ok) {
    throw new Error("Failed to create expense");
  }

  return res.json();
};

export const getExpensesApi = async () => {
  const token = getToken();

  const res = await fetch(`${BASE_URL}/expenses`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
};

export const deleteExpenseApi = async (id) => {
  const token = getToken();

  const res = await fetch(`${BASE_URL}/expenses/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error("Failed to delete expense");
  }

  return true;
};