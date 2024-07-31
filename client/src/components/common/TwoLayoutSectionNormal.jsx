import React, { Suspense } from "react";
import Container from "../hoc/Container";
import LoadingImages from "./LoadingImages";

function TwoLayoutSectionNormal({
  id = "",
  title,
  description,
  image,
  reversed = false,
  classes = "",
  background = "bg-white",
  imageClasses = "w-full max-h-[300px]",
}) {
  return (
    <div
      id={id}
      className={` section-padding w-full ${classes} w-full ${background}`}
    >
      <Container
        classes={`flex gap-10 md:items-center ${
          reversed
            ? "lg:flex-row-reverse flex-col-reverse"
            : "flex-col  lg:flex-row"
        }`}
      >
        <div className="w-full flex flex-col text-center gap-8 lg:w-[60%]">
          <h1
            className={`text-primary font-bold font-Poppins lg:text-3xl text-2xl leading-tight ${
              reversed ? "text-center lg:text-left" : "text-center lg:text-left"
            }`}
          >
            {title}
          </h1>
          <div
            className={`flex flex-col gap-5 ${
              reversed ? "text-center lg:text-left" : "text-center lg:text-left"
            }`}
          >
            {description.map((desc, i) => (
              <p
                key={i}
                className="font-Rubik lg:text-lg text-sm text-black font-semibold"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
        <div className="w-[80%] lg:w-[40%] max-h-96 mx-auto lg:mx-0 flex justify-center">
          <Suspense fallback={<LoadingImages />}>
            <img src={image} className={`${imageClasses} object-contain`} />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}

export default TwoLayoutSectionNormal;
