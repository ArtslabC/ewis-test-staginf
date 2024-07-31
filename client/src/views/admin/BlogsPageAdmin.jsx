import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Edit2, TrashIcon } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function BlogsPageAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchBlogs();
  }, [currentPage]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        `${SERVER_URL}/api/blogs?page=${currentPage}&limit=5`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBlogs(data.blogs || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      setError(error.message);
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setRedirect(true);
  };

  const handleDeleteBlog = async (id) => {
    try {
      const token = localStorage.getItem("ewis_sl_user"); // Retrieve token from localStorage
      if (!token) {
        console.error("No token found, user might not be authenticated");
        return;
      }

      const response = await fetch(`${SERVER_URL}/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      fetchBlogs();
      toast.success("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (redirect) {
    return <Navigate to={`/update-post/${editingBlog._id}`} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="w-full flex flex-col items-center bg-primarygray py-10">
        <h1 className="text-3xl font-bold my-8">Blogs Admin Page</h1>
        <div className="overflow-x-auto w-full px-20">
          <div className=" w-full flex flex-row items-center justify-end py-3">
            <Link
              to={"/create-post"}
              className="bg-primary py-2 px-5 rounded-xl font-Poppins font-bold text-white"
            >
              Create Post
            </Link>
          </div>
          {loading ? (
            <p className="font-Poppins text-lg font-medium text-center py-6">
              Loading blogs...
            </p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : blogs.length === 0 ? (
            <p>No blogs available.</p>
          ) : (
            <div className="bg-white rounded-xl overflow-hidden flex flex-col">
              <table className="min-w-full ">
                <thead>
                  <tr className="w-full bg-gray-100 text-lg font-Poppins text-left">
                    <th className="px-4 py-2">Cover</th>
                    <th className="px-4 py-2 w-60">Title</th>
                    <th className="px-4 py-2">Summary</th>
                    <th className="px-4 py-2">Author</th>
                    <th className="px-4 py-2 w-44">Published Date</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr
                      key={blog._id}
                      className="border-b border-primarysh font-Poppins text-sm text-left"
                    >
                      <td className="px-4 py-2">
                        {blog.cover && (
                          <img
                            src={`${SERVER_URL}/${blog.cover}`} // Ensure the correct path
                            alt={blog.title}
                            className="object-cover w-36"
                          />
                        )}
                      </td>
                      <td className="px-4 py-2">{blog.title}</td>
                      <td className="px-4 py-2">{blog.summary}</td>
                      <td className="px-4 py-2">{blog.author?.username}</td>
                      <td className="px-4 py-2">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2 flex flex-row items-center justify-center">
                        <button
                          onClick={() => handleEditBlog(blog)}
                          className="px-4 py-2 bg-primarygray text-white rounded-xl mr-2"
                        >
                          <Edit2 />
                        </button>
                        <button
                          onClick={() => handleDeleteBlog(blog._id)}
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
        <div className="flex justify-center mt-10">
          <nav aria-label="Page navigation">
            <ul className="inline-flex items-center -space-x-px list-none">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="font-Poppins font-semibold py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => handlePageChange(index + 1)}
                    className={`py-2 px-3 leading-tight ${
                      currentPage === index + 1
                        ? "text-primary bg-primarygray font-Poppins font-semibold"
                        : "text-blackFooter bg-white font-Rubik font-semibold"
                    } border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="font-Poppins font-semibold py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default BlogsPageAdmin;
