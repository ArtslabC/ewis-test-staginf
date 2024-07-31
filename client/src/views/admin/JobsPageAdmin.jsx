import React, { useState, useEffect } from "react";
import { Edit2, Trash } from "lucide-react";
import AuthWrapper from "./AuthWrapper";
import NavBarAdminPanel from "./NavBarAdminPanel";
import { toast, ToastContainer } from "react-toastify";
import Editor from "./Editor";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function JobsPageAdmin() {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [jobTitle, setJobTitle] = useState("");
  const [jobSummary, setJobSummary] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [jobType, setJobType] = useState("");
  const [modality, setModality] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/api/jobs`, {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      } else {
        toast.error("Failed to fetch jobs");
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setJobTitle(job.jobTitle || "");
    setJobSummary(job.jobSummary || "");
    setJobDescription(job.jobDescription || "");
    setSkills(job.skills.join(", ") || ""); // Convert skills array to comma-separated string
    setJobType(job.jobType || "");
    setModality(job.modality || "");
    setRecipientEmail(job.recipientEmail || "");
  };

  const handleUpdateJob = async (ev) => {
    ev.preventDefault();
    const token = localStorage.getItem("ewis_sl_user"); // Get the token from localStorage
    const data = {
      jobTitle,
      jobSummary,
      jobDescription,
      skills: skills.split(",").map((skill) => skill.trim()), // Convert skills to array
      jobType,
      modality,
      recipientEmail,
    };

    try {
      const response = await fetch(
        `http://localhost:5000/api/jobs/${editingJob._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
          body: JSON.stringify(data),
          credentials: "include",
        }
      );

      if (response.ok) {
        setEditingJob(null);
        fetchJobs();
        toast.success("Job updated successfully!");
      } else {
        toast.error("Failed to update job");
      }
    } catch (error) {
      console.error("Error updating job:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleDeleteJob = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/jobs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ewis_sl_user")}`, // Include the token in the headers
        },
        credentials: "include",
      });

      if (response.ok) {
        fetchJobs();
        toast.success("Job deleted successfully!");
      } else {
        toast.error("Failed to delete job");
      }
    } catch (error) {
      console.error("Error deleting job:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full flex flex-col items-center bg-primarygray py-10">
        <h1 className="text-3xl font-bold my-8">Jobs Admin Page</h1>
        <div className="overflow-x-auto w-full px-20">
          <div className=" w-full flex flex-row items-center justify-end py-3">
            <Link
              to={"/create-job"}
              className="bg-primary py-2 px-5 rounded-xl font-Poppins font-bold text-white"
            >
              Publish Job
            </Link>
          </div>
          <div className="bg-white rounded-xl overflow-hidden flex flex-col">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 text-xl font-Poppins text-left">
                  <th className="px-4 py-2 w-64">Title</th>
                  <th className="px-4 py-2">Summary</th>
                  <th className="px-4 py-2 w-44">Job Type</th>
                  <th className="px-4 py-2 ">Modality</th>
                  <th className="px-4 py-2 w-64">Recipient Email</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr
                    key={job._id}
                    className="border-b border-primarysh font-Poppins text-sm text-left"
                  >
                    <td className="px-4 py-2">{job.jobTitle}</td>
                    <td className="px-4 py-2">{job.jobSummary}</td>
                    <td className="px-4 py-2">{job.jobType}</td>
                    <td className="px-4 py-2">{job.modality}</td>
                    <td className="px-4 py-2">{job.recipientEmail}</td>
                    <td className="px-4 py-2 flex flex-row items-center justify-center">
                      <button
                        onClick={() => handleEditJob(job)}
                        className="px-4 py-2 bg-primarygray text-white rounded-xl mr-2"
                      >
                        <Edit2 />
                      </button>
                      <button
                        onClick={() => handleDeleteJob(job._id)}
                        className="px-4 py-2 bg-primarygray text-red rounded-xl"
                      >
                        <Trash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {editingJob && (
              <div className="mt-10 py-10 bg-white rounded-2xl p-5">
                <h2 className="text-2xl font-bold mb-4">Edit Job</h2>
                <form
                  onSubmit={handleUpdateJob}
                  className="flex flex-col gap-5"
                >
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
                  <input
                    type="email"
                    value={recipientEmail}
                    onChange={(ev) => setRecipientEmail(ev.target.value)}
                    placeholder="Recipient Email"
                    className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-primary px-4 py-2 rounded-lg font-Poppins text-white w-44"
                  >
                    Update Job
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default JobsPageAdmin;
