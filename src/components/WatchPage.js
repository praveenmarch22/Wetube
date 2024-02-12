import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBarView } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [id] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBarView());
  }, []);

  return (
    <div className="mx-20 mt-4 p-2 z-40">
      <iframe
        className="rounded-lg"
        width="940"
        height="500"
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
    </div>
  );
};

export default WatchPage;
