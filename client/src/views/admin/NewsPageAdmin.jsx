import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Edit2, TrashIcon } from "lucide-react";
import AuthWrapper from "./AuthWrapper";
import NavBarAdminPanel from "./NavBarAdminPanel";
import { toast, ToastContainer } from "react-toastify";
import parse from "html-react-parser";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function NewsPageAdmin() {
  const [news, setNews] = useState([]);
  const [editingNews, setEditingNews] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/api/news`, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setNews(data);
    } catch (error) {
      setError(error.message);
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleEditNews = (newsItem) => {
    setEditingNews(newsItem);
    setRedirect(true);
  };

  const handleDeleteNews = async (id) => {
    try {
      const token = localStorage.getItem("ewis_sl_user"); // Retrieve token from localStorage
      if (!token) {
        console.error("No token found, user might not be authenticated");
        return;
      }
      const response = await fetch(`${SERVER_URL}/api/news/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      fetchNews();
      toast.success("News deleted successfully!");
    } catch (error) {
      console.error("Error deleting news:", error);
      toast.error("Somthing went wrong");
    }
  };

  if (redirect) {
    return <Navigate to={`/update-news/${editingNews._id}`} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="w-full flex flex-col items-center bg-primarygray py-10">
        <h1 className="text-3xl font-bold my-8">News Admin Page</h1>
        <div className="overflow-x-auto w-full px-20">
          <div className=" w-full flex flex-row items-center justify-end py-3">
            <Link
              to={"/create-news"}
              className="bg-primary py-2 px-5 rounded-xl font-Poppins font-bold text-white"
            >
              Create News
            </Link>
          </div>
          {loading ? (
            <p className="font-Poppins text-lg font-medium text-center py-6">
              Loading News...
            </p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : news.length === 0 ? (
            <p>No News available.</p>
          ) : (
            <div className="bg-white rounded-xl overflow-hidden flex flex-col">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 text-xl font-Poppins text-left">
                    <th className="px-4 py-2">Cover</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Author</th>
                    <th className="px-4 py-2 ">Published Date</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {news.map((newsItem) => (
                    <tr
                      key={newsItem._id}
                      className="border-b border-primarysh font-Poppins text-sm text-left"
                    >
                      <td className="px-4 py-2">
                        {newsItem.imageFile && (
                          <img
                            src={`${SERVER_URL}/${newsItem.imageFile}`}
                            alt={newsItem.newsTitle}
                            className="object-cover w-36"
                          />
                        )}
                      </td>
                      <td className="px-4 py-2">{newsItem.newsTitle}</td>
                      <td className="px-4 py-2">{newsItem.author?.username}</td>
                      <td className="px-4 py-2">
                        {new Date(newsItem.createdAt).toLocaleDateString()}
                      </td>

                      <td className="px-4 py-2 flex flex-row items-center justify-center">
                        <button
                          onClick={() => handleEditNews(newsItem)}
                          className="px-4 py-2 bg-primarygray text-white rounded-xl mr-2"
                        >
                          <Edit2 />
                        </button>
                        <button
                          onClick={() => handleDeleteNews(newsItem._id)}
                          className="px-4 py-2 bg-primarygray text-red rounded-xl"
                        >
                          <TrashIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NewsPageAdmin;
