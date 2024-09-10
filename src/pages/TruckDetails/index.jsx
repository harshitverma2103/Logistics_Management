import React, { useState } from "react";
import { trucks } from "../../utils/MockData";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
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
      <SearchBar value={searchQuery} onChange={handleSearch}/>
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
