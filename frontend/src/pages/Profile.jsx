// src/pages/Profile.jsx
import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // your Firebase config
import Navbar from "../components/Navbar";

const dummyHistory = [
  { id: 1, title: "A Dream Trip" },
  { id: 2, title: "CKota Drone Show" },
  { id: 3, title: "Samsung Watch 7" },
];

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  console.log("User: ", user);
  if (!user) {
    // User not logged in
    return (
      <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">You are not signed in</h2>
        <p className="mb-6">
          Please login to view your profile and watch history.
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  // User is logged in
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold">My Profile</h2>
        <p className="mt-2">Email: {user.email}</p>

        <h3 className="text-xl mt-6">Watch History</h3>
        <ul className="list-disc ml-6 mt-2">
          {dummyHistory.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
