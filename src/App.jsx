import Login from "./pages/Login";
import { isAuthenticated } from "./services/authService";
import Expenses from "./pages/Expenses";

function App() {
  return isAuthenticated() ? <Expenses /> : <Login />;
}

export default App;