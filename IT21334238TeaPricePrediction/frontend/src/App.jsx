import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/public/Header";
import Footers from "./components/public/Footer";
import Home from "./pages/home/Home";
import TeaPredictionList from "./pages/predictions/TeaPredictionList";
import TeaPredictionDetails from "./pages/predictions/TeaPredictionDetails";
import HistroyPrice from "./pages/prices/HistroyPrice";
import TeaHistoricalPriceList from "./pages/prices/TeaHistoricalPriceList";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historical-values" element={<TeaPredictionList />} />
        <Route path="/prediction-details/:id" element={<TeaPredictionDetails />} />
        <Route path="/historical-prices-list" element={<TeaHistoricalPriceList />} />
        <Route path="/historical-prices/:id?" element={<HistroyPrice/>} />
      </Routes>
      <Footers />
    </BrowserRouter>
  );
}
