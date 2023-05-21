import React from "react";
import "./App.scss";
import Login from "./Signin.js";
import SignUp from "./Signup.js";
import Box from "@mui/material/Box";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Home'

function App() {
  return (
  // <Router>
  //   <div>
  //   <Routes>
  //                <Route exact path='/signin' element={< Login />}></Route>
  //                <Route exact path='/signup' element={< SignUp />}></Route>
  //         </Routes>
  //   </div>
  //   </Router>
  <Home/>
  );
}

export default App;
