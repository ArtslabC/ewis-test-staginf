/* eslint-disable no-restricted-globals */
import React, { useEffect } from "react";
import ContactUsCom from "../../../components/common/ContactUsCom";
import { Helmet } from "react-helmet";
import { motion, useScroll, useSpring } from "framer-motion";

import {
  Cr,
  Crm,
  Erms,
  HeroBanner,
  Pos,
  Retailone,
  Retailthree,
  RetailTwo,
  ShopCart,
  SimplifyRetailManagement,
} from "../../../assets/retail";

import gsap from "gsap";
import { Container } from "../../../components/hoc";
import {
  TwoLayoutSectionExtended,
  HeroSection,
  Paragraph,
  FeatureCard,
  H2Title,
  SectionHeader,
} from "./../../../components/common";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Retail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const RETAIL_CARDS = [
    {
      image: Retailone,
      title: "Efficient Payment Processing and Reporting",
      description:
        "Process payments seamlessly and generate comprehensive reports with our advanced Point of Sale (POS) system.",
    },

    {
      image: RetailTwo,
      title: "Track and Engage with Key Customers",
      description:
        "Build strong customer relationships and drive sales growth using our Customer Relationship Management (CRM) software.",
    },

    {
      image: Retailthree,
      title: "Efficient Inventory Monitoring and Management",
      description:
        "Optimize inventory levels and streamline operations with our Inventory Management System (IMS).",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    gsap.to("#shopcart", {
      xPercent: 0,
      x: () => -innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: "#shopcart",
        start: "center right",
        end: "120% left",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Retail</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top"
        style={{ scaleX }}
      />
      <HeroSection
        boldTitle="Empowering Retail Businesses Through Innovative Solutions"
        description="Welcome to EWIS, where we revolutionize the retail industry through cutting-edge financial services."
        btnLink="#retailSecond"
        heroImage={HeroBanner}
        imageClasses="max-h-[280px] md:max-h-[330px] scale-[1.2]"
      />

      {/* Section 2 */}
      <TwoLayoutSectionExtended
        id="retailSecond"
        reversed={true}
        background="bg-background-secondary"
        tagLine="Simplify"
        title="Simplify Retail Management with Our Comprehensive eRMS Solution"
        description="Our eRMS solution combines essential systems into one comprehensive software, providing enhanced functionality for retail businesses."
        cards={[
          {
            title: "Increase Efficiency",
            description:
              "Streamline your operations with our all-in-one software that simplifies inventory management, payment processing, and reporting.",
          },
          {
            title: "Boost Sales",
            description:
              "Engage with key customers and improve customer relationships using our integrated CRM system.",
          },
        ]}
        image={SimplifyRetailManagement}
        imageClasses="max-w-[350px] max-h-[350px] h-full"
      />

      {/* Section 3 */}
      <Container classes="section-padding">
        <div
          className="flex justify-center lg:justify-start flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-offset="300"
          data-aos-duration="1500"
        >
          <SectionHeader
            title="All-in-One Solution for Retail Management"
            description="Discover the power of eRMS - the integrated software solution that combines Point of Sale (POS),
                        Customer Relationship Management (CRM), and Inventory Management System (IMS) into a single platform. 
                        Streamline your retail operations and unlock new possibilities for your business."
          />
        </div>
      </Container>
      <div className="w-screen flex flex-row justify-end ">
        <img
          src={ShopCart}
          alt=""
          className="h-28 w-28 lg:h-60 lg:w-60 lg:scale-110"
          id="shopcart"
        />
      </div>

      {/* Section 4 */}
      {/* bg-retail bg-fixed bg-cover -- background fixed card  */}
      <div className="bg-background-secondary section-padding">
        <Container classes="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {RETAIL_CARDS.map((card, i) => (
            <FeatureCard
              key={i}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </Container>
      </div>

      <Container classes="section-padding flex flex-col gap-5">
        <H2Title>Streamlining Operations for Retail Managers</H2Title>
        <Paragraph>
          With our eRMS solution, retail managers can simplify their operations
          and streamline their management processes. By integrating essential
          systems into a single software solution, eRMS eliminates the need for
          multiple applications and provides enhanced functionality.
        </Paragraph>
      </Container>

      <ContactUsCom />
    </>
  );
}

export default Retail;
