import { Route, Routes } from "react-router-dom";
import auth from "./utils/auth.js";
import api from "./utils/api.js";
import { useState, useEffect } from "react";
import "./styles/main.css";
import Main from "./components/Main/Main.js";
import Header from "./components/Header/Header.js";
import News from "./components/News/News.js";
import Register from "./components/Register/Register.js";
import Authorization from "./components/Authorization/Authorization.js";

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .getPersonalInformation(jwt)
        .then((userData) => {
          setIsAuthorized(true);
          setUserName(userData.fullName);
          setUserEmail(userData.email);
          console.log(userName);
          console.log(userEmail);
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("jwt");
        });
    }
  }, [userEmail, userName]);

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
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
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
