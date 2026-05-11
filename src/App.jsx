import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Marketplace from "./pages/Marketplace.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import PublishResource from "./pages/PublishResource.jsx";
import MyLoans from "./pages/MyLoans.jsx";

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