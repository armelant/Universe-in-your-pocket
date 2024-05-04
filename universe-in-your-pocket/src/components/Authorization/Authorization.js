import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField/InputField";


const Authorization = ({ onAuthorized }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the browser from following the form's address

    onAuthorized({
      // Pass the values of the controlled components to the external handler
      email: email,
      password: password,
    });

    navigate("/");
  }

  return (
    <main className="main" aria-label="Login Form">
      <h1 className="mainTitle">Log in to your account </h1>
      <div className="authorization">
        <form onSubmit={handleSubmit}>
          <label className="login_acc">Login</label>
          <InputField
            value={email}
            setValue={setEmail}
            type="text"
            placeholder="Enter email..."
            aria-label="Email"
          />
          <InputField
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="Enter password..."
            aria-label="Password"
          />
          <button className="submit_btn">Login</button>
        </form>
      </div>
    </main>
  );
};

export default Authorization;
