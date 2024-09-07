import React from "react";
import { drivers } from "../../utils/MockData"; 
import "./style.css";

const DriverManagement = () => {
  return (
    <div className="driver-management">
      <header className="driver-management-header">
        <h1>Driver Management</h1>
      </header>
      <ul className="driver-management-list">
        {drivers.map((driver) => (
          <li key={driver.id} className="driver-management-item">
            <h2 className="driver-name">Name: {driver.name}</h2>
            <p className="driver-contact">Contact: {driver.contact}</p>
            <p className="driver-truck-assigned">Truck Assigned: {driver.truckAssigned}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverManagement;
