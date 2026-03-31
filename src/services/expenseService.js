import { getExpensesApi, createExpenseApi, deleteExpenseApi } from "../api/expenseApi";


export const createExpense = async (expense) => {
  return await createExpenseApi(expense);
};

export const getExpenses = async () => {
  try {
    const res = await getExpensesApi();
    return res.data.content;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    throw error;
  }
};

export const deleteExpense = async (id) => {
  try {
    await deleteExpenseApi(id);
  } catch (error) {
    console.error("Error deleting expense:", error);
    throw error;
  }
};