import React from "react";
import { DateTime } from "luxon";

function Post({ post, name, avatar }) {
  if (post) {
    const newDate = new Date().getTime();
    const diff = newDate - post.actualDate;

    return (
      <div className="post-container grid">
        <img
          src={"data:image/webp;base64," + avatar}
          alt="avatar-user"
          className="post-avatar"
        />

        <div className="post-container-body">
          <h4 className="post-profile-header">{name}</h4>
          <p className="post-profile-content">
            {DateTime.now().setLocale("en").minus(diff).toRelative()}
          </p>
          <p className="post-profile-content">{post.postText}</p>
          <div className="post-likes-container">
            <div>
              <span>34</span>
              <button className="btn-new-post">
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
              </button>
            </div>
            <div>
              <span>23</span>
              <button className="btn-new-post">
                <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <button className="btn-new-post btn-post-edit">
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default Post;
