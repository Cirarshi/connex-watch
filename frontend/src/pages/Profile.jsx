// src/pages/Profile.jsx
import Navbar from "../components/Navbar";

const dummyHistory = [
  { id: 1, title: "Nature Documentary" },
  { id: 2, title: "Comedy Show" },
];

export default function Profile() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold">My Profile</h2>
        <p className="mt-2">Email: demo@user.com</p>

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
