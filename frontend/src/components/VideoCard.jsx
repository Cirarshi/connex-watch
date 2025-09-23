// src/components/VideoCard.jsx
import { Link } from "react-router-dom";
import "./css/VideoCard.css";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function VideoCard({ videos }) {
  const [current, setCurrent] = useState(0);

  // Handle mouse wheel scroll
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        // scroll down → next
        setCurrent((prev) => (prev + 1) % videos.length);
      } else {
        // scroll up → previous
        setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
  }, [videos.length]);

  return (
    <>
      <div className="video-slider">
        {videos.map((video) => (
          <div key={video.id} className="video-slide">
            <Link to={`/watch/${video.id}`}>
              <img src={video.thubnail} alt={video.title} />
              <p>{video.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
