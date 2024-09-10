import React, { useEffect, useState } from "react";
import { drivers } from "../../utils/MockData";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import "./style.css";

const DriverManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Driver Management";
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="driver-management">
      <header className="driver-management-header">
        <h1>Driver Management</h1>
      </header>
      <SearchBar value={searchQuery} onChange={handleSearch} />
      <ul className="driver-management-list">
        {filteredDrivers.map((driver) => (
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
