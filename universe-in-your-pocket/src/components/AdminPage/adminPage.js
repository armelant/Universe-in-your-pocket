import React, { useState } from "react";

const NewsCRUDPage = ({ handleCreateNews }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const admin_jwt = localStorage.getItem("admin_jwt");
  const [newsIdToDelete, setNewsIdToDelete] = useState(""); // State for news ID to delete
  const [newsToEdit, setNewsToEdit] = useState({ id: "", title: "", text: "", imageUrl: "" });

  const handleSubmit = (e) => {
    if (!admin_jwt) {
      alert("User must be logged in to create a News.");
      return;
    }

    e.preventDefault();

    const userId = localStorage.getItem("userId");
    const requestBody = {
      title: title,
      text: text,
      imageUrl: imageUrl,
      user: userId,
    };

    console.log("Request URL:", e.target.action);
    console.log("Request Method:", e.target.method);
    console.log("Request Body:", JSON.stringify(requestBody));
    console.log("Bearer Token:", admin_jwt);

    handleCreateNews(requestBody);
  };

  const handleDeleteNews = async (e) => {
    e.preventDefault();

    if (!newsIdToDelete) {
      alert("Please enter a valid news ID to delete.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/news/${newsIdToDelete}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin_jwt}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete news: ${response.statusText}`);
      }

      alert("News deleted successfully!");
      setNewsIdToDelete(""); 
    } catch (error) {
      console.error("Error deleting news:", error);
      alert("An error occurred while deleting news. Please try again.");
    }
  };

  const handleEditNews = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/news/${newsToEdit.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin_jwt}`,
        },
        body: JSON.stringify(newsToEdit),
      });

      if (!response.ok) {
        throw new Error(`Failed to edit news: ${response.statusText}`);
      }

      alert("News edited successfully!");
      setNewsToEdit({ id: "", title: "", text: "", imageUrl: "" }); 
    } catch (error) {
      console.error("Error editing news:", error);
      alert("An error occurred while editing news. Please try again.");
    }
  };

  return (
    <>
    <div className="page" role="main" aria-label="News CRUD Page">
      <h1 className="mainTitle">Admin Page</h1>
      <div className="form-container">
        <h2 className="form-title">Create New News</h2>
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

        {/* Delete News Section */}
        <h2 className="form-title">Delete News</h2>
        <form onSubmit={handleDeleteNews} className="form">
          <input
            className="form-input"
            type="String"
            placeholder="News ID"
            value={newsIdToDelete}
            name="newsIdToDelete"
            onChange={(e) => setNewsIdToDelete(e.target.value)}
            required
          />
          <button type="submit" className="form-button">
            Delete News
          </button>
        </form>

      {/* Edit News Section */}
      <h2 className="form-title">Edit News</h2>
        <form onSubmit={handleEditNews} className="form">
          <input
            className="form-input"
            type="text"
            placeholder="News ID"
            value={newsToEdit.id}
            onChange={(e) => setNewsToEdit({ ...newsToEdit, id: e.target.value })}
            required
          />
          <input
            className="form-input"
            type="text"
            placeholder="Title"
            value={newsToEdit.title}
            onChange={(e) => setNewsToEdit({ ...newsToEdit, title: e.target.value })}
            required
          />
          <textarea
            className="form-input form-textarea"
            type="text"
            placeholder="Text"
            value={newsToEdit.text}
            onChange={(e) => setNewsToEdit({ ...newsToEdit, text: e.target.value })}
            required
          />
          <input
            className="form-input"
            type="url"
            placeholder="Image URL"
            value={newsToEdit.imageUrl}
            onChange={(e) => setNewsToEdit({ ...newsToEdit, imageUrl: e.target.value })}
            required
          />
          <button type="submit" className="form-button">
            Edit News
          </button>
        </form>
      </div>
    </div>
    </>
  );
};


export default NewsCRUDPage;
