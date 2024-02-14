import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, getRandomPhrase } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  console.log(chatMessages.length);

  useEffect(() => {
    setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: getRandomPhrase(),
        })
      );
    }, 500);
  }, []);

  return (
    <div className="h-[500px] border border-black p-2 ml-2 rounded-lg w-full flex pr-6 mr-6 mt-5 overflow-y-scroll flex-col-reverse">
      {chatMessages.map((messageInfo, index) => (
        <ChatMessage
          name={messageInfo.name}
          message={messageInfo.message}
          key={index}
        />
      ))}
    </div>
  );
};

export default LiveChat;
