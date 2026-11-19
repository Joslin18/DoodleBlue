import React from "react";
import Card from "../CommonComponents/Card";

export default function TopPerformers({ students }) {
  const topStudents = students.filter(
    (student) => Number(student.cgpa) >= 8
  );

  return (
    <div className="top-performers-section">
      <div className="section-header-row">
        <div className="section-title">
          Top Performers (CGPA &gt;= 8)
        </div>
        <span className="badge-count-pill">{topStudents.length} Students</span>
      </div>

      <div className="performer-cards-container">
        {topStudents.map((student) => {
          const initials = student.name
            ? student.name.split(" ").map(n => n.charAt(0)).join("").toUpperCase()
            : "ST";

          return (
            <Card key={student.id} className="performer-card">
              <div className="avatar-circle">
                {initials}
              </div>
              <div className="performer-info">
                <h4>{student.name}</h4>
                <p>{student.department} • {student.year}</p>
                <div className="card-metrics-row">
                  <span className="cgpa-badge">CGPA {student.cgpa}</span>
                  <span className="star-tag">Top Performer</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
