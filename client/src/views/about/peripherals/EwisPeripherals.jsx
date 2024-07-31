import { useScroll, useSpring, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import {
  PheriPheralAbout,
  PheriPheralHero,
  Pheripheral1,
  Pheripheral2,
  Pheripheral3,
  Printer3D,
} from "../../../assets/peripherals";

import { Container } from "../../../components/hoc";
import {
  FeatureCard,
  ContactUsCom,
  HeroSection,
  SectionHeader,
  TwoLayoutSectionNormal,
} from "../../../components/common";
import DrawerCard from "./DrawerCard";

function EwisPeripherals() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const CARDS = [
    {
      icon: Pheripheral1,
      title: "Government and Public Institutions",
      description:
        "We provide efficient and reliable office automation solutions to government offices and public institutions, ensuring seamless operations and improved service delivery.",
    },
    {
      icon: Pheripheral2,
      title: "Private Enterprises",
      description:
        "Private businesses benefit from our comprehensive offerings, enabling them to streamline operations, boost productivity, and reduce costs. Our solutions are designed to enhance efficiency and deliver measurable results.",
    },
    {
      icon: Pheripheral3,
      title: "General Public Market",
      description:
        "We recognize the potential in the general public market and introduce products like Pantum Printers, ideal for private and domestic use. Our commitment to responsible consumption and eco-friendly practices aligns with global environmental standards, ensuring sustainability in every solution we offer.",
    },
  ];

  const SERVICES = [
    {
      id: "01",
      key: 0,
      title: "Managed Print Services",
      desc: "Optimize Printing Efficiency and Reduce Costs",
      image:
        "https://asia.canon/media/image/2020/08/20/1d9293898956405399672948583c3085_ProH_SS1-w-paper_EN_edited_small-570x400.png",
      color: "bg-red-400",
    },
    {
      id: "02",
      key: 1,
      title: "Printer Management Solutions two",
      desc: "Optimize Printing Efficiency and Reduce Costs",
      image:
        "https://asia.canon/media/image/2020/08/20/1d9293898956405399672948583c3085_ProH_SS1-w-paper_EN_edited_small-570x400.png",
      color: "bg-green-400",
    },
    {
      id: "03",
      key: 2,
      title: "Octa Matrix impact Printers",
      desc: "Optimize Printing Efficiency and Reduce Costs",
      image:
        "https://asia.canon/media/image/2020/08/20/1d9293898956405399672948583c3085_ProH_SS1-w-paper_EN_edited_small-570x400.png",
      color: "bg-blue-400",
    },
    {
      id: "04",
      key: 3,
      title: "Octa Power UPS Systems",
      desc: "Optimize Printing Efficiency and Reduce Costs",
      image:
        "https://asia.canon/media/image/2020/08/20/1d9293898956405399672948583c3085_ProH_SS1-w-paper_EN_edited_small-570x400.png",
      color: "bg-yellow-400",
    },
  ];

  const [activeDrawerIndex, setActiveDrawerIndex] = useState(2);

  const handleDrawer = (key) => {
    setActiveDrawerIndex(key);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>EWIS Peripherals</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top"
        style={{ scaleX }}
      />
      <HeroSection
        boldTitle="EWIS Peripherals"
        description="Your Trusted Partner in Office Automation Solutions."
        btnLink="#aboutussec"
        heroImage={PheriPheralHero}
        imageClasses="max-h-[240px] md:max-h-[330px]"
      />

      <TwoLayoutSectionNormal
        id="aboutussec"
        background="bg-background-secondary"
        reversed={true}
        title="Explore the rich history and unwavering commitment of EWIS Peripherals"
        description={[
          "With decades of experience and global partnerships with renowned companies like Lexmark International, Konica Minolta, Riello, and Pantum, we have consistently delivered excellence in office automation. Our journey is marked by innovation, reliability, and a dedication to meeting the evolving needs of modern enterprises.",
        ]}
        imageClasses="w-full lg:max-h-[250px] max-h-[200px]"
        image={PheriPheralAbout}
      />

      <div className="section-padding bg-fixed bg-cover ">
        <Container>
          <SectionHeader
            title="Our Services"
            description="Discover a comprehensive range of office automation solutions at EWIS Peripherals, designed to optimize your workspace and enhance productivity. Our services go beyond conventional offerings, encompassing Managed Print Services (MPS), Printer Management Solutions, Octa Matrix Impact Printers, and Octa Power UPS Systems. Whether it's streamlining your printing environment or ensuring uninterrupted operations, our services are tailored to meet the unique requirements of your organization. Partner with us to experience efficiency, cost-effectiveness, and reliability in your office automation journey."
          />
        </Container>
        {/* <Container>
          <div className="max-w-7xl mx-auto px-10">
            <div className=" h-full mt-20 w-full border border-gray-300 flex flex-col lg:flex-row lg:h-[550px] box-border ">
              {SERVICES.map((service, i) => (
                <DrawerCard
                  service={service}
                  key={i}
                  handleDrawer={handleDrawer}
                  activeDrawerIndex={activeDrawerIndex}
                  index={i}
                />
              ))}
            </div>
          </div>
        </Container> */}
      </div>
      <div className="bg-background-secondary">
        <Container classes="flex flex-col gap-10 md:gap-14 section-padding">
          <SectionHeader
            title="Who We Serve"
            description="At EWIS Peripherals, we pride ourselves on tailoring office automation solutions to diverse sectors, including the public, private, and financial domains. Our process is characterized by three key pillars."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CARDS.map((card, i) => (
              <FeatureCard
                image={card.icon}
                title={card.title}
                description={card.description}
                key={i}
              />
            ))}
          </div>
        </Container>
      </div>
      <TwoLayoutSectionNormal
        reversed={true}
        title="Transform Your Office Efficiency Today"
        description={[
          "Optimize your office operations with EWIS Peripherals’ cutting-edge solutions. Contact us now to explore how our managed print services, advanced printing solutions, and reliable UPS systems can enhance your productivity. Take action and revolutionize your office automation—get in touch with us today!",
        ]}
        imageClasses="w-full lg:max-h-[250px] max-h-[200px]"
        image={Printer3D}
      />

      <ContactUsCom />
    </>
  );
}

export default EwisPeripherals;
