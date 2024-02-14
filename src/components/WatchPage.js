import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideBarView } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { addMessages } from "../utils/chatSlice";

const WatchPage = () => {
  const [id] = useSearchParams();

  const [messageText, setMessageText] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBarView());
  }, []);

  return (
    <div className="ml-14 w-full overflow-y-scroll">
      <div>
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
        <div className="border-black  mr-24 p-2 -mt-5 w-full flex justify-end">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (messageText.length != 0) {
                dispatch(
                  addMessages({ name: "Praveen", message: messageText })
                );
                setMessageText("");
              }
            }}
          >
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="border border-black w-[300px] rounded-lg px-4 py-1 mr-1"
              placeholder="Enter your message.."
            />
            <button className="border border-black bg-green-200 rounded-lg mr-10 px-4 py-1">
              Submit
            </button>
          </form>
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
