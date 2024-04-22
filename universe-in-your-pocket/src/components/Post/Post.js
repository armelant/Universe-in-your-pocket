import React from "react";

const Post = ({ title, text, imageUrl }) => {
  return (
    <div className="post-block" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="container">
        <div className="post-block_overlay" />
        <div className="post-block_center">
          <h1>{title}</h1>
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default Post;
