// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";
import videos from "../data/videos.json";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="p-6">
        {!user ? (
          // Before login: show About section
          <div className="text-center max-w-xl mx-auto mt-20">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Connex-Watch App
            </h1>
            <p className="text-gray-300 mb-6">
              Stream your favorite movies, documentaries, and shows anytime,
              anywhere. Sign up or log in to start watching now!
            </p>
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white"
            >
              Login / Sign Up
            </Link>
          </div>
        ) : (
          // After login: show video grid
          <div>
            <h2 className="text-2xl font-semibold mb-4">Watch Videos</h2>
            <VideoCard videos={videos} />
          </div>
        )}
      </div>
    </div>
  );
}
