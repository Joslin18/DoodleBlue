import React from "react";

export default function StudentDetails({
  student,
}) {
  if (!student) return null;

  return (
    <div className="details-container">
      <h3>{student.name}</h3>

      <p>
        <strong>Email :</strong>{" "}
        {student.email}
      </p>

      <p>
        <strong>Department :</strong>{" "}
        {student.department}
      </p>

      <p>
        <strong>Year :</strong>{" "}
        {student.year}
      </p>

      <p>
        <strong>CGPA :</strong>{" "}
        {student.cgpa}
      </p>
    </div>
  );
}