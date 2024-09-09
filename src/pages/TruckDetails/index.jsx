import React, { useEffect } from "react";
import { trucks } from "../../utils/MockData";
import Card from "../../components/Card";
import "./style.css";

const TruckDetailsPage = () => {
  useEffect(() => {
    document.title = "Truck Details";
  });

  return (
    <div className="truck-details-page">
      <header className="truck-details-header">
        <h1>Truck Details</h1>
      </header>
      <ul className="truck-details-list">
        {trucks.map((truck) => (
          <li key={truck.id} className="truck-details-item">
            <Card
              title={`Truck Number: ${truck.number}`}
              subTitle={`Capacity: ${truck.capacity}`}
              description={`Status: ${truck.status}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TruckDetailsPage;
