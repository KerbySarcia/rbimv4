import React from "react";
import "../styles/HouseholdRecordQuestion.css";
import HouseholdRecordLinks from "../components/HouseholdRecordLinks";
import { useSelector, useDispatch } from "react-redux";
import HouseholdTableInput from "../components/HouseholdTableInput";

const HouseholdRecordQuestions = () => {
  const householdList = useSelector(
    (state) => state.householdRecord.individual
  );

  return (
    <div className="HouseholdRecordQuestions">
      <HouseholdRecordLinks />
      <div className="HouseholdRecordQuestions__table">
        {householdList.length === 0 ? <HouseholdTableInput /> : <div></div>}
      </div>
    </div>
  );
};

export default HouseholdRecordQuestions;
