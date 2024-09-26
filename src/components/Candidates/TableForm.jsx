import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "./CandidateTable.css";

const TableForm = ({ candidates }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        "& td, & th": { padding: "8px" },
        overflow: "auto",
        maxHeight: "85%",
        boxShadow: "none",
      }}
    >
      <Table>
        <TableHead className="Header">
          <TableRow>
            <TableCell>
              <strong>Candidate Name</strong>
            </TableCell>
            <TableCell>
              <strong>Job Name</strong>
            </TableCell>
            <TableCell>
              <strong>Rating</strong>
            </TableCell>
            <TableCell>
              <strong>Applied Date</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {candidates.map((candidate, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="name-cell">
                  <span>{index + 1}</span>
                  <div className="sub-name-cell">
                    <span>
                      <strong>{candidate.name}</strong>
                    </span>
                    <span style={{ fontSize: "0.7rem" }}>
                      {candidate.email}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell style={{ fontSize: "0.7rem" }}>{candidate.job}</TableCell>
              <TableCell>{candidate.rating}</TableCell>
              <TableCell>{candidate.appliedDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableForm;
