/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import {
  ContactUsCom,
  HeroSection,
  SectionHeader,
  TwoLayoutSectionNormal,
  IconWIthText,
} from "../../../components/common";
import { Helmet } from "react-helmet";
import { useScroll, useSpring, motion } from "framer-motion";
import {
  Service1,
  Service2,
  Service3,
  Service4,
  Service5,
  Service6,
  Service7,
  Service8,
  Service9,
  Service10,
  Service11,
  Service12,
  Service13,
  BuiltUponaLegacyofExcellence,
  WelcometoEWISGlobalServices,
  computerwithkeyboard,
} from "../../../assets/EWISGlobalServices";
import { Container } from "../../../components/hoc";
import CategoryBtn from "./category-btn";
import Service from "./service-card";

const GlobalServices = () => {
  const WHYUSCARDS = [
    {
      icon: "https://cdn3d.iconscout.com/3d/premium/thumb/project-task-management-5374060-4496029.png",
      title: "100+ Projects",
      description:
        "Since our inception, we have been involved in over 100 key projects globally, delivering innovative solutions to our clients.",
    },
    {
      icon: "https://cdn3d.iconscout.com/3d/premium/thumb/customer-satisfaction-8094133-6478780.png?f=webp",
      title: "350+ Customers",
      description:
        "We are proud to have served a diverse portfolio of customers, ranging from small businesses to large enterprises. Our clients trust us to deliver exceptional services.",
    },
    {
      icon: "https://cdn3d.iconscout.com/3d/premium/thumb/calendar-5842007-4884301.png?f=webp",
      title: "30+ Years",
      description:
        "With a legacy of 30 years in the industry, we have continuously evolved and adapted to meet the changing needs of our clients. Our experience sets us apart as a reliable partner.",
    },
  ];

  const items = [
    {
      id: 1,
      img: Service1,
      name: "Infrastructure",
      Sname: "Management",
      category: "IT Services",
      des: "Dedicated remote IT teams specialized in technologies based on customer requirements.",
    },
    {
      id: 2,
      img: Service2,
      name: "Test Automation",
      Sname: "Services",
      category: "IT Services",
      des: "High-quality agile applications enhancing business value.",
    },
    {
      id: 3,
      img: Service3,
      name: "ERP Implementation",
      Sname: "Services",
      category: "IT Services",
      des: "Quick release of new product features for enterprises.",
    },
    {
      id: 4,
      img: Service4,
      name: "Infrastructure",
      Sname: "Management",
      category: "IT Services",
      des: "Managing IT infrastructure efficiently and minimizing downtime enhancing business efficiency.",
    },
    {
      id: 5,
      img: Service5,
      name: "Test Automation",
      Sname: "Services",
      category: "IT Services",
      des: "Meticulous bug elimination and compliance with industry standards.",
    },
    {
      id: 6,
      img: Service6,
      name: "ERP Implementation",
      Sname: "Services",
      category: "IT Services",
      des: "Expert support in selecting and successful installation of ERP software.",
    },
    {
      id: 7,
      img: Service7,
      name: "Credit and Debit",
      Sname: "Card Onboarding",
      category: "Financial Services",
      des: "Provide credit and debit card onboarding services for corporates through a range of financial institutions.",
    },
    {
      id: 8,
      img: Service8,
      name: "Loan and Mortgage",
      Sname: "Activities",
      category: "Financial Services",
      des: "Effective management of loan and mortgage operations.",
    },
    {
      id: 9,
      img: Service9,
      name: "Account",
      Sname: "Servicing",
      category: "Financial Services",
      des: "Seamless customer experiences for financial institutions.",
    },
    {
      id: 10,
      img: Service10,
      name: "Account",
      Sname: "Opening",
      category: "Financial Services",
      des: "EWIS offers a wide range of account opening options to suit your needs.",
    },
    // ... more items
    {
      id: 11,
      img: Service11,
      name: "Extended Offshore It",
      Sname: "Services",
      category: "IT Servicess",
      des: "Dedicated remote IT teams specialized in technologies based on customer requirements.",
    },
    {
      id: 10,
      img: Service12,
      name: "Application Dev",
      Sname: "Services",
      category: "IT Services",
      des: "High quality agile applications enhancing business value.",
    },
    {
      id: 10,
      img: Service13,
      name: "DevOps",
      Sname: "Services",
      category: "IT Services",
      des: "Quick release of new product features for enterprises.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [itemList, setItemList] = useState(items);
  const categories = ["All", "IT Services", "Financial Services"];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const filterByCategory = (category) => {
    if (category == "IT Services" || category == "Financial Services") {
      setActiveCategory(category);
      const filteredItems = items.filter((item) => item.category === category);
      setItemList(filteredItems);
      return;
    }
    setActiveCategory("All");
    setItemList(items);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>EWIS Global Services</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top"
        style={{ scaleX }}
      />
      <HeroSection
        boldTitle="Welcome to EWIS Global Services"
        description="Unleash your business potential, together with your partner in growth."
        btnLink="#aboutussec"
        heroImage={WelcometoEWISGlobalServices}
      />
      <TwoLayoutSectionNormal
        id="aboutussec"
        background="bg-background-secondary"
        reversed={true}
        title="Built Upon a Legacy of Excellence"
        description={[
          "We are proud to be one of the pioneers in introducing world-class PCs to Sri Lanka. Since 1986, when we became the sole agent for IBM computers in Sri Lanka, we've dominated the market for nearly two decades. Our commitment to excellence has earned us prestigious awards, including the title of IBM Top Business Partner for multiple years.",
        ]}
        image={BuiltUponaLegacyofExcellence}
      />
      <Container classes="section-padding flex flex-col gap-10 md:gap-14">
        <SectionHeader
          title="Empowering Businesses for over 30 Years"
          description="At EWIS global services, we've harnessed decades of experience serving diverse customer segments across various industries, including retail, finance, government, and hospitality.
"
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {WHYUSCARDS.map((card, i) => {
            return (
              <IconWIthText
                key={i}
                imgURL={card.icon}
                cardTitle={card.title}
                cardDes={card.description}
              />
            );
          })}
        </div>
      </Container>

      <div className="bg-background-secondary">
        <Container classes="section-padding flex flex-col gap-10 md:gap-16">
          <div className="">
            <SectionHeader
              title="Our Comprehensive Range of Global Services"
              description="Explore our wide array of services designed to meet the diverse needs of businesses. From IT solutions that drive innovation to financial back-office services that streamline operations, EWIS Outsource is your partner in growth and efficiency."
            />
            <div className="flex flex-wrap gap-4 mt-5 justify-center">
              {categories.map((category, i) => (
                <CategoryBtn
                  key={i}
                  activeCategory={activeCategory}
                  category={category}
                  filterByCategory={filterByCategory}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
            {itemList.map((item, i) => (
              <Service item={item} key={i} />
            ))}
          </div>
        </Container>
      </div>
      <TwoLayoutSectionNormal
        reversed={true}
        title="Why EWIS Global Services?"
        description={[
          "Partner with EWIS for unparalleled service quality, global reach, and innovative solutions. Our commitment to excellence and client satisfaction sets us apart, ensuring that we deliver value and drive success for your business.",
        ]}
        image={computerwithkeyboard}
      />
      <ContactUsCom />
    </>
  );
};
export default GlobalServices;
