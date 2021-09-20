import React from "react";
import "./homepage.css";

const Homepage = ({user}) => {
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <div className="button">LogOut</div>
      <h1>{user[0].name}</h1>
      {console.log(user)}
    </div>
  )
};

export default Homepage;
