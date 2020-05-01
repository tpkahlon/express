import React from "react";
import Inspector from "react-json-inspector";

const Data = ({ data }) => {
  if (!data.content || data.content.length === 0)
    return (
      <>
        <div>
          Welcome to WP-API. Please use site name like <code>test.com</code>{" "}
          without <code>http://</code> and do not add trailing slash after{" "}
          <code>.com</code>.
        </div>
        <div>No data provided yet.</div>
      </>
    );
  return (
    <div>
      <Inspector data={data.content} />
    </div>
  );
};

export default Data;
