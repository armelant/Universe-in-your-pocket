import React from "react";
import Blog from "../Blog/Blog";
import AddBlogPage from "../AddBlogPage/AddBlogPage";

const Blogs = ({ posts, handleCreatePost, userId }) => {
  return (
    <main className="main">
      <AddBlogPage handleCreatePost={handleCreatePost} userId={userId} />
      <div>
        {posts.length > 0 ? (
          posts.map((data, index) => {
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
          })
        ) : (
          <p>Posts not found</p>
        )}
      </div>
    </main>
  );
};

export default Blogs;
