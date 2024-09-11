import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h2>Logistics Management</h2>
      </Link>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/truck-details">Truck Details</Link>
          </li>
          <li>
            <Link to="/driver-management">Driver Management</Link>
          </li>
          <li>
            <Link to="/vendor-management">Vendor Management</Link>
          </li>
          <li>
            <Link to="/route-planning">Route Planning</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
