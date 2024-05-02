import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import auth from "../../utils/auth.js";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Email:", email);
    console.log("Password:", password);
    
    
    try {
      const response = await auth.adminAuthorization({ email, password });
      
      console.log("Server response:", response);

      localStorage.setItem("isAdmin", "true");
      
      navigate("/");
      
     
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="main">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label className="login_acc">Login in the account</label>
          <input
            type="text"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submit_btn">
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default AdminLogin;
