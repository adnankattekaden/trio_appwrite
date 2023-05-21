import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from 'react-router-dom';
import { account } from "./appwriteConfig";



export default function SignUp() {
  const googleAuth = (e) => {
    e.preventDefault();

    account.createOAuth2Session('google', 
    // success
    'http://localhost:3000/dash',
    // error
    'http://localhost:3000/');
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

    <div className="Signup">
        <div className="container">
          <div className="card_area">
            <h1 className="container_title">IdeaHive</h1>
            <p className="container_para">Lorem Ipsum Dolor</p>
            <div className="input_card">
              <TextField
                className="input"
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                className="input"
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </div>
            <div className="card_button">
              <button class="button-28">Sign Up</button>
            </div>
            <div className="card_button">
            <Link to="/signin">
              <button class="button-28">Log in</button>
            </Link>
            <Link to="/signin">
              <button class="button-28" onClick={(e)=>googleAuth(e)}>Google Signup </button>
            </Link>
            <Link to="/signin">
              <button class="button-28" onClick={(e)=>githubAuth(e)}>Github Signup </button>
            </Link>
            </div>
          </div>
        </div>
      </div>

  );

}