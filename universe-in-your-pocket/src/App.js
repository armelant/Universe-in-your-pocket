import { Route, Routes } from "react-router-dom";
import auth from "./utils/auth.js";
import api from "./utils/api.js";
import { useState, useEffect } from "react";
import "./styles/main.css";
import Main from "./components/Main/Main.js";
import Header from "./components/Header/Header.js";
import News from "./components/News/News.js";
import Blogs from "./components/Blogs/Blogs.js";
import Register from "./components/Register/Register.js";
import Authorization from "./components/Authorization/Authorization.js";

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      Promise.all([api.getPersonalInformation(jwt), api.getPosts()])
        .then(([userData, postsData]) => {
          setIsAuthorized(true);
          setUserName(userData.fullName);
          setPosts(postsData);
          setUserId(userData._id);
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("jwt");
        });
    }
  }, [isAuthorized]);

  const handleRegistration = ({ fullName, email, password }) => {
    auth
      .registration({ fullName, email, password })
      .then((res) => {
        if (res) {
          setIsAuthorized(true);
        } else {
          Promise.reject(`Error ${res}`);
        }
      })
      .catch((error) => {
        if (error === 500 || "Failed to fetch")
          return console.log("An error occurred on the server");
        if (error === 400)
          return console.log("All required fields must be filled");
        console.log(error);
      });
  };

  const handleAuthorization = (data) => {
    auth
      .authorize(data)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        localStorage.setItem("userId", res._id);
        setIsAuthorized(true);
      })
      .catch((error) => {
        setIsAuthorized(false);
        if (error === 500 || "Failed to fetch")
          return console.log("An error occurred on the server");
        if (error === 400)
          return console.log("All required fields must be filled");
        if (error === 401)
          return console.log(
            "You have entered an incorrect login or password."
          );
        console.log(error);
      });
  };

  // Create post
  const handleCreatePost = (post) => {
    api
      .createPost(post)
      .then((newPost) => {
        setPosts([newPost, ...posts]);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error creating post: " + error.message);
      });
  };

  const logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    setIsAuthorized(false);
    setUserName("");
    setPosts([]);
  };

  return (
    <div>
      <Header isAuthorized={isAuthorized} logOut={logOut} />
      <Routes>
        <Route
          path="/"
          element={<Main isAuthorized={isAuthorized} userName={userName} />}
        />
        <Route path="/news" element={<News />} />
        {isAuthorized && (
          <Route
            path="/blog"
            element={
              <Blogs
                posts={posts}
                handleCreatePost={handleCreatePost}
                userId={userId}
              />
            }
          />
        )}
        <Route
          path="/registration"
          element={<Register onRegister={handleRegistration} />}
        />
        <Route
          path="/authorization"
          element={<Authorization onAuthorized={handleAuthorization} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
