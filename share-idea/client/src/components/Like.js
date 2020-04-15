import React from "react";

const Like = ({ id, likes, setIdeaInfo }) => {
  const handleClick = async () => {
    const result = await fetch(`/api/ideas/${id}/likes`, {
      method: "post",
    });
    const json = await result.json();
    setIdeaInfo(json);
  };
  return (
    <>
      <div>
        <button onClick={handleClick}>Like</button>
        <p>This idea has been liked {likes} times.</p>
      </div>
    </>
  );
};

export default Like;
