import React from "react";
import TeacherRow from "./TeacherRow";

export default function TeacherTable({ teachers, onView, onEdit, onDelete }) {
  return (
    <div className="table-responsive-wrapper" style={{ marginTop: "1rem" }}>
      <table className="custom-table" style={{ border: "1px solid var(--border-ui)" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid var(--border-ui)" }}>
            <th style={{ width: "60px", padding: "1rem", borderRight: "1px solid var(--border-ui)" }}>#</th>
            <th style={{ padding: "1rem", borderRight: "1px solid var(--border-ui)" }}>Teacher Name</th>
            <th style={{ padding: "1rem", borderRight: "1px solid var(--border-ui)" }}>Email</th>
            <th style={{ padding: "1rem", borderRight: "1px solid var(--border-ui)" }}>Department</th>
            <th style={{ padding: "1rem", borderRight: "1px solid var(--border-ui)" }}>Subject</th>
            <th style={{ width: "260px", padding: "1rem" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.length > 0 ? (
            teachers.map((teacher, index) => (
              <TeacherRow
                key={teacher.id}
                index={index + 1}
                teacher={teacher}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ padding: "2rem", textAlignment: "center" }}>No Teachers Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
