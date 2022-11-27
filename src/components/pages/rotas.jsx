import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./";

export default function rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
