import React, { Suspense } from "react";
import LoadingImagesCom from "../common/LoadingImagesCom";

function HeroImage({ heroImage }) {
  return (
    <div className="">
      <Suspense fallback={<LoadingImagesCom />}>
        <img src={heroImage} alt="" className="lg:scale-125" />
      </Suspense>
    </div>
  );
}

export default HeroImage;
