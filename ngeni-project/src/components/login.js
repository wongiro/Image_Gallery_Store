import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import "./login.css";

function Login() {
  return (
    <div className="content">
             <header>Snap Store</header>
             <form action="#">
             <div class="field">
                     <input type="text" required placeholder="Enter Email" />
                 </div>
                 <div class="field space">
                     <input type="password" required placeholder="Password" class="pass-key" />
                 </div>
                 <div className="pass">
                    <a href="#">Forgot Password?</a>
                 </div>
                 <div className="field">
                     <input type="submit" value="Log in" />
                 </div>
             </form>
             <div className="pass">
                    Don't have an account?<a href="#"> Sign Up.</a>
                 </div>
        </div>    
  );
}

export default Login;
