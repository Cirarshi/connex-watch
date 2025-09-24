// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth, db } from "../firebase"; // import firebase auth instance
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // import Firestore helpers

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate(); // for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        // ✅ Create user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // ✅ Store user profile in Firestore
        await setDoc(doc(db, "users", userCredential.user.uid), {
          email: email,
          createdAt: new Date(),
          plan: "free", // default plan
        });

        alert("✅ Signup successful, profile created in Firestore!");
        navigate("/");
      } else {
        try {
          if (!email || !password) {
            alert("⚠️ Please enter both email and password");
            return;
          }

          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          console.log("Logged in user:", userCredential.user);
          alert("🎉 Login successful!");
          navigate("/");
        } catch (error) {
          // Use error.code instead of error.message for better handling
          if (error.code === "auth/email-already-in-use") {
            alert("❌ This email is already in use. Try logging in instead.");
          } else if (error.code === "auth/user-not-found") {
            alert("❌ No account found with this email.");
          } else if (error.code === "auth/wrong-password") {
            alert("❌ Incorrect password.");
          } else {
            alert("❌ " + error.message);
          }
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="flex justify-center items-center h-[80vh]">
        <form
          onSubmit={handleSubmit}
          className="bg-black p-6 rounded-lg w-80 space-y-4"
        >
          <h2 className="text-xl font-bold">
            {isSignup ? "Sign Up" : "Login"}
          </h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-red-600 w-full py-2 rounded hover:bg-red-700 transition"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>

          <p
            className="text-sm text-gray-400 cursor-pointer text-center mt-2"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup
              ? "Already have an account? Login"
              : "Don’t have an account? Sign Up"}
          </p>
        </form>
      </div>
    </div>
  );
}
