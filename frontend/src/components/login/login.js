import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  //same name as pass from app.js
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  //for storing the form result
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post("http://localhost:8000/login", user).then((res) => {
        alert(res.data.message);
        if(res.data.message==="User not registered" || res.data.message==="Password didn't match"){
          history.push("/login");
        }
        if (res.data.user !== undefined) {
          setLoginUser(res.data.user[0]); //store the res result into app.js setLoginUser
        }
        history.push("/");
      });
    } else {
      alert("invalid input");
    }
  };
  return (
    <div className="login">
      {console.log(user)}
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <div className="button" onClick={login}>
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={() => history.push("/register")}>
        Register
      </div>
    </div>
  );
};

export default Login;
