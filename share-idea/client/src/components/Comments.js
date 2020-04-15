import React from "react";

const Comments = ({ comments }) => {
  if (!comments || comments.length === 0) return <p>No comments available.</p>;
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index}>
          <h4>{comment.username}</h4>
          <p>{comment.message}</p>
        </div>
      ))}
    </>
  );
};

export default Comments;
