import React from "react";

const Image = ({ data }) => {
  const { url, source, description } = data;
  return (
    <a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      className="image"
    >
      <figure>
        <img src={url} alt={description} />
        <figcaption>{description}</figcaption>
      </figure>
    </a>
  );
};

const Images = ({ data }) => {
  if (data.images.length === 0)
    return (
      <div className="images">Please enter a keyword to search images.</div>
    );
  if (data.images.message)
    return <div className="images">{data.images.message}</div>;
  return (
    <div className="images">
      {data.images.map((i, index) => (
        <Image key={index} data={i} />
      ))}
    </div>
  );
};

export default Images;
