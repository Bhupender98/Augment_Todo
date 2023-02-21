import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import Todo from "./Todo";

const SignIn = () => {
  const [email, setEmail] = useState("abc@gmail.com");
  const [password, setPassword] = useState("");
  const [adminclient, setAdminClient] = useState(false);
  // const [client, setClient] = useState(false);

  // handle submit the form for login user
  const handleSubmit = () => {
    console.log(email, password);
    const admin = JSON.parse(localStorage.getItem("register"));
    if (admin.email === email && admin.password === password) {
      console.log(admin);
      setAdminClient(true);
      return;
    }
    window.alert("Please enter correct email/password!!")
  };

  // handlle handlleClientData when users click on client
  const handlleClientData = () => {
    console.log("client button clicked!!");
    // setClient(true)
    
  };

  return (
    <div className="login-sign">
      <div className="signup">
        <div className="register center-item">Login</div>
        <div className="email">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="password">
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button onClick={handleSubmit} className="btn">
          Login
        </button>
      </div>
      <p>
        Already haven't an account? <Link to="/signup">Register Now</Link>
      </p>
      {adminclient && (
        <div className="admin-client">
          <button className="btn">Admin</button>
          <button className="btn" onClick={handlleClientData}>
             <Link to="/todo">Client</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
