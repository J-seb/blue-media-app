import React, { useEffect, useState } from "react";
import ProfileInfo from "./profileInfo";
import NavBar from "./navbar";
import CreatePost from "./createPost";
import logout from "../services/logout";
import { updateUser, deleteUser } from "../services/firebaseFirestore";
import deleteUserAuth from "../services/deleteUser";
import { Redirect } from "react-router";
import AccordionApi from "./accordion";

import Post from "./post";

const Profile = (props) => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    console.log("userProfile mounted");
    const obj = JSON.parse(localStorage.getItem("user"));
    setUserProfile({ ...obj });
  }, []);

  const onLogout = async () => {
    await logout();
    localStorage.removeItem("user");
    window.location = "/login";
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    console.log(userProfile);
    const elements = e.target.parentElement;

    const obj = {
      fullname: elements[0].value,
      city: elements[1].value,
      address: elements[2].value,
      phone: elements[3].value,
      birthday: elements[4].value,
    };

    const oldState = { ...userProfile };

    console.log(userProfile);
    setUserProfile({
      ...oldState,
      ...obj,
    });

    updateUserLocalFirebase({ ...oldState, ...obj });
  };

  const updateUserLocalFirebase = async (obj) => {
    console.log(obj);
    const userString = JSON.stringify(obj);
    console.log(userString);
    localStorage.setItem("user", userString);

    await updateUser(obj.id, obj);
  };

  const onHandleDelete = () => {
    const id = userProfile.id;
    deleteUserLocalFirebase(id);
  };

  const deleteUserLocalFirebase = async (id) => {
    await deleteUser(id);
    await deleteUserAuth();
    localStorage.removeItem("user");
    setUserProfile({});
  };

  const onSearch = async () => {};

  const onHandlePost = async (e) => {
    e.preventDefault();

    const textarea = e.target.parentElement.children[0];
    const postText = textarea.value;
    const actualDate = new Date().getTime();

    const actualUser = { ...userProfile };
    const id = actualUser.posts.length;
    actualUser.posts.push({ actualDate, postText, id });

    updateUserLocalFirebase({ ...actualUser });
    setUserProfile({ ...actualUser });

    e.target.parentElement.children[0].value = "";
  };

  const activeSession = localStorage.getItem("user");
  console.log(userProfile);
  if (!activeSession) {
    return <Redirect to="/login" />;
  }

  const { posts, fullname, avatar } = userProfile;

  return (
    <>
      <NavBar logout={onLogout} search={onSearch} />
      <div className="container">
        <ProfileInfo
          info={userProfile}
          handleSubmit={(e) => onHandleSubmit(e)}
          handleDelete={onHandleDelete}
        />

        <AccordionApi />
        <CreatePost handleClick={onHandlePost} />
        <hr className="hr-post-section" />
        <h3 className="post-title">Your Posts</h3>
        <div>
          {posts ? (
            posts.map((post) => (
              <Post post={post} name={fullname} avatar={avatar} />
            ))
          ) : (
            <h3>No posts yet!</h3>
          )}
        </div>
        <Post />
      </div>
    </>
  );
};
export default Profile;
