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
  const [userEmail, setUserEmail] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      Promise.all([api.getPersonalInformation(jwt), api.getPosts()])
        .then(([userData, postsData]) => {
          setIsAuthorized(true);
          setUserName(userData.fullName);
          setUserEmail(userData.email);
          setPosts(postsData);
          console.log(userName);
          console.log(userEmail);
          console.log(posts);
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  const handleRegistration = ({ fullName, email, password }) => {
    auth
      .registration({ fullName, email, password })
      .then((res) => {
        if (res) {
          console.log(res);
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
        console.log(res);
        localStorage.setItem("jwt", res.token);
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

  return (
    <div>
      <Header isAuthorized={isAuthorized} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        {isAuthorized && (
          <Route path="/blog" element={<Blogs posts={posts} />} />
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
