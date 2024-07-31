import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AuthWrapper from "./AuthWrapper";
import NavBarAdminPanel from "./NavBarAdminPanel";
import Editor from "./Editor"; // Make sure the component name is correct
import Container from "../../components/hoc/Container";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function CreateJob() {
  const [jobTitle, setJobTitle] = useState("");
  const [jobSummary, setJobSummary] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [jobType, setJobType] = useState("");
  const [modality, setModality] = useState("");
  const [recipientEmail, setRecipientEmail] = useState(""); // New state for recipient email
  const [redirect, setRedirect] = useState(false);

  async function createNewJob(ev) {
    ev.preventDefault();
    const data = {
      jobTitle,
      jobSummary,
      jobDescription,
      skills: skills.split(",").map((skill) => skill.trim()), // Convert skills to an array
      jobType,
      modality,
      recipientEmail, // Include recipient email in the request data
    };

    const token = localStorage.getItem("ewis_sl_user"); // Get the token from localStorage

    const response = await fetch(`${SERVER_URL}/api/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include the token in the headers
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (response.ok) {
      toast.success("Job created successfully!");
      setRedirect(true);
    } else {
      const errorData = await response.json();
      toast.error(`Error: ${errorData.message}`);
    }
  }

  if (redirect) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <Container>
      <ToastContainer />

      <div className="w-full flex flex-col items-center justify-start">
        <div className="container py-10">
          <h2 className="text-center font-Poppins font-semibold text-3xl my-5">
            Create a New Job
          </h2>
          <form onSubmit={createNewJob} className="flex flex-col gap-5">
            <input
              type="text"
              value={jobTitle}
              onChange={(ev) => setJobTitle(ev.target.value)}
              placeholder="Job Title"
              className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
              required
            />
            <input
              type="text"
              value={jobSummary}
              onChange={(ev) => setJobSummary(ev.target.value)}
              placeholder="Job Summary"
              className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
              required
            />
            <Editor value={jobDescription} onChange={setJobDescription} />
            <input
              type="text"
              value={skills}
              onChange={(ev) => setSkills(ev.target.value)}
              placeholder="Skills (comma separated)"
              className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
              required
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
            <input
              type="email"
              value={recipientEmail}
              onChange={(ev) => setRecipientEmail(ev.target.value)}
              placeholder="Recipient Email"
              className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
              required
            />
            <button className="bg-primary px-4 py-2 rounded-lg font-Poppins text-white w-44">
              Publish Job
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default CreateJob;
