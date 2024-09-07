import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import TruckDetails from "./pages/TruckDetails";
import DriverManagement from "./pages/DriverManagement";
import VendorManagement from "./pages/VendorManagement";
import RoutePlan from "./pages/RoutePlaning";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/truck-details" element={<TruckDetails />} />
        <Route path="/driver-management" element={<DriverManagement />} />
        <Route path="/vendor-management" element={<VendorManagement />} />
        <Route path="/route-planning" element={<RoutePlan/>} />
      </Routes>
    </Router>
  );
};

export default App;
