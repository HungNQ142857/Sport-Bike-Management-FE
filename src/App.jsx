import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import BuyerHomePage from "./pages/buyer/buyerhomepage/BuyerHomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buyer" element={<BuyerHomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;