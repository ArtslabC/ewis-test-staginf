import React, { useEffect } from "react";
import MainFooter from "../../../components/footer/MainFooter";
import ContactUsCom from "../../../components/common/ContactUsCom";

import { Helmet } from "react-helmet";
import { motion, useScroll, useSpring } from "framer-motion";

import {
  Driving,
  EnhancedEfficiency,
  Over,
  PublicHero,
  Relation,
  SoftwareSolution,
} from "../../../assets/publicImg";

import { Container } from "../../../components/hoc";
import {
  Paragraph,
  HeroSection,
  BGFixedSection,
  TwoLayoutSectionNormal,
  TwoLayoutSectionExtended,
  FeatureCard,
  H2Title,
} from "../../../components/common";
function Public() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const PUBLIC_CARDS = [
    {
      icon: SoftwareSolution,
      title: "Streamline Your Software Solutions for Optimal Performance",
      description:
        "At EWIS, we offer a comprehensive range of networking solutions to ensure seamless connectivity and communication.",
    },
    {
      icon: EnhancedEfficiency,
      title: "Enhance Efficiency with Enterprise Resource Management Solutions",
      description:
        "Our bespoke development services cater to your unique business requirements, providing tailored solutions.",
    },
    {
      icon: Relation,
      title:
        "Optimize Your Customer Relationship Management with Advanced Solutions",
      description:
        "Experience seamless integration and improved service delivery with our turnkey solutions.",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <title>Public Sector</title>
        <meta name="description" content="App Description" />
      </Helmet>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top"
        style={{ scaleX }}
      />
      <HeroSection
        boldTitle="Empowering the Public Sector with Innovative ICT Solutions"
        description="Discover how EWIS can help public sector organizations transform their services and drive operational excellence."
        btnLink="#publicSecond"
        heroImage={PublicHero}
        imageClasses="max-h-[330px] md:max-h-[380px]"
      />

      <TwoLayoutSectionNormal
        id="publicSecond"
        background="bg-background-secondary"
        reversed={true}
        title="Over 31 Years of Supporting Digital Journeys: Engaging with 400+ Public Sector Organizations"
        description={[
          "With our 31 years of industry experience, we have successfully partnered with over 400 public sector organizations, delivering comprehensive engagement and innovative solutions.",
        ]}
        image={Over}
        imageClasses="w-full max-w-[330px]"
      />

      <Container classes="flex flex-col gap-10 md:gap-14  section-padding text-center">
        <H2Title>
          Transform Your Infrastructure with Cutting-Edge Solutions
        </H2Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
          {PUBLIC_CARDS.map((card, i) => (
            <FeatureCard
              key={i}
              image={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Container>
      <TwoLayoutSectionExtended
        background="bg-background-secondary"
        image={Driving}
        imageClasses="max-w-[380px] max-h-[380px] h-full  "
        tagLine="Empower"
        title="Driving Efficiency, Enhancing Service Delivery,
                                    Fostering Growth"
        description="EWIS solutions empower public sector organizations by driving efficiency, enhancing service delivery, and fostering sustainable growth. With our innovative ICT solutions, public sector companies can transform the delivery of services to make them more convenient for citizens and business users, while also improving the quality of services provided."
      />
      <BGFixedSection
        background="bg-publicBack"
        title="Transform Your Sector With Innovative ICT Solutions"
        // title="Innovative ICT Solutions"
        description={[
          "Contact us today to explore how EWIS can empower your public sector organization.",
        ]}
      />

      <ContactUsCom />
    </>
  );
}

export default Public;
