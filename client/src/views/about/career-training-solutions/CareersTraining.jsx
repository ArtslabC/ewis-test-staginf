import React, { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useScroll, useSpring, motion } from "framer-motion";

import {
  CareerTraining1,
  CareerTraining2,
  CareerTraining3,
  CareerTrainingApp,
  Accedemic,
  Development,
  Solutions,
  Potential,
  HeroBg,
  HeroLayer1,
  HeroLayer2,
  HeroLayer3,
} from "../../../assets/careerTrain";
import { Container } from "../../../components/hoc";
import {
  H2Title,
  SolutionCard,
  AccordionOne,
  ContactUsCom,
  HeroSection,
  SectionHeader,
  TwoLayoutSectionNormal,
  Paragraph,
  HeroBtn,
  LoadingImagesCom,
} from "../../../components/common";
import FeatureCard from "../../../components/common/feature-card";

function CareersTraining() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const SERVICES = [
    {
      icon: Accedemic,
      title: "Academic Programs",
      desc: "Unlock a world of possibilities with our diverse range of academic programs, including diplomas and degree programs, at basic, undergraduate, and graduate levels. Choose from IT, Business Management, Languages, and Professional Development.",
    },
    {
      icon: Development,
      title: "Professional Development",
      desc: "Stay ahead of the curve and advance your career with our industry-relevant training. Our professional development courses and executive education programs are designed to enhance your skills.",
    },
    {
      icon: Solutions,
      title: "IT Solutions",
      desc: "We offer cutting-edge technology solutions to businesses and organizations, helping them optimize operations and achieve their goals.",
    },
  ];

  const CLIENTS = [
    {
      icon: CareerTraining1,
      title: "Undergraduate Students",
      description:
        "If you've completed your secondary education and are seeking a bachelor's degree, our undergraduate programs provide a solid foundation for your academic journey.",
    },
    {
      icon: CareerTraining2,
      title: "Professionals",
      description:
        "Lifelong learning is key for professionals. Our courses and programs help you acquire new skills, update your knowledge, and advance your career.",
    },
    {
      icon: CareerTraining3,
      title: "Lifelong Learners",
      description:
        "Learning knows no age limit. Whether you're a retiree, hobbyist, or someone seeking intellectual stimulation, our programs and resources support your learning journey.",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <title>EWIS Career Training Solutions</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top"
        style={{ scaleX }}
      />
      <div
        className={` py-32 min-h-[700px] pt-[80px] flex items-center bg-white 
      `}
      >
        <Container classes="flex flex-col-reverse lg:flex-row gap-10 items-center">
          <div className="flex flex-col justify-start gap-2 w-full lg:w-[58%] text-center lg:text-left  ">
            <h1 className={`text-primary  h2-bold `}>EWIS Career Training</h1>
            <p className={`text-primary  h4-bold max-w-lg mx-auto lg:ml-0`}>
              Unlock your potential with quality education and professional
              development at ECTC.
            </p>
            <div className="flex justify-center lg:justify-start mt-10 ">
              <HeroBtn link="#ewiscreertraining" />
            </div>
          </div>
          <div className="w-[90%] max-w-[400px] lg:w-[42%] flex justify-center items-center mx-auto lg:mr-0  relative">
            <Suspense fallback={<LoadingImagesCom />}>
              <>
                <img
                  src={HeroBg}
                  alt=""
                  className={`h-full  mx-auto object-contain max-h-[280px] lg:max-h-[330px] relative`}
                />
                <img
                  src={HeroLayer3}
                  alt=""
                  className="absolute top-[8%] left-[10%]  h-[20%] w-[20%] z-20 object-contain"
                />
                <img
                  src={HeroLayer2}
                  alt=""
                  className="absolute top-[-20%] left-[45%] h-[25%] w-[25%] z-20 object-contain"
                />
                <img
                  src={HeroLayer1}
                  alt=""
                  className="absolute top-[10%] right-[10%] h-[18%] w-[18%] z-20 object-contain wiggle"
                />
              </>
            </Suspense>
          </div>
        </Container>
      </div>
      <TwoLayoutSectionNormal
        id="ewiscreertraining"
        background="bg-background-secondary"
        reversed={true}
        title="Empower Your Potential, Unleash Your Future"
        description={[
          "At EWIS Career Training, we're your gateway to quality education and professional development in Sri Lanka. With over a decade of experience, we've established ourselves as a renowned educational institute and IT solutions service provider. Our commitment to excellence has led countless individuals to achieve remarkable success in fields such as IT, Business Management, Languages, and Professional Development.",
        ]}
        image={Potential}
      />

      <Container classes="section-padding flex flex-col gap-10 lg:gap-14">
        <H2Title>Explore Our Services</H2Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <SolutionCard card={service} key={i} />
          ))}
        </div>
      </Container>
      <div className="bg-primarysh bg-fixed bg-cover">
        <Container classes="section-padding flex flex-col gap-5">
          <H2Title>Our Promise</H2Title>
          <Paragraph>
            Our mission is clear – we believe in the transformative power of
            education. At EWIS Career Training, we're dedicated to empowering
            individuals with the knowledge, skills, and confidence they need to
            excel in their chosen fields. Through our commitment to academic
            excellence, practical learning experiences, and industry
            partnerships, we prepare our students to thrive in the ever-evolving
            global job market.
          </Paragraph>
        </Container>
      </div>

      <Container classes="section-padding flex justify-center flex-col gap-10 md:gap-14">
        <SectionHeader
          title="Who We Serve"
          description="At EWIS Career Training, we cater to a diverse range of individuals. Whether you're an aspiring undergraduate student, a career-focused professional, or a lifelong learner, our programs and resources are tailored to support your unique learning journey."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CLIENTS.map((card, i) => (
            <FeatureCard
              key={i}
              image={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Container>
      <div className=" bg-background-secondary" id="colomboLimiSec">
        <Container classes="section-padding flex flex-col-reverse md:flex-row items-center gap-5">
          <div className="flex flex-col items-start justify-start  text-center lg:text-left md:text-left lg:w-[50%] col ">
            <img src={CareerTrainingApp} alt="" />
          </div>
          <div className="w-full flex flex-col items-start md:items-center gap-8">
            <H2Title>Our Approch</H2Title>
            <div className="flex flex-col items-start justify-start lg:basis-1/2 text-center lg:text-left">
              <AccordionOne
                con={true}
                title="Academic Excellence"
                des="We're committed to providing a high standard of education through experienced faculty, comprehensive curricula, and a strong academic reputation."
              />
              <AccordionOne
                con={false}
                title="Practical Learning"
                des="Emphasizing hands-on experiences ensures our students are well-prepared for real-world challenges."
              />
              <AccordionOne
                con={false}
                title="Research and Innovation"
                des="Opportunities for cutting-edge research and collaboration foster innovation in various fields"
              />
              <AccordionOne
                con={false}
                title="State-of-the-Art Facilities"
                des="Modern campuses, well-equipped laboratories, libraries, and advanced technology resources enhance the learning experience."
              />
              <AccordionOne
                con={false}
                title="Global Exposure"
                des="Study abroad programs and partnerships with universities abroad broaden horizons and offer a global perspective."
              />
              <AccordionOne
                con={false}
                title="Comprehensive Support Services"
                des="From academic advising to career guidance and extracurricular activities, we provide comprehensive student support services."
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-white bg-fixed bg-cover">
        <Container classes="section-padding flex flex-col gap-5">
          <H2Title>Ready to Elevate Your Career?</H2Title>
          <Paragraph>
            Take the next step towards a brighter future with EWIS Career
            Training Center. Enroll today in our industry-leading programs to
            gain the skills and qualifications you need for success. Don’t
            wait—start your journey with us and unlock new opportunities for
            career growth and professional development.
          </Paragraph>
        </Container>
      </div>
      <ContactUsCom />
    </>
  );
}

export default CareersTraining;
