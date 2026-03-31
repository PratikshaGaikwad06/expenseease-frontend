import { useEffect, useState } from "react";
import {
  getExpenses,
  createExpense,
  deleteExpense,
} from "../services/expenseService";
import { getCategories } from "../services/categoryService";
import { logout } from "../services/authService";

function Expenses() {
  const [data, setData] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  const fetchData = () => {
    getExpenses().then(setData).catch(console.error);
  };

  useEffect(() => {
    fetchData();
    getCategories().then(setCategories).catch(console.error);
  }, []);

  const handleCreate = async () => {
    try {
      await createExpense({
        title,
        amount: Number(amount),
        date,
        categoryId: categoryId ? Number(categoryId) : null
      });

      setTitle("");
      setAmount("");
      setDate("");

      fetchData();
    } catch (err) {
      console.error(err);
      alert("Failed to create expense");
    }
  };

  const handleDelete = async (id) => {
    try {
      if (!window.confirm("Are you sure?")) return;
      await deleteExpense(id);
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete expense");
    }
  };

  return (
    <div>
      <h1>Expenses</h1>

      <div>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Select Category</option>

          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <button onClick={handleCreate}>Add Expense</button>
      </div>

      <hr />

      {data.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} : {item.description}- ₹{item.amount}
          </p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}

      <button
        onClick={() => {
          logout();
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Expenses;
