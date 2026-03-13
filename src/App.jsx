import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import BuyerHomePage from "./pages/buyer/buyerhomepage/BuyerHomePage";
import LoginPage from "./pages/auth/loginpage/LoginPage";
import RegisterPage from "./pages/auth/registerpage/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buyer" element={<BuyerHomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;