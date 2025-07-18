import React, { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import ProfileModal from "./ProfileModal";
import CartModal from "./CartModal";
import Logo from "../assets/restaurant-logo.png"; // Make sure this path is correct

const Navbar = ({ cartItems, setCartVisible }) => {
  const [profileVisible, setProfileVisible] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Asha Masala Logo" className="w-10 h-10 object-cover rounded-full" />
          <span className="text-2xl font-bold text-red-600">Asha Masala</span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl text-gray-700">
          <button onClick={() => setCartVisible(true)} className="relative">
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>
          <button onClick={() => setProfileVisible(!profileVisible)}>
            <FaUser />
          </button>
        </div>
      </div>

      {profileVisible && <ProfileModal onClose={() => setProfileVisible(false)} />}
    </nav>
  );
};

export default Navbar;
