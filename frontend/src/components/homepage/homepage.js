import React from "react";
import "./homepage.css";
import { useHistory } from "react-router-dom"

const Homepage = ({user}) => {
  const history = useHistory()
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <div className="button" onClick={() => history.push("/login")}>LogOut</div>
      <h1>{user[0].name}</h1>
      {console.log(user)}
    </div>
  )
};

export default Homepage;
