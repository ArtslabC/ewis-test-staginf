import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";
import NavBarAdminPanel from "./NavBarAdminPanel";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill styles
import Editor from "./Editor";
import { toast, ToastContainer } from "react-toastify";
import Container from "../../components/hoc/Container";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function CreateNews() {
  const [newsTitle, setNewsTitle] = useState("");
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [files, setFiles] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    source: "",
  });

  const createNewNews = async (ev) => {
    ev.preventDefault();
    setErrors({
      title: "",
      description: "",
      source: "",
    });
    let error = false;
    if (newsTitle == "" || newsTitle == undefined || newsTitle == "") {
      setErrors((prev) => ({
        ...prev,
        title: "Title can not be empty",
      }));
      error = true;
    }
    if (description == "" || description == undefined || description == "") {
      setErrors((prev) => ({
        ...prev,
        description: "Description can not be empty",
      }));
      error = true;
    }
    if (source == "" || source == undefined || source == "") {
      setErrors((prev) => ({
        ...prev,
        source: "Source can not be empty",
      }));
      error = true;
    }

    if (error) {
      return;
    }

    const data = new FormData();
    data.set("newsTitle", newsTitle);
    data.set("description", description);
    data.set("source", source);
    if (files) {
      data.set("imageFile", files[0]); // Ensure the field name matches
    }
    try {
      const token = localStorage.getItem("ewis_sl_user"); // Assuming the token is stored in localStorage
      if (!token) {
        console.error("No token found, user might not be authenticated");
        return;
      }
      setIsLoading(true);
      const response = await fetch(`${SERVER_URL}/api/news/`, {
        method: "POST",
        body: data,

        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (response.ok) {
        toast.success("News created successfully!");
        setRedirect(true);
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (redirect) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <Container>
      <ToastContainer />

      <div className="w-full flex flex-col items-center justify-start">
        <div className="container py-10">
          <h2 className="text-center font-Poppins font-semibold text-3xl my-5">
            Create News
          </h2>
          <form onSubmit={createNewNews} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                value={newsTitle}
                onChange={(ev) => setNewsTitle(ev.target.value)}
                placeholder="News Title"
                className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
              />
              <p className="text-sm text-red font-semibold italic">
                {errors.title}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                value={source}
                onChange={(ev) => setSource(ev.target.value)}
                placeholder="Source"
                className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
              />
              <p className="text-sm text-red font-semibold italic">
                {errors.source}
              </p>
            </div>

            <input
              type="file"
              onChange={(ev) => setFiles(ev.target.files)}
              className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
            />
            <div className="flex flex-col gap-1">
              <Editor
                value={description}
                onChange={setDescription}
                className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
              />
              <p className="text-sm text-red font-semibold italic">
                {errors.description}
              </p>
            </div>
            {isLoading ? (
              <button
                disabled={true}
                className="bg-primary/80 px-4 py-2 rounded-lg font-Poppins text-white w-44"
              >
                Saving...
              </button>
            ) : (
              <button className="bg-primary px-4 py-2 rounded-lg font-Poppins text-white w-44">
                Publish News
              </button>
            )}
          </form>
        </div>
      </div>
    </Container>
  );
}

export default CreateNews;
