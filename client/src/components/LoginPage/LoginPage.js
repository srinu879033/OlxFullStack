import React, { useState } from "react";
import Logo from "../../assets/images/olx-logo.png";
import "./LoginPage.css";
import axios from "../../axios";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ mailId: "", password: "" });

  const onChangeEmail = (event) => {
    setUserData({ ...userData, mailId: event.target.value });
  };
  const onChangePassword = (event) => {
    setUserData({ ...userData, password: event.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (userData.mailId === "") {
      alert("Email is Required");
    } else if (userData.password === "") {
      alert("Password is Required");
    } else {
      let result = null;
      try {
        result = await axios.post("/login", userData);
        localStorage.setItem("jwt_token", result.data.jwt_token);
        alert("Successfully Logged In");
        navigate("/");
      } catch (err) {
        alert(err.response.data.msg);
      }
    }
  };
  return (
    <div>
      <div>
        <div className="loginParentDiv">
          <img width="200px" height="200px" src={Logo}></img>
          <form onSubmit={submitForm}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email Here"
              value={userData.mailId}
              onChange={onChangeEmail}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password here"
              value={userData.password}
              onChange={onChangePassword}
            />
            <br />
            <br />
            <button>Login</button>
          </form>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
