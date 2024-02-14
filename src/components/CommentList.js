import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment commentinfo={comment} />
      <div className="pl-5 border-l-2">
        {comment.replies && <CommentList comments={comment.replies} />}
      </div>
    </div>
  ));
};

export default CommentList;
