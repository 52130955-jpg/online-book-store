import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import BookDetail from "./pages/BookDetail";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

export default function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  return (
    <>
      <Navbar cart={cart} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} cart={cart} setCart={setCart} />} />
        <Route path="/books/:id" element={<BookDetail cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
