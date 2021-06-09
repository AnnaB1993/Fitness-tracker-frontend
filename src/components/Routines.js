import React, { useState, useEffect } from "react";
// import "./Header.css";

import axios from "axios";
import SingleRoutine from "./SingleRoutine";
import "./Routines.css"


const Routines = ({ routinesList }) => {

  console.log(routinesList);
  return (
    <div className="all-routines">
      {routinesList.map((routine) => {
        return (<SingleRoutine 
          key={routine.id} singleRoutine={routine}/>);
      })}
    </div>
  );
};

export default Routines;
