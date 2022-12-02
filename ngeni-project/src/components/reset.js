import "./reset.css";
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import app from "../config/firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function Reset() {

const auth = getAuth(app);
const [email, setEmail] = useState("")

const resetPassword = () => {
  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    alert("Email sent")
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    alert("Email doesnt exist")
    //const errorMessage = error.message;
    // ..
  });
}


  return (
    <div>
      <div className="content">
      <header>Snap Store</header>
        <h2>Trouble logging in?</h2>
        <br />
        <p>
        Enter your email, phone, or username and we'll send you a link to get back into your account.
        </p>
        <form action="#">
          <div className="field">
            <input
              type="email"
              required
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <input type="submit" value="Reset password" onClick={resetPassword}/>
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
