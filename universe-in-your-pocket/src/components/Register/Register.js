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
    <main className="main" aria-label="Registration Form">
      <div className="registration">
        <form onSubmit={handleSubmit}>
          <div className="create_acc">Create new account</div>
          <InputField
            value={fullName}
            setValue={setFullName}
            type="text"
            placeholder="Enter your full name..."
            aria-label="Full Name"
          />
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
          <button type="submit" className="submit_btn">
            Create
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
