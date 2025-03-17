import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footers from "./components/Footer";
import Home from "./pages/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      <Footers />
    </BrowserRouter>
  );
}
