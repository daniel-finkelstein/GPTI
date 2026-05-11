import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Marketplace from "./pages/Marketplace";
import ProductDetail from "./pages/ProductDetail";
import PublishResource from "./pages/PublishResource";
import MyLoans from "./pages/MyLoans";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/publicar" element={<PublishResource />} />
        <Route path="/mis-prestamos" element={<MyLoans />} />
      </Routes>
    </BrowserRouter>
  );
}