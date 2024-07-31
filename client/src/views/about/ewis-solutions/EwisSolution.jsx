/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useScroll, useSpring, motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import {
  ERPSolutions,
  CloudBasedSolutions,
  DeviceSolutions,
  HighPerformanceNetwork,
  PointOfSalesSolutions,
  SecuritySurveilance,
  ServerStorageConsolidation,
  UnleashYourDigitalPotential,
  Character3d,
} from "../../../assets/EWISSolutions";
import { Container } from "../../../components/hoc";
import {
  H2Title,
  Paragraph,
  SolutionCard,
  ContactUsCom,
  HeroBtn,
  BGFixedSection,
  HeroSection,
  SectionHeader,
  TwoLayoutSectionNormal,
} from "../../../components/common";

function EwisSolution() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const words = [
    "Agriculture",
    "Homeware & Furniture",
    "Automotive",
    "Machinery & Equipment",
    "Building Material Suppliers",
    "Mining",
    "Chemicals, Paper & Rubber",
    " Office Supplies",
    "Construction",
    " Oil & Gas",
    "Facilities Management",
    "Pharmaceuticals",
    "Fashion",
    "Plumbing, HVAC & Fire",
    "Food & Beverage",
    "Transportation",
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const EWIS_SOLUTION_CARDS = [
    {
      icon: DeviceSolutions,
      title: "Device Solutions",
      desc: "Discover EWIS's latest technological innovations and stylish, versatile devices, backed by Intel and Microsoft. Customized to your needs, our devices enhance productivity and entertainment.",
    },
    {
      icon: ServerStorageConsolidation,
      title: "Server & Storage Consolidation",
      desc: "Improve business efficiency with server consolidation. EWIS offers enterprise-level SAN and NAS configurations for cost-effective storage consolidation, enhancing your bottom line.",
    },
    {
      icon: HighPerformanceNetwork,
      title: "High-Performance Network",
      desc: "Power your operations with high-performance networks. EWIS provides dynamic circuit connection capabilities for efficient and scalable network solutions.",
    },
    {
      icon: SecuritySurveilance,
      title: "Security & Surveillance",
      desc: "EWIS delivers advanced security and surveillance solutions, integrating multiple systems for your safety needs.",
    },
    {
      icon: CloudBasedSolutions,
      title: "Cloud-Based Solutions",
      desc: "Transform your business with EWIS's cloud systems integration and managed services. Our customized solutions leverage the latest cloud technology.",
    },
    {
      icon: PointOfSalesSolutions,
      title: "Point of Sale Solutions",
      desc: "Empower retail operations with EWIS's platform-independent POS software. Streamline your business with end-to-end automation.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>EWIS Solutions</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top"
        style={{ scaleX }}
      />
      <HeroSection
        boldTitle="Unleash Your Digital Potential with EWIS Solutions"
        description="Your gateway to cutting-edge technological solutions and devices that empower your digital journey."
        btnLink="#aboutussec"
        heroImage={UnleashYourDigitalPotential}
      />
      <BGFixedSection
        background="bg-background-secondary"
        title="Your Digital Transformation Partner"
        description={[
          "At EWIS Solutions, we're more than just a technology provider; we're your partner in digital transformation. With unwavering support from industry leaders Intel and Microsoft, we bring you cutting-edge devices and tailored solutions to elevate your digital journey.",
        ]}
      />
      <div className="w-full " id="aboutussec">
        <Container classes="section-padding flex flex-col items-center gap-10">
          <SectionHeader
            title="EWIS Solutions"
            description="Empowering Your Digital Experience"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5">
            {EWIS_SOLUTION_CARDS.map((card, i) => (
              <SolutionCard card={card} key={i} />
            ))}
          </div>
        </Container>
      </div>
      <div className=" bg-background-secondary ">
        <Container classes="section-padding flex flex-col-reverse lg:flex-row items-center gap-5 ">
          <div className="p-10 w-[50%]">
            <img src={ERPSolutions} className="max-h-[300px] object-contain" />
          </div>
          <div className="flex flex-col items-center md:items-start justify-center w-full lg:w-[50%] text-center md:text-left gap-5">
            <p className="font-Poppins text-base text-black font-semibold">
              Integrated Business Management with
            </p>
            <H2Title align="text-left">ERP Solutions</H2Title>
            <Paragraph align="text-center md:text-left">
              As an Authorized Re-Seller for PRONTO ERP Software in Sri Lanka,
              we offer a fully integrated ERP solution that covers the complete
              range of business activities. PRONTO ERP is designed around a core
              engine for financials and business reporting, with advanced
              features and functionality for diverse industries.
            </Paragraph>
            <Paragraph align="text-center md:text-left">
              Our modular-based scalable product is suitable for businesses of
              any size, and we provide both on-premises and cloud-based
              implementations.
            </Paragraph>
            <div className="w-full">
              <Marquee
                key={Math.random()}
                velocity={5}
                minScale={0.7}
                resetAfterTries={100}
                //scatterRandomly
              >
                {words.map((word, index) => (
                  <p
                    key={index}
                    className="px-5 text-primary font-Rubik font-semibold text-base"
                  >
                    {word}
                  </p>
                ))}
              </Marquee>
            </div>
            <HeroBtn
              link="https://www.pronto.net/"
              text="Visit Pronto ERP Website"
            />
          </div>
        </Container>
      </div>
      <TwoLayoutSectionNormal
        title="Pioneering Excellence in Technology"
        description={[
          "At EWIS Solutions, we are dedicated to driving technological innovation and operational efficiency across diverse industries. Our solutions are designed to address the evolving needs of modern businesses, providing advanced IT services, consulting, and managed solutions. With a commitment to excellence and a focus on delivering impactful results, we empower organizations to achieve their strategic goals and thrive in a competitive global market.",
        ]}
        image={Character3d}
      />
      <ContactUsCom />
    </>
  );
}

export default EwisSolution;
