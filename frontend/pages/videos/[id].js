import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function VideoPlayerPage() {
  const router = useRouter();
  const { id } = router.query;
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchVideo = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/videos/${id}`);
        setVideo(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVideo();
  }, [id]);

  if (!video) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
        <video
          src={video.url}
          controls
          className="w-full max-h-[500px] bg-black"
        ></video>
        <p className="mt-2">{video.description}</p>
      </main>
      <Footer />
    </div>
  );
}
