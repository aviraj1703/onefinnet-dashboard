import * as React from "react";
import "./CandidateTable.scss";
import TableForm from "./TableForm";
import { DataContext } from "../ContextProvider/DataProvider";
import { useContext } from "react";
import { useMemo } from "react";

export default function CandidateTable() {
  const { jobs, candidates } = useContext(DataContext);

  const applicants = useMemo(() => {
    const filteredCandidates = candidates.filter((candidate) => {
      const appliedDate = new Date(candidate.applied);
      return appliedDate.getUTCDate() === 26 && candidate.reviewed;
    });

    return filteredCandidates.map((candidate) => {
      const job = jobs[candidate.jobId - 1];
      return {
        name: candidate.name,
        email: candidate.email,
        appliedDate: new Date(candidate.applied).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        rating: candidate.rating / 10,
        job: job ? job.title : null,
      };
    });
  }, [candidates, jobs]);

  return (
    <div className="candidate-table">
      <h4>Latest Candidates</h4>
      <TableForm candidates={applicants} />
    </div>
  );
}
