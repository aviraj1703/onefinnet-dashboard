import * as React from "react";
import "./CandidateTable.css";
import TableForm from "./TableForm";

export default function CandidateTable() {
  const candidates = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      job: "Software Engineer",
      rating: 4.5,
      appliedDate: "2024-09-01",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      job: "Product Manager",
      rating: 4.0,
      appliedDate: "2024-09-02",
    },
    {
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      job: "Data Scientist",
      rating: 5.0,
      appliedDate: "2024-09-03",
    },
    {
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      job: "Data Scientist",
      rating: 5.0,
      appliedDate: "2024-09-03",
    },
    {
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      job: "Data Scientist",
      rating: 5.0,
      appliedDate: "2024-09-03",
    },
  ];
  return (
    <div className="candidate-table">
      <h4>Latest Candidates</h4>
      <TableForm candidates={candidates} />
    </div>
  );
}
