
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React from "react";
import "./homepage.css";
import { useHistory } from "react-router-dom"

const Homepage = ({user}) => {
  const history = useHistory()
  return (
    <div className="homepage">
      <div className="username"><h1>{user.name}</h1></div >
      {console.log(user)}
      <div className="btn btn-success" onClick={() => history.push("/login")}>LogOut</div>
      <div className="formCSS">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter your complain</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Your Previous complain</label>
        <div>
          <label for="exampleFormControlTextarea1" class="form-label">{user.message}</label>
        </div>
      </div>
    </div>
  )
};

export default Homepage;


// import React from "react";
// import "./homepage.css";
// import { useHistory } from "react-router-dom"

// const Homepage = ({user}) => {
//   const history = useHistory()
//   return (
//     <div className="homepage">
//       <h1>Homepage</h1>
//       <div className="btn btn-success" onClick={() => history.push("/login")}>LogOut</div>
//       <h1>{user.email}</h1>
//       {console.log(user)}
//       <div class="mb-3">
//         <label for="exampleFormControlTextarea1" class="form-label">Enter your complain</label>
//         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//       </div>
//     </div>
//   )
// };

// export default Homepage;
