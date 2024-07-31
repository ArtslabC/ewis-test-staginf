import { Environment } from "@react-three/drei";
import {} from "lucide-react";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo/EwisLogo.webp";
import { IoIosMenu } from "react-icons/io";
const ScreenOverlay = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobilenavOpen, setMobilenavOpen] = useState(false);

  const [modelOpen, setModelOpen] = useState(true);
  const [OpenedModelId, setOpenedModelId] = useState(null);

  const [activeModal, setActiveModal] = useState(null);

  let Links = [
    {
      link: "/about-us",
      text: "About Us",
    },
    {
      link: "/contact-us",
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

  return (
    <>
      <div className="absolute top-10 left-5 md:left-10 z-50 ">
        <img src={Logo} alt="" className="h-10" />
      </div>
      <div className="hidden lg:flex absolute top-10 right-5 md:right-10  z-20 gap-5">
        <Link text="About Us" link={"/about-us"} />
        <Link text="Contact Us" link={"/contact-us"} />
      </div>
      <div className="absolute top-10  right-5 md:right-10  z-20 flex gap-5">
        <div className="lg:hidden relative flex justify-center items-center">
          <div
            className={`border transform translate-x-[-2px] translate-y-[-2px] rounded-3xl  border-primary absolute
                   bg-white shadow-md 
              ${
                mobilenavOpen
                  ? "w-72 h-[calc(100vh-100px)] opacity-1 -right-2 -top-2 transition-all duration-500 ease-out"
                  : "p-2 opacity-0 w-0 h-0 overflow-hidden  right-2 top-2 transition-all duration-500 delay-[800ms] ease-in"
              }
            `}
          >
            <div className="mt-20 flex flex-col gap-10 ml-10">
              {Links.map((navLink, i) => {
                let index = 1 + i;
                let initialDelay = index * 150;
                let startDelay = 500 + initialDelay;

                return (
                  <a
                    href={navLink.link}
                    style={{
                      animationDelay: `${
                        mobilenavOpen ? `${startDelay}ms` : `${initialDelay}ms`
                      }`,
                    }}
                    key={i}
                    className={`text-2xl delay-500 text-primary uppercase font-semibold
                        ${
                          mobilenavOpen
                            ? "opacity-0 animate-m-header-nav-links-in"
                            : "opacity-1 animate-m-header-nav-links-out"
                        }
                        `}
                  >
                    {navLink.text}
                  </a>
                );
              })}
            </div>
            <div
              className={`absolute bottom-10 left-10 grid grid-cols-2 gap-8 w-full text-base ${
                mobilenavOpen
                  ? "opacity-0 animate-m-header-nav-bottom-fade-in"
                  : "opacity-1 animate-m-header-nav-bottom-fade-out"
              }`}
            >
              {SOCIAL_LINKS.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="cursor-pointer hover:font-semibold transition-all duration-300"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
          <button
            onClick={() => setMobilenavOpen(!mobilenavOpen)}
            className={`flex lg:hidden text-primary px-5s  py-1 rounded-3xl borders border-primary items-center cursor-pointer relative  
             
              ${
                mobilenavOpen
                  ? "bg-whites text-[#000]"
                  : "bg-transparent text-white"
              }
              `}
          >
            <IoIosMenu
              size={40}
              className={`${mobilenavOpen ? "text-[#000]" : "text-white"}`}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ScreenOverlay;

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
