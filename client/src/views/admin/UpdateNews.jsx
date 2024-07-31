import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";
import NavBarAdminPanel from "./NavBarAdminPanel";
import Editor from "./Editor";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function UpdateNews() {
  const { id } = useParams();
  const [newsTitle, setNewsTitle] = useState("");
  const [source, setSource] = useState("");
  const [description, setDescription] = useState("");
  const [existingImage, setExistingImage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [files, setFiles] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetchNews();
  }, [id]);

  const fetchNews = async () => {
    const response = await fetch(`${SERVER_URL}/api/news/${id}`, {
      method: "GET",
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      setNewsTitle(data.newsTitle);
      setSource(data.source);
      setDescription(data.description);
      setExistingImage(data.imageFile);
    }
  };

  const updateNews = async (ev) => {
    ev.preventDefault();
    const data = new FormData();
    data.append("newsTitle", newsTitle);
    data.append("source", source);
    data.append("description", description);
    if (files && files.length > 0) {
      data.append("imageFile", files[0]);
    }
    try {
      const token = localStorage.getItem("ewis_sl_user"); // Retrieve token from localStorage
      if (!token) {
        console.error("No token found, user might not be authenticated");
        return;
      }
      const response = await fetch(`${SERVER_URL}/api/news/${id}`, {
        method: "PUT",
        body: data,
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setRedirect(true);
      } else {
        console.error("Failed to update news");
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
      <div className="container py-10">
        <h2 className="text-center font-Poppins font-semibold text-3xl my-5">
          Update News
        </h2>
        <form onSubmit={updateNews} className="flex flex-col gap-5">
          <input
            type="text"
            value={newsTitle}
            onChange={(ev) => setNewsTitle(ev.target.value)}
            placeholder="News Title"
            className="block w-full px-5 py-2 border-[1px] border-[#ccc] font-Rubik text-blackFooter font-bold"
          />
          <input
            type="text"
            value={source}
            onChange={(ev) => setSource(ev.target.value)}
            placeholder="Source"
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
          <Editor value={description} onChange={setDescription} />
          <button className="bg-primary px-4 py-2 rounded-lg font-Poppins text-white w-44">
            Update News
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateNews;
