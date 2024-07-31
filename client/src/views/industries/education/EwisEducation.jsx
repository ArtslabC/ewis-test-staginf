/* eslint-disable jsx-a11y/alt-text */
import React, { Suspense, useEffect, useRef, useState } from "react";
import MainFooter from "../../../components/footer/MainFooter";
import ContactUsCom from "../../../components/common/ContactUsCom";
import { Canvas } from "@react-three/fiber";
import { Helmet } from "react-helmet";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

import {
  CSRIcon,
  EducationIcon,
  Laptop,
  LapToBook,
  Pointer,
  Tab,
  Teacher,
  EduTab,
} from "../../../assets/education";
import {
  BGFixedSection,
  H2Title,
  HeroSection,
  LoadingModels,
  Paragraph,
} from "../../../components/common";
import gsap from "gsap";
import EducationExperince from "../EducationExperince";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Container } from "../../../components/hoc";

// import { Carousel } from 'flowbite-react';
function EwisEducation() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [vidIndex, setVidIndex] = useState(0);
  const [count, setCount] = useState(null);

  const ref = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(1);
      if (vidIndex === 0 && ref.current) {
        ref.current.play();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [ref, vidIndex]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    let xSetter = gsap.quickSetter(".flair", "x", "px"); //apply it to the #id element's x property and append a "px" unit
    let ySetter = gsap.quickSetter(".flair", "y", "px"); //apply it to the #id element's x property and append a "px" unit

    window.addEventListener("mousemove", (e) => {
      xSetter(e.x);
      ySetter(e.y);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Education</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <HeroSection
        boldTitle="Empowering Education Through Technology"
        description="EWIS pioneers technology integration in education, creating immersive learning experiences for students."
        btnLink="#eduSecond"
        heroImage={Tab}
        imageClasses="max-h-[380px] w-full"
      />
      <BGFixedSection
        background="bg-eduPara"
        title="Impactful Statistics"
        description={[
          "Since 1997, EWIS has supplied over 52,000 computers to 800 schools across Sri Lanka, revolutionizing the learning experience.",
        ]}
      />
      {/* ----------------------------------- */}
      <div
        id="eduSecond"
        className="section-padding bg-background px-5 lg:px-0"
      >
        <Container>
          <div className=" mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
            <div className="flex items-center md:w-[40%] ">
              {count && (
                <video
                  style={{ display: vidIndex === 1 ? "none" : "block" }}
                  src={LapToBook}
                  autoPlay
                  muted
                  onEnded={() => setVidIndex((idx) => idx + 1)}
                />
              )}
              <img
                style={{ display: vidIndex === 0 ? "none" : "block" }}
                src={Laptop}
                className="mt-0.02 max-h-[300px] md:max-h-[300px]"
                ref={ref}
              />
              {/* <video muted
                          autoPlay
                          loop className=''>
                          <source
                              type='video/mp4'
                              src='/assets/education/laptobook.mov'
                          />
                      </video> */}
            </div>
            <div className="flex flex-col gap-5 md:w-[60%]">
              <H2Title align="text-center md:text-left">
                EWIS's History in Education Since 1997
              </H2Title>
              <Paragraph align="text-center md:text-left">
                Since 1997, EWIS has been a pioneer in integrating technology
                into learning environments. With a wealth of experience in
                education projects, EWIS has impacted thousands of children by
                introducing them to the power of technology.
              </Paragraph>
            </div>
          </div>
        </Container>
      </div>
      {/* ------------------------------------ */}

      {/* ------------------------------------ */}
      <div className="bg-background-secondary">
        <Container classes="section-padding screen group cursor-none ">
          <div className="flex flex-col lg:flex-row items-center h-full gap-2">
            <div className="flex justify-center md:justify-start flex-col sm:px-8 text-left w-full lg:w-[55%] col h-full">
              <div
                className="flex flex-col gap-5"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <div className="flex flex-col gap-5">
                  <p className="font-bold text-black">Transforming</p>
                  <H2Title align="text-left">
                    Empowering Education Through the Thousand School Project
                  </H2Title>
                  <Paragraph align="text-left">
                    The Thousand School Project, initiated by EWIS, has had a
                    profound impact on education in Sri Lanka. By providing
                    schools with cutting-edge technology and resources, we have
                    revolutionized the learning experience for thousands of
                    students.
                  </Paragraph>
                </div>
                <div className="flex flex-row gap-5">
                  <ArrowRightCircleIcon
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                  <p className="font-Rubik text-base text-black font-bold">
                    Empowering Schools with State-of-the-Art Technology
                  </p>
                </div>
                <div className="flex flex-row gap-5">
                  <ArrowRightCircleIcon
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                  <p className="font-Rubik text-base text-black font-bold">
                    Enhancing Learning through Interactive Tools
                  </p>
                </div>
                <div className="flex flex-row gap-5">
                  <ArrowRightCircleIcon
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                  <p className="font-Rubik text-base text-black font-bold">
                    Creating Engaging and Immersive Classroom Experiences
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full mt-20 lg:mt-0 lg:w-[45%]  lg:px-20 ">
              <img
                src={Pointer}
                alt=""
                className="h-40 w-40 fixed top-0 left-0 pointer-events-none flair z-20 invisible group-hover:visible"
              />
              <div className="relative max-h-[320px] aspect-[3/2]">
                <div
                  id="camera"
                  className="w-4 rounded-full h-4 absolute top-[10px]  left-[50%] -translate-x-2/4  bg-gray-800 z-[2] flex justify-center items-center"
                >
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                </div>
                <div className=" w-full h-full bg-gray-300 border-[35px] border-[#111111] rounded-3xl relative">
                  <div className="w-full h-full">
                    <Swiper className="w-full h-full">
                      <SwiperSlide>
                        <img
                          src={CSRIcon}
                          alt=""
                          className="w-full h-full object-cover cursor-none"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={EducationIcon}
                          alt=""
                          className="w-full h-full object-cover cursor-none"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={Teacher}
                          alt=""
                          className="w-full h-full object-cover cursor-none"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ----------------------------------- */}
      {/* <div className="max-w-7xl mx-auto py-28 lg:h-full">
              <div className="h-full text-center px-64">

              </div>
          </div> */}

      {/* <div className=" h-screen w-screen flex flex-col gap-20 text-center items-center group z-10 ">
        <div className="lg:w-1/2 px-5 lg:px-0">
          <H2Title>
            Enhance Interactive Learning and Teaching with the Smart Interactive
            Board
          </H2Title>
          <img
            src={Pointer}
            alt=""
            className="h-72 w-72 fixed top-0 left-0 pointer-events-none flair z-20 invisible group-hover:visible"
          />
        </div>

        <Suspense fallback={<LoadingModels />}>
          <Canvas
            className="r3f z-10"
            camera={{
              fov: 45,
              near: 2,
              far: 2000,
              position: [0, 0.1, 2],
            }}
          >
            <EducationExperince />
          </Canvas> 
        </Suspense>
      </div> */}
      {/* <div className="relative -top-[500px] z-20"> */}
      {/* <Swiper className="mySwiper w-[400px] bg-primarygray ">
          <SwiperSlide>
            <CardStyleOne
              //image='/assets/example.png'
              cardTitle="Transform Your Classroom with the Smart Interactive Board"
              cardDes="The Smart Interactive Board revolutionizes the way students learn and teachers teach."
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardStyleOne
              //image='/assets/example.png'
              cardTitle="Engage Students with Interactive Learning Using the Smart Interactive Board"
              cardDes="Experience a new level of classroom engagement and collaboration."
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardStyleOne
              //image='/assets/example.png'
              cardTitle="Empower Teachers and Students with the Smart Interactive Board"
              cardDes="Unlock the potential of interactive teaching and learning."
            />
          </SwiperSlide>
        </Swiper> */}
      {/* </div> */}
      <ContactUsCom />
    </>
  );
}

export default EwisEducation;
