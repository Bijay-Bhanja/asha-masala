import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import CartModal from "./components/CartModal";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  return (
    <div className="font-sans scroll-smooth">
      <Navbar cartItems={cartItems} setCartVisible={setCartVisible} />
      <Hero />
      <About />
      <Products onAddToCart={handleAddToCart} />
      
      <Features />
      <Contact />
      <Footer />
      {cartVisible && <CartModal cartItems={cartItems} onClose={() => setCartVisible(false)} />}
    </div>
  );
}

export default App;
