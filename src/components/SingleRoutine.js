import React, { useState, useEffect } from "react";
import { deleteRoutine } from "../api";
import { getCurrentUser } from "../auth";
import "./SingleRoutine.css";

const SingleRoutine = ({
  singleRoutine,
  routinesList,
  setUserRoutines,
  userRoutines,
}) => {
  const user = getCurrentUser();
  const { id, name, creatorName, goal, activities } = singleRoutine;
  const deleteRoutineHandler = async (routineId) => {
    const result = await deleteRoutine(routineId);

    const newArrayRoutines = userRoutines.filter(
      (singleRoutine) => singleRoutine.id !== result.id
    );
    setUserRoutines(newArrayRoutines);
  };

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
            <button>Update</button>
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
