import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";
import NavBarAdminPanel from "./NavBarAdminPanel";
import Editor from "./Editor";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function UpdateJobs() {
  const { id } = useParams();
  const [jobTitle, setJobTitle] = useState("");
  const [jobSummary, setJobSummary] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [jobType, setJobType] = useState("");
  const [modality, setModality] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, [id]);

  const fetchJobs = async () => {
    const response = await fetch(`${SERVER_URL}/api/jobs/${id}`, {
      method: "GET",
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      setJobTitle(data.jobTitle);
      setJobSummary(data.jobSummary);
      setJobDescription(data.jobDescription);
      setSkills(data.skills.join(", "));
      setJobType(data.jobType);
      setModality(data.modality);
    }
  };

  const updateJob = async (ev) => {
    ev.preventDefault();
    const data = {
      jobTitle,
      jobSummary,
      jobDescription,
      skills: skills.split(",").map((skill) => skill.trim()),
      jobType,
      modality,
    };

    const response = await fetch(`${SERVER_URL}/api/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true);
    } else {
      console.error("Failed to update job");
    }
  };

  if (redirect) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="w-screen flex flex-col items-center justify-start">
      <div className="container py-10">
        <h2 className="text-center font-Poppins font-semibold text-3xl my-5">
          Update Job
        </h2>
        <form onSubmit={updateJob} className="flex flex-col gap-5">
          <input
            type="text"
            value={jobTitle}
            onChange={(ev) => setJobTitle(ev.target.value)}
            placeholder="Job Title"
            className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
          />
          <input
            type="text"
            value={jobSummary}
            onChange={(ev) => setJobSummary(ev.target.value)}
            placeholder="Job Summary"
            className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
          />
          <Editor value={jobDescription} onChange={setJobDescription} />
          <input
            type="text"
            value={skills}
            onChange={(ev) => setSkills(ev.target.value)}
            placeholder="Skills (comma separated)"
            className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
          />
          <select
            value={jobType}
            onChange={(ev) => setJobType(ev.target.value)}
            className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
            required
          >
            <option value="">Select Job Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Freelance">Freelance</option>
          </select>
          <select
            value={modality}
            onChange={(ev) => setModality(ev.target.value)}
            className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
            required
          >
            <option value="">Select Modality</option>
            <option value="On-Office">On-Office</option>
            <option value="Remote">Remote</option>
          </select>
          <button
            type="submit"
            className="bg-primary px-4 py-2 rounded-lg font-Poppins text-white w-44"
          >
            Update Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateJobs;
