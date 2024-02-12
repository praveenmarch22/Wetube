import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, title, description, thumbnails } = snippet;

  const { viewCount } = statistics;
  return (
    <div className="m-2 p-2 w-[360px] cursor-pointer overflow-hidden overflow-ellipsis">
      <img
        alt="Videocard"
        className="rounded-lg hover:rounded-none w-full"
        src={thumbnails.medium.url}
      />
      <h1 className="font-bold text-lg my-1 mx-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
        {title}
      </h1>
      <h1 className="text-base my-1 mx-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
        {description}
      </h1>
      <h1 className="text-sm ml-3 my-1 overflow-hidden overflow-ellipsis">
        {channelTitle}
      </h1>
      <h1 className="text-sm ml-3">{viewCount} views</h1>
    </div>
  );
};

export default VideoCard;
