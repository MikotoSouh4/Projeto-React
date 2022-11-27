import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register, Sobre } from "./";

export default function rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}
