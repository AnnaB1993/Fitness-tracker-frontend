import React, { useState } from "react";
import { makeNewActivity } from "../api";

const NewActivity = ({ activitiesList }) => {
  const [name, setNameActivity] = useState("");
  const [description, setDescription] = useState("");
  return (
    <form
      id="new-activity"
      onSubmit={async (e) => {
        e.preventDefault();
        const response = await makeNewActivity(name, description);
        // activitiesList.push(response);
        console.log(response);
      }}
    >
      {" "}
      New Activity
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setNameActivity(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <input type="submit" value="Create" />
    </form>
  );
};

export default NewActivity;
