import React from "react";

function CreatePost({ handleClick }) {
  return (
    <form>
      <div className="new-post-container">
        <textarea placeholder="What do you think?" className="post-textarea" />
        <button
          className="btn-post"
          type="submit"
          onClick={(e) => handleClick(e)}
        >
          Create Post
        </button>
      </div>
    </form>
  );
}

export default CreatePost;
