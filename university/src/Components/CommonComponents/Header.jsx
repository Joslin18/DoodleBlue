import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="nav-brand">
        UNIVERSITY PORTAL
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/students" className={location.pathname === "/students" ? "active" : ""}>
              Students
            </Link>
          </li>
          <li>
            <Link to="/teachers" className={location.pathname === "/teachers" ? "active" : ""}>
              Teachers
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
