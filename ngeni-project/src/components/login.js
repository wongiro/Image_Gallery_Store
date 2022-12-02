import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../config/firebase";
import { Outlet, Link } from "react-router-dom";

import "./login.css";

function Login() {

  const auth = getAuth(app);
  const [ email, setEmail] = useState("")
  const [ password, setPassword] = useState("")

  const logIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Successfully signed in")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert("Error logging in")
        //const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="content">
      <header>Snap Store</header>
      <form action="#">
        <div className="field">
          <input type="email" required placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="field space">
          <input
            type="password"
            required
            placeholder="Password"
            className="pass-key"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="pass">
          <Link to="/reset">Forgot Password</Link>?
        </div>
        <div className="field">
          <input type="submit" value="Log in"  onClick={logIn}/>
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
