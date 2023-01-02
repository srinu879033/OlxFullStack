import React from "react";
import "./SignUpPage.css";
import Logo from "../../assets/images/olx-logo.png";
import { useState } from "react";
import axios from "../../axios";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    mailId: "",
    name: "",
  });

  const onChangeUsername = (event) => {
    setUserData({ ...userData, username: event.target.value });
  };

  const onChangeEmail = (event) => {
    setUserData({ ...userData, mailId: event.target.value });
  };

  const onChangeName = (event) => {
    setUserData({ ...userData, name: event.target.value });
  };

  const onChangePassword = (event) => {
    setUserData({ ...userData, password: event.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (userData.username === "") {
      alert("Username is Required");
    } else if (userData.mailId === "") {
      alert("Email is Required");
    } else if (userData.name === "") {
      alert("Name is Required");
    } else if (userData.password === "") {
      alert("Password is Required");
    } else {
      try {
        const result = await axios.post("signup/", userData);
        alert("User Created Successfully");
      } catch (err) {
        alert(err.message);
      }
    }
  };

  return (
    <div>
      <div>
        <div className="signupParentDiv">
          <img width="200px" height="200px" src={Logo}></img>
          <form onSubmit={submitForm}>
            <label htmlFor="username">Username</label>
            <br />
            <input
              className="input"
              type="text"
              id="username"
              name="name"
              placeholder="Enter your username here"
              value={userData.username}
              onChange={onChangeUsername}
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email here"
              value={userData.mailId}
              onChange={onChangeEmail}
            />
            <br />
            <label htmlFor="lname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name here"
              value={userData.name}
              onChange={onChangeName}
            />

            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password here"
              value={userData.password}
              onChange={onChangePassword}
            />
            <br />
            <br />
            <button>Signup</button>
          </form>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
