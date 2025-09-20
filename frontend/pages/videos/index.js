import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/videos");
        setVideos(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Available Videos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos.map((video) => (
            <Link key={video.id} href={`/videos/${video.id}`}>
              <div className="border p-2 rounded hover:shadow-lg cursor-pointer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-40 object-cover mb-2"
                />
                <h3 className="text-lg font-semibold">{video.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
