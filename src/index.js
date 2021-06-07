import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";

import axios from "axios";

import {
  Header,
  Routines,
  Home,
  Activities,
  Register,
  Login,
  Logout,
} from "./components";
import { getAllRoutines, getAllActivities } from "./api";

// import {
//   clearCurrentUser,
//   getCurrentUser,
//   storeCurrentUser,
// } from "../auth";

const App = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  const [routinesList, setRoutines] = useState([]);
  const [activitiesList, setActivities] = useState([]);

  useEffect(() => {
    getAllRoutines()
      .then((routines) => setRoutines(routines))
      .catch((error) => {
        console.error(error);
      });

    getAllActivities()
      .then((activities) => setActivities(activities))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <div id="App">
        <Header user={user} />
        <Switch>
          <Route path="/routines">
            <Routines routinesList={routinesList} />
          </Route>
          <Route path="/activities">
            <Activities activitiesList={activitiesList} />
          </Route>
          <Route path="/register">
            <Register setUser={setUser} setToken={setToken} />
          </Route>
          <Route path="/home">
            <Home user={user} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} setToken={setToken} />
          </Route>
          <Route path="/logout">
            <Logout setUser={setUser} setToken={setToken} />
          </Route>
          {/* <Route path="/my-routines">
            <Routines routinesList={routinesList} />
          </Route>
          <Route path="/my-activities">
            <Routines routinesList={routinesList} />
          </Route> */}
        </Switch>
      </div>{" "}
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
