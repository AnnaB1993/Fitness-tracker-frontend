import React, { useState, useEffect } from "react";
import { deleteRoutine, updateRoutine } from "../api";
import { getCurrentUser } from "../auth";
import "./SingleRoutine.css";
import UpdateRoutine from "./UpdateRoutine";

const SingleRoutine = ({ singleRoutine, setUserRoutines, userRoutines, UpdateRoutine }) => {
  const user = getCurrentUser();
  const { id, name, creatorName, goal, activities } = singleRoutine;

  const deleteRoutineHandler = async (routineId) => {
    const result = await deleteRoutine(routineId);
    console.log(userRoutines);
    let newArrayRoutines = userRoutines.filter(
      (singleRoutine) => singleRoutine.id !== result.id
    );
    setUserRoutines(newArrayRoutines);
  };

  // const updateRoutineHandler = async (routineId) => {
  //   <UpdateRoutine singleRoutine={singleRoutine}/>
  //   const result = await updateRoutine(routineId, { name, goal });
  //   setUserRoutines([...userRoutines, result]);
  // };

  return (
    <div className="routine">
      <p id="name-id">Routine: {name}</p>
      <p id="creatorName-id"> by {creatorName}</p>
      <p id="goal-id">Goal is: {goal}</p>
      <div id="routine-activities">
        Activities for this routine:
        {activities &&
          activities.map((activity) => {
            const { description, duration, count } = activity;
            return (
              <div
                key={activity.routineActivityId}
                className="activity-dropdown"
              >
                <p>Description: {description}</p>
                <p>Duration: {duration}</p>
                <p>Count: {count}</p>
              </div>
            );
          })}
        {user && user.username === creatorName ? (
          <footer>
            <button
              id="update-button"
              onClick={(e) => {
                e.preventDefault();
                // updateRoutineHandler(singleRoutine.id);
              }}
            >
              Update
            </button>
            <button
              id="delete-routine-button"
              onClick={(e) => {
                e.preventDefault();
                deleteRoutineHandler(singleRoutine.id);
              }}
            >
              Delete
            </button>
          </footer>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default SingleRoutine;
