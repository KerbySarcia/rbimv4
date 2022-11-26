import React from "react";
import "../styles/HouseholdTableInput.css";

const HouseholdTableInput = () => {
  return (
    <div className="HouseholdTableInput">
      <div className="HouseholdTableInput__Box">
        <div className="HouseholdTableInput__Box__firstName">
          <h3>Firstname</h3>
          <input type="text" />
        </div>
        <div className="HouseholdTableInput__Box__MI">
          <h3>MI</h3>
          <input type="text" />
        </div>
        <div className="HouseholdTableInput__Box__lastName">
          <h3>Last Name</h3>
          <input type="text" />
        </div>
        <div className="HouseholdTableInput__Box__sex">
          <h3>Sex</h3>
          <input type="text" />
        </div>
        <div className="HouseholdTableInput__Box__age">
          <h3>Age</h3>
          <input type="text" />
        </div>
        <div className="HouseholdTableInput__Box__dateOfBirth">
          <h3>Date of Birth</h3>
          <input type="text" />
        </div>
      </div>
      <button className="HouseholdTableInput__btn">Add</button>
    </div>
  );
};

export default HouseholdTableInput;
