import { createSlice } from "@reduxjs/toolkit";

export const HouseholdSlice = createSlice({
  name: "HouseholdRecord",
  initialState: {
    value: {
      recordNumber: "",
      household: "",
      institutionalLivingQuarter: "",
      province: "",
      municipality: "",
      barangay: "",
      addressRoom: "",
      addressHouse: "",
      addressStreet: "",
      nameOfRespondent: "",
      householdHead: "",
      totalNumberOfHouseholdMembers: "",
      visit: "",
      timeStart: "",
      result: "",
      nameOfInterviewer: "",
      dateOfVisit: "",
      timeEnd: "",
      dateOfNextVisit: "",
      nameOfSupervisor: "",
      dateEncoded: "",
      nameAndInitialOfEncoder: "",
      nameOfSupervisorInitialAndDate: "",
    },
    individual: [],
    questions: [],
  },
  reducers: {},
});

export default HouseholdSlice.reducer;
