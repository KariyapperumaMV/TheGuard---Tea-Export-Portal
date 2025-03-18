import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/public/Header";
import Footers from "./components/public/Footer";
import Home from "./pages/home/Home";
import TeaPredictions from "./pages/predictions/TeaPredictions";
import TeaPredictionList from "./pages/predictions/TeaPredictionList";
import TeaPredictionDetails from "./pages/predictions/TeaPredictionDetails";
import TeaPrice from "./pages/prices/TeaPrice";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict-tea-prices" element={<TeaPredictions />} />
        <Route path="/previous-values" element={<TeaPredictionList />} />
        <Route path="/previous-prices" element={<TeaPrice />} />
        <Route path="/prediction-details/:id" element={<TeaPredictionDetails />} />
      </Routes>
      <Footers />
    </BrowserRouter>
  );
}
