import React, { useEffect } from "react";
import { drivers } from "../../utils/MockData";
import Card from "../../components/Card";
import "./style.css";

const DriverManagement = () => {
  useEffect(() => {
    document.title = "Driver Management";
  });

  return (
    <div className="driver-management">
      <header className="driver-management-header">
        <h1>Driver Management</h1>
      </header>
      <ul className="driver-management-list">
        {drivers.map((driver) => (
          <li key={driver.id} className="driver-management-item">
            <Card
              title={`Driver Name: ${driver.name}`}
              subTitle={`Contact: ${driver.contact}`}
              description={`Truck Assigned: ${driver.truckAssigned}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverManagement;
