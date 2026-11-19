import React from "react";

export default function Table({
  columns,
  data,
  renderActions,
}) {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>
              {column}
            </th>
          ))}

          {renderActions && (
            <th>Actions</th>
          )}
        </tr>
      </thead>

      <tbody>
        {data.length > 0 ? (
          data.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column}>
                  {row[column]}
                </td>
              ))}

              {renderActions && (
                <td>
                  {renderActions(row)}
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={
                columns.length + 1
              }
            >
              No Records Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}