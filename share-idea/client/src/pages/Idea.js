import React, { useState, useEffect } from "react";
import Listing from "../components/Listing";
import Comments from "../components/Comments";
import Comment from "../components/Comment";
import Like from "../components/Like";
import NotFound from "../pages/NotFound";

const Idea = ({ match }) => {
  const { id } = match.params;
  const [ideas, setIdeas] = useState([]);
  const [ideaInfo, setIdeaInfo] = useState({});
  useEffect(() => {
    try {
      const getData = async () => {
        const [getIdeas, getIdea] = await Promise.all([
          fetch(`/api/ideas`).then((d) => d.json()),
          fetch(`/api/ideas/${id}`).then((d) => d.json()),
        ]);
        setIdeas(getIdeas);
        setIdeaInfo(getIdea);
      };
      getData();
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, [id]);
  const currentIdea = ideas.find((i) => i._id === id);
  const otherIdeas = ideas.filter((i) => i._id !== id);
  if (!ideas || ideas.length === 0 || !currentIdea) return <NotFound />;
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <h1>{currentIdea.name}</h1>
          <Like id={id} likes={ideaInfo.likes} setIdeaInfo={setIdeaInfo} />
          <hr />
          <h2>Comment</h2>
          <Comments comments={ideaInfo.comments} />
          <Comment id={id} setIdeaInfo={setIdeaInfo} />
          <hr />
          <h2>Other Ideas</h2>
          <Listing list={otherIdeas} />
        </div>
      </div>
    </div>
  );
};

export default Idea;
