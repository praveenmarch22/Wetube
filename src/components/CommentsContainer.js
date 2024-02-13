import React from "react";
import CommentList from "./CommentList";

const commentsData = [
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
    replies: [
      {
        name: "  Praveen",
        comment: "Its a good video I can watch it all the day",
      },
      {
        name: "  Praveen",
        comment: "Its a good video I can watch it all the day",
        replies: [
          {
            name: "  Praveen",
            comment: "Its a good video I can watch it all the day",
            replies: [
              {
                name: "  Praveen",
                comment: "Its a good video I can watch it all the day",
              },
              {
                name: "  Praveen",
                comment: "Its a good video I can watch it all the day",
              },
              {
                name: "  Praveen",
                comment: "Its a good video I can watch it all the day",
              },
            ],
          },
          {
            name: "  Praveen",
            comment: "Its a good video I can watch it all the day",
          },
          {
            name: "  Praveen",
            comment: "Its a good video I can watch it all the day",
          },
        ],
      },
      {
        name: "  Praveen",
        comment: "Its a good video I can watch it all the day",
      },
      {
        name: "  Praveen",
        comment: "Its a good video I can watch it all the day",
      },
      {
        name: "  Praveen",
        comment: "Its a good video I can watch it all the day",
      },
      {
        name: "  Praveen",
        comment: "Its a good video I can watch it all the day",
      },
    ],
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
    replies: [
      {
        name: "  Praveen",
        comment: "Its a good video I can watch it all the day",
      },
      {
        name: "  Praveen",
        comment: "Its a good video I can watch it all the day",
      },
      {
        name: "  Praveen",
        comment: "Its a good video I can watch it all the day",
      },
    ],
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
  {
    name: "  Praveen",
    comment: "Its a good video I can watch it all the day",
  },
];

const CommentsContainer = () => {
  return (
    <div className="w-[940px]">
      <h1 className="py-3 px-2 text-xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
