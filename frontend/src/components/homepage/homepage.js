import React, { useState } from "react";
import "./homepage.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Homepage = ({ user }) => {
  const [data, setData] = useState({
    email_box: "",
    message_box: "",
  });
  //correct handle function
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
  }

  const submitForm = () => {
    const { email_box, message_box } = data;
    if (email_box !== user.email && message_box !== "") {
      alert("invalid input");
    } else {
      axios
        .post("http://localhost:8000/login/saveFeedback", data)
        .then((res) => {
          if (res.data.pass === 1) {
            alert("Thankyou for Complain");
          } else {
            alert("Complain not register in database");
          }
        });
    }
  };
  const history = useHistory();
  return (
    <div className="homepage">
      <div className="username">
        <h1>{user.name}</h1>
      </div>
      {console.log(user)}
      <div className="btn btn-success" onClick={() => history.push("/login")}>
        LogOut
      </div>
      <div className="formCSS">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Enter your Email ID
          </label>
          <div>
            <input
              type="text"
              name="email_box"
              value={data.email_box}
              onChange={handle}
            ></input>
          </div>
          <label for="exampleFormControlTextarea1" class="form-label">
            Enter your Complain
          </label>
          <textarea
            class="form-control"
            name="message_box"
            value={data.message_box}
            onChange={(e) => handle(e)}
            placeholder="Type your complain..."
            rows="3"
          ></textarea>
          
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={submitForm}
          >
            Submit
          </button>
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Your Previous complain
        </label>
        <div>
          <label for="exampleFormControlTextarea1" class="form-label">
            {user.message}
          </label>
        </div>
        
      </div>
    </div>
  );
};

export default Homepage;
