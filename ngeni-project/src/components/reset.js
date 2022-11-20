import "./reset.css";
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";

function Reset() {
  return (
    <div>
      <div className="topHeader">
        <header>Snap Store</header>
      </div>
      <div className="content">
        <h2>Trouble logging in?</h2>
        <br />
        <p>
          Enter your email, phone, or username and new password to reset
          password.
        </p>
        <form action="#">
          <div className="field">
            <input
              type="text"
              required
              placeholder="Email, Phone, or Username"
            />
          </div>
          <div className="field">
            <input type="text" required placeholder="Newpassword" />
          </div>
          <div className="field">
            <input type="text" required placeholder="Re-enter new password" />
          </div>
          <div className="field">
            <input type="submit" value="Reset password" />
          </div>
        </form>
        <div>
          <p>OR</p>
        </div>
        <br />
        <div className="pass">
          <Link to="/signup">Create new account</Link>.
        </div>
        <br />
        <div className="pass">
          <Link to="/login">Back to login</Link>.
        </div>
      </div>
    </div>
  );
}

export default Reset;
