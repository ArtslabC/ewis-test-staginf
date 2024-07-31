import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";
import NavBarAdminPanel from "./NavBarAdminPanel";
import Editor from "./Editor";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function UpdatePost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [existingImage, setExistingImage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [files, setFiles] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/api/blogs/${id}`, {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setTitle(data.title);
        setSummary(data.summary);
        setContent(data.content);
        setExistingImage(data.cover);
      } else {
        console.error("Failed to fetch post:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const updatePost = async (ev) => {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    if (files && files.length > 0) {
      data.set("file", files[0]);
    }

    try {
      const token = localStorage.getItem("ewis_sl_user"); // Retrieve token from localStorage
      if (!token) {
        console.error("No token found, user might not be authenticated");
        return;
      }

      const response = await fetch(`${SERVER_URL}/api/blogs/${id}`, {
        method: "PUT",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (response.ok) {
        setRedirect(true);
      } else {
        console.error("Failed to update post:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleFileChange = (ev) => {
    const file = ev.target.files[0];
    setFiles(ev.target.files);
    setPreviewImage(URL.createObjectURL(file));
  };

  if (redirect) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="w-screen flex flex-col items-center justify-start">
      <div className="container py-10 ">
        <h2 className="text-center font-Poppins font-semibold text-3xl my-5">
          Update your post here
        </h2>
        <form onSubmit={updatePost} className="flex flex-col gap-5">
          <input
            type="text"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            placeholder="Title"
            className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
          />
          <input
            type="text"
            value={summary}
            onChange={(ev) => setSummary(ev.target.value)}
            placeholder="Summary"
            className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
          />
          {existingImage && !previewImage && (
            <div className="my-4">
              <img
                src={`${SERVER_URL}/${existingImage}`}
                alt="Existing cover"
                className="object-cover w-36"
              />
            </div>
          )}
          {previewImage && (
            <div className="my-4">
              <img
                src={previewImage}
                alt="New preview"
                className="object-cover w-36"
              />
            </div>
          )}
          <p className="font-Poppins text-base text-red italic">
            NOTE: Please select existing image or new image
          </p>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
          />
          <Editor value={content} onChange={setContent} />
          <button className="bg-primary px-4 py-2 rounded-lg font-Poppins text-white w-44">
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdatePost;
