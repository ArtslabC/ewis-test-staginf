import React from "react";
import H2Title from "./H2Title";
import Paragraph from "./paragraph";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Container } from "../hoc";

const TwoLayoutSectionExtended = ({
  id = "",
  reversed = false,
  background = "",
  image,
  tagLine,
  title,
  description,
  cards,
  imageClasses = "max-w-[300px] max-h-[300px] h-full",
}) => {
  return (
    <div id={id} className={`${background} section-padding`}>
      <Container>
        <div
          className={`flex flex-col-reverse ${
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center h-full gap-10`}
        >
          <div className="flex flex-col justify-center items-center lg:items-start text-center md:text-left lg:w-[55%] ">
            <div className="flex flex-col gap-5">
              {/* {tagLine && (
                <p className="font-Poppins text-base text-black font-semibold">
                  {tagLine}
                </p>
              )} */}
              <H2Title align="text-center md:text-left">{title}</H2Title>
              <Paragraph align="text-center md:text-left">
                {description}
              </Paragraph>
              {cards && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {cards.map((card, i) => (
                    <div key={i} className="flex flex-col  lg:flex-1 gap-5">
                      <p className="font-Rubik text-lg text-black font-bold">
                        {card.title}
                      </p>
                      <p className="font-Rubik text-base text-black font-normal">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div
            className={`flex items-center relative  justify-center w-[50%] lg:w-[45%] 
               }
            `}
          >
            {(
              <img src={image} className={` object-contain ${imageClasses}`} />
            ) || <Skeleton />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TwoLayoutSectionExtended;
