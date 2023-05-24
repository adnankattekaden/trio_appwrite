import React, { useState } from "react";
import { Link } from "react-router-dom";
import { account } from "./appwriteConfig";
import "./Signin.css";
import google from './assets/google.png'
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const googleAuth = (e) => {
    e.preventDefault();

    account.createOAuth2Session(
      "google",
      // success
      "http://localhost:3000/dash",
      // error
      "http://localhost:3000/"
    );
  };
  // const githubAuth = (e) => {
  //   e.preventDefault();

  //   account.createOAuth2Session('github',
  //   // success
  //   'http://localhost:3000/dash',
  //   // error
  //   'http://localhost:3000/');
  // };
  return (
    <div className="Signup" >
      <div className="sign-main">
        <div className="sign-div1">
        <div className="sign-div1-title">
          IdeaHive
        </div>
        <div className="sign-div1-para">
          IdeaHive is a collaborative platform where users can share their ideas
          and vote on the best ones. It's a community-driven space that fosters
          creativity, innovation, and collaboration.
        </div>
        </div>
        <div className="sign-div2">
          <div className="sign-div2-sub">
          <div className="sign-div2-title">Sign In</div>
          <br/>
          <form>
            <input
              type="email"
              id="email"
              className="sign-div2-input"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input
              type="password"
              id="password"
              className="sign-div2-input"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <br/>
          <div className="sign-div2-bot">
            <div className="bot-desc">Have no account?</div>
            <Link to="/">
            <div className="bot-link">Sign up here</div>
            </Link>
          </div>
          </div>
          <div className="or">
            OR
          </div>
          <div className="card_button">
            {/* <Link to="/signin">
              <button class="button-28">Log in</button>
            </Link> */}
            {/* <div>Sign Up with</div> */}
            <Link to="/signin">
              <img src={google} onClick={(e) => googleAuth(e)}/>
              {/* <button class="button-28" >
                Google Signup{" "}
              </button> */}
            </Link>
            {/* <Link to="/signin">
              <button class="button-28" onClick={(e)=>githubAuth(e)}>Github Signup </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
