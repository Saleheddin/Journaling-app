import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { isLoginPage, isWorkSpace } from "../../utils/utils";

function Navbar() {

  const navigate = useNavigate();

  // Don't render the navbar on the login page
  if (isLoginPage(location.pathname) || isWorkSpace(location.pathname)) {
    return null;
  }
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Journaling
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link id="link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link id="link" to="/">Features</Link>
            </li>
            <li className="nav-item">
              <Link id="link" to="/">Features</Link>
            </li>
          </ul>
          <div className="cta">
            <button id="login-btn" onClick={() => navigate("/login")}>Login</button>
            {/* <button id="signup-btn">Signup</button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
