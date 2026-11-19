import React from "react";
import Button from "../CommonComponents/Button";

export default function TeacherRow({ index, teacher, onView, onEdit, onDelete }) {
  return (
    <tr style={{ borderBottom: "1px solid var(--border-ui)" }}>
      <td style={{ color: "var(--text-muted)", padding: "1rem", borderRight: "1px solid var(--border-ui)" }}>{index}</td>
      <td style={{ fontWeight: "500", color: "var(--text-main)", padding: "1rem", borderRight: "1px solid var(--border-ui)" }}>{teacher.name}</td>
      <td style={{ color: "var(--text-muted)", padding: "1rem", borderRight: "1px solid var(--border-ui)" }}>{teacher.email}</td>
      <td style={{ color: "var(--text-muted)", padding: "1rem", borderRight: "1px solid var(--border-ui)" }}>{teacher.department}</td>
      <td style={{ color: "var(--text-muted)", padding: "1rem", borderRight: "1px solid var(--border-ui)" }}>{teacher.subject}</td>
      <td style={{ padding: "1rem" }}>
        <div className="actions-cell-cluster" style={{ display: "flex", gap: "0.5rem" }}>
          <Button className="btn-table-action" onClick={() => onView(teacher)}>
            View
          </Button>
          <Button className="btn-table-action" onClick={() => onEdit(teacher)}>
            Edit
          </Button>
          <Button className="btn-table-action delete" onClick={() => onDelete(teacher.id)}>
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
}
