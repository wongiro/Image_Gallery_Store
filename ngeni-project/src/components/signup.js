import "./signup.css";
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="content">
      <header>Snap Store</header>
      <p>Sign up to see photos from your friends</p>
      <form action="#">
        <div class="field">
          <input type="text" required placeholder="Mobile Number or Email" />
        </div>
        <div class="field">
          <input type="text" required placeholder="Full Name" />
        </div>
        <div class="field">
          <input type="text" required placeholder="Username" />
        </div>
        <div class="field space">
          <input
            type="password"
            required
            placeholder="Password"
            class="pass-key"
          />
        </div>
        <div>
            <p>
            By signing up, you agree to our <span>Terms , Privacy Policy and Cookies Policy</span> .
            </p>
        </div>
        <div className="field">
          <input type="submit" value="Sign up" />
        </div>
        <div className="pass">
            Have an account? <Link to="/login">Log in</Link>.
        </div>
      </form>
    </div>
  );
}

export default SignUp;
