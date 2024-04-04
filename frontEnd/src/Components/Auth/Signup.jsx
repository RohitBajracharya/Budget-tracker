import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./LoginSignup.css";

export const SignUp = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("localhost:5001/api/users/signup", { fullName, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit} method="post">
        <div className="inputs">
          <div className="input">
            <img src="images/person.png" alt="" />
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="input">
            <img src="images/email.png" alt="" />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src="images/password.png" alt="" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="submit-container">Sign Up</div>
        <div className="divider"></div>
        <div className="have-account-container">
          Already Have An Account?{" "}
          <span>
            <Link to="/login" className="login">
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};
