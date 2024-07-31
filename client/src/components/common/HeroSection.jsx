import React, { Suspense } from "react";
import Container from "../hoc/Container";
import LoadingImagesCom from "./LoadingImagesCom";
import { HeroBtn } from ".";

const HeroSection = ({
  background,
  boldTitle,
  title,
  description,
  btnText = "Explore More",
  btnLink = "",
  heroImage,
  theme = "default",
  imageClasses = "max-h-[280px] md:max-h-[330px]",
}) => {
  return (
    <div
      className={` pb-32  lg:py-32 min-h-[700px] pt-[80px] flex items-center ${
        theme == "default"
          ? "bg-white"
          : theme == "primary"
          ? "bg-primary"
          : `${background}`
      }`}
    >
      <Container classes="flex flex-col-reverse lg:flex-row gap-10 items-center">
        <div className="flex flex-col justify-start items-center lg:items-start gap-2 w-full lg:w-[58%] text-center lg:text-left  ">
          {boldTitle && (
            <h1
              className={`${
                theme == "default"
                  ? "text-primary"
                  : theme == "primary"
                  ? "text-white"
                  : ""
              }  h2-bold `}
            >
              {boldTitle}
            </h1>
          )}
          {title && (
            <h1
              className={`${
                theme == "default"
                  ? "text-primary"
                  : theme == "primary"
                  ? "text-white"
                  : ""
              }  h2 `}
            >
              {title}
            </h1>
          )}
          <p
            className={`${
              theme == "default"
                ? "text-primary"
                : theme == "primary"
                ? "text-white"
                : ""
            }  h4-bold max-w-lg `}
          >
            {description}
          </p>
          <div className="flex justify-center lg:justify-start mt-5 ">
            <HeroBtn link={btnLink} text={btnText} theme={theme} />
          </div>
        </div>
        <div className="w-[100%] lg:w-[42%] flex justify-center max-h-96 items-center mx-auto lg:mr-0 ">
          <Suspense fallback={<LoadingImagesCom />}>
            <img
              src={heroImage}
              alt=""
              className={`h-full  mx-auto object-contain ${imageClasses}`}
            />
          </Suspense>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
