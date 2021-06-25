import React, { useState } from "react";
import FormSignUp from "./formSignUp";
import { Link } from "react-router-dom";
import signup from "../services/signup";
import { createUser } from "../services/firebaseFirestore";
import { Redirect } from "react-router";
import avatarDefaultMale from "../services/userAvatarMaleWebp";
import avatarDefaultFemale from "../services/userAvatarFemaleWebp";

import swal from "sweetalert";

const SignUp = (props) => {
  const [profile, setProfile] = useState({
    email: "",
    password: "",
    fullname: "",
    gender: "male",
  });

  const { email, password, fullname, gender } = profile;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signup(email, password);

      const avatarUser =
        gender === "male" ? avatarDefaultMale : avatarDefaultFemale;

      await createUser(email, fullname, gender, result.user.uid, avatarUser);
      // console.log(result);
      const profile = {
        id: result.user.uid,
        email,
        fullname,
        birthday: "",
        city: "",
        address: "",
        phone: "",
        gender,
        avatar: avatarUser,
        posts: [],
      };

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

  const onHandleChange = ({ target }) => {
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
          <h2 className="login-signup-sub">Sign Up</h2>
          <FormSignUp
            submit={onSubmit}
            handleChange={onHandleChange}
            profile={profile}
          />
          <Link to="/login" className="login-signup-link">
            Do you have an account?
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

export default SignUp;
