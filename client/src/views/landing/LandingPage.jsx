import { Environment } from "@react-three/drei";
import {} from "lucide-react";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Map from "./map/Map";
import { Canvas } from "@react-three/fiber";
import LoadingScreen from "./LoadingScreen";
import Logo from "../../assets/logo/EwisLogo.webp";
import { AiFillAndroid, AiFillInstagram, AiFillSound } from "react-icons/ai";
import music from "../../assets/landingpagemusic.mp3";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosMenu } from "react-icons/io";
import TextPopUp from "./map/links/components/TextPopUp";
import ScreenOverlay from "./ScreenOverlay";
const LandingPage = (props) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobilenavOpen, setMobilenavOpen] = useState(false);

  const [modelOpen, setModelOpen] = useState(true);
  const [OpenedModelId, setOpenedModelId] = useState(null);

  const [activeModal, setActiveModal] = useState(null);

  const LINK_CARDS = [
    {
      id: "education",
      title: "Education",
      description:
        "Empowering educational institutions with cutting-edge technology and solutions that enhance learning experiences and administrative efficiency.",
      link: "/education",
    },
    {
      id: "buyewis",
      title: "Buy EWIS",
      description:
        "Explore and purchase EWIS’s extensive range of products and solutions designed to enhance business operations and drive technological advancement.",
      link: "https://testbuyewis.staging.whitestar-webdevelopment.com",
    },
    {
      id: "manufacture",
      title: "Manufacture",
      description:
        "Enhancing manufacturing efficiency with cutting-edge tech solutions that optimize production processes, ensure quality, and drive industry excellence.",
      link: "/education",
    },
    {
      id: "peripheral",
      title: "EWIS Peripheral",
      description:
        "Specializing in office automation with top-tier products and services, from managed print solutions to power backup systems, to enhance business productivity.",
      link: "/peripheral",
    },
    {
      id: "careertrainingsolutions",
      title: "EWIS Career Training Solutions",
      description:
        "Offering comprehensive training programs and educational solutions designed to equip individuals with the skills needed for career advancement and personal growth.",
      link: "/career-training-solutions",
    },
    {
      id: "solutions",
      title: "EWIS Solutions",
      description:
        "Delivering cutting-edge technology solutions tailored to meet the specific needs of diverse industries, driving innovation and operational excellence.",
      link: "/ewis-solutions",
    },
    {
      id: "globalservices",
      title: "EWIS GLobal Services",
      description:
        "Providing global IT and business solutions that drive innovation, streamline operations, and deliver exceptional value across various industries.",
      link: "/global-services",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description:
        " Revolutionizing healthcare with advanced technology solutions that improve patient care, streamline hospital operations, and support medical research.",
      link: "/healthcare",
    },
    {
      id: "ecl",
      title: "Colombo Limited",
      description:
        "A key player in the EWIS Group, providing innovative tech solutions and services that meet the dynamic needs of the Sri Lankan market.",
      link: "/colombo-limited",
      tourLink: "/ewis-tour",
    },
    {
      id: "communication",
      title: "Telecommunication",
      description:
        "Delivering state-of-the-art technology for telecom companies to boost connectivity, improve network performance, and enable next-gen communication solutions.",
      link: "/telecommunication",
    },
    {
      id: "bankingandfinance",
      title: "Banking and Finace",
      description:
        "Offering sophisticated tech solutions for banking and financial institutions to enhance security, streamline operations, and drive digital transformation.",
      link: "/banking-finance-and-insurance",
    },
    {
      id: "retail",
      title: "Retail",
      description:
        " Transforming retail environments with advanced tech solutions to optimize operations, enhance customer experiences, and drive sales growth.",
      link: "/retail",
    },
    {
      id: "public",
      title: "Public",
      description:
        "Providing innovative technology solutions tailored for government and public sector organizations to streamline operations and improve public services.",
      link: "/public",
    },
    {
      id: "toppanforms",
      title: "Toppan Forms",
      description:
        "Leading in print management outsourcing with high-quality forms and printing solutions, ensuring efficiency and security for various business needs.",
      link: "/toppan-forms",
    },
  ];

  const setActiveCard = (id) => {
    const result = LINK_CARDS.filter((item) => item.id === id);
    const activeCard = result.length > 0 ? result[0] : null;
    setActiveModal(activeCard);
    setModelOpen(true);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModelOpen(false);
  };

  let Links = [
    {
      link: "",
      text: "About Us",
    },
    {
      link: "",
      text: "Contact Us",
    },
  ];

  let SOCIAL_LINKS = [
    {
      link: "",
      text: "FaceBook",
    },
    {
      link: "",
      text: "Instagram",
    },
    {
      link: "",
      text: "LinkedIn",
    },
    {
      link: "",
      text: "Dribble",
    },
  ];

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    console.log("isPlaying ", isPlaying);
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isLoaded == true) {
      console.log("triggered");
      if (audioRef.current) {
        audioRef.current.play();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [isLoaded]);

  return !isLoaded ? (
    <LoadingScreen onLoaded={() => setIsLoaded(true)} />
  ) : (
    <>
      <div className="w-full h-[100svh] relative home-gradient">
        {/* <audio ref={audioRef} src={music} loop /> */}
        <ScreenOverlay />
        <div className="absolute bottom-10 left-5 md:left-10 z-20 flex gap-5">
          <RoundedIcon icon={AiFillSound} handleClick={toggleMusic} />
          <RoundedLink icon={AiFillInstagram} link={""} />
          <RoundedLink icon={AiFillAndroid} link={""} />
        </div>
        {/* <Suspense fallback={<LoadingScreen />}> */}
        <Canvas
          camera={{
            position: [1000, 2500, 5000],
            fov: 75,
            near: 1,
            far: 100000000,
          }}
          className="w-screen h-screen"
        >
          <ambientLight intensity={2} />
          {/* <OrbitControls
            // minAzimuthAngle={-Math.PI}
            // maxAzimuthAngle={Math.PI}
            minPolarAngle={angleToRadians(80)} // Set both min and max to the same value
            maxPolarAngle={angleToRadians(80)}
            enableZoom={true}
            // autoRotate
            enableRotate={true}
            autoRotateSpeed={0.3}
            enableDamping={true}
            dampingFactor={0.25}
            enablePan={true}
            zoomSpeed={1.2}
            keyPanSpeed={0.1}
            maxDistance={5500}
            minDistance={1}
            ref={cameraRef}
          /> */}
          {/* <CameraController radius={15} angle={20} /> */}
          {/* <CameraController /> */}
          <Map setActiveCard={setActiveCard} />

          <Environment preset="sunset" />
        </Canvas>
        {/* </Suspense> */}
      </div>
      {modelOpen && activeModal && (
        <TextPopUp activeModal={activeModal} closeModal={closeModal} />
      )}
    </>
  );
};

export default LandingPage;

const RoundedIcon = (props) => {
  const [active, setActive] = useState(true);

  return (
    <div className="w-[45px] h-[45px] flex justify-center items-center group ">
      <button
        onClick={() => {
          setActive(!active);
          props.handleClick();
        }}
        className={` transition-all duration-200  flex justify-center items-center rounded-full cursor-pointer group bg-white   w-[45px] h-[45px]   group-hover:animate-homeicons relative border-2 overflow-hidden
          ${
            active
              ? "border-white hover:border-primary hover:bg-primary"
              : "border-red "
          }
          `}
      >
        <props.icon
          className={`text-2xl  scale-[1.003
          ${active ? "text-primary group-hover:text-white" : "text-gray-500"}
          `}
        />
        {!active && (
          <div className="w-[200%] h-[2px] absolute bg-red-500 -rotate-45"></div>
        )}
      </button>
    </div>
  );
};

const RoundedLink = (props) => {
  const [active, setActive] = useState(true);

  return (
    <div className="w-[45px] h-[45px] flex justify-center items-center group ">
      <a
        href={props.link}
        className={` transition-all duration-200  flex justify-center items-center rounded-full cursor-pointer group bg-white hover:bg-primary  w-[45px] h-[45px]   group-hover:animate-homeicons`}
      >
        <props.icon className="text-2xl text-primary group-hover:text-white scale-[1.003" />
      </a>
    </div>
  );
};

const Link = (props) => {
  return (
    <a
      href={props.link}
      className={` transition-all duration-200  flex justify-center items-center rounded-full cursor-pointer group bg-white hover:bg-primary text-sm px-10 py-2  font-bold text-primary hover:text-white border-2 border-primary uppercase`}
    >
      {props.text}
    </a>
  );
};
