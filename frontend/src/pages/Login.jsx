// src/pages/Login.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${email}`);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="flex justify-center items-center h-[80vh]">
        <form
          onSubmit={handleLogin}
          className="bg-black p-6 rounded-lg w-80 space-y-4"
        >
          <h2 className="text-xl font-bold">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-red-600 w-full py-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
}
