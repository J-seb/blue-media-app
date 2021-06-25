//import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Profile from "./components/profile";
import NotFound from "./components/notFound";
// import session from "./services/activeSession";
// import { readUser } from "./services/firebaseFirestore";

import "font-awesome/css/font-awesome.css";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/login"
          component={(props) => <Login {...props} />}
          // render={(...props) => <Login handleUser={handleUser} {...props} />}
        />
        <Route
          path="/signup"
          component={(props) => <SignUp {...props} />}
          // render={(...props) => <SignUp handleUser={handleUser} {...props} />}
        />
        <Route path="/not-found" component={NotFound} />
        <Route
          path="/"
          component={Profile}
          // render={(...props) => <Profile userData={user} {...props} />}
          exact
        />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
