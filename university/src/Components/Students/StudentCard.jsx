import React from "react";
import Card from "../CommonComponents/Card";
import Button from "../CommonComponents/Button";

export default function StudentCard({ student, onView }) {
  const initials = student.name
    ? student.name.split(" ").map(n => n.charAt(0)).join("").toUpperCase()
    : "ST";

  return (
    <Card className="student-list-card">
      <div className="student-card-left">
        <div className="avatar-circle">
          {initials}
        </div>
        
        <div className="student-card-details">
          <h4>{student.name}</h4>
          <p className="student-email-sub">{student.email}</p>
          <p>{student.department} • {student.year}</p>
          <span className="cgpa-badge">CGPA {student.cgpa}</span>
        </div>
      </div>

      <Button
        className="btn-outline-action"
        onClick={() => onView(student)}
      >
        View Details
      </Button>
    </Card>
  );
}
