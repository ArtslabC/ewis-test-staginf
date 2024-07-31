/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, useScroll, useSpring } from "framer-motion";

import {
  BuildingCommunities,
  EmpoweringEducation,
  RespondingToThePanademic,
  SupportingHealthcare,
  Healthcare2,
  SmartBoardImage,
  People3,
  Basket,
} from "../../assets/csrpage";

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { Container } from "../../components/hoc";

import {
  TwoLayoutSectionExtended,
  ContactUsCom,
  HeroSection,
  TwoLayoutSectionNormal,
  H2Title,
  Paragraph,
} from "../../components/common";
function CSRPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Helmet>
        <title>CSR</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <HeroSection
        boldTitle="Empowering Sri Lanka through Compassionate and Innovative Solutions"
        description="Discover how EWIS is making a positive and lasting impact on society."
        btnLink="#aboutussec"
        heroImage={BuildingCommunities}
      />

      <TwoLayoutSectionNormal
        id="aboutussec"
        background="bg-background-secondary"
        reversed={true}
        title="Empowering Education During the Pandemic: Our Distance Learning Programme"
        description={[
          "Amidst the challenges posed by the pandemic, our Distance Learning Programme has been instrumental in ensuring uninterrupted education. By leveraging technology, we have provided students with a seamless learning experience, allowing them to continue their education from the safety of their homes.",
        ]}
        image={EmpoweringEducation}
      />
      <TwoLayoutSectionExtended
        image={SupportingHealthcare}
        tagLine="Innovative"
        title="Equipping the Health Ministry with Cutting-Edge Technology"
        description="At EWIS, we are proud to collaborate with the Health Ministry to provide them with the latest and most advanced technology. By equipping them with cutting-edge solutions, we aim to enhance their capabilities and improve healthcare services for the benefit of the community."
        cards={[
          {
            title: "Collaboration Success",
            description:
              "Our partnership with the Health Ministry has resulted in significant advancements in healthcare technology.",
          },
          {
            title: "Positive Impact",
            description:
              "Through our collaboration, we have made a positive impact on healthcare services nationwide.",
          },
        ]}
        imageClasses="max-h-[300px] h-full"
      />
      <TwoLayoutSectionNormal
        background="bg-background-secondary"
        reversed={true}
        title="Supporting Sathosa: Ensuring Smooth Operations for Public Needs"
        description={[
          "At EWIS, we understand the importance of uninterrupted access to essential goods. That's why we have partnered with Sathosa, a leading retail chain, to ensure smooth operations and meet the needs of the public.",
        ]}
        image={Basket}
      />
      <TwoLayoutSectionExtended
        image={SmartBoardImage}
        tagLine="Empowerment"
        title="Facilitating High-Level Meetings with Smart Board Implementation"
        description="Our Smart Board implementation revolutionizes high-level meetings in the Public & Government sectors, enabling efficient decision-making and collaboration."
        cards={[
          {
            title: "Efficiency",
            description:
              "Streamline decision-making processes and enhance collaboration with our cutting-edge Smart Board technology.",
          },
          {
            title: "Collaboration",
            description:
              "Foster collaboration among stakeholders and drive effective decision-making with our Smart Board implementation.",
          },
        ]}
        imageClasses="max-h-[300px] max-h-[300px] h-full"
      />

      <div className="group section-padding bg-background-secondary">
        <Container classes="flex flex-col lg:flex-row items-center h-full gap-10">
          <div className="flex justify-center lg:justify-center flex-col sm:px-8  lg:text-left md:text-left w-full lg:w-[60%] col h-full">
            <div
              className="flex flex-col gap-5 text-center lg:text-left"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-offset="300"
              data-aos-duration="1500"
            >
              <div className="flex flex-col gap-5">
                <H2Title align="text-left">
                  Advancing Healthcare Technology for a Better Future
                </H2Title>
                <Paragraph align="text-left">
                  At EWIS, we are committed to driving innovation in healthcare
                  by donating to advance healthcare technology. Through our
                  initiatives, we aim to improve patient care and contribute to
                  a better future.
                </Paragraph>
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
                  Donating to advance healthcare technology and improve patient
                  care.
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
                  Supporting cutting-edge healthcare technology for better
                  patient outcomes.
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
                  Driving innovation in healthcare through technology
                  advancements and donations.
                </p>
              </div>
            </div>
          </div>
          <div className="  flex justify-center lg:justify-center flex-col sm:px-8 text-center lg:text-left md:text-left lg:w-[40%] col  h-full mx-20 ">
            <img
              src={Healthcare2}
              alt=""
              className="max-h-[300px] h-full object-contain"
            />
          </div>
        </Container>
      </div>
      <TwoLayoutSectionNormal
        reversed={true}
        title="Making a Positive Impact on Society"
        description={[
          "EWIS's CSR activities have a wide-ranging impact across various sectors. From ensuring uninterrupted education through our Distance Learning Programme to equipping the Health Ministry with cutting-edge technology, we strive to make a positive difference in the lives of people. Our initiatives in Retail, Public & Government, and Technical Services Innovation further contribute to the betterment of society. With our commitment to compassionate and innovative solutions, we empower Sri Lanka and leave a lasting impact.",
        ]}
        image={People3}
      />

      <ContactUsCom />
    </>
  );
}

export default CSRPage;
