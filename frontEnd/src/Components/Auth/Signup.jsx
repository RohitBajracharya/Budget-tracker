import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";
import "./LoginSignup.css";

export const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/signup",
        {
          fullName,
          email,
          password,
        }
      );
      const { message } = response.data;
      toast(message);
      navigate("/login");
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message);
    }
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
              name="fullName"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="input">
            <img src="images/email.png" alt="" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src="images/password.png" alt="" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="submit-container no-underline">
          Sign Up
        </button>
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

export default SignUp;
