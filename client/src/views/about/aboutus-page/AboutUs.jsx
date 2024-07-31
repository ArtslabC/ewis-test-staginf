/* eslint-disable jsx-a11y/alt-text */
import React, { Suspense, useEffect, useRef, useState } from "react";
import ScrollCarousel from "scroll-carousel-react";
import { useScroll, useSpring, motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import ExperinceAboutUs from "./ExperinceAboutUs";
import {
  PartnershipImage1,
  PartnershipImage2,
  PartnershipImage3,
  PartnershipImage4,
  PartnershipImage5,
} from "../../../assets/slider";
import { Container } from "./../../../components/hoc";
import {
  AboutUSHeroSectionImage,
  Chairman,
  Mission,
  OurExpertise,
  Vision,
  WhoWeAre,
  Microsoft,
  Intel,
} from "../../../assets/aboutus";
import {
  H2Title,
  Paragraph,
  BGFixedSection,
  HeroSection,
  SectionHeader,
  TwoLayoutSectionNormal,
  LoadingImages,
  ContactUsCom,
  IconWIthText,
} from "../../../components/common";
import DiverseIndustriesBtn from "./diverse-Industries-btn";
import ExperinceColomboLtd from "../colombo-limited/ExperinceColomboLtd";
import Efac from "./models/Efac";

function AboutUs() {
  const { scrollYProgress } = useScroll();
  const [type, settype] = useState(1);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const ABOUT_US_CARDS = [
    {
      title: "Our Vision",
      desc: "To be a leading innovator in the tech industry, empowering businesses and individuals with the latest solutions.",
      image: Vision,
    },
    {
      title: "Our Mission",
      desc: "We are committed to delivering stylish, durable, and affordable devices with customizable software, enhancing productivity and making technology accessible.",
      image: Mission,
    },
  ];

  const DIVERSE_INDUSTRIES_BTNS = [
    {
      title: "Banking Finance And Insurance",
      id: 1,
    },
    {
      title: "Education",
      id: 2,
    },
    {
      title: "Manufacturing",
      id: 3,
    },
    {
      title: "Healthcare",
      id: 4,
    },
    {
      title: "Retail",
      id: 5,
    },
    {
      title: "Public",
      id: 6,
    },
    {
      title: "Telecommunication",
      id: 7,
    },
  ];

  const PARTNERSHIP_SLIDER = [
    PartnershipImage1,
    PartnershipImage2,
    PartnershipImage3,
    PartnershipImage4,
    PartnershipImage5,
    Microsoft,
    Intel,
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const ref = useRef();
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="About Ewis" />
      </Helmet>
      <motion.div
        className="fixed top-[80px] left-0 right-0 h-1 bg-primary origin-top"
        style={{ scaleX }}
      />
      <HeroSection
        theme="primary"
        boldTitle="Welcome to EWIS"
        title="Empowering Innovation & Solutions"
        description="Your Partner in Technology Excellence"
        btnLink="#aboutussec"
        heroImage={AboutUSHeroSectionImage}
        imageClasses="max-h-[250px] lg:max-h-[unset]"
      />

      <TwoLayoutSectionNormal
        id="aboutussec"
        reversed={true}
        title="Who We Are"
        description={[
          "EWIS Group stands as a pioneering force in Sri Lanka’s IT sector, boasting over three decades of innovation and expertise. As a conglomerate, it encompasses EWIS Colombo Limited, the island's premier Original Device Manufacturer, and several specialized divisions focused on peripherals, career training, and tailored IT solutions. With its state-of-the-art manufacturing facility in Sooriyawewa, Hambantota, EWIS Group is at the forefront of producing high-end IT products while maintaining a commitment to quality and sustainability, evidenced by numerous ISO certifications. The Group’s enduring partnerships with global technology leaders such as Intel, Microsoft, and IBM enhance its product offerings and affirm its status as a technology leader in education, healthcare, and beyond. True to its core values, EWIS Group is dedicated to community engagement and sustainability, actively contributing to education and environmental stewardship.",
        ]}
        image={WhoWeAre}
      />
      <BGFixedSection
        background="bg-aboutUs"
        title="Our Journey"
        description={[
          "EWIS journey spans over three decades, marked by significant achievements and growth. Explore our timeline to discover how we evolved into a pioneer in IT solutions and manufacturing.",
        ]}
      />
      <div className="bg-contactbg">
        <Container classes="grid grid-cols-1 md:grid-cols-2  section-padding gap-10">
          {ABOUT_US_CARDS.map((card, i) => (
            <div
              key={i}
              className="basis-1/2 w-full bg-white rounded-xl p-10 flex flex-col gap-5 items-center shadow-md h-full text-center"
            >
              <h2 className="text-primary font-bold font-Poppins text-3xl leading-tight ">
                {card.title}
              </h2>
              <p className="mb-8  font-Rubik lg:text-lg text-sm text-black font-semibold text-center">
                {card.desc}
              </p>
              <div className="w-full flex flex-col justify-center items-center ">
                <Suspense fallback={<LoadingImages />}>
                  <img
                    src={card.image}
                    alt=""
                    className="w-2/4 bg-white p-2 rounded-full"
                  />
                </Suspense>
              </div>
            </div>
          ))}
        </Container>
      </div>

      <TwoLayoutSectionNormal
        classes="bg-background"
        title="Message from the Chairman"
        description={[
          "As we celebrate 38 remarkable years in Sri Lanka's ever-evolving ICT sector, I take immense pride in EWIS' enduring success as a gateway to the global ICT stage. Our 'customer for life' philosophy fuels our dedication to personalized service, shaped by invaluable feedback from our loyal clientele.",
          "A pivotal milestone was establishing Sri Lanka's premier ODM (Original Device Manufacturing) facility in the southern region. Despite initial hurdles, we recognized local youth's potential, transforming them into a skilled workforce. We invite you to witness their passion at our factory.",
          "Strategically located near Hambantota port and airport, we're poised for operational efficiency. Upholding our legacy of expertise and strong customer relationships, we're committed to bringing global knowledge to Sri Lanka. I extend heartfelt gratitude for your patronage and eagerly anticipate the opportunities that lie ahead.",
        ]}
        image={Chairman}
      />
      <div className="bg-contactbg">
        <Container classes="section-padding flex flex-col gap-10 md:gap-20">
          <SectionHeader
            title="Our Core Values"
            description="Discover the principles that drive us at EWIS. Our core values of Innovation, Empowerment, Equality, and Sustainability define our culture and guide our commitment to excellence and responsibility."
          />
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-10 basis-[3]">
              <IconWIthText
                imgURL="https://cdn3d.iconscout.com/3d/premium/thumb/innovation-idea-8724827-7067632.png"
                cardTitle="Innovation"
                cardDes="We drive innovation, pushing technology's limits to provide groundbreaking solutions."
              />
              <IconWIthText
                imgURL="https://cdn3d.iconscout.com/3d/premium/thumb/fist-4973955-4150045.png"
                cardTitle="Empowerment"
                cardDes="We empower individuals to thrive through collaboration and knowledge-sharing."
              />
            </div>
            <div className="basis-[1] md:flex items-center hidden">
              <Suspense fallback={<LoadingImages />}>
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/environmentalism-9859813-8196526.png?f=webp"
                  alt=""
                  className="object-contain"
                />
              </Suspense>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-10 basis-[3]">
              <IconWIthText
                imgURL="https://cdn3d.iconscout.com/3d/premium/thumb/time-equality-9556445-7796565.png?f=webp"
                cardTitle="Equality"
                cardDes="We champion equality, ensuring equal opportunities and embracing diversity."
              />
              <IconWIthText
                imgURL="https://cdn3d.iconscout.com/3d/premium/thumb/sustainable-7172009-5819105.png?f=webp"
                cardTitle="Sustainability"
                cardDes="We are committed to sustainability, minimizing environmental impact and contributing to a better world."
              />
            </div>
          </div>
        </Container>
      </div>
      {/* // SHOULD BE CHECKED BEFORE WORKING ON  */}

      <Container classes="section-padding grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col items-start justify-center lg:basis-1/2 text-center lg:text-left gap-10 md:gap-20 h-full">
          <div className="flex flex-col justify-center items-center md:items-start">
            <H2Title classes="mb-5">Serving Diverse Industries</H2Title>
            <Paragraph align="text-center md:text-left">
              We cater to a diverse range of sectors and industries, including
              public, private, and government organizations.
            </Paragraph>
          </div>
          <div className="w-full rounded-xl p-5 bg-primarysh flex flex-row flex-wrap gap-4 ">
            {DIVERSE_INDUSTRIES_BTNS.map((btn) => (
              <DiverseIndustriesBtn
                title={btn.title}
                id={btn.id}
                key={btn.id}
                settype={settype}
                type={type}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full items-center min-h-[300px] justify-end">
          <Canvas dpr={[1, 1.5]}>
            <Environment preset="sunset" />
            <OrbitControls
              minAzimuthAngle={-Math.PI / 5}
              maxAzimuthAngle={Math.PI / 5}
              minPolarAngle={Math.PI / 2} // Set both min and max to the same value
              maxPolarAngle={-Math.PI / 2}
              enableZoom={false}
              position={[20, 0, 0]}
            />
            {/* <Efac /> */}
            <ExperinceAboutUs type={type} />
          </Canvas>
        </div>
      </Container>

      <TwoLayoutSectionNormal
        background="bg-contactbg"
        title="Our Expertise"
        description={[
          "Explore our state-of-the-art manufacturing facility equipped with world-class technologies from partners like Intel, Microsoft, Asus, and Pegatron. We specialize in manufacturing high-end desktop PCs, laptops, tablets, mobile phones, and smartboards. EWIS Colombo Limited (ECL) is a renowned IT company in Sri Lanka, with a 38-year track record of delivering cutting-edge IT solutions to public, financial, and corporate enterprises. As the first and only local Original Device Manufacturing (ODM) plant in Sri Lanka, We pride ourselves on delivering innovative and high-quality technology products that enhance your digital experience. Our range of devices, from sleek desktop PCs to portable laptops, versatile tablets, and powerful mobile phones, is designed to meet your diverse needs",
        ]}
        image={OurExpertise}
        imageClasses="max-h-[280px] lg:max-h-[unset] "
      />
      <div className="section-padding bg-white  flex flex-col gap-16">
        <Container classes="">
          <SectionHeader
            title="Our Partnerships"
            description="We collaborate with industry leaders to deliver exceptional products and solutions to our customers."
          />
        </Container>
        <Suspense fallback={<LoadingImages />}>
          <ScrollCarousel autoplay autoplaySpeed={8} speed={7}>
            {PARTNERSHIP_SLIDER.map((slide, i) => (
              <img
                key={i}
                src={slide}
                alt=""
                className="w-26 h-14 lg:w-52 lg:h-28 object-contain"
              />
            ))}
          </ScrollCarousel>
        </Suspense>
      </div>
      <ContactUsCom />
    </>
  );
}

export default AboutUs;

{
  /* <Canvas shadows camera={{ position: [0, 0, 70], fov: 60 }}>
            <PresentationControls
              polar={[-0, 0]}
              azimuth={[0, 0]}
              config={{ mass: 2, tension: 400 }}
              snap={{ mass: 4, tension: 400 }}
            >
              <ExperinceAboutUs type={type} />
              <OrbitControls
                ref={ref}
                autoRotate
                autoRotateSpeed={0.3}
                enableDamping={false}
                dampingFactor={0.25}
                enablePan={true}
                enableZoom={false}
                zoomSpeed={1.2}
                maxPolarAngle={Math.PI / 2.2}
                // minPolarAngle={Math.PI / 2}
                keyPanSpeed={0.1}
                maxDistance={50}
                minDistance={1}
                cameraPositionSet={[2, 5, 2]}
              />
            </PresentationControls>
          </Canvas> */
}

// <Canvas
// // dpr={[1, 2]}
// // shadows
// // camera={{ fov: 45 }}
// // style={{ position: "absolute" }}
// // className="h-full"
// >
//   {/* <Environment /> */}
//   <OrbitControls
//   // enableRotate={false}
//   // minAzimuthAngle={-Math.PI}
//   // maxAzimuthAngle={Math.PI}
//   // minPolarAngle={Math.PI / 2} // Set both min and max to the same value
//   // maxPolarAngle={Math.PI / 2}
//   />
//   {/* <ExperinceAboutUs /> */}
//   <Efac />
// </Canvas>
