import React, { useEffect } from "react";
import MainFooter from "../../../components/footer/MainFooter";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet";
import { motion, useScroll, useSpring } from "framer-motion";

import { Home, ST, The, HeroImage } from "../../../assets/manufacture";
import { Container } from "../../../components/hoc";
import {
  H2Title,
  TwoLayoutSectionNormal,
  HeroSection,
  BGFixedSection,
  ContactUsCom,
  Paragraph,
} from "../../../components/common";
function Manufacturing() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <title>Manufacturing</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <HeroSection
        boldTitle="Empowering Manufacturing Excellence"
        description="Discover how our robust Manufacturing Information System can optimize operational efficiency and drive profitability."
        btnLink="#manufaSecond"
        heroImage={Home}
        imageClasses="max-h-[500px] h-full"
      />

      <TwoLayoutSectionNormal
        background="bg-background-secondary"
        id="manufaSecond"
        reversed={true}
        title="Streamlining Manufacturing Operations for Optimal Efficiency and Profitability"
        description={[
          "At EWIS, we understand the importance of efficient manufacturing operations.",
          "From material receipt to production and shipping, we provide comprehensive solutions that optimize your processes and drive profitability.",
        ]}
        image={ST}
        imageClasses="max-w-[350px]"
      />

      <Container classes="flex flex-col lg:flex-row items-center gap-10 section-padding">
        <div className="flex justify-center md:justify-start flex-col md:text-left lg:w-[50%]">
          <div
            className="flex flex-col gap-5 text-center md:text-left"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-offset="300"
            data-aos-duration="1500"
          >
            <H2Title align=" text-left">
              The Crucial Intersection: Material, Money, and Information Flow in
              Manufacturing
            </H2Title>
            <Paragraph align=" text-left">
              In a manufacturing enterprise system, the material, money, and
              information flows are interconnected and vital for operational
              success.
            </Paragraph>
            <div className="flex flex-row gap-5">
              <div className="h-6 w-6">
                {" "}
                <ArrowRightCircleIcon
                  className="h-6 w-6 text-gray-600 "
                  aria-hidden="true"
                />
              </div>

              <p className="font-Rubik text-base text-left text-black font-bold">
                Optimizing material flow for efficient production and delivery
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <div className="h-6 w-6">
                {" "}
                <ArrowRightCircleIcon
                  className="h-6 w-6 text-gray-600 "
                  aria-hidden="true"
                />
              </div>
              <p className="font-Rubik text-base text-left text-black font-bold">
                Ensuring smooth financial transactions through effective money
                flow management
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <div className="h-6 w-6">
                {" "}
                <ArrowRightCircleIcon
                  className="h-6 w-6 text-gray-600 "
                  aria-hidden="true"
                />
              </div>
              <p className="font-Rubik text-base text-left text-black font-bold">
                Seamless information flow for accurate decision-making and
                operational excellence
              </p>
            </div>
          </div>
        </div>
        <div className="  flex items-center sm:px-8 md:w-[50%]  md:justify-center">
          <img src={The} alt="" className="max-h-[280px] md:max-h-[500px]" />
        </div>
      </Container>

      <TwoLayoutSectionNormal
        background="bg-background-secondary"
        reversed={true}
        title="Unlocking Manufacturing Excellence through Information Systems"
        description={[
          "A well-designed manufacturing information system is the key to achieving higher levels of financial performance and operational efficiency. It enables seamless flow of information, optimizing processes and driving profitability.",
          "From material receipt to production and shipping, we provide comprehensive solutions that optimize your processes and drive profitability.",
        ]}
        image={HeroImage}
      />

      {/*  */}
      <BGFixedSection
        title="Revolutionize Your Manufacturing Efficiency"
        description={[
          "Unlock the potential of your manufacturing processes with EWIS’s advanced technology solutions. Reach out today to discover how our state-of-the-art tools can enhance your production efficiency, improve quality, and drive operational excellence. Elevate your manufacturing capabilities with EWIS—contact us now!",
        ]}
      />
      <ContactUsCom />
    </>
  );
}

export default Manufacturing;
