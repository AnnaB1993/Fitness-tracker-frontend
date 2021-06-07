import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Header = ({ user }) => {
  return user.username ? (
    <header>
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
        <NavLink to="/my-routines" activeClassName="current">
          Routines of {user.username}
        </NavLink>
        <NavLink to="/my-activities" activeClassName="current">
          Activities of {user.username}
        </NavLink>
        <NavLink to="/logout" activeClassName="current">
          Log out
        </NavLink>
      </>
    </header>
  ) : (
    <header>
      <h2>FITNESS APP</h2>{" "}
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
        <NavLink to="/login" activeClassName="current">
          Log in
        </NavLink>
        <NavLink to="/register" activeClassName="current">
          No account? Register
        </NavLink>
      </>
    </header>
  );
};

export default Header;
