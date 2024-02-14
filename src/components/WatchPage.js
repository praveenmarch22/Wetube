import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBarView } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [id] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBarView());
  }, []);

  return (
    <div className="ml-14 w-full overflow-y-scroll">
      <div className=" mt-4 p-2 z-40 flex ">
        <iframe
          className="rounded-lg"
          width="1000"
          height="600"
          src={
            "https://www.youtube.com/embed/" +
            id.get("v") +
            "?&autoplay=1;si=cQ69lecPnZGFlKkx"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="flex-1">
          <h1 className="text-center font-bold">Live chat</h1>
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
