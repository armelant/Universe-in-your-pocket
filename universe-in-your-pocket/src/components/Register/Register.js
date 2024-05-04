import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField/InputField";

const Register = ({ onRegister }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the browser from following the form's address

    onRegister({
      // Pass the values of the controlled components to the external handler
      fullName: fullName,
      email: email,
      password: password,
    });

    navigate("/authorization");
  }
  return (
    <main className="main">
      <h1 className="mainTitle">Join Us!</h1>
      <div className="registration">
        <form onSubmit={handleSubmit}>
          <div className="create_acc">Create new account</div>
          <InputField
            value={fullName}
            setValue={setFullName}
            type="text"
            placeholder="Enter your full name..."
          />
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
          <button type="submit" className="submit_btn">
            Create
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
