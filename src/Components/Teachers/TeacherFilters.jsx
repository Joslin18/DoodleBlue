import React from "react";
import SearchBar from "../CommonComponents/SearchBar";
import { departmentOptions } from "../../Constants/options";

export default function TeacherFilters({
  search,
  setSearch,
  department,
  setDepartment,
  clearFilters
}) {
  return (
    <div className="filter-row-container">
      <div className="filter-item search-box">
        <label>Search Teachers</label>
        <SearchBar
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by name, email or department..."
        />
      </div>

      <div className="filter-item">
        <label>Department</label>
        <select
          name="department"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
          className="form-selectField"
        >
          <option value="">All Departments</option>
          {departmentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <button className="btn-clear" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
}
