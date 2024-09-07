import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/">
        <h2>Logistics Management</h2>
      </Link>
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/truck-details" onClick={() => setMenuOpen(false)}>
              Truck Details
            </Link>
          </li>
          <li>
            <Link to="/driver-management" onClick={() => setMenuOpen(false)}>
              Driver Management
            </Link>
          </li>
          <li>
            <Link to="/vendor-management" onClick={() => setMenuOpen(false)}>
              Vendor Management
            </Link>
          </li>
          <li>
            <Link to="/route-planning" onClick={() => setMenuOpen(false)}>
              Route Planning
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
