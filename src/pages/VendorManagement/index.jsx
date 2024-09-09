import React, { useEffect } from "react";
import { vendors } from "../../utils/MockData";
import Card from "../../components/Card";
import "./style.css";

const VendorManagement = () => {
  useEffect(() => {
    document.title = "Vendor Management";
  });

  return (
    <div className="vendor-management">
      <header className="vendor-management-header">
        <h1>Vendor Management</h1>
      </header>
      <ul className="vendor-management-list">
        {vendors.map((vendor) => (
          <li key={vendor.id} className="vendor-management-item">
            <Card
              title={`Vendor Name: ${vendor.name}`}
              subTitle={`Drivers: ${vendor.drivers.join(", ")}`}
              description=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendorManagement;
