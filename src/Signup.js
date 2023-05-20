import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function SignUp() {
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
              <button class="button-28">Log in</button>
            </div>
          </div>
        </div>
      </div>

  );

}