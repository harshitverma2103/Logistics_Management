import React, { useState } from "react";
import { trucks } from "../../utils/MockData";
import Card from "../../components/Card";
import searchIcon from "../../assets/search-icon.png";
import "./style.css";

const TruckDetailsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTrucks = trucks.filter((truck) =>
    truck.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="truck-details-page">
      <header className="truck-details-header">
        <h1>Truck Details</h1>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by truck number"
          value={searchQuery}
          onChange={handleSearch}
          className="truck-search-input"
        />
        <img src={searchIcon} alt="Search" className="search-icon" />
      </div>

      <ul className="truck-details-list">
        {filteredTrucks.map((truck) => (
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
