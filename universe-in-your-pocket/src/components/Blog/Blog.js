import React from "react";

const Blog = ({ title, text, user, imageUrl, timestamps }) => {
  return (
    <div className="post">
      <img src={imageUrl} alt="sunImg" className="image" />
      <div className="text">
        <div className="text-container">
          <h2 className="title">{title}</h2>
          <p className="user-info">{user ? user.fullName : ""}</p>
          <p className="summary">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
