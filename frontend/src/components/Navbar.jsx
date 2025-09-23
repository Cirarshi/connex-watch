// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "./css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black text-white px-6 py-3 shadow-md">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-extrabold tracking-wide hover:text-red-500 transition-colors"
      >
        Connex OTT
      </Link>

      {/* Menu Items */}
      <div className="flex space-x-6 text-lg font-medium">
        <Link
          to="/profile"
          className="hover:text-red-500 transition-colors duration-200"
        >
          Profile
        </Link>
        <Link
          to="/login"
          className="bg-red-600 px-4 py-1.5 rounded-lg hover:bg-red-700 transition-colors duration-200"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
