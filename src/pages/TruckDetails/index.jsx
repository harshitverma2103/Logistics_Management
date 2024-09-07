import React from "react";
import { trucks } from "../../utils/MockData";
import "./style.css";

const TruckDetailsPage = () => {
  return (
    <div className="truck-details-page">
      <header className="truck-details-header">
        <h1>Truck Details</h1>
      </header>
      <ul className="truck-details-list">
        {trucks.map((truck) => (
          <li key={truck.id} className="truck-details-item">
            <h2 className="truck-number">Truck Number: {truck.number}</h2>
            <p className="truck-capacity">Capacity: {truck.capacity}</p>
            <p
              className={`truck-status ${truck.status
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              Status: {truck.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TruckDetailsPage;
