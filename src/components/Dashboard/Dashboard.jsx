import React from "react";
import "./Dashboard.scss";
import Stats from "../Statisticks/Stats";
import Visual from "../Visualization/Visual";
import axios from "axios";
import { useEffect, useState } from "react";
import { DataProvider } from "../ContextProvider/DataProvider";
import Loader from "./Loader";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    console.log(API_BASE_URL);

    const fetchJobs = axios.get(`${API_BASE_URL}/jobs`);

    const fetchCandidates = axios.get(`${API_BASE_URL}/candidates`);

    Promise.all([fetchJobs, fetchCandidates])
      .then(([jobsResponse, candidatesResponse]) => {
        setJobs(jobsResponse.data);
        setCandidates(candidatesResponse.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="Loader">
        <Loader />
      </div>
    );
  }

  return (
    <DataProvider value={{ jobs, candidates }}>
      <div className="Dashboard">
        <Stats />
        <Visual />
      </div>
    </DataProvider>
  );
};

export default Dashboard;
