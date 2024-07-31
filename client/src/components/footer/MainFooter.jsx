/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";
import FooterTitleCol from "./FooterTitleCol";
import FooterLink from "./FooterLink";
import OffcieAddress from "./OffcieAddress";
import { InformationCircleIcon, LinkIcon } from "@heroicons/react/24/outline";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollCarousel from "scroll-carousel-react";
import { Carousel } from "nuka-carousel";
import logo from "../../assets/logo/EwisLogo.webp";
// import { Carousel } from 'flowbite-react'
import world from "../../assets/earthTwo.gif";
import facebook from "../../assets/3dIcons/facebook.webp";
import insta from "../../assets/3dIcons/instagram.webp";
import youtube from "../../assets/3dIcons/youtube.webp";
import twi from "../../assets/3dIcons/twitter-x.webp";
import LoadingImages from "../common/LoadingImages";
import { Container } from "../hoc";

import {
  Certfication1,
  Certfication2,
  Certfication3,
  Certfication4,
  Certfication5,
} from "../../assets/common";

function MainFooter() {
  const ref = useRef();

  const CERTFICATIONS = [
    Certfication1,
    Certfication2,
    Certfication3,
    Certfication4,
    Certfication5,
  ];

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(el, 5, { y: -20 }, { y: 20, yoyo: true, repeat: -1 });
  }, []);
  return (
    <>
      <footer className="bg-blackFooter z-20 py-14 flex flex-col gap-5 bg-fixed">
        <Container classes="flex flex-col lg:flex-row gap-10 overflow-hidden">
          <div className="basis-1/4 flex flex-col w-full gap-5">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <Suspense fallback={<LoadingImages />}>
                <img src={logo} alt="" className="w-40" />
              </Suspense>
            </a>
            <div className="flex flex-row gap-5">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10  lg:w-16 lg:h-16  rounded-full transition-transform  hover:translate-y-2 duration-700 ease-in-out "
              >
                <img src={facebook} alt="" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10  lg:w-16 lg:h-16   rounded-full transition-transform hover:translate-y-2 duration-700 ease-in-out"
              >
                <img src={insta} alt="" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10  lg:w-16 lg:h-16   rounded-full transition-transform hover:translate-y-2 duration-700 ease-in-out"
              >
                <img src={youtube} alt="" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10  lg:w-16 lg:h-16   rounded-full transition-transform hover:translate-y-2 duration-700 ease-in-out"
              >
                <img src={twi} alt="" />
              </a>
            </div>
            <div className="flex flex-row items-start justify-center w-full h-full">
              <Suspense fallback={<LoadingImages />}>
                <img src={world} alt="" className="" ref={ref} />
              </Suspense>
            </div>
          </div>
          <div className="basis-3/4 flex flex-col w-full gap-10">
            <div className="flex flex-col lg:flex-row gap-5  w-full ">
              <div className="basis-1/3 flex flex-col gap-5">
                <FooterTitleCol title="About" />
                <div className="flex flex-col gap-2">
                  <FooterLink
                    pageTitle="About Us"
                    to="/about-us"
                    // to='/about-us'
                  />
                  <FooterLink
                    pageTitle="History & Milestones"
                    to="/collaborate-with-us"
                  />
                  <FooterLink
                    pageTitle="EWIS Colombo Limited"
                    to="/colombo-limited"
                  />
                  <FooterLink
                    pageTitle="EWIS Global Services"
                    to="/global-services"
                  />
                  <FooterLink pageTitle="EWIS Solutions" to="/ewis-solutions" />
                  <FooterLink
                    pageTitle="EWIS Career Training Solutions"
                    to="/career-training-solutions"
                  />
                  <FooterLink pageTitle="EWIS Peripherals" to="/peripheral" />
                  <FooterLink pageTitle="Topan Forms" to="/toppan-forms" />
                </div>
              </div>
              <div className="basis-1/3 flex flex-col gap-5">
                <FooterTitleCol title="Industries" />
                <div className="flex flex-col gap-2">
                  <FooterLink
                    pageTitle="Banking & Finance"
                    to="/banking-finance-and-insurance"
                  />
                  <FooterLink pageTitle="Education" to="/education" />
                  <FooterLink pageTitle="Manufacturing" to="/manufacturing" />
                  <FooterLink pageTitle="Healthcare" to="/healthcare" />
                  <FooterLink pageTitle="Retail" to="/retail" />
                  <FooterLink pageTitle="Public" to="/public" />
                  <FooterLink
                    pageTitle="Telecomunication"
                    to="/telecommunication"
                  />
                </div>
              </div>
              <div className="basis-1/3 flex flex-col gap-5">
                <FooterTitleCol title="Quick Links" />
                <div className="flex flex-col gap-2">
                  <FooterLink
                    pageTitle="Banking & Finance"
                    to="/banking-finance-and-insurance"
                  />
                  <FooterLink pageTitle="Education" to="/education" />
                  <FooterLink pageTitle="Manufacturing" to="/manufacturing" />
                  <FooterLink pageTitle="Healthcare" to="/healthcare" />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-5 border-y-[1px] border-primarysh w-full">
              <div className="w-full py-5">
                <Carousel
                  slidesToScroll={1}
                  wrapAround={true}
                  slidesToShow={4}
                  infinite={false}
                  autoplay={true}
                  dots={false}
                  withoutControls={true}
                  autoplayInterval={500}
                  autoplayReverse={true}
                  className=""
                >
                  {CERTFICATIONS.map((certificate, i) => (
                    <img
                      key={i}
                      src={certificate}
                      alt="..."
                      className="w-26 h-14 lg:w-52 lg:h-28"
                    />
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5  w-full ">
              <div className="basis-1/3 flex flex-col gap-5 w-full">
                <FooterTitleCol title="Registered Office" />
                <OffcieAddress
                  address="No 70, 1st Floor, Lucky Plaza Building, St.Anthony’s Mawatha, Colombo 03, Sri Lanka."
                  tel="Tel : +94 117 520 520"
                  fax="Fax: +94 112 447 303"
                />
              </div>
              <div className="basis-1/3 flex flex-col gap-5  w-full">
                <FooterTitleCol title="Registered Office" />
                <OffcieAddress
                  address="No: 441/7, 2nd Lane, Cotta Road, Rajagiriya."
                  tel="Tel : +94 117 520 520"
                  fax="Fax: +94 112 447 303"
                />
              </div>
              <div className="basis-1/3 flex flex-col gap-5  w-full">
                <FooterTitleCol title="Registered Office" />
                <OffcieAddress
                  address="No 441/7, 2nd Lane, Kotte Road, Rajagiriya."
                  tel="Tel : +94 117 520 520"
                  fax="Fax: +94 112 447 303"
                />
              </div>
            </div>
          </div>
        </Container>
        <div className=" mx-auto w-full max-w-screen-xl flex flex-col lg:flex-row gap-5 border-t-2 border-primary justify-between items-center py-2 px-5">
          <div>
            <div>
              <p className="text-white text-sm font-Rubik flex flex-row flex-wrap gap-4">
                Copyright © 2024 E-Wis Solutions, All rights reserved. Powered
                by
                <a
                  className="text-white text-sm transition-colors hover:text-primary duration-500 ease-in-out hover:underline"
                  href="https://artslabcreatives.com/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Artslab Creatives
                </a>
                .
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-start justify-start gap-4">
              <p className="text-white text-sm font-Rubik">Term of use</p>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer "
                className="text-white text-sm transition-colors hover:text-primary duration-500 ease-in-out flex flex-row gap-2"
              >
                <InformationCircleIcon className="w-5" />
                <span>Privacy Policy</span>
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer "
                className="text-white text-sm transition-colors hover:text-primary duration-500 ease-in-out flex flex-row gap-2"
              >
                <InformationCircleIcon className="w-5" />
                <span>Cookie Policy</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainFooter;
