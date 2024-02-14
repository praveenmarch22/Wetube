import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-md">
      <img
        className="h-8 w-8 p-1 rounded-full"
        alt="userPic"
        src="https://yt4.ggpht.com/ytc/AIf8zZRHMhA7VBdHIaSqY3V3H6-WSUc7WIUCaSQE4UOGC5IxGOWDkwfq7dw5KhpDxgnu=s32-c-k-c0x00ffffff-no-rj"
      />
      <span className="font-bold p-2 ">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
