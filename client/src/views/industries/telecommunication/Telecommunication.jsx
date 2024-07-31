/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";

import { Helmet } from "react-helmet";
import { motion, useScroll, useSpring } from "framer-motion";

import {
  TelecommunicationHeroImage,
  TelecommunicationIcon1,
  TelecommunicationIcon2,
  TelecommunicationIcon3,
  TelecommunicationIcon4,
  Specta,
} from "../../../assets/Telecominication";

import { Container } from "../../../components/hoc";
import {
  TwoLayoutSectionExtended,
  HeroSection,
  FeatureCard,
  Paragraph,
  H2Title,
  ContactUsCom,
  TwoLayoutSectionNormal,
  BGFixedSection,
} from "../../../components/common";

function Telecommunication() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const COMMUNICATION_CARDS = [
    {
      icon: TelecommunicationIcon1,
      title: "Real-time Data Capture for Accurate Insights",
      description:
        "The smart probe captures real-time data from network traffic, ensuring accurate and up-to-date information for analysis.",
    },

    {
      icon: TelecommunicationIcon3,
      title: "Real-time Analysis for Actionable Insights",
      description:
        "The streaming analytics engine processes the captured data, enabling real-time analysis and insights generation.",
    },

    {
      icon: TelecommunicationIcon4,
      title: "Advanced Analytics for Valuable Insights",
      description:
        "The big data analytics engine utilizes advanced analytics algorithms to analyze and uncover valuable insights from large volumes of data.",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Telecommunication</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <HeroSection
        boldTitle="Unlocking Insights for Enhanced Service Experience"
        description="EW Information Systems Ltd (EWIS) has partnered with Pinnacle Digital Analytics (Pvt) Ltd to bring you SPECTA, a powerful analytics platform that provides actionable insights into network performance, business trends, and customer behavior."
        btnLink="#teleSecond"
        heroImage={TelecommunicationHeroImage}
        imageClasses="max-h-[310px] md:max-h-[360px]"
      />
      <TwoLayoutSectionExtended
        id="teleSecond"
        reversed={true}
        background="bg-background-secondary"
        image={TelecommunicationIcon2}
        title="Unlocking Insights for Enhanced Service Experience and Business Value"
        description="SPECTA is a powerful analytics platform that empowers communication service providers by visualizing vital customer information and delivering granular insights into network performance, business trends, and customer behavior."
        cards={[
          {
            title: "Network Insights",
            description:
              "Gain valuable insights into network performance, business trends, and customer behavior.",
          },
          {
            title: "Customer Insights",
            description:
              "Understand customer behavior and preferences to enhance service experience and drive business growth.",
          },
        ]}
      />

      <Container classes="section-padding flex flex-col gap-10 md:gap-14 text-center">
        <div className="flex flex-col gap-5">
          <H2Title>
            Capturing and Processing Network Traffic Data for Insights
          </H2Title>
          <Paragraph>
            SPECTA captures and processes network traffic data in real-time,
            using advanced analytics algorithms to provide actionable insights
            for communication service providers.
          </Paragraph>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMMUNICATION_CARDS.map((card, i) => (
            <FeatureCard
              key={i}
              image={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Container>
      <div className="bg-background-secondary section-padding" id="teleSecond">
        <Container classes="flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="flex flex-col justify-center lg:justify-start sm:px-8 text-center lg:text-left md:text-left lg:w-[60%] col gap-10">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <H2Title align="text-center lg:text-left">
                  Components of SPECTA:
                </H2Title>
                <Paragraph align="text-center lg:text-left">
                  SPECTA consists of four main components: the Smart Probe,
                  Streaming Analytics Engine, Big Data Analytics Engine, and
                  Data Access and Virtualization Layer. Each component plays a
                  crucial role in providing actionable insights for enhanced
                  service experience and business value.
                </Paragraph>
              </div>
            </div>
          </div>
          <div
            className={`flex items-center  justify-center w-[50%] lg:w-[45%] 
               }
            `}
          >
            <img
              src={Specta}
              className=" max-h-[230px] md:max-h-[250px] h-full object-contain"
            />
          </div>
        </Container>
      </div>

      <BGFixedSection
        title="Your Telecom Infrastructure Boosted with EWIS Tech"
        description={[
          "Unlock the full potential of your telecommunications operations with EWIS’s state-of-the-art technology solutions. Get in touch today to discover how our advanced systems can enhance connectivity, optimize performance, and drive innovation in your telecom business. Partner with EWIS for a future-ready telecom solution!",
        ]}
      />
      <ContactUsCom />
    </>
  );
}

export default Telecommunication;
