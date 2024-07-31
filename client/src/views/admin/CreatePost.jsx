import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";
import NavBarAdminPanel from "./NavBarAdminPanel";
import Editor from "./Editor"; // Import the enhanced Editor
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../../components/hoc/Container";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const [errors, setErrors] = useState({
    title: "",
    content: "",
    summary: "",
  });

  const createNewPost = async (ev) => {
    ev.preventDefault();

    let error = false;
    if (title == "" || title == undefined || title == "") {
      setErrors((prev) => ({
        ...prev,
        title: "Title can not be empty",
      }));
      error = true;
    }
    if (content == "" || content == undefined || content == "") {
      setErrors((prev) => ({
        ...prev,
        content: "Content can not be empty",
      }));
      error = true;
    }

    if (summary == "" || summary == undefined || summary == "") {
      setErrors((prev) => ({
        ...prev,
        summary: "Summary can not be empty",
      }));
      error = true;
    }
    if (error) {
      return;
    }
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    if (files) {
      data.set("file", files[0]);
    }

    try {
      const token = localStorage.getItem("ewis_sl_user"); // Retrieve token from localStorage
      if (!token) {
        console.error("No token found, user might not be authenticated");
        return;
      }

      const response = await fetch(`${SERVER_URL}/api/blogs/`, {
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include", // Ensure credentials are included if your server requires authentication
      });

      if (response.ok) {
        const post = await response.json();
        setRedirect(`/blog-edit-page`);
      } else {
        const errorData = await response.json();
        console.error("Failed to create post:", errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <Container>
      <ToastContainer />
      <div className="w-full flex flex-col items-center justify-start z-10">
        <div className="container py-10">
          <h2 className="text-center font-Poppins font-semibold text-3xl my-5">
            Create your post here
          </h2>
          <form onSubmit={createNewPost} className="flex flex-col gap-5 z-10">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
                placeholder="Title"
                className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
              />

              <p className="text-sm text-red font-semibold italic">
                {errors.title}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                value={summary}
                onChange={(ev) => setSummary(ev.target.value)}
                placeholder="Summary"
                className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
              />
              <p className="text-sm text-red font-semibold italic">
                {errors.summary}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="file"
                onChange={(ev) => setFiles(ev.target.files)}
                className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
              />
              <p className=" text-sm font-semibold text-red italic">
                NOTE: Image Size should be maximim 10mb{" "}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-1"></div>
              <Editor value={content} onChange={setContent} />
              <p className="text-sm text-red font-semibold italic">
                {errors.content}
              </p>
            </div>

            <button className="bg-primary px-4 py-2 rounded-lg font-Poppins text-white w-44">
              Publish Post
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default CreatePost;
