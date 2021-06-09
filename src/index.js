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
  MyRoutines,
  NewActivity,
  SingleRoutine,
  NewRoutine
} from "./components";
import {
  getAllRoutines,
  getAllActivities,
  getMe,
  getUserRoutines,
} from "./api";

import { getCurrentUser, getCurrentToken } from "./auth";

const App = () => {
  const [user, setUser] = useState(getCurrentUser());
  const [token, setToken] = useState(getCurrentToken());

  const [routinesList, setRoutines] = useState([]);
  const [activitiesList, setActivities] = useState([]);
  const [userRoutines, setUserRoutines] = useState([]);
  const [userActivities, setUserActivities] = useState([]);

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

  useEffect(() => {

    // getCurrentToken()
    // .then((token) => 
    getUserRoutines(token)
      .then((routines) => setUserRoutines(routines))
      .catch((error) => console.error(error));

      
  }, [user]);

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
          <Route path="/my-routines">
            <MyRoutines userRoutines={userRoutines} setUserRoutines={setUserRoutines}/>
          </Route>
          <Route path="/my-activities">
            <NewActivity activitiesList={activitiesList}/>
          </Route>
        </Switch>
      </div>{" "}
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
