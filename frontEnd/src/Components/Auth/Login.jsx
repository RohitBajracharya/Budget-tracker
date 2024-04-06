import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";
import "./LoginSignup.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/login",
        {
          email,
          password,
        }
      );
      const { message } = response.data;
      console.log(response);
      const { accessToken } = response.data.data;

      Cookies.set("accessToken", accessToken, { expires: 7 });
      toast(message);
      navigate("/");
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="inputs">
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
            Login
          </button>
          <div className="divider"></div>
          <div className="have-account-container">
            Don't Have An Account?{" "}
            <Link to="/signup" className="login">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
