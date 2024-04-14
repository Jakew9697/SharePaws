// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Make sure the file name matches the actual CSS file name
import Notifications from "./Notifications"; // Import the Notifications component

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="/images/SharePawsLogo.png"
            alt="SharePaws Logo"
            style={{ height: "80px" }}
          />
        </Link>
        <div className="navbar-nav mx-auto">
          <Link className="nav-item nav-link mx-2" to="/create-post">
            <img
              src="/images/CreatePostIcon.png"
              alt="Create Post"
              style={{ width: "80px", height: "80px" }}
            />
          </Link>
        </div>
        <div className="navbar-nav ms-auto">
          <Link className="nav-item nav-link mx-2" to="/add-friends">
            <img
              src="/images/AddFriendsIcon.png"
              alt="Add Friends"
              style={{ width: "80px", height: "80px" }}
            />
          </Link>
          <div className="notification-icon-container">
            <Notifications />
          </div>
          <Link className="nav-link" to="/user-page">
            <img
              src="/images/ProfilePic.png"
              alt="User Profile"
              className="rounded-circle"
              style={{ width: "80px", height: "80px" }}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
