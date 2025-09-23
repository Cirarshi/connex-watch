// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";
import videos from "../data/videos.json";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <VideoCard videos={videos} />
    </div>
  );
}
