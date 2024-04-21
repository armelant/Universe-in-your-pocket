import React, { useState } from "react";
import InputField from "../InputField/InputField";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration">
      <div className="create_acc">Create new account</div>
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
      <button className="create_btn">Create</button>
    </div>
  );
};

export default Register;
