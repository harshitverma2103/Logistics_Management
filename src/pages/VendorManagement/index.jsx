import React from "react";
import { vendors } from "../../utils/MockData";
import "./style.css";

const VendorManagement = () => {
  return (
    <div className="vendor-management">
      <header className="vendor-management-header">
        <h1>Vendor Management</h1>
      </header>
      <ul className="vendor-management-list">
        {vendors.map((vendor) => (
          <li key={vendor.id} className="vendor-management-item">
            <h2 className="vendor-name">Vendor Name: {vendor.name}</h2>
            <p className="vendor-drivers">
              Drivers: {vendor.drivers.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendorManagement;
