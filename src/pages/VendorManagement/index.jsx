import React, { useEffect, useState } from "react";
import { vendors } from "../../utils/MockData";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import "./style.css";

const VendorManagement = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Vendor Management";
    const savedData = JSON.parse(localStorage.getItem("data"));
    if (savedData && savedData.length > 0) {
      setData(savedData);
    } else {
      setData(vendors);
      saveToLocalStorage(vendors);
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      saveToLocalStorage(data);
    }
  }, [data]);

  const saveToLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };

  const deleteItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    saveToLocalStorage(updatedData);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((vendor) =>
    vendor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="vendor-management">
      <header className="vendor-management-header">
        <h1>Vendor Management</h1>
        <SearchBar value={searchQuery} onChange={handleSearch} />
      </header>
      <ul className="vendor-management-list">
        {filteredData.length > 0 ? (
          filteredData.map((vendor) => (
            <li key={vendor.id} className="vendor-management-item">
              <Card
                title={`Vendor Name: ${vendor.name}`}
                subTitle={`Drivers: ${vendor.drivers.join(", ")}`}
                description=""
                onDelete={() => deleteItem(vendor.id)}
              />
            </li>
          ))
        ) : (
          <p>No vendors available.</p>
        )}
      </ul>
    </div>
  );
};

export default VendorManagement;
