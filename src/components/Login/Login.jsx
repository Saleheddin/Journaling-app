import React, { useEffect } from "react";
import "./Login.css";

function Login({hideNavbar}){
  //this will be called when the login component is rendered
  useEffect(() => {
    hideNavbar();
  }, []);

  return (
    <div className="login">
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>LOGIN</h2>
            <div className="underline-title"></div>
          </div>
          <form method="post" className="form">
            <label htmlFor="user-email" style={{ paddingTop: "13px" }}>
              &nbsp;Email
            </label>
            <input
              id="user-email"
              className="form-content"
              type="email"
              name="email"
              autoComplete="on"
              required
            />
            <div className="form-border"></div>
            <label htmlFor="user-password" style={{ paddingTop: "22px" }}>
              &nbsp;Password
            </label>
            <input
              id="user-password"
              className="form-content"
              type="password"
              name="password"
              required
            />
            <div className="form-border"></div>
            <a href="/">
              <legend id="forgot-pass">Forgot password?</legend>
            </a>
            <button id="submit-btn" type="submit" name="submit">LOGIN</button>
            <a href="/" id="signup">
              Don't have account yet?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
