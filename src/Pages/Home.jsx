import React from "react";
import { Link } from "react-router-dom";
import StatCard from "../Components/CommonComponents/StatCard";

export default function Home() {
  return (
    <div className="page-container">
      <div className="page-header-section">
        <div className="page-title-area">
          <h5>University Portal</h5>
          <h1>Welcome to the Campus Management Dashboard</h1>
          <p>Select a department view below to find, monitor, filter, and manage academic registry records across the portal network.</p>
        </div>
      </div>

      <div className="stats-grid">
        <Link to="/students" className="card-link">
          <StatCard
            title="Students Directory"
            value="View & Manage Student Records"
          />
        </Link>

        <Link to="/teachers" className="card-link">
          <StatCard
            title="Teachers Directory"
            value="View & Manage Teacher Records"
          />
        </Link>
      </div>
    </div>
  );
}
