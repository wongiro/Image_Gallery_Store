import ReactDOM from "react-dom/client";
import React, { useState } from "react";

import { Outlet, Link } from "react-router-dom";

import "./login.css";

function Login() {
  return (
    <div className="content">
      <header>Snap Store</header>
      <form action="#">
        <div className="field">
          <input type="text" required placeholder="Enter Email" />
        </div>
        <div className="field space">
          <input
            type="password"
            required
            placeholder="Password"
            className="pass-key"
          />
        </div>
        <div className="pass">
          <Link to="/reset">Forgot Password</Link>?
        </div>
        <div className="field">
          <input type="submit" value="Log in" />
        </div>
      </form>
      <div className="pass">
        <p>Don't have an account?</p>
        <Link to="/signup">Sign Up</Link>.
      </div>
    </div>
  );
}

export default Login;
