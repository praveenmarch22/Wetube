import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
    <div className="flex flex-wrap overflow-scroll h-screen pb-16 justify-center items-center">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          {" "}
          <VideoCard info={video} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
