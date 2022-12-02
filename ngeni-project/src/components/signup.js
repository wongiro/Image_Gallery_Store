import "./signup.css";
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../config/firebase";

function SignUp() {
  const auth = getAuth(app);
  const [ email, setEmail] = useState("")
  const [ password, setPassword] = useState("")

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Successfully created an account")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert("Error while creating an account")
        //const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="content">
      <header>Snap Store</header>
      <p>Sign up to see photos from your friends</p>
      <form action="#">
        <div className="field">
          <input type="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <input type="text" required placeholder="Full Name" />
        </div>
        <div className="field">
          <input type="text" required placeholder="Username" />
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
        <div>
          <p>
            By signing up, you agree to our{" "}
            <span>Terms , Privacy Policy and Cookies Policy</span> .
          </p>
        </div>
        <div className="field">
          <input type="submit" value="Sign up" onClick={signUp}/>
        </div>
        <div className="pass">
          Have an account? <Link to="/login">Log in</Link>.
        </div>
      </form>
    </div>
  );
}

export default SignUp;
