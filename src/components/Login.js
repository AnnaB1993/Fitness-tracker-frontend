import React, { useState } from "react";
import { loginUser, getMe} from "../api";
import { useHistory } from "react-router";
import { storeCurrentUser, clearCurrentUser, getCurrentUser, storeCurrentToken} from "../auth";

const Login = ({ setUser, setToken }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (
    <form
      id="login-form"
      onSubmit={async (e) => {
        e.preventDefault();
        const response = await loginUser({ username: name, password });
        if (response.status === 200) {
          storeCurrentUser(response.data.user);
          storeCurrentToken(response.data.token);
          setToken(response.data.token);
          setUser(response.data.user);
          history.push("/home");
        } else if (response.status === 401) {
          console.error(response.data.message);
        } else {
          alert("something is wrong, try again");
        }
        console.log(response);
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
      <br></br>
      <br></br>
      <input type="submit" value="Sigh in" />
    </form>
  );
};

export default Login;
