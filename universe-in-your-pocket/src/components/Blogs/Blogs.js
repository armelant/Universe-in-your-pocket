import React from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ posts }) => {
  return (
    <main className="main">
      <div>
        {posts.map((data, index) => {
          console.log(data);
          return (
            <Blog
              key={index}
              title={data.title}
              text={data.text}
              user={data.user}
              imageUrl={data.imageUrl}
              timestamps={data.timestamps}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Blogs;
