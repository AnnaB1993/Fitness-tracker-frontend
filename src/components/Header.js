import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Header.css";

const Header = ({ user }) => {
  return (
    <header className="app-header">
      <h2>FITNESS APP</h2>
      <>
        <NavLink to="/home" activeClassName="current">
          Home
        </NavLink>
        <NavLink to="/routines" activeClassName="current">
          Routines
        </NavLink>
        <NavLink to="/activities" activeClassName="current">
          Activities
        </NavLink>
        {user ? (
          <>
            {" "}
            <NavLink to="/my-routines" activeClassName="current">
              {user.username}'s Routines
            </NavLink>
            <NavLink to="/my-activities" activeClassName="current">
              Create new activity
            </NavLink>
            <NavLink to="/logout" activeClassName="current">
              Log out
            </NavLink>
          </>
        ) : (
          <>
            {" "}
            <NavLink to="/login" activeClassName="current">
              Log in
            </NavLink>
            <NavLink to="/register" activeClassName="current">
              No account? Register
            </NavLink>
          </>
        )}
      </>
    </header>
  );
};

export default Header;
