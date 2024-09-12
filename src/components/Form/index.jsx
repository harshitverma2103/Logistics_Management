import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

const Form = ({ onAddVendor, onClose }) => {
  const [newVendorName, setNewVendorName] = useState("");
  const [newVendorDrivers, setNewVendorDrivers] = useState("");

  const handleAddVendor = () => {
    if (newVendorName && newVendorDrivers) {
      onAddVendor({
        id: Date.now(),
        name: newVendorName,
        drivers: newVendorDrivers.split(",").map((driver) => driver.trim()),
      });
      setNewVendorName("");
      setNewVendorDrivers("");
      onClose();
    } else {
      alert("Please enter vendor name and drivers.");
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Vendor Name"
        value={newVendorName}
        onChange={(e) => setNewVendorName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Drivers (comma separated)"
        value={newVendorDrivers}
        onChange={(e) => setNewVendorDrivers(e.target.value)}
      />
      <button onClick={handleAddVendor}>Add Vendor</button>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

Form.propTypes = {
  onAddVendor: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Form;
