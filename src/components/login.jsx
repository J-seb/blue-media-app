import React, { useState, useEffect } from "react";
import FormLogin from "./formLogin";
import { Link } from "react-router-dom";
import login from "../services/login";
import { readUser } from "../services/firebaseFirestore";
import { Redirect } from "react-router";
import swal from "sweetalert";

const Login = (props) => {
  const [profile, setProfile] = useState({
    email: "",
    password: "",
  });

  const { email, password } = profile;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(email, password);
      const response = await readUser(result.user.uid);
      const profile = response.data();
      const stringProfile = JSON.stringify(profile);

      localStorage.setItem("user", stringProfile);

      swal({ title: "Welcome", icon: "success" }).then(() => {
        props.history.push("/");
        //window.location = "/";
      });
    } catch (e) {
      swal("Error", e.message, "error");
    }
  };

  const onHandleInputChange = ({ target }) => {
    setProfile({
      ...profile,
      [target.name]: target.value,
    });
  };

  const activeSession = localStorage.getItem("user");

  if (activeSession) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login-signup-container">
      <div className="login-signup grid grid-lg-4">
        <div className="login-signup-content">
          <svg className="login-signup-icon">
            <use href="./icons/favicon.svg#network"></use>
          </svg>
          <h1>Blue Media App</h1>
          <p>Your new social network.</p>
          <h2 className="login-signup-sub">Login</h2>
          <FormLogin
            submit={onSubmit}
            handleChange={onHandleInputChange}
            profile={profile}
          />
          <Link to="/signup" className="login-signup-link">
            Create a New Account
          </Link>
          <footer className="login-signup-footer">
            <p>Blue Media App - All Rights Reserved 2021</p>
          </footer>
        </div>
        <div className="grid-hide-content">
          <img
            src="./images/social-media-5187243_1920.webp"
            className="login-img"
            alt="loginImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
