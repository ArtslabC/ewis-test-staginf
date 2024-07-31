import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import ContactUsCom from "../../components/common/ContactUsCom";
import MainFooter from "../../components/footer/MainFooter";
import parse from "html-react-parser";
import { BuildingOfficeIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet";
import { Container } from "../../components/hoc";
import LoadingScreen from "./../home/LoadingScreen";
import NotFound from "./../home/NotFound";

Modal.setAppElement("#root");

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function SingleJob() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state for form submission

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/api/jobs/${id}`, {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setJob(data);
        } else {
          const errorData = await response.json();
          setError(`Failed to fetch job details: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error fetching job:", error);
        setError("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setName("");
    setEmail("");
    setCv(null);
  };

  const handleApply = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Set loading state to true

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("cv", cv);
    formData.append("jobId", job._id);
    formData.append("jobTitle", job.jobTitle);
    try {
      const response = await fetch(`${SERVER_URL}/api/apply`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (response.ok) {
        toast.success("Application submitted successfully!");
        closeModal();
      } else {
        const errorData = await response.json();
        toast.error(`Failed to submit application: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // Set loading state to false after submission completes
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>EWIS - {job.jobTitle}</title>
        <meta
          name="description"
          content="Join our team. Explore job opportunities and apply now."
        />
      </Helmet>
      <ToastContainer />
      <Container classes="py-10">
        <div className="w-full font-Poppins flex flex-col items-start gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-between">
              <h1 className="font-bold text-3xl capitalize">{job.jobTitle} </h1>
              {/* <button
                onClick={openModal}
                className="bg-primary text-white px-7 py-2 rounded-3xl flex flex-row items-center justify-center gap-2"
              >
                <span>Apply Now</span>
                <div className="w-5">
                  <PaperClipIcon />
                </div>
              </button> */}
            </div>

            <div className="flex flex-wrap items-center justify-start gap-10 font-Poppins ">
              <div className="flex flex-row gap-2">
                <div className="w-5">
                  <BriefcaseIcon />
                </div>
                <p>{job.jobType}</p>
              </div>
              <div className="flex flex-row gap-2">
                <div className="w-5">
                  <BuildingOfficeIcon />
                </div>
                <p className="">{job.modality}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-start justify-start gap-3">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-primarygray px-4 py-1 rounded-full ring-1 ring-white text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="font-Poppins font-bold pt-5">Job Summary:</p>
            <p className="font-Poppins text-justify">{job.jobSummary}</p>
          </div>
          <p className="font-Poppins font-bold pt-5">Job Description:</p>
          <p className="font-Poppins text-justify">
            {parse(job.jobDescription)}
          </p>
          <button
            onClick={openModal}
            className="bg-primary text-white px-7 py-2 rounded-3xl mt-5 flex flex-row items-center justify-center gap-2"
          >
            <span>Apply Now</span>
            <div className="w-5">
              <PaperClipIcon />
            </div>
          </button>
        </div>
      </Container>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Apply for Job"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-Poppins"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Apply for {job.jobTitle}</h2>
          <form onSubmit={handleApply} className="flex flex-col gap-4">
            {isSubmitting ? (
              <div className="flex justify-center items-center">
                <p className="font-Poppins text-lg font-medium text-center py-6 capitalize">
                  Submitting your Resume...
                </p>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border p-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border p-2 rounded"
                />
                <input
                  type="file"
                  onChange={(e) => setCv(e.target.files[0])}
                  required
                  className="border p-2 rounded"
                />
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-red text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </Modal>

      <ContactUsCom />
    </>
  );
}

export default SingleJob;
