import React, { useState } from "react";
import InputField from "../InputField/InputField";

const Authorization = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="authorization">
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
      <button className="login_btn">Login</button>
    </div>
  );
};

export default Authorization;
