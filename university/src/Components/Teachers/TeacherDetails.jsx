import React from "react";

export default function TeacherDetails({
  teacher,
}) {
  if (!teacher) return null;

  return (
    <div className="details-container">
      <h2>{teacher.name}</h2>

      <p>
        <strong>Email:</strong>{" "}
        {teacher.email}
      </p>

      <p>
        <strong>Department:</strong>{" "}
        {teacher.department}
      </p>

      <p>
        <strong>Subject:</strong>{" "}
        {teacher.subject}
      </p>
    </div>
  );
}