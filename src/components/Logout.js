import React from "react";
import { clearCurrentUser, getCurrentUser, storeCurrentUser } from "../auth";
import { useHistory } from "react-router-dom";

const Logout = ({ setUser, setToken }) => {
  const user = getCurrentUser();
  const history = useHistory();

  return (
    <div id="logout">
      Would you like to log out, {user.username}?
      <button
        onClick={(e) => {
          e.preventDefault();
          clearCurrentUser();
          setUser("");
          setToken("");
          history.push("/home");
        }}
      >
        Yes
      </button>
    </div>
  );
};

export default Logout;
