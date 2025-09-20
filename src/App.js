import React from 'react'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import { useState } from "react";
function App() {
   const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };
  const clearCart = () => {
    setCartItems([]);
  };
  return (
   <>
   <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart}/>  }/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveItem={(id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));}} clearCart={clearCart}/>} />
      </Routes>
    </BrowserRouter>
   </>
  );
}
export default App;
