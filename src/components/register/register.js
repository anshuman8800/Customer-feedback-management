import React, { useState } from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <h1>Register</h1>
      <input type="text" placeholder="your Name"></input>
      <input type="text" placeholder="your Email"></input>
      <input type="password" placeholder="your Password"></input>
      <input type="password" placeholder="Re-enter Password"></input>
      <div className="button">Register</div>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  );
};

export default Register;
