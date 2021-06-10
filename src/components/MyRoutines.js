import React, { useState, useEffect } from "react";
import NewRoutine from "./NewRoutine";
import SingleRoutine from "./SingleRoutine";

import { getCurrentUser } from "../auth";

const MyRoutines = ({ userRoutines, setUserRoutines }) => {
  const user = getCurrentUser();
  // console.log(userRoutines);
  return (
    <div className="user-routines">
      {userRoutines ? (
        userRoutines.map((routine) => {
          
          return ( 
            <SingleRoutine 
              key={routine.id}
              singleRoutine={routine}
              setUserRoutines={setUserRoutines}
              userRoutines={userRoutines}
            />
          );
        })
      ) : (
        <div>No routines yet</div>
      )}{" "}
      {user && (
        <footer>
          <NewRoutine
            userRoutines={userRoutines}
            setUserRoutines={setUserRoutines}
          />
        </footer>
      )}
    </div>
  );
};

export default MyRoutines;
