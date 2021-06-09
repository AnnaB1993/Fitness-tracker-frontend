import React, { useState } from "react";
import { useHistory } from "react-router";
import { registerUser, makeNewRoutine } from "../api";
import { storeCurrentToken, storeCurrentUser } from "../auth";

const Register = (props) => {
  const { setUser, setToken } = props;
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <form
      id="register-form"
      onSubmit={async (e) => {
        e.preventDefault();
        const response = await registerUser({ username: name, password });
        console.log(response);
        if (response.status === 200) {
          storeCurrentUser(response.data.user);
          storeCurrentToken(response.data.token);
          setUser(response.data.user);
          setToken(response.data.token);
          history.push("/home");
          //update state and redirect
        } else if (response.status === 401) {
          //error message from the response
          console.error(response.data.message);
        } else {
          alert("something went wrong, try again");
          //show generic error message
        }
      }}
    >
      <input
        type="text"
        placeholder="Your name here"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Your password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {/* <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Confirm password"
        value={passwordConfirm}
        onChange={(e) => {
          setPasswordConfirm(e.target.value);
        }}
      /> */}
      <br></br>
      <br></br>
      <input type="submit" value="Sigh up" />
    </form>
  );
};

export default Register;
