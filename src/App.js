import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Dashboard />
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
