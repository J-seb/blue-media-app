import ModalForm from "./modal";
import React, { useState } from "react";

const ProfileInfo = ({ info, handleSubmit, handleDelete }) => {
  const [modalShow, setModalShow] = useState(false);

  const { address, gender, city, birthday, email, fullname, phone, avatar } =
    info;

  return (
    <>
      <div className="container-header">
        <div>
          <img
            src={!avatar ? "" : "data:image/webp;base64," + avatar}
            alt="avatar-user"
            className="img-avatar"
          />
          <h1 className="profile-name">{fullname}</h1>
        </div>
        <div className="container-profile">
          <div className="container-profile-header">
            <p>
              <i
                className="icon-profile-info fa fa-home"
                aria-hidden="true"
              ></i>
              Lives in:
            </p>
            <p>
              <i
                className="icon-profile-info fa fa-map-marker"
                aria-hidden="true"
              ></i>
              Address:
            </p>
            <p>
              <i
                className="icon-profile-info fa fa-phone"
                aria-hidden="true"
              ></i>
              Phone:
            </p>
            <p>
              <i
                className="icon-profile-info fa fa-birthday-cake"
                aria-hidden="true"
              ></i>
              Birthday:
            </p>
            <p>
              <i
                className="icon-profile-info fa fa-envelope"
                aria-hidden="true"
              ></i>
              Email:
            </p>
            <p>
              <i
                className="icon-profile-info fa fa-id-badge"
                aria-hidden="true"
              ></i>
              Gender:
            </p>
          </div>
          <div className="container-profile-content">
            <p>{city || <span>&nbsp;</span>}</p>
            <p>{address || <span>&nbsp;</span>}</p>
            <p>{phone || <span>&nbsp;</span>}</p>
            <p>{birthday || <span>&nbsp;</span>}</p>
            <p>{email || <span>&nbsp;</span>}</p>
            <p>{gender || <span>&nbsp;</span>}</p>
          </div>
        </div>
        <button className="button-profile button-chat">
          <i
            className="fa fa-commenting-o icon-profile-info"
            aria-hidden="true"
          ></i>
          Chat
        </button>
        <button
          className="button-profile button-edit"
          onClick={() => setModalShow(true)}
        >
          <i className="fa fa-pencil icon-profile-info" aria-hidden="true"></i>
          Edit Profile
        </button>
        <ModalForm
          show={modalShow}
          onHide={() => setModalShow(false)}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default ProfileInfo;
