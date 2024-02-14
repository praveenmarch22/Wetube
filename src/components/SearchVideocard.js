import React from "react";

const SearchVideocard = ({ videoData }) => {
  const { channelTitle, description, title, thumbnails } = videoData?.snippet;
  console.log(videoData);
  return (
    <div className="flex w-3/4 mt-5 ml-10 mx-auto cursor-pointer">
      <img
        alt="youtube video"
        src={thumbnails?.medium?.url}
        className="rounded-lg h-[200px] w-[400px]"
      />
      <div className="m-2 p-2 h-[200px]">
        <h1 className="font-bold text-lg overflow-hidden overflow-ellipsis">
          {title}
        </h1>
        <h1 className="font-semibold overflow-hidden overflow-ellipsis">
          {description}
        </h1>
        <div className="flex items-center ">
          <span>
            {" "}
            <img
              className="h-8 w-8 p-1 rounded-full"
              alt="userPic"
              src="https://yt4.ggpht.com/ytc/AIf8zZRHMhA7VBdHIaSqY3V3H6-WSUc7WIUCaSQE4UOGC5IxGOWDkwfq7dw5KhpDxgnu=s32-c-k-c0x00ffffff-no-rj"
            />
          </span>
          <span className="ml-2">{channelTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchVideocard;
