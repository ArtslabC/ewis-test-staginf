import React, { Suspense, useEffect } from "react";
import {
  ContactUsCom,
  H2Title,
  HeroBtn,
  HeroSection,
  LoadingImages,
  LoadingImagesCom,
  Paragraph,
  SectionHeader,
  TwoLayoutSectionNormal,
} from "../../../components/common";
import { Helmet } from "react-helmet";
import { useScroll, useSpring, motion } from "framer-motion";
import {
  FormIcon1,
  FormIcon10,
  FormIcon11,
  FormIcon2,
  FormIcon3,
  FormIcon4,
  FormIcon5,
  FormIcon6,
  FormIcon7,
  FormIcon8,
  FormIcon9,
  AboutToppanForms,
  OurProducts,
  ToppanFormsHero,
} from "../../../assets/toppanforms";

import { Container } from "../../../components/hoc";
import ToppanFeatureCard from "./toppan-feature-card";
import ToppanServiceCard from "./toppan-service-card";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
function ToppanForms() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const SERVICES = [
    {
      icon: FormIcon1,
      title: "DPS (Data Print Services)",
      description:
        "Expert data editing and processing for maximum security and compliance with regulations. Tailored solutions for direct marketing needs.",
    },
    {
      icon: FormIcon2,
      title: "Commercial Printing",
      description:
        "A wide variety of business forms and services to meet market requirements.",
    },
    {
      icon: FormIcon3,
      title: "Business Forms",
      description:
        "Leading the industry in designing and printing various forms, ensuring the effective operation of your data processing systems.",
    },
    {
      icon: FormIcon4,
      title: "Lottery Printing",
      description:
        "Specialized printing services for lottery tickets, catering to industry-specific needs.",
    },
    {
      icon: FormIcon5,
      title: "Scratch-Card Printing",
      description:
        "Expertise in printing scratch cards to meet the demands of various sectors.",
    },
    {
      icon: FormIcon6,
      title: "Variable Data Printing:",
      description:
        "Efficient and customizable printing solutions for variable data requirements.",
    },
    {
      icon: FormIcon7,
      title: "Security Printing",
      description:
        "Top-level security systems to protect confidential data, ensuring safety and confidentiality.",
    },
  ];

  const OUR_TOPPAN_PRODUCTS = [
    {
      title: "Continuous Forms",
      icon: FormIcon8,
      description:
        "High-quality continuous forms designed to meet various business needs.",
    },
    {
      title: "Security Forms",
      icon: FormIcon9,
      description:
        "Secure and foolproof forms to safeguard your data processing systems.",
    },
    {
      title: "Pressure Seal Forms",
      icon: FormIcon10,
      description:
        "Secure and foolproof forms to safeguard your data processing systems.",
    },
    {
      title: "Bar Code Forms",
      icon: FormIcon11,
      description:
        "Bar Code Forms - Forms optimized for easy and accurate data tracking.",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Toppan Forms</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <div
        className={` py-32 min-h-[700px] pt-[80px] flex items-center bg-red-accent  text-white`}
      >
        <Container classes="flex flex-col-reverse md:flex-row gap-10 items-center">
          <div className="flex flex-col justify-start gap-2 w-full md:w-[65%] text-center md:text-left  ">
            <h1 className={`text-white  h2-bold `}>Toppan Forms</h1>
            <p className={`text-white  h4-bold mb-2`}>
              Leading the Way in Print Management Outsourcing.
            </p>
            <div className="flex justify-center md:justify-start mt-5 ">
              <a
                href="#aboutsec"
                className={`group w-fit transition-transform   py-1 px-6 font-Rubik text-base border-solid border-2 rounded-lg font-black flex flex-row items-center justify-center gap-5 hover:translate-x-2
       bg-red text-white border-red hover:bg-red hover:border-red hover:text-white
        `}
              >
                Explore More
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                  <ArrowTrendingUpIcon
                    className={` h-6 w-6  transition-transform group-hover:translate-x-2 text-white group-hover:text-white`}
                    aria-hidden="true"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="w-[60%] mx-auto md:mr-0 ">
            <Suspense fallback={<LoadingImagesCom />}>
              <img
                src={ToppanFormsHero}
                alt=""
                className="h-full max-h-[280px] md:max-h-[450px] mx-auto object-contain"
              />
            </Suspense>
          </div>
        </Container>
      </div>

      <div id="aboutsec" className={` section-padding w-full`}>
        <Container
          classes={`flex gap-10 md:items-center md:flex-row-reverse flex-col-reverse`}
        >
          <div className="w-full flex flex-col text-center gap-8 md:w-[60%]">
            <h1
              className={`text-[#000] font-bold font-Poppins lg:text-3xl text-2xl leading-tight text-center md:text-left`}
            >
              About Toppan Forms
            </h1>
            <div className={`flex flex-col gap-5 text-center md:text-left`}>
              <p className="font-Rubik lg:text-lg text-sm text-black font-semibold">
                Toppan Forms (Colombo) Ltd. has proudly led the industry for
                over two decades, specializing in manufacturing and supplying
                continuous computer forms, business forms, pin mailers,
                envelopes, cheques, and share certificates. With a relentless
                commitment to quality and efficiency, we've earned a reputation
                for excellence.
              </p>
            </div>
          </div>
          <div className="w-[40%] mx-auto md:mx-0 flex justify-center items-center">
            <Suspense fallback={<LoadingImages />}>
              <img
                src={AboutToppanForms}
                className="h-full max-h-[380px] object-contain absolute"
              />
            </Suspense>
          </div>
        </Container>
      </div>
      <div className="section-padding bg-topans bg-red-accent bg-fixed bg-cover ">
        <Container classes="flex flex-col gap-5">
          <h2 className="text-white text-center font-bold font-Poppins lg:text-3xl text-2xl leading-tight">
            Why Choose Us
          </h2>
          <p className="font-Rubik lg:text-lg text-sm text-center max-w-4xl mx-auto text-white font-thin">
            Serving a diverse range of industries, including banking, finance,
            retail, and telecommunications, we've built long-lasting
            relationships grounded in trust and excellence.Serving a diverse
            range of industries, including banking, finance, retail, and
            telecommunications, we've built long-lasting relationships grounded
            in trust and excellence.
          </p>
        </Container>
      </div>
      <Container classes="section-padding flex flex-col gap-10 md:gap-14">
        <h2 className="text-[#000] font-bold text-center font-Poppins lg:text-3xl text-2xl leading-tight">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {SERVICES.map((card, i) => (
            <ToppanFeatureCard
              image={card.icon}
              title={card.title}
              description={card.description}
              key={i}
            />
          ))}
        </div>
      </Container>
      <div className="section-padding bg-topans bg-red-accent bg-fixed bg-cover ">
        <Container classes="flex flex-col gap-5">
          <h2 className="text-white text-center font-bold font-Poppins lg:text-3xl text-2xl leading-tight">
            Elevate Your Printing Solutions Now
          </h2>
          <p className="font-Rubik lg:text-lg text-sm text-center max-w-4xl mx-auto text-white font-thin">
            Unlock the full potential of your business with Toppan Forms’
            industry-leading print management services. Reach out today to
            discover how our secure, high-quality printing solutions can
            streamline your operations and drive efficiency. Act now and let’s
            transform your print management together!
          </p>
        </Container>
      </div>
      <div className="section-padding bg-background ">
        <Container classes="flex flex-col  gap-10">
          <h2 className="text-[#000] font-bold text-center font-Poppins lg:text-3xl text-2xl leading-tight">
            Our Products
          </h2>
          <div className="flex flex-col md:flex-row  md:items-center  gap-10">
            <div className="w-full lg:w-[65%]  grid grid-cols-1 sm:grid-cols-2  gap-5">
              {OUR_TOPPAN_PRODUCTS.map((card, i) => (
                <ToppanServiceCard
                  key={i}
                  image={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
            <div className="hidden lg:flex w-[35%] justify-end  gap-5">
              <img
                src={OurProducts}
                alt=""
                className="max-h-[300px] object-contain"
              />
            </div>
          </div>
        </Container>
      </div>

      <ContactUsCom theme="toppan" background="bg-red-accent" />
    </>
  );
}

export default ToppanForms;
