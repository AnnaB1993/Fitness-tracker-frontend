import React from "react";
import "./Activities.css";
import "./SingleActivity.css"

const Activities = ({ activitiesList }) => {
  return (
    <div className="all-activities">
      {activitiesList.map((activity) => {
        const { id, description, name } = activity;
        return (
          <div className="activity" key={activity.id}>
            {name} - {description}
          </div>
        );
      })}
    </div>
  );
};

export default Activities;
