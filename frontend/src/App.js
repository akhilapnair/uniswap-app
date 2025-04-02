import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/Login/LogIn";
import Profile from "./components/Profile/Profile";
import Sell from "./components/Sell/Sell";
import User from "./components/User/User";
// import Requirements from "./components/Requirements/Requirements";
// import { } from 'dotenv/config';
import Buy from "./components/Buy/Buy";
import Home from "./components/Home/Home";

// Setting up baseURL for axios api requests change this to process.env.REACT_APP_API_URI_LOCAL for local testing and process.env.REACT_APP_API_URI for cloud testing
// axios.defaults.baseURL = process.env.REACT_APP_API_URI_LOCAL;

export default function App() {

    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Buy />} />
             <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
             <Route path="/profile" element={<Profile />} />
            <Route path="/sell" element={<Sell />} /> 
            <Route path="/buy" element={<Buy />} />
            {/* <Route path="/user" element={<User />} />
            <Route path="/requirements" element={<Requirements />} /> */}
          </Routes>
        </BrowserRouter>

        {/* <BrowserRouter>
        <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component= {Profile} />
            <Route path="/sell" component={Sell} />
            <Route path="/buy" component={Buy} />
            <Route path="/user" component={User}/>
            <Route path="/requirements" component={Requirements} />
            </Routes>     
               </BrowserRouter> */}
      </div>
    );
  
}

