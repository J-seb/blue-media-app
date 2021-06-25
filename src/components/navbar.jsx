import React from "react";
import Input from "./common/input";

function NavBar({ logout }) {
  return (
    <div className="nav-container">
      <ul className="nav-ul">
        <li className="nav-li">
          <svg className="nav-icon">
            <use href="./icons/favicon.svg#network"></use>
          </svg>
        </li>
        <li className="nav-li">
          <Input
            className="nav-search"
            placeholder="Type to search someone..."
          />
        </li>
        <li className="nav-li">
          <span className="nav-icon signout" onClick={logout}>
            <i className="fa fa-sign-out " aria-hidden="true"></i>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
