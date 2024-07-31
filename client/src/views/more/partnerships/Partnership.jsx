import { useScroll, useSpring } from "framer-motion";
import React, { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container } from "../../../components/hoc";
import {
  TwoLayoutSectionExtended,
  ContactUsCom,
  TwoLayoutSectionNormal,
  HeroBtn,
} from "../../../components/common";

import { Deal, Desktop } from "../../../assets/partnership";

function Partnership() {
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
        <title>Partnerships</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <div className="w-screen  bg-primary bg-fixed px-5 lg:px-0 lg:-mt-1 h-screen">
        <Container classes="flex text-center flex-col  items-center justify-center lg:items-center lg:justify-center   text-center lg:text-left md:text-left lg:basis-1/1 col lg:relative bottom-10 gap-5">
          <h1 className="text-white font-bold font-Poppins text-center text-3xl leading-tight lg:text-5xl ">
            Delivering Top-Notch Technology Solutions for You
          </h1>

          <p className="font-Rubik lg:text-lg text-sm text-white font-semibold text-center">
            At EWIS Colombo Limited (ECL), we are committed to providing our
            clients with the highest quality products and services. With our
            strong partnerships with renowned technology providers like
            Microsoft, Dell EMC, Pronto Software, Lexmark, and Juniper Networks,
            we leverage cutting-edge technologies and innovative solutions to
            meet your business needs.
          </p>
          <HeroBtn theme="primary" link="#aboutussec" />
        </Container>
      </div>

      <TwoLayoutSectionNormal
        id="aboutussec"
        reversed={true}
        title="Unlocking Innovation Through Strategic Partnerships with Industry Giants"
        description={[
          "At EWIS Colombo Limited (ECL), we are proud to collaborate with renowned technology providers such as Microsoft, Dell EMC, Pronto Software, Lexmark, and Juniper Networks. These partnerships allow us to harness cutting-edge technologies and innovative solutions, enabling us to deliver comprehensive software, hardware, networking, and enterprise resource planning solutions to our clients. With over two decades of collaboration with some partners, we maintain high standards in delivering top-notch products and services. Contact us today to explore how our strategic partnerships can drive your business forward.",
        ]}
        image={Deal}
      />
      <TwoLayoutSectionExtended
        title="Delivering Comprehensive Technology Solutions for Your Business Needs"
        description="At ECL, we offer a wide range of comprehensive technology solutions including software, hardware, networking, and enterprise resource planning. Our partnerships with industry giants like Microsoft, Dell EMC, Pronto Software, Lexmark, and Juniper Networks enable us to leverage cutting-edge technologies and innovative solutions for our clients."
        cards={[
          {
            title: "Software Solutions",
            description:
              "We provide software solutions that streamline your business processes and enhance productivity.",
          },
          {
            title: "Hardware Solutions",
            description:
              "Our hardware solutions ensure reliable performance and scalability for your business infrastructure.",
          },
        ]}
        image={Desktop}
      />

      <ContactUsCom />
    </>
  );
}

export default Partnership;
