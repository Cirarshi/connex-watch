import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import videos from "../data/videos.json";

export default function Watch() {
  const { id } = useParams();
  const videoId = parseInt(id);
  const video = videos.find((v) => v.id === videoId);

  if (!video) return <p className="text-white p-4">Video not found!</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl text-white mb-4">{video.title}</h1>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          width="100%"
          height="1000px"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
