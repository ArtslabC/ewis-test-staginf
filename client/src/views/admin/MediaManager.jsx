import React, { useEffect, useState } from "react";
import AuthWrapper from "./AuthWrapper";
import NavBarAdminPanel from "./NavBarAdminPanel";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const MediaManager = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/api/media`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFiles(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  const renderFilePreview = (file) => {
    const fileType = file.name.split(".").pop();

    if (["jpg", "jpeg", "png", "gif", "webp"].includes(fileType)) {
      return (
        <img
          src={file.url}
          alt={file.name}
          className="file-preview-image rounded-xl z-10"
        />
      );
    } else if (["mp4", "webm", "ogg"].includes(fileType)) {
      return <video src={file.url} controls className="file-preview-video" />;
    } else if (["mp3", "wav", "ogg"].includes(fileType)) {
      return <audio src={file.url} controls className="file-preview-audio" />;
    } else {
      return (
        <a href={file.url} target="_blank" rel="noopener noreferrer">
          {file.name}
        </a>
      );
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full bg-primarygray py-10 flex flex-col items-center">
      <h1 className="text-center font-Poppins font-bold text-2xl mb-5">
        Media Manager
      </h1>
      <div className="w-full">
        {files.length === 0 ? (
          <p>No files found</p>
        ) : (
          <div className="basis-1 flex flex-wrap justify-center items-center gap-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="p-4 basis-1/4 bg-white rounded-xl overflow-hidden "
              >
                <div className="font-Rubik font-medium text-sm transition-all duration-300 hover:scale-105">
                  {renderFilePreview(file)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaManager;
