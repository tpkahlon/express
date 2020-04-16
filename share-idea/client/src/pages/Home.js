import React, { useState } from "react";

const Home = () => {
  const initialIdeaState = { name: "" };
  const [data, setData] = useState(initialIdeaState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = e.target.elements;
    if (name.value.trim() === "") {
      alert(`Please enter a name for your idea.`);
      setData(initialIdeaState);
      return;
    }
    const sendIdea = async () => {
      const req = await fetch(`/api/ideas`, {
        method: "post",
        body: JSON.stringify({
          name: name.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await req.status;
      if (result === 200) {
        setData(initialIdeaState);
        alert(`Your idea "${data.name}" has been added successfully!`);
      } else {
        alert(`Something went wrong, please try later.`);
      }
    };
    sendIdea();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <h1>Share Ideas!</h1>
          <p>
            Welcome to Share Ideas! Share what you are thinking and let us
            discuss on those ideas further!
          </p>
          <form onSubmit={handleSubmit}>
            <input
              value={data.name}
              onChange={handleChange}
              type="text"
              placeholder="Share your idea..."
              name="name"
              required
            />
            <button type="submit">Submit Idea</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
