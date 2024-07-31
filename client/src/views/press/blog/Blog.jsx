import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet";
import Headroom from "react-headroom";
import axios from "axios";
import NavBar from "../../../components/navBar/NavBar";
import ContactUsCom from "../../../components/common/ContactUsCom";
import MainFooter from "../../../components/footer/MainFooter";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchBlogs = async (page = 1) => {
      try {
        const response = await axios.get(
          `${SERVER_URL}/api/blogs?page=${page}&limit=9`
        );
        const sortedBlogs = response.data.blogs;
        setBlogs(sortedBlogs);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setLoading(true);
    setCurrentPage(page);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Blogs</title>
        <meta name="description" content="Ewis - Blogs" />
      </Helmet>
      <div className="w-screen bg-primary flex flex-col px-5 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-5 lg:px-0 py-10">
          <div className="flex flex-col items-end justify-center lg:justify-start sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col lg:relative bottom-10 gap-5">
            <h1 className="text-white font-bold font-Poppins text-3xl leading-tight lg:text-5xl">
              Our Blog
            </h1>
          </div>
          <div
            className="flex justify-center lg:justify-center flex-col sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-offset="300"
            data-aos-duration="1500"
          >
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/online-blog-5842029-4897960.png"
              alt="Blogs"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto bg-fixed px-5 lg:px-0 py-20">
        <div className="flex flex-col lg:flex-row items-start justify-center h-full gap-5">
          {loading ? (
            <p className="font-Poppins text-3xl font-medium">
              Loading blogs...
            </p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : blogs?.length === 0 || !blogs ? (
            <p className="font-Poppins text-2xl font-medium">
              No blogs available.
            </p>
          ) : (
            <>
              <div className="columns-1 gap-1 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 [&>div:not(:first-child)]:mt-8">
                {blogs.map((blog) => (
                  <Link
                    to={`/post/${blog.slug}`} // Navigate using the slug
                    key={blog._id}
                    className="p-5 bg-primarygray rounded-xl flex flex-col gap-3 ring-1 space-y-2 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md relative group"
                  >
                    <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500 font-Rubik">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </time>
                    <div className="overflow-hidden rounded-xl w-full">
                      <img
                        src={`${SERVER_URL}/${blog.cover}`} // Ensure the correct path
                        alt={blog.title}
                        className="group-hover:scale-110 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-primary font-Poppins">
                      {blog.title}
                    </h3>
                    <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400 font-Poppins">
                      {blog.summary}
                    </p>
                    <div className="w-60 transition-transform bg-black text-white py-1 px-6 font-Rubik text-base border-solid border-2 border-black rounded-lg font-black flex flex-row items-center justify-center gap-5 group-hover:translate-x-2 group-hover:bg-primary group-hover:border-primary">
                      Read more
                      <div className="flex py-1 w-11 flex-none items-center justify-center rounded-lg">
                        <ArrowTrendingUpIcon
                          className="h-6 w-6 text-gray-600 transition-transform group-hover:translate-x-2 group-hover:text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
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
            </>
          )}
        </div>
      </div>
    </>
  );
}
