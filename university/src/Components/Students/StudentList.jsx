import React from "react";
import StudentCard from "./StudentCard";

export default function StudentList({
  students,
  onView,
}) {
  return (
    <div className="student-grid">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onView={onView}
        />
      ))}
    </div>
  );
}