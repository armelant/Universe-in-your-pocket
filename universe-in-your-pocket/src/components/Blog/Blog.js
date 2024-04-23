import React from "react";

const Blog = ({ title, text, user, imageUrl, timestamps }) => {
  return (
    <div className="post">
      {/* <div className="image">
        <img src={require(`${imageUrl}`)} alt="sunImg" className="sunImg" />
      </div> */}
      <div className="text">
        <div className="white-background">
          <h2>{title}</h2>
          <p className="info">
            {/* <a className="author">{user}</a> */}
            {/* <time>{timestamps}</time> */}
          </p>
          <p className="summary">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
