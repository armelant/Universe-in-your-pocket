import React, { useState } from "react";

const AddBlogPage = ({ handleCreatePost, userId }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    if (!userId) {
      alert("User must be logged in to create a post.");
      return;
    }

    e.preventDefault();
    handleCreatePost({
      title: title,
      text: text,
      imageUrl: imageUrl,
      user: userId,
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create New Post</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="form-input"
          type="text"
          placeholder="Title"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="form-input"
          type="url"
          placeholder="Image URL"
          value={imageUrl}
          name="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <textarea
          className="form-input form-textarea"
          type="text"
          placeholder="Text"
          value={text}
          name="text"
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit" className="form-button">
          Publish
        </button>
      </form>
    </div>
  );
};

export default AddBlogPage;
