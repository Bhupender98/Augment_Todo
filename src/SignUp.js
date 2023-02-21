import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("abc");
  const [phone, setPhone] = useState(1234567890);
  const [email, setEmail] = useState("abc@123gmail.com");
  const [password, setPassword] = useState("abcdefg");

  const user = { name, phone, email, password };
    const handleRegister = (e) => {
      e.preventDefault();
    localStorage.setItem("register", JSON.stringify(user));
  }

  return (
    <div className="login-sign">
      <div className="signup">
        <div className="register center-item">Register</div>
        <div className="name">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="email">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Email"
          />
        </div>
        <div className="phone">
          <input
            type="number"
            name="phone"
            value={phone}
            placeholder="Enter Phone"
            onChange={(e) => {
              setPhone(e.target.value);
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
        <button onClick={handleRegister}  className="btn">
          {
            <Link to="/signin" >
              Register
            </Link>
          }
        </button>
      </div>
      <p>
        Already have an account? <Link to="/signin">Login Now</Link>
      </p>
    </div>
  );
};

export default SignUp;
