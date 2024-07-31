/* eslint-disable no-restricted-globals */
import React from "react";

import { Helmet } from "react-helmet";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import MainFooter from "../../../components/footer/MainFooter";
import {
  Capsule,
  Comp,
  DockterItem,
  Hart,
  HealthImageColOne,
  HealthOne,
  HealthThree,
  HealthTwo,
  MedicalEquipment,
} from "../../../assets/healthcare";

import { Container } from "../../../components/hoc";
import {
  FeatureCard,
  ContactUsCom,
  HeroSection,
  H2Title,
  Paragraph,
  TwoLayoutSectionNormal,
} from "../../../components/common";
function Healthcare() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const ref = useRef();
  const hart = useRef();

  const HEALTHCARE_CARDS = [
    {
      image: HealthOne,
      title: "Supply and Distribution of Medical Supplies",
      description:
        "We specialize in the efficient supply and distribution of medical resources.",
    },

    {
      image: HealthTwo,
      title: "Streamlined Healthcare Delivery Nationwide",
      description:
        "Our integrated technology and streamlined processes strengthen healthcare delivery.",
    },

    {
      image: HealthThree,
      title: "Efficient Medical Resource Management",
      description:
        "We are dedicated to efficiently managing medical resources to support the healthcare sector.",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const el = ref.current;
    gsap.fromTo(el, 5, { y: -10 }, { y: 10, yoyo: true, repeat: -1 });

    const har = hart.current;
    gsap.fromTo(har, 1.5, { scale: 0.9 }, { scale: 1, yoyo: true, repeat: -1 });

    gsap.to("#speedUp", {
      yPercent: -0.1,
      y: () => -innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: "#speedUp",
        start: "center center",
        end: () => innerWidth,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    gsap.to("#speedDown", {
      yPercent: -5,
      y: () => -innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: "#speedDown",
        start: "center center",
        end: () => innerWidth,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Healthcare</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <HeroSection
        boldTitle="Empowering Healthcare Through Reliable Medical Supplies"
        description="Welcome to EWIS's Medical Supplies Division, where we ensure timely availability of pharmaceutical, surgical, laboratory, and printed materials to government healthcare institutions nationwide."
        btnLink="#healthSecond"
        heroImage={Comp}
        imageClasses="max-h-[330px] lg:max-h-[400px]"
      />

      <div
        className="section-padding bg-background-secondary"
        id="healthSecond"
      >
        <Container classes="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {HEALTHCARE_CARDS.map((card, i) => (
            <FeatureCard
              image={card.image}
              title="Supply and Distribution of Medical Supplies"
              description="We specialize in the efficient supply and distribution of medical resources."
            />
          ))}
        </Container>
      </div>

      <TwoLayoutSectionNormal
        reversed={true}
        title="Empowering Healthcare Delivery through Efficient Supply Management"
        description={[
          "EWIS, a leading player in the Medical Supplies Division (MSD) industry, is dedicated to ensuring timely availability of pharmaceutical, surgical, laboratory, radioactive, and printed materials to government healthcare institutions nationwide. Through the implementation of the Medical Supplies Management Information System (MSMIS), we streamline processes and leverage technology to strengthen healthcare delivery.",
        ]}
        image={HealthImageColOne}
        imageClasses="w-full max-h-[350px]"
      />

      <div className=" bg-background-secondary section-padding">
        <Container classes="flex flex-col justify-center items-center gap-5">
          <div className="flex flex-row gap-5 items-center bg-white rounded-full p-5">
            <img src={MedicalEquipment} alt="" className="w-40 h-40 " />
          </div>
          <div className="lg:px-20 flex flex-col gap-5 text-center">
            <H2Title>
              Efficient Distribution Network Ensuring Timely Availability of
              Medical Supplies
            </H2Title>
            <Paragraph classes="text-center">
              MSD's distribution network spans across 28 Central Medical Stores
              and Regional Medical Supplies Divisions (RMSDs), serving
              approximately 1,200 district-level hospitals. Through our
              efficient supply management, we ensure timely availability of
              pharmaceutical, surgical, laboratory, radioactive, and printed
              materials to government healthcare institutions.
            </Paragraph>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <img src={Capsule} alt="" className="w-60 h-60 hart" ref={hart} />
          </div>
        </Container>
      </div>
      <Container classes="section-padding  flex flex-col gap-5">
        <H2Title>
          Elevate Your Healthcare Solutions with Cutting-Edge Tech
        </H2Title>
        <Paragraph>
          Transform patient care and streamline your healthcare operations with
          EWIS’s innovative technology solutions. Contact us now to see how our
          advanced tools and systems can enhance your healthcare services,
          improve patient outcomes, and boost operational efficiency. Partner
          with EWIS for the future of healthcare excellence!
        </Paragraph>
      </Container>
      <ContactUsCom />
    </>
  );
}

export default Healthcare;
