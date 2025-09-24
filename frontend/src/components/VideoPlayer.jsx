// src/components/VideoPlayer.jsx
import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function VideoPlayer({ src }) {
  const videoRef = useRef();

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
    } else {
      videoRef.current.src = src;
    }
  }, [src]);

  return (
    <>
      <video
        ref={videoRef}
        controls
        autoPlay
        className="w-full h-auto rounded-lg"
      />
    </>
  );
}
