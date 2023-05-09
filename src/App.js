import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/components/style/style.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { useState } from "react";
// import "./App.css";

export default function App() {
  function onToggleHandler(){
    console.log('check')
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp setToggle={onToggleHandler}/>} />
      </Routes>
    </Router>
   
  );
}



  

 