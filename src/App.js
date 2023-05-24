import React from "react";
import "./App.scss";
import Login from "./Signin.js";
import SignUp from "./Signup.js";
import Box from "@mui/material/Box";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import Dashboard from './Dashboard'
import IdeaSharing from "./Ideasharing";
function App() {
  return (

    <div>
      <Routes>
               <Route index path='/' element={< SignUp />}></Route>
               <Route exact path='/signin' element={< Login />}></Route>
               <Route exact path='/dash' element={< Dashboard />}></Route>
               <Route exact path='/idea' element={< IdeaSharing />}></Route>

      </Routes>
    </div>

  );
}

export default App;
