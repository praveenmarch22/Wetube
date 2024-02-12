import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    //console.log(json);
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (videos === null) return;

  return (
    <div className="flex flex-wrap overflow-y-scroll">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
