import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      router.push("/videos");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col max-w-sm">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 mb-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 mb-2"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
          >
            Login
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
