import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import ContactUsCom from "../../components/common/ContactUsCom";
import MainFooter from "../../components/footer/MainFooter";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { Helmet } from "react-helmet";
import Headroom from "react-headroom";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export default function SinglePost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(`${SERVER_URL}/api/blogs/slug/${slug}`, {
        credentials: "include",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.json();
        })
        .then((data) => setPost(data))
        .catch((error) => {
          console.error("Error fetching post:", error);
          setError(error.message);
        })
        .finally(() => setLoading(false));
    } else {
      console.error("Slug is undefined");
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetch(`${SERVER_URL}/api/blogs/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data.blogs)) {
          setRecentPosts(data.blogs.slice(0, 5)); // Get the 5 most recent posts
        } else {
          throw new Error("Data format is incorrect");
        }
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching recent posts:", error);
      });
  }, []);

  if (!post)
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center font-Poppins text-2xl bg-primary text-white">
        <span>Loading...</span>
      </div>
    );

  return (
    <>
      <Helmet>
        <title>Blog - {post.title}</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <div className="max-w-7xl mx-auto bg-fixed px-5 lg:px-0 py-20">
        <div className="w-full flex flex-row items-start justify-start">
          <div className="p-5 basis-3/4 gap-5 flex flex-col">
            {loading ? (
              <>
                <p className="text-blackFooter font-normal font-Poppins text-justify">
                  Loading ...
                </p>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold font-Poppins capitalize text-left">
                  {post.title}
                </h1>
                {post.cover && (
                  <img
                    src={`${SERVER_URL}/${post.cover}`} // Adjust port if needed
                    alt={post.title}
                    className="object-cover w-full rounded-2xl"
                  />
                )}

                <p className="text-blackFooter font-normal font-Poppins text-justify ">
                  {post.summary}
                </p>
                <div
                  className="text-blackFooter font-normal font-Poppins text-justify"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </>
            )}
          </div>
          <div className="p-5 basis-1/4 flex flex-col gap-5">
            <h2 className="text-2xl font-bold font-Poppins border-b-2">
              Recent Posts
            </h2>
            {loading ? (
              <p className="text-blackFooter font-normal font-Poppins text-justify">
                Loading recent posts...
              </p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : recentPosts.length === 0 ? (
              <p>No recent posts available.</p>
            ) : (
              <div>
                {recentPosts.map((recentPost) => (
                  <div key={recentPost._id} className="mb-4">
                    <Link
                      to={`/post/${recentPost.slug}`} // Navigate using the slug
                      key={recentPost._id}
                      className="p-5 bg-primarygray rounded-xl flex flex-col gap-3 ring-1 space-y-2 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md relative group"
                    >
                      <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500 font-Rubik">
                        {new Date(recentPost.createdAt).toLocaleDateString()}
                      </time>
                      <div className="overflow-hidden rounded-xl w-full">
                        <img
                          src={`${SERVER_URL}/${recentPost.cover}`} // Ensure the correct path
                          alt={recentPost.title}
                          className="group-hover:scale-110 transition-all duration-300"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-primary font-Poppins">
                        {recentPost.title}
                      </h3>

                      <div className="w-60 transition-transform bg-black text-white py-1 px-6 font-Rubik text-base border-solid border-2 border-black rounded-lg font-black flex flex-row items-center justify-center gap-5  group-hover:bg-primary group-hover:border-primary">
                        <span className="">Read more</span>
                        <div className="flex py-1 w-11 flex-none items-center justify-center rounded-lg">
                          <ArrowTrendingUpIcon
                            className="h-6 w-6 text-gray-600 group-hover:text-white"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <ContactUsCom />
      <MainFooter />
    </>
  );
}
