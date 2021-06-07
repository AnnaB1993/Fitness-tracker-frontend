import React from "react";

const Activities = ({ activitiesList }) => {
  return (
    <div className="all-activities">
      {activitiesList.map((activity) => {
          const {id, description, name} = activity;
        return <div key={activity.id}>{name} - {description}</div>;
      })}
    </div>
  );
};

export default Activities;
