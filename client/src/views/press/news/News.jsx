import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import NavBar from "../../../components/navBar/NavBar";
import ContactUsCom from "../../../components/common/ContactUsCom";
import MainFooter from "../../../components/footer/MainFooter";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { motion, useScroll, useSpring } from "framer-motion";
import Headroom from "react-headroom";
import parse from "html-react-parser";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export default function News() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/api/news`);
      if (response.ok) {
        const data = await response.json();
        setNewsData(data);
      }
    } catch (error) {
      console.error("Error fetching news data:", error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  return (
    <>
      <Helmet>
        <title>News page</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <motion.div
        className="fixed top-[80px] left-0 right-0 h-1 bg-primary origin-top"
        style={{ scaleX }}
      />
      <div className="w-screen bg-primary flex flex-col px-5 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-5 lg:px-0 py-10">
          <div className="flex flex-col items-end justify-center lg:justify-start sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col lg:relative bottom-10 gap-5">
            <h1 className="text-white font-bold font-Poppins text-3xl leading-tight lg:text-5xl ">
              Our News
            </h1>
          </div>
          <div className="flex justify-center lg:justify-center flex-col sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 ">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/newspaper-8510050-6741780.png?f=webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto bg-fixed px-5 lg:px-0 py-20">
        {loading ? (
          <div className="flex justify-center items-center">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            ></div>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-5">
            {newsData &&
              newsData?.length > 0 &&
              newsData.map((data, index) => (
                <Link
                  to={`/news/${data.slug}`} // Navigate using the slug
                  key={data._id}
                  className="p-5 bg-primarygray rounded-xl flex flex-col gap-3 ring-1 space-y-2 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md relative group"
                >
                  <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500 font-Rubik">
                    {new Date(data.createdAt).toLocaleDateString()}
                  </time>
                  <div className="overflow-hidden rounded-xl w-full">
                    <img
                      src={`${SERVER_URL}/${data.imageFile}`} // Ensure the correct path
                      alt={data.title}
                      className="group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary font-Poppins">
                    {data.newsTitle}
                  </h3>
                  <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400 font-Poppins">
                    {parse(data.description.substring(0, 100))}
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
        )}
      </div>
      <ContactUsCom />
    </>
  );
}
