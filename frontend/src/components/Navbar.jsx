// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";
import "./css/Navbar.css";

export default function Navbar() {
  const { user } = useAuth(); // ✅ get user from context
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // redirect to home
  };

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
        {user ? (
          <button
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-red-600 px-4 py-1.5 rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
