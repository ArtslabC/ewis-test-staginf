/* eslint-disable jsx-a11y/alt-text */
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useSpring, motion, useScroll } from "framer-motion";
import { Helmet } from "react-helmet";

import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { Container } from "../../../components/hoc";
import {
  AboutEwisColombo,
  EnhancedProduction,
  EnsuringSafety,
  Innovation,
  IslandWideSupport,
} from "../../../assets/EWISColomboLimited";
import {
  H1Title,
  H2Title,
  Paragraph,
  ContactUsCom,
  LoadingModels,
  HeroBtn,
  LoadingImages,
  BGFixedSection,
  TwoLayoutSectionNormal,
} from "../../../components/common";
import CertificateCarosal from "./CertificateCarosal";
import Efac from "./models/Efac";

function ColomboLimited() {
  const { scrollYProgress } = useScroll();
  const ref = useRef();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const CARDS = [
    {
      title: "Ensuring Safety",
      image: EnsuringSafety,
      description:
        "Our commitment to safety includes ESD Protective Equipment to prevent static electricity buildup, air showers for particle control, and clean rooms for display manufacturing, ensuring product safety and quality.",
    },
    {
      title: "Enhanced Production",
      image: EnhancedProduction,
      description:
        "Our automated assembly line streamlines product construction, accommodating different variations efficiently. The ISO Class 7 clean room maintains a dust-free environment for display manufacturing, while our aging line tests products under extreme conditions for optimal performance.",
    },
    {
      title: "Islandwide Support",
      image: IslandWideSupport,
      description:
        "Our efficient islandwide after-sales support ensures a 2-hour response time, providing timely assistance and service to our valued customers.",
    },
    {
      title: "Innovation Hub",
      image: Innovation,
      description:
        "Explore our collaboration with the University of Moratuwa to establish a Computer and Process Development Research Centre. Here, we harness the talent of graduates in engineering and technology to drive innovation and development of EWIS products.",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>EWIS Colombo Limited</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top"
        style={{ scaleX }}
      />

      <Container classes=" lg:min-h-[700px] lg:pt-[80px] section-padding text-center lg:text-left h-[1px] flex  md:items-center flex-col-reverse  lg:flex-row  lg:gap-10 ">
        <div className="w-full flex flex-col items-center text-center lg:text-left md:items-start gap-8 lg:w-[50%]  ">
          <div className="flex flex-col gap-2">
            <H1Title>EWIS Colombo Limited</H1Title>
            <Paragraph align="text-center lg:text-left">
              Discover how EWIS Colombo Limited drives innovation and excellence
              across Sri Lanka, shaping the future with cutting-edge technology
              and dedicated service.
            </Paragraph>
          </div>
          <div className="flex justify-center w-full lg:justify-start">
            <HeroBtn link="#colomboLimiSec" className />
          </div>
        </div>
        <div className="md:w-[50%] max-h-[340px] h-[400px] flex items-center justify-center  ">
          <Suspense fallback={<LoadingModels />}>
            <Canvas dpr={[1, 1.8]}>
              <Environment preset="sunset" />
              <OrbitControls
                minAzimuthAngle={-Math.PI / 8}
                maxAzimuthAngle={Math.PI / 8}
                minPolarAngle={Math.PI / 2} // Set both min and max to the same value
                maxPolarAngle={Math.PI / 2}
                enableZoom={false}
              />
              <Efac />
            </Canvas>
          </Suspense>
        </div>
      </Container>
      <TwoLayoutSectionNormal
        background="bg-background-secondary"
        id="colomboLimiSec"
        image={AboutEwisColombo}
        title="About EWIS Colombo Limiteed"
        description={[
          "EWIS Colombo Limited (ECL) is the flagship company of the EWIS Group and a leading IT company in Sri Lanka with over three decades of experience. We specialize in delivering cutting-edge IT solutions, manufacturing high-end technology products, and serving diverse sectors across the island.",
        ]}
      />

      <BGFixedSection
        background="bg-manuBack"
        title="Our State-of-the-Art Facility"
        description={[
          "Explore our world-class manufacturing facility, equipped with cutting-edge technologies from renowned partners such as Intel, Microsoft, Asus, and Pegatron. At ECL, we take pride in producing high-end desktop PCs, laptops, tablets, mobile phones, and smartboards of exceptional quality.",
        ]}
      />
      <div className="bg-background-secondary " id="colomboLimiSec">
        <Container classes="section-padding flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="lg:basis-1/2 flex flex-col gap-5 justify-center items-center lg:items-start ">
            <H2Title align="text-center lg:text-left">
              Certifications & Standards
            </H2Title>
            <Paragraph align="text-center max-w-2xl lg:max-w-[unset] lg:text-left">
              We hold certifications such as CE, FCC, ROHS, ISO 9001:2015, and
              ISO 14001:2015, reflecting our commitment to quality,
              environmental standards, and compliance with international norms.
            </Paragraph>
          </div>
          <div className="flex items-center justify-center lg:basis-1/2 text-center lg:text-left">
            <div className="w-full z-10">
              <CertificateCarosal />
            </div>
          </div>
        </Container>
      </div>
      <Container classes="section-padding flex flex-col gap-24 lg:gap-28">
        {CARDS.map((card, i) => {
          let style = "";
          if ((i + 1) % 2 != 0) {
            style = "flex-col lg:flex-row-reverse";
          } else {
            style = "flex-col lg:flex-row";
          }

          return (
            <div
              key={i}
              className={` mx-auto flex flex-col-reverse ${style} lg:flex-row items-center h-full gap-5 `}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-offset="300"
              data-aos-duration="100"
            >
              <div className="flex flex-col gap-5 w-full text-center lg:w-[60%] lg:text-left lg:items-start">
                <H2Title align="text-center lg:text-left">{card.title}</H2Title>
                <Paragraph align="text-center max-w-2xl lg:max-w-[unset] lg:text-left">
                  {card.description}
                </Paragraph>
              </div>
              <div className="flex justify-center lg:justify-center items-center flex-col   lg:basis-1/2 col ">
                <div className="w-full lg:w-full flex justify-center items-centers">
                  <img
                    src={card.image}
                    className="max-h-[200px] h-full object-contain"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Container>
      <ContactUsCom />
    </>
  );
}

export default ColomboLimited;

// <Canvas
// dpr={[1, 2]}
// // shadows
// // camera={{ fov: 45 }}
// // style={{ position: "absolute" }}
// className="h-full"
// >
// <OrbitControls
//   // enableRotate={false}
//   minAzimuthAngle={-Math.PI}
//   maxAzimuthAngle={Math.PI}
//   minPolarAngle={Math.PI / 2} // Set both min and max to the same value
//   maxPolarAngle={Math.PI / 2}
// />

// <Stage environment={"sunset"}>
//   <Model rotation={[1, 0, 0, Math.PI / 2]} />
// </Stage>
// </Canvas>
