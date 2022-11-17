import React from "react";
import Dashboard from "./pages/Dashboard";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import IndividualRecords from "./pages/IndividualRecords";
import HouseholdRecord from "./pages/HouseholdRecord";
import Reports from "./pages/Reports";
import SharedLayout from "./pages/SharedLayout";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Dashboard />} />
            <Route
              path="individual-records"
              element={<IndividualRecords />}
            ></Route>
            <Route path="household-record" element={<HouseholdRecord />} />
            <Route path="reports" element={<Reports />} />
          </Route>

          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
