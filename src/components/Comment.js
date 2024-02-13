import React from "react";

const Comment = ({ commentinfo }) => {
  const { name, comment } = commentinfo;
  return (
    <div className="flex p-2 bg-gray-100 w-full rounded-lg ml-[6px] my-1">
      <img
        className="h-8 w-8 p-1"
        alt="userPic"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
      />
      <div className="ml-2 -mt-1">
        <h1 className="font-bold">{name}</h1>
        <h1>{comment}</h1>
      </div>
    </div>
  );
};

export default Comment;
