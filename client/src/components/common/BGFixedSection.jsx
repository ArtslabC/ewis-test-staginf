import React from "react";
import Container from "../hoc/Container";
import H2Title from "./H2Title";

const BGFixedSection = ({ background, title, description, classes = "" }) => {
  return (
    <div
      className={`bg-fixed bg-cover text-center section-padding bg-primary ${classes} `}
    >
      <Container>
        <div className="flex justify-center items-center flex-col gap-5">
          <h2 className="text-white font-bold text-center font-Poppins lg:text-3xl text-2xl leading-tight">
            {title}
          </h2>
          <div className="flex flex-col gap-5 text-center max-w-3xl mx-auto">
            {description.map((desc, i) => (
              <p
                className="font-Rubik lg:text-lg text-sm text-white/90 font-semibold"
                key={i}
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BGFixedSection;
