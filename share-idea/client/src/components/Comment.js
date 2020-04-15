import React, { useState } from "react";

const Comment = ({ id, setIdeaInfo }) => {
  const initialCommentState = { username: "", message: "" };
  const [data, setData] = useState(initialCommentState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { message, username } = e.target.elements;
    if (message.value.trim() === "" || username.value.trim() === "") {
      alert(`Please enter a username and message to post a comment.`);
      setData(initialCommentState);
      return;
    }
    const sendComment = async () => {
      const result = await fetch(`/api/ideas/${id}/comments`, {
        method: "post",
        body: JSON.stringify({
          username: username.value,
          message: message.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const revisedIdea = await result.json();
      setIdeaInfo(revisedIdea);
      setData(initialCommentState);
    };
    sendComment();
  };
  return (
    <>
      <div>
        <h3>Add a comment</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <input
              value={data.username}
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Enter Username"
              required
            />
          </label>
          <label htmlFor="message">
            <textarea
              value={data.message}
              onChange={handleChange}
              name="message"
              type="text"
              placeholder="Enter message"
              required
            />
          </label>
          <button type="submit">Add a comment</button>
        </form>
      </div>
    </>
  );
};

export default Comment;
