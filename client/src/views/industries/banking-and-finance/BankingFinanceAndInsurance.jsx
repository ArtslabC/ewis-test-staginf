/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-restricted-globals */
import React from "react";
import MainFooter from "../../../components/footer/MainFooter";
import { motion, useScroll, useSpring } from "framer-motion";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import gsap from "gsap";
import "react-loading-skeleton/dist/skeleton.css";
import { Container } from "../../../components/hoc";

import {
  BankingHand,
  BankingOne,
  BankingPig,
  BankingThree,
  BankingTwo,
  PosCloud,
} from "../../../assets/banking";

import {
  TwoLayoutSectionExtended,
  ContactUsCom,
  HeroSection,
  FeatureCard,
  Paragraph,
  H2Title,
} from "../../../components/common";

function BankingFinanceAndInsurance() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const BANKING_FEATURES = [
    {
      icon: BankingOne,
      title: "Tailored Solutions for Banking, Finance & Insurance",
      description:
        "We offer a range of solutions to meet the unique needs of the banking, finance, and insurance sectors.",
    },
    {
      icon: BankingTwo,
      title: "Drive Growth and Streamline Operations",
      description:
        "Our solutions are designed to help you achieve growth, efficiency, and improved customer experiences.",
    },
    {
      icon: BankingThree,
      title: "Transform Your Business with Technology",
      description:
        "Embrace digital transformation to stay ahead in the rapidly evolving banking, finance, and insurance industry.",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
        <title>Banking Finance And Insurance</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <HeroSection
        boldTitle="Empowering the Banking, Finance & Insurance Sectors"
        description="At EWIS, we are committed to delivering world-class IT solutions that prioritize customer satisfaction and drive innovation. With our expertise and cutting-edge technology, we empower businesses to thrive and succeed."
        btnLink="#aboutbankingandfinance"
        heroImage={PosCloud}
        imageClasses="w-full max-w-[280px] lg:max-w-[490px]"
      />
      <TwoLayoutSectionExtended
        id="aboutbankingandfinance"
        reversed={true}
        background="bg-background-secondary"
        image={BankingHand}
        title="Empowering the Banking, Finance & Insurance Industry with Innovative Solutions"
        description="At EWIS, we understand the challenges faced by the banking, finance, and insurance sector. Our tailored solutions enable our partners to seize opportunities, increase operational efficiency, and enhance customer relationships."
        cards={[
          {
            title: "Experience",
            description:
              "With over 30 years of experience, we have been instrumental in helping banks, insurance companies, savings institutions, and finance organizations achieve optimal returns on their technology investments.",
          },
          {
            title: "Expertise",
            description:
              "Our expertise in cutting-edge technologies allows us to deliver tailored solutions that drive growth and streamline operations.",
          },
        ]}
        imageClasses="max-w-[300px] "
      />

      <Container classes="section-padding grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 grid-auto-rows">
        {BANKING_FEATURES.map((card, i) => (
          <FeatureCard
            key={i}
            image={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </Container>
      <div className="bg-background-secondary">
        <Container classes="section-padding  flex flex-col gap-5">
          <H2Title>Transform Your Financial Operations Today</H2Title>
          <Paragraph>
            Empower your banking and finance operations with EWIS's cutting-edge
            technology solutions. Contact us now to explore how our innovative
            tools and expertise can streamline your processes, enhance security,
            and drive success. Don’t wait—experience the future of financial
            technology with EWIS!
          </Paragraph>
        </Container>
      </div>
      <TwoLayoutSectionExtended
        image={BankingPig}
        title="Unlocking Success Through Innovative Solutions and Strategic Partnerships"
        description="Partnering with EWIS empowers your organization with increased operational efficiency and better customer experiences. Stay competitive in the dynamic market of banking, finance, and insurance."
        cards={[
          {
            title: "Operational Efficiency",
            description:
              " Our solutions drive growth, streamline operations, and optimize technology investments for our partners.",
          },
          {
            title: "Better Experiences",
            description:
              "We enhance customer relationships and improve experiences through tailored solutions and digital transformation.",
          },
        ]}
        imageClasses="max-w-[350px]"
      />

      <ContactUsCom />
    </>
  );
}

export default BankingFinanceAndInsurance;
