import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField/InputField";

const adminLogin = ({ onLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the browser from following the form's address

    onLoggedIn({
      // Pass the values of the controlled components to the external handler
      email: email,
      password: password,
    });

    navigate("/");
  }

  return (
    <main className="main">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label className="login_acc">Login to your account</label>
          <InputField
            value={email}
            setValue={setEmail}
            type="text"
            placeholder="Enter email..."
          />
          <InputField
            value={password}
            setValue={setPassword}
            type="password"
            placeholder="Enter password..."
          />
          <button className="submit_btn">Login</button>
        </form>
      </div>
    </main>
  );
};

export default adminLogin;
