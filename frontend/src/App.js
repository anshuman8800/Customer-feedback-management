import "./App.css";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
function App() {

  const [ user, setLoginUser] = useState(null)

  return (
    
    <div className="App">
      <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="google.com">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="google.com">Home</a>
              <a className="nav-link" href="google.com">Features</a>
              <a className="nav-link" href="google.com">Pricing</a>
              <a className="nav-link disabled" href="google.com" tabindex="-1" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav> */}
      
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user  ? <Homepage user={user} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
