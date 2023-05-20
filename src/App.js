import React, { useState } from "react";
import "./App.scss";
import Login from "./Signin";
import SignUp from "./Signup";
import Box from "@mui/material/Box";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from './routes';


function App() {
  return (
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/">
  //       <Route path="signin" element={<Login />} />
  //       <Route path="signup" element={<SignUp />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
    <div>
      <Login />
    </div>
  );
}

export default App;
