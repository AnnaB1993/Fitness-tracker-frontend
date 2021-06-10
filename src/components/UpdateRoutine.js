import React, { useState, useHistory } from "react";
import { getCurrentUser } from "../auth";
import { updateRoutine } from "../api";
const UpdateRoutine = ({ userRoutines, setUserRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  return (
    <form
      id="update-routine"
    //   onSubmit={async (e) => {
    //     e.preventDefault();
    //     const response = await updateRoutine(routineId, {name, goal, isPublic});
    //     const user = getCurrentUser();
    //     response.creatorName = user.username;
    //     console.log(userRoutines);
    //     setUserRoutines([...userRoutines, response]);
    //     setName("");
    //     setGoal("");
    //     setIsPublic(false)
    //     console.log(response);
    //   }}
    >
      {" "}
      Update your routine
      <input
        type="text"
        placeholder="Name"
        value={name}
        defaultValue={goal}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Goal"
        value={goal}
        defaultValue={goal}
        onChange={(e) => {
          setGoal(e.target.value);
        }}
      ></input>
      <label>Is it public</label>
      <input
        type="checkbox"
        id="isPublic"
        defaultChecked={isPublic}
        onChange={(e) => {
          setIsPublic(e.target.value);
        }}
      />
      <input type="submit" value="Update" />
    </form>
  );
};

export default UpdateRoutine;